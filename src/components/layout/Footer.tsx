"use client";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-idelia-cream border-t border-idelia-olive/10 pt-12 md:pt-16 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
      
        {/* Desktop: 4 columns inline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 md:gap-16 pb-12">
          
          {/* 1. BRAND STORY - Spans full width on mobile for better breathing room */}
          <div className="col-span-2 md:col-span-1 space-y-5 md:space-y-6">
            <h2 className="font-serif text-2xl text-idelia-olive tracking-tighter italic leading-none">
              IDELIA
            </h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-idelia-dark/50 font-medium max-w-260px md:max-w-none leading-relaxed">
              Premium futura wigs.
            </p>

            <div className="space-y-4 pt-1">
              <h4 className="text-[9px] uppercase tracking-[0.4em] text-idelia-olive font-bold">Connect</h4>
              <div className="flex gap-6 items-center">
                <a href="#" className="text-idelia-dark/60 hover:text-idelia-olive transition-all">
                  <Instagram size={18} strokeWidth={1} />
                </a>
                <a href="#" className="text-idelia-dark/60 hover:text-idelia-olive transition-all">
                    <Facebook size={16} strokeWidth={1.2} />
                  </a>
                  <a href="#" className="text-idelia-dark/60 hover:text-idelia-olive transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  </a>
                <a href="#" className="text-idelia-dark/60 hover:text-idelia-olive transition-all">
                  <Phone size={18} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>

          {/* 2. COLLECTIONS - Neat 2-column item on mobile */}
          <div className="space-y-4 md:space-y-5">
            <h4 className="text-[9px] uppercase tracking-[0.4em] text-idelia-olive font-bold">Collections</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/swiss" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Swiss Series</Link>
              <Link href="/natasha" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Natasha Series</Link>
              <Link href="/afronita" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Afronita Series</Link>
            </nav>
          </div>

          {/* 3. ATELIER */}
          <div className="space-y-4 md:space-y-5">
            <h4 className="text-[9px] uppercase tracking-[0.4em] text-idelia-olive font-bold">Atelier</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/track" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Order Tracking</Link>
              <Link href="/care" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Wig Care</Link>
              <Link href="/shipping" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Delivery</Link>
            </nav>
          </div>

          {/* 4. SUPPORT - Clears onto new line on mobile if needed, or stays in 2nd column */}
          <div className="space-y-4 md:space-y-5 col-span-2 md:col-span-1">
            <h4 className="text-[9px] uppercase tracking-[0.4em] text-idelia-olive font-bold border-t md:border-none border-idelia-olive/10 pt-6 md:pt-0">Support</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/privacy" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[10px] md:text-[11px] uppercase tracking-widest text-idelia-dark/70 hover:text-idelia-olive transition-colors">Terms</Link>
            </nav>
          </div>
        </div>

       
       {/* BOTTOM TIER: COMPACT TRUST BAR */}
<div className="pt-10 border-t border-idelia-olive/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-6 text-center md:text-left">
  <p className="text-[8px] uppercase tracking-[0.4em] text-idelia-dark/30 font-bold">
    © 2026 IDELIA 
  </p>
  
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
    <div className="flex items-center gap-2 opacity-60">
       <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-idelia-olive"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
       <span className="text-[8px] uppercase tracking-[0.4em] text-idelia-dark/40 font-bold">100% Secure Payment via Paystack</span>
    </div>
    <div className="hidden md:block h-px w-6 bg-idelia-olive/20" />
    <span className="text-[8px] uppercase tracking-[0.4em] text-idelia-dark/30">Tracked & Insured Delivery</span>
  </div>
</div>
      </div>
    </footer>
  );
}