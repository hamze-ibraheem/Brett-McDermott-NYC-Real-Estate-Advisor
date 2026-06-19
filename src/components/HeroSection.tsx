import React from 'react';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
        <div className="relative max-w-7xl mx-auto px-6 w-full mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <FadeIn>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-6 tracking-tight">
                  Your Trusted Guide to <br/>
                  <span className="italic text-[#C8A96E]">NYC Real Estate.</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed">
                  Whether you're renting your first apartment, buying your dream home, or selling — Brett McDermott is the advisor New Yorkers trust, refer, and come back to.
                </p>
              </FadeIn>
            </div>

            <div className="md:col-span-4 flex flex-col items-end gap-4 pb-12 w-full md:w-auto">
              <FadeIn delay={0.4} className="w-full">
                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:+18454990986" 
                    className="w-full py-4 bg-[#C8A96E] text-[#1C2B3A] font-bold text-center uppercase tracking-widest text-sm hover:bg-[#d4ba85] transition-colors"
                  >
                    Call Brett: (845) 499-0986
                  </a>
                  <a 
                    href="#contact" 
                    className="w-full py-4 border border-[#C8A96E] text-[#C8A96E] font-bold text-center uppercase tracking-widest text-sm hover:bg-white/5 transition-colors block"
                  >
                    Start Your Search
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-white/10 max-w-7xl mx-auto">
        <div className="px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#C8A96E] font-semibold w-full">
            <div className="text-center">4.8★ Google Rating</div>
            <div className="hidden md:block text-[#C8A96E]/30">|</div>
            <div className="text-center">101 Reviews</div>
            <div className="hidden md:block text-[#C8A96E]/30">|</div>
            <div className="text-center">Midtown Manhattan</div>
            <div className="hidden md:block text-[#C8A96E]/30">|</div>
            <div className="text-center">Built on Referrals</div>
          </div>
        </div>
      </div>
    </>
  );
}
