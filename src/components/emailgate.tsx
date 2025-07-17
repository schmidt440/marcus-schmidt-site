
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface EmailGateProps {
  trigger: React.ReactElement;
  title: string;
  description: string;
  downloadName: string;
}

export const EmailGate: React.FC<EmailGateProps> = ({ trigger, title, description, downloadName }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<'iot-fundamentals' | 'iot-advanced'>('iot-fundamentals');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) {
      toast({
        title: "Error",
        description: "Please enter both your name and email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email: email.trim(),
            full_name: fullName.trim() || null,
            phone: phone.trim() || null,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Newsletter Subscription Successful!",
        description: "Thank you for subscribing to our IoT newsletter.",
      });

      // Set access and redirect to checklist page
      localStorage.setItem('checklist_access', 'granted');
      window.location.href = '/checklist?access=granted';
      setEmail('');
      setFullName('');
      setPhone('');
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        toast({
          title: "Already Subscribed",
          description: "This email is already subscribed to our newsletter.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCourseEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('course_enrollments')
        .insert([
          {
            email: email.trim(),
            full_name: fullName.trim() || null,
            course_type: selectedCourse,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Course Enrollment Successful!",
        description: `You've been enrolled in the ${selectedCourse === 'iot-fundamentals' ? 'IoT Fundamentals' : 'Advanced IoT'} course.`,
      });

      setIsOpen(false);
      setEmail('');
      setFullName('');
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to enroll. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="w-full max-w-md">
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="newsletter" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="newsletter">Download Guide</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="newsletter">
                <form onSubmit={handleNewsletterSignup} className="space-y-4">
                  <div>
                    <Label htmlFor="newsletter-name">Full Name</Label>
                    <Input
                      id="newsletter-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newsletter-email">Email Address</Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newsletter-phone">Phone Number (Optional)</Label>
                    <Input
                      id="newsletter-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : `Get ${downloadName}`}
                  </Button>
             
                </form>
              </TabsContent>
              
              <TabsContent value="courses">
                <form onSubmit={handleCourseEnrollment} className="space-y-4">
                  <div>
                    <Label htmlFor="course-name">Full Name (Optional)</Label>
                    <Input
                      id="course-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="course-email">Email Address</Label>
                    <Input
                      id="course-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label>Select Course</Label>
                    <Tabs value={selectedCourse} onValueChange={(value) => setSelectedCourse(value as 'iot-fundamentals' | 'iot-advanced')}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="iot-fundamentals">IoT Fundamentals</TabsTrigger>
                        <TabsTrigger value="iot-advanced">Advanced IoT</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Enrolling...' : 'Enroll in Course'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
