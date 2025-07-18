
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/header";
import Index from "./pages/index";
import Auth from "./pages/auth";
import BlogListing from "./pages/bloglisting";
import BlogPost from "./components/blogpost";
import Checklist from "./pages/checklist";
import Course from "./pages/course";
import CourseAccess from "./pages/courseaccess";
import Quiz from "./pages/quiz";
import "./app.css";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/course-access" element={<CourseAccess />} />
        <Route path="/course/:moduleId" element={<Course />} />
        <Route path="/course/:moduleId/quiz" element={<Quiz />} />
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/" replace /> : <Auth />} 
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
