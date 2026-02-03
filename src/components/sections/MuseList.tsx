"use client";
import { motion } from "framer-motion";

export default function MuseList() {
  return (
    
    <section className="py-12 md:py-32 bg-idelia-cream px-6 md:px-16 border-t border-idelia-olive/10 ">
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <header className="space-y-1 md:space-y-4">
            <span className="text-idelia-olive uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-bold">
              Private Invitation
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-idelia-dark leading-tight">
              Join the <span className="italic font-light">Muse List</span>
            </h2>
            <p className="text-idelia-dark/80 font-sans text-xs md:text-lg max-w-sm md:max-w-xl mx-auto leading-relaxed">
               Be the first to acquire new Futura Units and explore our seasonal archives.
            </p>
          </header>

          {/* FORM - Mobile optimized logic */}
          <form className="relative max-w-md mx-auto mt-8 md:mt-12 group">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full bg-transparent border-b border-idelia-dark/20 py-4 px-1 focus:outline-none focus:border-idelia-olive transition-colors text-idelia-dark placeholder:text-idelia-dark/30 text-[10px] md:text-sm tracking-[0.2em] uppercase font-light"
            />
            {/* Button stays pinned to the right but scales for thumb-tapping */}
            <button className="absolute right-0 bottom-4 text-idelia-dark uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-black hover:text-idelia-olive transition-colors border-b border-idelia-olive/30 pb-1">
  Request Access
</button>
          </form>

          <p className="text-[7px] md:text-[9px] uppercase tracking-widest text-idelia-dark/70 pt-2 md:pt-4">
            By joining, you agree to our privacy standards and exclusive terms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}