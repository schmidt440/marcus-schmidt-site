import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, BookOpen, Mic, Mail, ExternalLink, Calendar, User, Shield, Download, Clock, CheckCircle, Star, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { blogPosts } from '@/data/blogPosts';
import SEOHead from '@/components/SEOHead';
import { EmailGate } from '@/components/EmailGate';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [courseEmail, setCourseEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to the newsletter!",
      });
      setEmail('');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setEmail('');
      setMessage('');
    }
  };

  const handleCourseSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (courseEmail) {
      toast({
        title: "You're on the waitlist!",
        description: "You'll be notified when the IoT Fundamentals for Beginners course launches!",
      });
      setCourseEmail('');
    }
  };

  // Course launch date - 4 weeks from now
  const courseLaunchDate = new Date();
  courseLaunchDate.setDate(courseLaunchDate.getDate() + 28);

  const testimonials = [
    {
      name: "Sarah",
      company: "",
      text: "Marcus's expertise in cellular IoT transformed our global cold-chain monitoring. The Watchtower Acuity integration improved our visibility, compliance, and sustainability metrics significantly.",
      rating: 5
    },
    {
      name: "David",
      company: "",
      text: "Working with Marcus on our IoT security strategy was game-changing. His practical approach helped us implement robust solutions that scale.",
      rating: 5
    },
    {
      name: "Lisa",
      company: "",
      text: "Marcus's guidance on regulatory compliance for our IoT deployment was invaluable. His expertise saved us months of work and potential compliance issues.",
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">

        {/* Hero Section with Banner */}
        <section className="py-8 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {/* Mobile-optimized Banner with Headshot */}
            <div className="relative mb-8 sm:mb-12">
              <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                
                {/* Mobile Layout: Stacked */}
                <div className="block sm:hidden">
                  <div 
                    className="relative h-32 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(/lovable-uploads/77dc0a8e-cf44-4a8b-b9b2-0d4171dab2f1.png)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-teal-400/50 shadow-2xl mx-auto mb-4">
                      <img 
                        src="/lovable-uploads/8d469014-e1c5-4e20-a3fc-b71bd6535357.png" 
                        alt="Marcus Schmidt - IoT Security Consultant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-xl font-bold text-white mb-2">Marcus Schmidt</h1>
                    <p className="text-sm text-slate-300">IoT Security Consultant</p>
                  </div>
                </div>

                {/* Desktop Layout: Side by side */}
                <div className="hidden sm:block">
                  <div 
                    className="relative h-48 md:h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(/lovable-uploads/77dc0a8e-cf44-4a8b-b9b2-0d4171dab2f1.png)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/20"></div>
                    
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-teal-400/50 shadow-2xl">
                        <img 
                          src="/lovable-uploads/8d469014-e1c5-4e20-a3fc-b71bd6535357.png" 
                          alt="Marcus Schmidt - IoT Security Consultant"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Hero Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                IoT Security Consultant & Cellular IoT Advisor helping enterprises implement scalable connected solutions
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-600/20 text-teal-300 rounded-full text-xs sm:text-sm border border-teal-500/30">IoT Security</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30">Cellular IoT</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-600/20 text-cyan-300 rounded-full text-xs sm:text-sm border border-cyan-500/30">Enterprise IoT</span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-xs sm:text-sm border border-indigo-500/30">Digital Transformation</span>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 max-w-md mx-auto">
                <EmailGate
                  trigger={
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      <Shield className="mr-2 w-4 h-4" />
                      Get Free IoT Security Guide
                    </Button>
                  }
                  title="IoT Security Checklist"
                  description="Get your comprehensive IoT security checklist covering cellular networks, device management, and enterprise compliance."
                  downloadName="IoT Security Checklist"
                />
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border text-foreground hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/marcuswschmidt/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    LinkedIn Profile <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-lg text-slate-300">Passionate about connecting the physical and digital worlds securely</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  With over a decade of experience in IoT security and cellular network architecture, I help organizations navigate 
                  the complex landscape of connected devices and digital transformation. My expertise spans from 
                  sensor networks to cloud architectures, enabling businesses to unlock new value through secure, data-driven insights.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  I'm passionate about sharing knowledge through courses, writing, and speaking engagements. 
                  My mission is to make IoT security accessible and practical for businesses of all sizes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-md text-sm border border-teal-500/30">IoT Security</span>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-sm border border-blue-500/30">Cellular IoT</span>
                  <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-md text-sm border border-cyan-500/30">Enterprise Advisory</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 p-8 rounded-2xl border border-slate-600/30">
                <h3 className="text-xl font-semibold text-white mb-4">Areas of Focus</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• IoT Security & Compliance Strategy</li>
                  <li>• Cellular IoT Architecture & Implementation</li>
                  <li>• Enterprise IoT Advisory & Consulting</li>
                  <li>• Digital Transformation Leadership</li>
                  <li>• Connected Device Security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-lg text-slate-300">Real-world IoT implementations driving business value</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                      Case Study
                    </Badge>
                    <span className="text-sm text-slate-400">Global Implementation</span>
                  </div>
                  <CardTitle className="text-white text-2xl">Global Cold-Chain Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 text-slate-300">
                    Implemented comprehensive cellular IoT security solution for a global cold-chain monitoring network, 
                    integrating Watchtower Acuity platform to enhance visibility, ensure regulatory compliance, and improve sustainability metrics.
                  </CardDescription>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                      <div className="text-sm text-slate-400">Network Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                      <div className="text-sm text-slate-400">Compliance Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                      <div className="text-sm text-slate-400">Sustainability Gains</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Enhanced global cellular security for temperature-sensitive shipments</li>
                      <li>• Improved regulatory compliance across multiple jurisdictions</li>
                      <li>• Reduced food safety incidents through proactive monitoring</li>
                      <li>• Achieved significant sustainability improvements in cold-chain operations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
              <p className="text-lg text-slate-300">What industry leaders say about working with me</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-600/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Latest Insights</h2>
              <p className="text-lg text-slate-300">Thoughts on IoT security, cellular networks, and digital transformation</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-teal-400 transition-colors text-white">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-300 mb-4">{post.excerpt}</CardDescription>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-teal-400 font-medium hover:text-teal-300 transition-colors"
                    >
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <BookOpen className="mr-2 w-4 h-4" />
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">IoT Fundamentals for Beginners</h2>
              <p className="text-lg text-slate-300">Master the basics of IoT in just 4 weeks with hands-on projects and real-world examples</p>
            </div>
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader className="text-center">
                    <div className="mb-4">
                      <Badge className="bg-green-600/20 text-green-300 border-green-500/30 mb-4">
                        Available Now
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-2xl mb-2">4-Week Beginner Course</CardTitle>
                    <CardDescription className="text-slate-300">
                      Perfect for professionals new to IoT who want to understand the fundamentals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold text-white mb-2">What You'll Learn:</h4>
                      <ul className="text-slate-300 text-sm space-y-1 text-left">
                        <li>• IoT Fundamentals & Architecture</li>
                        <li>• Cellular Connectivity Basics</li>
                        <li>• Security Best Practices</li>
                        <li>• Hands-on Project Implementation</li>
                      </ul>
                    </div>
                    
                    <Link to="/course/1">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6">
                        <BookOpen className="mr-2 w-5 h-5" />
                        Start Learning Now
                      </Button>
                    </Link>
                    
                    <p className="text-xs text-slate-400 mt-4">
                      Join hundreds of professionals already mastering IoT fundamentals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">IoT Insights Podcast</h2>
              <p className="text-lg text-slate-300">Coming Soon - Weekly conversations with IoT leaders and innovators</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700 text-center">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mic className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Podcast Launching Soon</h3>
                  <p className="text-slate-300 mb-6">
                    Get ready for in-depth conversations about IoT security, cellular networks, and digital transformation 
                    with industry leaders and innovators.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-teal-600/20 text-teal-300 rounded-md text-sm border border-teal-500/30">IoT Security</span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-sm border border-blue-500/30">Industry Leaders</span>
                    <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-md text-sm border border-cyan-500/30">Expert Insights</span>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700" disabled>
                    <Clock className="mr-2 w-4 h-4" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-xl text-teal-100 mb-8">
              Get monthly insights on IoT security, cellular networks, and practical implementation tips delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
              />
              <Button type="submit" variant="secondary" size="lg" className="bg-white text-teal-700 hover:bg-white/90">
                <Mail className="mr-2 w-4 h-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-teal-200 text-sm mt-4">
              Join 5,000+ professionals. No spam, unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-lg text-slate-300">Let's discuss your IoT security project or collaboration opportunities</p>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your IoT security project or question..."
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Marcus Schmidt</h3>
              <p className="text-slate-400 mb-6">IoT Security Consultant & Cellular IoT Advisor</p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/marcuswschmidt/" className="text-slate-400 hover:text-teal-400 transition-colors">LinkedIn</a>
                <a href="mailto:Marcus@MarcusWSchmidt.com" className="text-slate-400 hover:text-teal-400 transition-colors">Email</a>
              </div>
              <Separator className="my-8 bg-slate-700" />
              <p className="text-slate-500">© 2024 Marcus Schmidt. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
