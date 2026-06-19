import React from 'react';
import { FadeIn } from './FadeIn';
import { ShieldCheck, HeartHandshake, Users, ArrowRight } from 'lucide-react';

const differentiators = [
  {
    title: "Patient Beyond Measure",
    quote: '"He spent 3 years searching with one client — no complaint."',
    desc: "I will never rush you into a home that isn't right. We keep looking until we find 'the one'."
  },
  {
    title: "Brutally Honest",
    quote: "\"He'll tell you what you need to hear, not what you want.\"",
    desc: "You are making a major life decision. You need an advisor who points out the flaws in a property, not just the perks."
  },
  {
    title: "Client-Obsessed",
    quote: "\"You'll feel like his only client, always.\"",
    desc: "I take on a limited number of clients at a time to ensure I am personally available for every tour, call, and question."
  },
  {
    title: "Long-Term Relationship",
    quote: '"He checks in years after the deal closes."',
    desc: "I want to be your real estate guide for life, not just for one transaction."
  },
  {
    title: "100% Referral-Driven",
    quote: '"Most clients come from friends who came from friends."',
    desc: "My business is built on trust. When you have a great experience, you tell your friends. That's my entire marketing strategy."
  }
];

export function DifferenceSection() {
  return (
    <section id="difference" className="bg-transparent py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: About Brett */}
          <div id="about" className="lg:col-span-5 order-2 lg:order-1">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 font-light">
                New York's Most <span className="text-[#C8A96E] italic">Referred</span> Advisor
              </h2>
              <div className="w-12 h-px bg-[#C8A96E]/50 mb-8" />
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Brett McDermott has built his entire practice on a simple foundation: referrals and repeat business. Known as the "kindest broker" his clients have ever worked with, he brings patience, honesty, and deep NYC market knowledge to every search.
                </p>
                <p>
                  From securing that first apartment to navigating a luxury purchase or selling a family-sized condo, Brett is the advisor people call — and the one they always call back.
                </p>
                <blockquote className="border-l-2 border-[#C8A96E] pl-6 py-2 my-8">
                  <p className="font-serif text-2xl text-white italic">
                    "I will always make your referrals a priority."
                  </p>
                </blockquote>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 mt-8 text-white text-xs uppercase tracking-widest font-bold border-b border-white/30 pb-1 hover:text-[#C8A96E] hover:border-[#C8A96E] transition-colors group"
              >
                Work With Brett 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
          </div>


          {/* Right Side: The Difference */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white/5 p-8 md:p-12 border border-white/10">
              <FadeIn>
                <h3 className="text-[11px] uppercase tracking-widest text-[#C8A96E] font-bold border-b border-[#C8A96E]/30 pb-2 mb-8">The Brett Difference</h3>
              </FadeIn>
              
              <div className="space-y-8">
                {differentiators.map((diff, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="group">
                      <h4 className="text-sm font-semibold text-[#C8A96E] mb-1">{diff.title}</h4>
                      <p className="text-xs text-white/80 leading-relaxed italic mb-2">{diff.quote}</p>
                      <p className="text-sm text-white/60 leading-relaxed">{diff.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
