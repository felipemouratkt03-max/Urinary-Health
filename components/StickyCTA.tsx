import React, { useState, useEffect } from 'react';

const AFFILIATE_URL = "https://mwebnix.com/9559/2131/2/?";

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show earlier on mobile to capture attention
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleMobileClick = () => {
    window.location.href = AFFILIATE_URL;
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 transition-all duration-500 md:hidden z-[100] transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-md mx-auto">
        <button 
          onClick={handleMobileClick}
          className="w-full flex items-center justify-center gap-3 bg-yellow-400 text-black rounded-2xl px-6 py-5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] font-black text-xl active:scale-95 transition-transform border-b-4 border-yellow-600 uppercase italic tracking-tighter"
        >
          <span>See The "Morning Flush" Ritual</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};