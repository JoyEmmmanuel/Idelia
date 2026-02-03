"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[85vh] flex flex-col md:flex-row bg-idelia-cream overflow-hidden ">
      
      {/* 1. The Text Content Layer */}
      <div className="w-full md:w-1/2 px-6 md:pl-16 md:pr-12 pt-12 md:pt-20 pb-8 flex flex-col justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-idelia-olive font-sans uppercase tracking-[0.4em] text-[9px] md:text-xs mb-4 md:mb-6 block">
            Premium Futura • 2026 Preview
          </span>
          
          <h1 className="text-[42px] sm:text-5xl md:text-8xl font-serif text-idelia-dark leading-[0.9] mb-6 md:mb-8">
            Silken <br />
            <span className="italic font-light text-idelia-olive">Perfection.</span>
          </h1>

          <p className="max-w-md text-idelia-dark/60 font-sans text-xs md:text-base leading-relaxed mb-8 md:mb-10">
            Premium Japanese silk simulated human hair wigs that look natural, feel silky, and stay flawless with minimal effort.
          </p>

         <div className="flex flex-col sm:flex-row gap-6 mt-12">
  {/* PRIMARY: Shop the Collection */}
  <button className="relative overflow-hidden bg-idelia-olive text-idelia-cream px-12 py-5 font-sans uppercase text-[10px] tracking-[0.4em] font-bold transition-all duration-700 ease-in-out hover:bg-idelia-dark hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(85,107,47,0.2)] active:scale-95 cursor-pointer rounded-none">
    Shop the Collection
  </button>

  {/* SECONDARY: What is Futura Hair? */}
  <button className="group relative border border-idelia-olive/30 text-idelia-olive px-12 py-5 font-sans uppercase text-[10px] tracking-[0.4em] bg-transparent transition-all duration-700 ease-in-out hover:border-idelia-olive hover:-translate-y-1.5 active:scale-95 cursor-pointer rounded-none">
    <span className="relative z-10">Why Futura Hair?</span>
    {/* Subtle hover background reveal */}
    <div className="absolute inset-0 bg-idelia-olive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
  </button>
</div>
        </motion.div>
      </div>

      {/* 2. Visual Layer: Optimized for Viewport Breathing */}
      <div className="w-full md:w-[55%] relative h-[50vh] md:h-[90vh] flex items-end justify-center bg-idelia-olive/5 overflow-visible">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-full flex items-end justify-center origin-bottom"
        >
          <Image 
            src="/images/hero-models (1).webp" 
            alt="Idelia Luxury Collection"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_45px_50px_rgba(85,107,47,0.15)] scale-110 md:scale-125" 
          />
        </motion.div>
      </div>

      {/* 3. Elegant Vertical Divider */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 z-30">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-px bg-idelia-olive/30" 
        />
        <span className="text-[8px] uppercase tracking-[0.4em] text-idelia-olive/60 vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}