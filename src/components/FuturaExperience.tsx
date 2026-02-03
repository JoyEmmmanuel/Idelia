import Image from "next/image";

export default function FuturaExperience() {
  const pillars = [
    {
      title: "Heat-Defying Tech",
      description: "Safe to style with heat up to 180°C. Curl it, straighten it, or wave it—the fiber maintains its luster and flow."
    },
    {
      title: "The Human Mimic",
      description: "Our simulated blend is engineered to move, swing, and reflect light exactly like raw human hair. No plastic shine."
    },
    {
      title: "Style Memory",
      description: "Unlike human hair that drops in humidity, IDELIA units 'remember' their style after washing, saving you hours of prep."
    },
    {
      title: "Feather-Light Fit",
      description: "Engineered for weightless, all-day wear. Our breathable cap construction ensures zero heaviness and reduced heat buildup."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-idelia-cream overflow-hidden border-t border-idelia-olive/10">
      {/* Container matched exactly to Navbar padding and max-width */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Editorial Image (Spans 5 columns) */}
        <div className="lg:col-span-5 relative aspect-3/4 overflow-hidden shadow-sm bg-idelia-cream group">
          <Image 
            src="/images/futurawig.webp" 
            alt="Detailed texture of IDELIA Japanese Silk"
            fill 
            className="object-cover transition-transform duration-3000ms ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority 
          />
          {/* Brand Overlay */}
          <div className="absolute inset-0 bg-idelia-olive/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"></div>
        </div>

        {/* Right Side: Content (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-4">
            <div className="flex items-center gap-4">
               <span className="w-12 h-px bg-idelia-olive"></span>
               <h2 className="text-[10px] uppercase tracking-[0.5em] text-idelia-dark/50 font-bold underline-offset-8">Innovation</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] text-idelia-dark tracking-tighter">
              The Futura <br />
              <span className="italic ml-8 md:ml-16 text-idelia-olive drop-shadow-sm">Experience</span>
            </h3>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="space-y-4 group">
                <div className="flex items-baseline gap-2">
                   <span className="font-serif text-idelia-olive italic text-xl">0{index + 1}</span>
                   <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-idelia-olive/10 pb-2 w-full group-hover:border-idelia-olive transition-colors duration-500 text-idelia-dark">
                     {pillar.title}
                   </h4>
                </div>
                <p className="text-sm text-idelia-dark/70 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className="group relative overflow-hidden border border-idelia-dark px-12 py-5 md:px-16 md:py-6 transition-all duration-700">
  <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] group-hover:text-idelia-cream transition-colors duration-500">
    Explore the Collection
  </span>
  <div className="absolute inset-0 bg-idelia-olive translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
</button>

          </div>
          
        </div>
        
      </div>
       
    </section>
    
  );
  
}