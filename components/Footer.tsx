
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 py-12 px-5 mt-auto">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-800">Privacy Policy</a>
          <a href="#" className="hover:text-slate-800">Terms of Service</a>
          <a href="#" className="hover:text-slate-800">Contact Us</a>
        </div>
        
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-6">
          FDA Compliance Disclaimer
        </p>
        
        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary and testimonials are not claimed to represent typical results.
        </p>
        
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Men's Health Insider. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
