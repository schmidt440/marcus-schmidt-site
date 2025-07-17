import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2, ExternalLink } from "lucide-react";
import { getBlogPostBySlug } from '@/data/blogPosts';
import SEOHead from './seohead'; // ✅ lowercase to match seohead.tsx
import { EmailGate } from './EmailGate';
import IoTSecurityChecklist from './IoTSecurityChecklist';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SEOHead
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.keywords}
        canonical={window.location.href}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        {/* Navigation */}
        <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="font-bold text-xl text-white">Marcus Schmidt</Link>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <header className="mb-8">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
                  <p className="text-xl text-slate-300">{post.excerpt}</p>
                </header>

                <div className="prose prose-invert prose-teal max-w-none [&_*]:text-white [&_p]:text-slate-300 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_strong]:text-white [&_em]:text-slate-200 [&_li]:text-slate-300 [&_ul]:text-slate-300 [&_ol]:text-slate-300">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <footer className="mt-8 pt-8 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        onClick={handleLinkedInShare}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Share2 className="mr-2 w-4 h-4" />
                        Share on LinkedIn
                      </Button>
                      <a
                        href="https://www.linkedin.com/in/marcuswschmidt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </footer>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-4">Get Free IoT Security Checklist</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      Essential security measures for your IoT deployment
                    </p>
                    <EmailGate
                      trigger={
                      <Button className="w-full border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white transition-all px-6 py-4 rounded-lg font-semibold">
                        Download Free Guide
                      </Button>
                      }
                      title="IoT Security Checklist"
                      description="Get your comprehensive IoT security checklist and join 5,000+ professionals receiving weekly IoT insights."
                      downloadName="IoT Security Checklist"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-4">About Marcus</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      IoT security consultant and cellular IoT advisor with 10+ years experience helping enterprises implement scalable connected solutions.
                    </p>
                    <Link to="/#about">
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IoT Security Checklist Modal/Popup Content */}
      <div className="hidden">
        <IoTSecurityChecklist />
      </div>
    </>
  );
};

export default BlogPost;
