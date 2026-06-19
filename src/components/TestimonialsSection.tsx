import React from 'react';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Stella C.",
    sentiment: "Guided patiently from zero knowledge to keys in hand for my first coop in Lower Manhattan. He made the board package process entirely stress-free."
  },
  {
    name: "Stacey L.",
    sentiment: "Helped our Ohio family fulfill a lifelong dream of owning on the Upper East Side. We were out of state, but Brett handled everything. He made it happen."
  },
  {
    name: "Harry K.",
    sentiment: "Sold my Upper East Side apartment. He had a qualified buyer interested within days, and we closed smoothly in 60 days. Incredible execution."
  },
  {
    name: "Andrew S.",
    sentiment: "Relocating from out of state was daunting until I met Brett. He toured neighborhoods for me, sent detailed videos, and found the absolute perfect fit."
  },
  {
    name: "San P.",
    sentiment: "I've been renting with Brett guiding me for 5 years. He checks in every holiday, long after deals close. You aren't just a transaction to him."
  },
  {
    name: "Melissa M.",
    sentiment: "As a first-time buyer, I thought this would take months. We toured just one unit he recommended highly, and I knew Brett was the one to trust. Seamless."
  }
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-16 border-b border-[#C8A96E]/30 pb-6">
            <h3 className="text-[11px] uppercase tracking-widest text-[#C8A96E] font-bold mb-4">Client Stories</h3>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
              Don't just take my word for it. Here is what my clients have to say across over 100 five-star Google Reviews.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white/5 p-6 border-l-2 border-[#C8A96E] h-full flex flex-col gap-4">
                <p className="text-sm italic leading-relaxed text-white/80 flex-grow">
                  "{test.sentiment}"
                </p>
                <div className="mt-auto">
                  <span className="text-[10px] uppercase font-bold text-[#C8A96E] tracking-widest">{test.name}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <FadeIn delay={0.1} className="px-4">
              <p className="text-4xl lg:text-5xl font-serif text-[#C8A96E] mb-2">101</p>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-medium">Google Reviews</p>
            </FadeIn>
            <FadeIn delay={0.2} className="px-4">
              <p className="text-4xl lg:text-5xl font-serif text-[#C8A96E] mb-2">4.8★</p>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-medium">Average Rating</p>
            </FadeIn>
            <FadeIn delay={0.3} className="px-4">
              <p className="text-4xl lg:text-5xl font-serif text-[#C8A96E] mb-2">8+</p>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-medium">Years in NYC</p>
            </FadeIn>
            <FadeIn delay={0.4} className="px-4">
              <p className="text-4xl lg:text-5xl font-serif text-[#C8A96E] mb-2">10/10</p>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-medium">Referral Rate</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
