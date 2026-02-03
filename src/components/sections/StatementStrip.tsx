export default function StatementStrip() {
  return (
    <section className="bg-idelia-cream py-16 md:py-32 px-6 overflow-hidden relative border-t border-idelia-olive/10">
      {/* Editorial Watermark (Subtle 'IDELIA' in background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
         <span className="text-[15vw] font-serif italic text-idelia-olive/5 whitespace-nowrap">
           Idelia Atelier
         </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

      <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-idelia-dark leading-[1.1] tracking-tighter">
            “Designed with <span className="italic text-idelia-olive">Intention</span>. <br className="hidden md:block" /> 
            Worn with <span className="italic">Confidence</span>.”
          </h2>

        <div className="mt-12 flex items-center gap-6">
          <span className="w-8 h-px bg-idelia-olive/40"></span>
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-idelia-dark/60 font-medium">
            Realism • Comfort • Confidence
          </p>
          <span className="w-8 h-px bg-idelia-olive/40"></span>
        </div>
      </div>
    </section>
  );
}