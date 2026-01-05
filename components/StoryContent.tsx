
import React from 'react';

const AFFILIATE_URL = "https://hop.clickbank.net/?affiliate=mourabh&vendor=provive&pid=20&tid=trac";

export const StoryContent: React.FC = () => {
  return (
    <article className="prose-text text-slate-800">
      <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 mb-8">
        Tired of the Midnight Marathons to the Bathroom... or That Dreaded Wince Every Time You Go?
      </h1>

      <p className="mb-6 font-semibold italic text-slate-500">
        By David Miller, Health Correspondent
      </p>

      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=1200" 
          alt="Mark, a 62-year-old retired teacher, enjoying a quiet moment in his home"
          className="w-full rounded-2xl shadow-lg"
        />
        <p className="mt-2 text-sm text-slate-500 italic text-center">
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
        It was the quiet anxiety that followed him everywhere. The stinging <b>pain when urinating</b> made every trip to the restroom feel like a battle. Even worse, the occasional <b>pain during ejaculation</b> had caused him to pull away from his wife, Diane. He felt like a shadow of the man he used to be, and he was too embarrassed to tell anyone—even his doctor.
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

      <p className="mb-6">
        Mark is just one of thousands of American men over 50 who have quietly taken back control of their lives. They’ve swapped the frustration of "bathroom anxiety" for the peace of mind that comes with real, natural support.
      </p>

      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mt-12 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
          Take Back Your Comfort, Confidence, and Peace of Mind
        </h2>

        <p className="mb-6 text-center text-slate-700">
          If you’re ready to say goodbye to <b>pain when urinating</b>, <b>pain during ejaculation</b>, and <b>frequent urination</b>—and hello to restful nights and worry-free days—this could be your moment.
        </p>

        <a 
          href={AFFILIATE_URL}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-5 px-6 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          YES — I Want to Try This Natural Urinary Health Support Formula
        </a>

        <p className="mt-4 text-center text-sm text-slate-500">
          Click above to visit the official site and check availability.
        </p>
      </div>
    </article>
  );
};
