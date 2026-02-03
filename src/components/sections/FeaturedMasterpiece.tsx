"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MASTERPIECES = [
  {
    id: "01",
    name: "Natasha",
    subtitle: "Midnight",
    price: "₦58,000",
    description: "A study in light and shadow. Crafted with our signature high-definition fiber to ensure a luster that mimics 100% healthy biological hair.",
    image: "/images/featured-masterpiece.webp",
  },
  {
    id: "02",
    name: "Swiss",
    subtitle: "Cocoa",
    price: "₦62,000",
    description: "Ethereal honey-blonde tones meet a seamless melt. The ultimate statement of luxury for the modern muse.",
    image: "/images/featured-masterpiece2.webp",
  },
];

export default function FeaturedMasterpiece() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MASTERPIECES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = MASTERPIECES[index];

  return (
    // Mobile: Reduced padding (py-12). PC: Kept original (md:py-32).
    <section className="relative min-h-[85vh] md:min-h-screen bg-idelia-cream py-16 md:py-32 flex flex-col justify-center overflow-hidden border-t border-idelia-olive/10">
      
      {/* 1. HEADER - Moved closer on mobile */}
      <div className="absolute top-8 md:top-16 left-0 w-full z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
         <header className="mb-16 md:mb-24 flex flex-col items-center text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center leading-none"
  >
    <span className="text-idelia-dark text-[9px] md:text-[11px] uppercase tracking-[0.8em] font-bold mb-4 opacity-50">
      Featured
    </span>
    <h2 className="text-idelia-dark font-serif text-4xl md:text-7xl tracking-tighter leading-tight">
      The <span className="italic text-idelia-olive">Masterpiece</span>
    </h2>
  </motion.div>
</header>
        </div>
      </div>

      {/* 2. THE DYNAMIC STAGE */}
      {/* Mobile: Tightened top padding (pt-12). PC: Kept original (md:pt-12). */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 relative z-10 pt-12 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            // Mobile: Gap is now tiny (gap-2). PC: Kept original (md:gap-16).
            className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-16 items-center"
          >
            
            {/* PRODUCT IMAGE */}
            <div className="lg:col-span-6 flex justify-center order-1">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                // Mobile: Smaller max-width so it doesn't push text down.
                className="relative w-full aspect-4/5 max-w-240px md:max-w-2xl"
              >
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-idelia-olive/5 blur-2xl rounded-full" />
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  priority
                  className="object-contain" 
                />
              </motion.div>
            </div>

            {/* CONTENT - MOBILE REFINEMENT */}
            {/* Mobile: Space between elements reduced (space-y-4). PC: (md:space-y-12). */}
            <div className="lg:col-span-6 space-y-2 md:space-y-8 order-2 text-center lg:text-left">
              
              <div className="space-y-1 md:space-y-3">
                <motion.p className="text-idelia-olive font-serif italic text-[14px] md:text-xl">
                  Unit {current.id}
                </motion.p>
                <motion.h3 className="text-4xl md:text-8xl lg:text-[100px] font-serif text-idelia-dark leading-none tracking-tighter">
                  {current.name}   
                  <span className="italic font-light text-idelia-olive"> {current.subtitle}.</span>
                </motion.h3>
              </div>

              <motion.p className="text-idelia-dark/70 font-sans text-[13px] md:text-lg max-w-260px md:max-w-sm mx-auto lg:mx-0 leading-snug md:leading-relaxed">
                &quot;{current.description}&quot;
              </motion.p>

              {/* Mobile: Pricing section brought much closer (pt-2). PC: (md:pt-6). */}
              <motion.div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 pt-2 md:pt-6 border-t border-idelia-olive/10">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="font-serif text-2xl md:text-4xl text-idelia-dark italic leading-none">{current.price}</p>
                </div>
                
            <button className="w-full md:w-auto bg-idelia-olive text-idelia-cream px-10 py-5 md:px-20 md:py-6 uppercase text-[10px] tracking-[0.5em] font-bold transition-all duration-700 ease-in-out hover:bg-idelia-dark hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(85,107,47,0.2)] active:scale-95 cursor-pointer rounded-none">
  Acquire Unit
</button>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* MOBILE INDICATORS - Brought closer to content */}
      <div className="mt-8 flex md:hidden justify-center gap-3">
         {MASTERPIECES.map((_, i) => (
            <div key={i} className={`h-[1.5px] transition-all duration-700 ${i === index ? "w-8 bg-idelia-olive" : "w-3 bg-idelia-olive/20"}`} />
         ))}
      </div>

      {/* PC ONLY INDICATORS (Unchanged) */}
      <div className="absolute bottom-16 right-16 hidden md:flex items-center gap-8">
        <div className="flex flex-col items-end">
          <p className="text-[10px] uppercase tracking-[0.5em] text-idelia-dark/30 font-bold mb-2">Atelier Registry</p>
          <div className="flex gap-4">
            {MASTERPIECES.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1 transition-all duration-1000 ${i === index ? "w-20 bg-idelia-olive" : "w-8 bg-idelia-dark/10"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}