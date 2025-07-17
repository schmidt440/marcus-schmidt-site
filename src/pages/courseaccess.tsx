import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'; // ✅ FIXED: capital A in useAuth
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, CheckCircle, Lock } from 'lucide-react';
import { courseModules } from '@/data/coursemodules';

const CourseAccess = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      window.location.href = '/course/1';
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Course Access Required</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please sign in to access the Enterprise IoT Deployment & Security course.
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Sign In to Access Course
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Enterprise IoT Deployment & Security
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Welcome back! Continue your IoT security journey with our comprehensive 4-week course.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>4 Weeks</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>14 Sessions</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span>Certificate Included</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {[1, 2, 3, 4].map((weekNumber) => {
            const weekModules = courseModules.filter(module => module.week === weekNumber);
            const weekTitle = weekNumber === 1 ? "Week 1: IoT Foundations & Strategic Framework" :
                             weekNumber === 2 ? "Week 2: Technology Architecture & Implementation" :
                             weekNumber === 3 ? "Week 3: Security Mastery & Data Management" :
                             "Week 4: Advanced Implementation & Business Strategy";

            return (
              <Card key={weekNumber} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {weekTitle}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {weekModules.length} sessions covering essential concepts and practical implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {weekModules.map((module) => (
                      <div key={module.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-foreground mb-2">
                          Session {module.id}: {module.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {module.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Duration: {module.duration}
                          </span>
                          <Link to={`/course/${module.id}`}>
                            <Button size="sm" variant="outline">
                              Start Session
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-muted/50 border-border">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Course Progress
              </h3>
              <p className="text-muted-foreground mb-6">
                Track your progress through each module and earn your certificate upon completion.
              </p>
              <Button variant="outline" size="lg">
                View My Progress
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseAccess;
