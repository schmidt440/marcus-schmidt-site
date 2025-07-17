import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { courseModules } from '@/data/coursemodules';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CourseProgress {
  module_id: number;
  completed_at: string | null;
  quiz_score: number | null;
}

const Course = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const currentModuleId = moduleId ? parseInt(moduleId) : 1;
  const currentModule = courseModules.find(m => m.id === currentModuleId);

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const isModuleUnlocked = (moduleId: number) => {
    if (moduleId === 1) return true; // First module is always unlocked
    
    const module = courseModules.find(m => m.id === moduleId);
    if (!module?.prerequisites) return true;
    
    return module.prerequisites.every(prereqId => {
      const prereqProgress = progress.find(p => p.module_id === prereqId);
      return prereqProgress?.completed_at && (prereqProgress.quiz_score || 0) >= 70;
    });
  };

  const getCompletedModules = () => {
    return progress.filter(p => p.completed_at && (p.quiz_score || 0) >= 70).length;
  };

  const getOverallProgress = () => {
    return Math.round((getCompletedModules() / courseModules.length) * 100);
  };

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!currentModule) {
    return <Navigate to="/course/1" replace />;
  }

  if (!isModuleUnlocked(currentModuleId)) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Lock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <CardTitle>Module Locked</CardTitle>
                <CardDescription>
                  Complete the previous modules with a passing score (70% or higher) to unlock this module.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/course/1">Return to Course Overview</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-32 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Course Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">IoT Fundamentals Course</h1>
              <Badge variant="outline">
                {getCompletedModules()}/{courseModules.length} Modules Complete
              </Badge>
            </div>
            <Progress value={getOverallProgress()} className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Overall Progress: {getOverallProgress()}%
            </p>
          </div>

          {/* Module Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {courseModules.map((module) => {
              const isUnlocked = isModuleUnlocked(module.id);
              const isCompleted = progress.find(p => p.module_id === module.id && p.completed_at);
              const isCurrent = module.id === currentModuleId;
              
              return (
                <Card 
                  key={module.id} 
                  className={`cursor-pointer transition-all duration-200 ${
                    isCurrent ? 'ring-2 ring-primary' : ''
                  } ${!isUnlocked ? 'opacity-50' : 'hover:shadow-lg'}`}
                  onClick={() => isUnlocked && (window.location.href = `/course/${module.id}`)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={isCurrent ? 'default' : 'secondary'}>
                        Module {module.id}
                      </Badge>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : !isUnlocked ? (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      ) : null}
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Current Module Content */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{currentModule.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {currentModule.description}
                  </CardDescription>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{currentModule.estimatedTime}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {currentModule.content.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {section.content.split('\n').map((paragraph, pIndex) => {
                      if (paragraph.trim() === '') return null;
                      
                      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                        return (
                          <h4 key={pIndex} className="text-lg font-medium mt-6 mb-3">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      
                      if (paragraph.trim().startsWith('•')) {
                        return (
                          <ul key={pIndex} className="list-disc list-inside mb-4">
                            <li>{paragraph.replace('•', '').trim()}</li>
                          </ul>
                        );
                      }
                      
                      return (
                        <p key={pIndex} className="mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              <div className="pt-8 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ready for the Quiz?</h3>
                    <p className="text-muted-foreground">
                      Complete the quiz to unlock the next module. You need 70% or higher to pass.
                    </p>
                  </div>
                  <Button size="lg" asChild>
                    <a href={`/course/${currentModuleId}/quiz`}>
                      Take Quiz
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Course;
