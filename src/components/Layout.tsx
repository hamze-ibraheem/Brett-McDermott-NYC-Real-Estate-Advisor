import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Difference', href: '#difference' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative pb-20 md:pb-0">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#C8A96E] z-[60] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled ? 'bg-[#1C2B3A]/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex-shrink-0 flex flex-col">
            <h1 className="text-xl md:text-2xl font-light uppercase tracking-widest text-[#C8A96E] font-serif">
              Brett McDermott
            </h1>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">NYC Real Estate Advisor</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-widest text-white/80 hover:text-[#C8A96E] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+18454990986" 
              className="text-[11px] uppercase tracking-widest text-[#1C2B3A] bg-[#C8A96E] px-4 py-2 font-bold hover:bg-[#d4ba85] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1C2B3A] border-t border-white/10 shadow-xl">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-white/80 hover:text-[#C8A96E] py-3 border-b border-white/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 text-white/60 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
            <span>1407 Broadway, New York, NY 10018</span>
            <span>+1 (845) 499-0986</span>
          </div>
          
          <div className="text-center md:text-right italic font-serif lowercase tracking-normal text-xs opacity-80">
            Patient. Honest. Referred. — Your NYC Real Estate Guy.
          </div>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <a 
          href="tel:+18454990986"
          className="flex items-center justify-center gap-2 w-full bg-[#C8A96E] text-[#1C2B3A] font-bold uppercase tracking-widest text-xs py-4 shadow-[0_-4px_20px_rgba(200,169,110,0.2)] active:bg-[#d4ba85] transition-colors"
        >
          <Phone className="w-4 h-4 fill-[#1C2B3A]" />
          Call Brett: (845) 499-0986
        </a>
      </div>
    </div>
  );
}
