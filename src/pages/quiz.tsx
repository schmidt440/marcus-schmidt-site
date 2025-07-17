import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { courseModules } from '@/data/coursemodules'; // 🔥 FIXED HERE
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface QuizAnswer {
  questionId: string;
  selectedAnswer: number;
}

const Quiz = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const currentModuleId = moduleId ? parseInt(moduleId) : 1;
  const currentModule = courseModules.find(m => m.id === currentModuleId);

  useEffect(() => {
    // Reset quiz state when module changes
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
    setQuizComplete(false);
    setScore(0);
  }, [moduleId]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!currentModule) {
    return <Navigate to="/course/1" replace />;
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(parseInt(value));
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === currentModule.quiz.questions[currentQuestion].id);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex].selectedAnswer = selectedAnswer;
    } else {
      newAnswers.push({
        questionId: currentModule.quiz.questions[currentQuestion].id,
        selectedAnswer
      });
    }
    
    setAnswers(newAnswers);

    if (currentQuestion < currentModule.quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      calculateScore(newAnswers);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers.find(a => a.questionId === currentModule.quiz.questions[currentQuestion - 1].id);
      setSelectedAnswer(previousAnswer?.selectedAnswer || null);
    }
  };

  const calculateScore = (finalAnswers: QuizAnswer[]) => {
    let correctCount = 0;
    
    currentModule.quiz.questions.forEach(question => {
      const userAnswer = finalAnswers.find(a => a.questionId === question.id);
      if (userAnswer && userAnswer.selectedAnswer === question.correct) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / currentModule.quiz.questions.length) * 100);
    setScore(percentage);
    setQuizComplete(true);
    setShowResults(true);
  };

  const saveQuizProgress = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('course_progress')
        .upsert({
          user_id: user.id,
          module_id: currentModuleId,
          quiz_score: score,
          completed_at: score >= 70 ? new Date().toISOString() : null,
          quiz_attempts: 1 // This would need to be incremented if tracking attempts
        });

      if (error) throw error;

      if (score >= 70) {
        toast({
          title: "Congratulations!",
          description: `You passed with ${score}%! The next module is now unlocked.`,
        });
        
        // Navigate to next module or course overview
        const nextModule = courseModules.find(m => m.id === currentModuleId + 1);
        if (nextModule) {
          setTimeout(() => navigate(`/course/${nextModule.id}`), 2000);
        } else {
          setTimeout(() => navigate('/course/1'), 2000);
        }
      } else {
        toast({
          title: "Keep Learning!",
          description: `You scored ${score}%. Review the material and try again to unlock the next module.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Error",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResults(false);
    setQuizComplete(false);
    setScore(0);
  };

  const getQuestionResult = (questionIndex: number) => {
    const question = currentModule.quiz.questions[questionIndex];
    const userAnswer = answers.find(a => a.questionId === question.id);
    return userAnswer?.selectedAnswer === question.correct;
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {score >= 70 ? (
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  ) : (
                    <XCircle className="w-16 h-16 text-red-500" />
                  )}
                </div>
                <CardTitle className="text-3xl">
                  {score >= 70 ? 'Congratulations!' : 'Keep Learning!'}
                </CardTitle>
                <CardDescription className="text-xl">
                  You scored {score}% on Module {currentModuleId}: {currentModule.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Progress value={score} className="mb-4" />
                  <p className="text-muted-foreground">
                    {score >= 70 
                      ? "Great job! You've unlocked the next module." 
                      : "You need 70% or higher to unlock the next module. Review the material and try again."}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quiz Review</h3>
                  {currentModule.quiz.questions.map((question, index) => {
                    const isCorrect = getQuestionResult(index);
                    const userAnswer = answers.find(a => a.questionId === question.id);
                    
                    return (
                      <Card key={question.id} className={`border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base">{question.question}</CardTitle>
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div 
                                key={optionIndex} 
                                className={`p-2 rounded text-sm ${
                                  optionIndex === question.correct 
                                    ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                                    : optionIndex === userAnswer?.selectedAnswer && !isCorrect
                                    ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                                    : 'bg-muted'
                                }`}
                              >
                                {option}
                                {optionIndex === question.correct && (
                                  <Badge className="ml-2" variant="secondary">Correct</Badge>
                                )}
                                {optionIndex === userAnswer?.selectedAnswer && optionIndex !== question.correct && (
                                  <Badge className="ml-2" variant="destructive">Your Answer</Badge>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="flex justify-center gap-4">
                  <Button onClick={retakeQuiz} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retake Quiz
                  </Button>
                  <Button onClick={saveQuizProgress} disabled={loading}>
                    {loading ? 'Saving...' : 'Continue'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = currentModule.quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentModule.quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle>Module {currentModuleId} Quiz</CardTitle>
                <Badge variant="outline">
                  Question {currentQuestion + 1} of {currentModule.quiz.questions.length}
                </Badge>
              </div>
              <Progress value={progress} className="mb-2" />
              <CardDescription>
                {currentModule.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-6">{currentQuizQuestion.question}</h3>
                
                <RadioGroup value={selectedAnswer?.toString()} onValueChange={handleAnswerSelect}>
                  {currentQuizQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent transition-colors">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button 
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < currentModule.quiz.questions.length - 1 ? 'Next' : 'Complete Quiz'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
