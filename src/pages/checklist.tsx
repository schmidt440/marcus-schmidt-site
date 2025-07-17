import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";
import IoTSecurityChecklist from '@/components/IoTSecurityChecklist';
import SEOHead from '@/components/SEOHead';
import { EmailGate } from '@/components/EmailGate';

const Checklist = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Check if user has access (either through URL params or localStorage)
    const urlParams = new URLSearchParams(window.location.search);
    const hasUrlAccess = urlParams.get('access') === 'granted';
    const hasStoredAccess = localStorage.getItem('checklist_access') === 'granted';
    
    if (hasUrlAccess) {
      localStorage.setItem('checklist_access', 'granted');
      setHasAccess(true);
    } else if (hasStoredAccess) {
      setHasAccess(true);
    }
  }, []);

  if (!hasAccess) {
    return (
      <>
        <SEOHead
          title="IoT Security Checklist - Free Guide by Marcus Schmidt"
          description="Comprehensive IoT security checklist covering cellular networks, device management, and enterprise compliance. Free guide for IoT professionals."
          keywords={["IoT security", "checklist", "cybersecurity", "cellular IoT", "device management", "compliance"]}
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

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-8">
              <div className="mx-auto w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center">
                <Lock className="w-12 h-12 text-slate-400" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white">
                  IoT Security Checklist
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Get instant access to our comprehensive 50-point IoT security checklist. 
                  Join thousands of professionals who use this guide to secure their IoT deployments.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-white mb-2">50+ Security Points</h3>
                    <p className="text-slate-400 text-sm">Comprehensive coverage of all IoT security aspects</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-white mb-2">Industry Best Practices</h3>
                    <p className="text-slate-400 text-sm">Based on NIST, IEC, and enterprise standards</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 text-center">
                    <h3 className="font-semibold text-white mb-2">Interactive Format</h3>
                    <p className="text-slate-400 text-sm">Track progress and add personal notes</p>
                  </div>
                </div>

                <EmailGate
                  trigger={
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      Get Free Access Now
                    </Button>
                  }
                  title="Access IoT Security Checklist"
                  description="Enter your details to get immediate access to our comprehensive IoT security checklist."
                  downloadName="Security Checklist"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="IoT Security Checklist - Free Guide by Marcus Schmidt"
        description="Comprehensive IoT security checklist covering cellular networks, device management, and enterprise compliance. Free guide for IoT professionals."
        keywords={["IoT security", "checklist", "cybersecurity", "cellular IoT", "device management", "compliance"]}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <IoTSecurityChecklist />
        </div>
      </div>
    </>
  );
};

export default Checklist;