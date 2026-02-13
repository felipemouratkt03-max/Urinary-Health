import React from 'react';

const AFFILIATE_URL = "https://mwebnix.com/9559/2131/2/?";

export const StoryContent: React.FC = () => {
  const handleRedirect = (e: React.MouseEvent) => {
    // Ensuring the link works even if standard <a> behavior is blocked
    window.location.href = AFFILIATE_URL;
  };

  return (
    <article className="prose-text text-slate-800">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-8 text-center md:text-left">
        Tired of the Midnight Marathons to the Bathroom... or That Dreaded Wince Every Time You Go?
      </h1>

      <p className="mb-6 font-semibold italic text-slate-500 text-center md:text-left">
        By David Miller, Health Correspondent
      </p>

      <div className="mb-10 flex flex-col items-center">
        <img 
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800" 
          alt="Mark, a 62-year-old retired teacher"
          className="w-full max-w-md rounded-2xl shadow-xl aspect-[4/3] object-cover"
        />
        <p className="mt-4 text-sm text-slate-500 italic text-center max-w-md">
          Mark, 62, thought his days of being active were over before discovering a natural approach to urinary health.
        </p>
      </div>

      <p className="mb-6">
        Mark was 62 and, in his own words, "absolutely exhausted." As a retired high school teacher, he had envisioned his golden years being filled with long hikes, woodworking, and chasing his three young grandsons around the yard.
      </p>

      <p className="mb-6">
        Instead, his life had become a series of "bathroom calculations." Every road trip meant mapping out every gas station. Every movie night meant missing the climax of the film. But the worst part wasn't just the <b>frequent urination</b> that kept him up three or four times every night.
      </p>

      <p className="mb-6">
        It was the quiet anxiety that followed him everywhere. The stinging <b>pain when urinating</b> made every trip to the restroom feel like a battle. Even worse, the persistent <b>difficulty urinating</b> and general discomfort had caused him to pull away from his wife, Diane. He felt like a shadow of the man he used to be, and he was too embarrassed to tell anyone—even his doctor.
      </p>

      <p className="mb-6">
        Mark tried everything. He bought those cheap saw palmetto bottles from the local pharmacy. He tried "waiting it out," thinking it was just a natural part of getting older. He even considered heavy prescription drugs but was terrified of the side effects like dizziness and permanent sexual dysfunction.
      </p>

      <p className="mb-6">
        The turning point came during a quiet Saturday morning coffee with his old friend, Jim, a retired urologist. After seeing Mark wince and head to the bathroom for the third time in an hour, Jim spoke up. "Mark, most guys think the problem is just the bladder. But for men our age, it's about supporting the foundation of your urinary system. You need to focus on root-cause support, not just masking the symptoms."
      </p>

      <p className="mb-6">
        Jim told him about a specific, natural approach developed right here in the USA. It wasn't about chemicals or harsh interventions. It was about a doctor-formulated blend of natural ingredients designed to support healthy prostate function and promote comfortable urinary flow from the inside out.
      </p>

      <p className="mb-6 text-xl font-bold text-blue-700 italic border-l-4 border-blue-600 pl-4 py-2 bg-blue-50">
        "It's about taking back your dignity, Mark. When your prostate is supported, your bladder doesn't have to work overtime."
      </p>

      <p className="mb-6 mt-6">
        That’s when Mark discovered a premium <b>Urinary Health Formula</b>. It was non-GMO, soy-free, gluten-free, and produced in an FDA-registered, GMP-certified facility. No hype, just science-backed ingredients like high-grade saw palmetto, beta-sitosterol, and zinc—all working together to help maintain a healthy prostate.
      </p>

      <p className="mb-6">
        Within weeks, the difference was undeniable. Mark wasn't waking up at 3:00 AM anymore. He could sit through a two-hour movie without checking his watch. Most importantly, the confidence returned to his marriage. He wasn't afraid of intimacy anymore.
      </p>

      <p className="mb-6 font-bold">
        Mark is just one of thousands of American men over 50 who have quietly taken back control of their lives. They’ve swapped the frustration of "bathroom anxiety" for the peace of mind that comes with real, natural support.
      </p>

      <div className="bg-white p-8 rounded-3xl border-4 border-yellow-400 mt-12 mb-8 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center uppercase tracking-tight">
          STOP! Do This Before You Sleep Tonight
        </h2>

        <p className="mb-8 text-center text-slate-700 text-lg font-bold">
          Click below to discover the exact <span className="text-red-600 underline">"Morning Flush"</span> ritual that millions of men are using to end bathroom emergencies and restore their peak performance.
        </p>

        <div className="flex justify-center flex-col items-center gap-6">
          <a 
            href={AFFILIATE_URL}
            onClick={handleRedirect}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-gold inline-flex items-center justify-center w-full max-w-xl bg-yellow-400 hover:bg-yellow-500 text-black text-center py-6 px-4 rounded-xl font-black text-xl md:text-3xl transition-all shadow-[0_15px_40px_rgba(234,179,8,0.4)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.5)] border-b-8 border-yellow-600 no-underline uppercase leading-none"
          >
            <span className="flex items-center gap-3">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              WATCH VIDEO: RESTORE YOUR FLOW NOW
            </span>
          </a>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-red-600 font-black uppercase tracking-widest">
              ⚠️ Warning: This Video May Be Removed Soon
            </p>
            <p className="text-xs text-slate-400 font-medium">
              *Limited availability for new customers only.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};