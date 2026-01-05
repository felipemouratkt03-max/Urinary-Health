
import React, { useState, useEffect } from 'react';

const AFFILIATE_URL = "https://hop.clickbank.net/?affiliate=mourabh&vendor=provive&pid=20&tid=trac";

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show sticky CTA after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 p-4 transition-all duration-300 md:hidden z-40 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-md mx-auto">
        <a 
          href={AFFILIATE_URL}
          className="flex items-center justify-between bg-blue-600 text-white rounded-full px-6 py-4 shadow-2xl font-bold active:scale-95 transition-transform"
        >
          <span>Claim Your Support Formula</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
