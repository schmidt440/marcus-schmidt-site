import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from '@/data/blogPosts';
import SEOHead from '@/components/SEOHead';

const BlogListing = () => {
  return (
    <>
      <SEOHead
        title="IoT Security Blog | Marcus Schmidt"
        description="Latest insights on IoT security, cellular networks, and digital transformation from Marcus Schmidt, IoT Security Consultant."
        keywords={["IoT security blog", "cellular IoT", "IoT consultant", "enterprise IoT", "digital transformation"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Navigation */}
        <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="font-bold text-xl text-white">Marcus Schmidt</Link>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">IoT Security Insights</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Latest thoughts on IoT security, cellular networks, and digital transformation
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group bg-slate-800/50 border-slate-700 hover:border-teal-500/50">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-teal-400 transition-colors text-white text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-teal-400 font-medium hover:text-teal-300 transition-colors group-hover:gap-3 gap-2"
                  >
                    Read Full Article 
                    <ArrowRight className="w-4 h-4 transition-all duration-300" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <BookOpen className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get monthly insights on IoT security, cellular networks, and practical implementation tips delivered to your inbox.
            </p>
            <Link to="/#newsletter">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Subscribe to Newsletter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListing;