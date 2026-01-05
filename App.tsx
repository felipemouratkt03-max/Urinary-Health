
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header.tsx';
import { StoryContent } from './components/StoryContent.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyCTA } from './components/StickyCTA.tsx';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-blue-600 z-50 transition-all duration-200" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header />
      
      <main className="w-full max-w-2xl px-5 py-8 md:py-12 bg-white shadow-sm border-x border-slate-100">
        <StoryContent />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
