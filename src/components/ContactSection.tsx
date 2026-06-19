import React from 'react';
import { FadeIn } from './FadeIn';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-[#1C2B3A] p-10 md:p-14 flex flex-col justify-between border-r border-white/10">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 22h20L12 2zm0 3.83L19.17 20H4.83L12 5.83z" />
                </svg>
              </div>

              <div className="relative z-10">
                <FadeIn>
                  <h3 className="text-[11px] uppercase tracking-widest text-[#C8A96E] font-bold border-b border-[#C8A96E]/30 pb-2 mb-6">Make Your Move</h3>
                  <p className="text-white/70 text-lg mb-12 font-serif italic">
                    "Brett responds quickly — reach out and let's start your search."
                  </p>
                </FadeIn>

                <FadeIn delay={0.2} className="space-y-8">
                  <div>
                    <p className="text-[10px] text-[#C8A96E] uppercase tracking-widest mb-2 font-bold">Office</p>
                    <p className="text-sm text-white/80">1407 Broadway<br/>New York, NY 10018</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] text-[#C8A96E] uppercase tracking-widest mb-2 font-bold">Direct Line</p>
                    <a href="tel:+18454990986" className="text-xl font-serif text-white hover:text-[#C8A96E] transition-colors">
                      +1 (845) 499-0986
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3 p-10 md:p-14 bg-transparent">
              <FadeIn delay={0.3}>
                <form className="space-y-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-xs text-white focus:border-[#C8A96E] outline-none transition-all placeholder:text-white/40"
                      placeholder="Name"
                    />
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-xs text-white focus:border-[#C8A96E] outline-none transition-all placeholder:text-white/40"
                      placeholder="Phone"
                    />
                  </div>

                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-xs text-white focus:border-[#C8A96E] outline-none transition-all placeholder:text-white/40"
                    placeholder="Email Address"
                  />

                  <select 
                    id="purpose"
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-xs text-white focus:border-[#C8A96E] outline-none transition-all appearance-none"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option className="bg-[#1C2B3A] text-white">I'm looking to Rent</option>
                    <option className="bg-[#1C2B3A] text-white">I'm looking to Buy</option>
                    <option className="bg-[#1C2B3A] text-white">I'm looking to Sell</option>
                    <option className="bg-[#1C2B3A] text-white">Relocate to NYC</option>
                    <option className="bg-[#1C2B3A] text-white">Just Exploring</option>
                  </select>

                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-xs text-white focus:border-[#C8A96E] outline-none transition-all resize-none placeholder:text-white/40"
                    placeholder="Message..."
                  ></textarea>

                  <div className="pt-2">
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mb-6">
                      Most clients are referrals — if a friend sent you, please mention their name.
                    </p>
                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#C8A96E] text-[#1C2B3A] text-xs font-bold uppercase tracking-widest hover:bg-[#d4ba85] transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
