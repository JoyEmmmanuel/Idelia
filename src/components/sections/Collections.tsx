"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
  { id: "swiss", title: "Swiss Collection", subtitle: "Elite HD Lace", image: "/images/model (4).webp" }, 
  { id: "natasha", title: "Natasha Collection", subtitle: "Silken Futura", image: "/images/model (2).webp" },
  { id: "afronita", title: "Afronita Collection", subtitle: "Textured Perfection", image: "/images/model (5).webp" },
  { id: "dbombshell", title: "Bombshell Collection", subtitle: "Ultra Volume", image: "/images/model (1).webp" },
];

export default function Collections() {
  return (
    <section className="py-24 md:py-40 bg-idelia-cream border-t border-idelia-olive/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* HEADER */}
       <header className="mb-16 md:mb-24 flex flex-col items-center text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center leading-none"
  >
    <span className="text-idelia-dark text-[9px] md:text-[11px] uppercase tracking-[0.8em] font-bold mb-4 opacity-50">
      Shop By
    </span>
    <h2 className="text-idelia-dark font-serif text-4xl md:text-7xl tracking-tighter leading-tight">
      The <span className="italic text-idelia-olive">Collections</span>
    </h2>
  </motion.div>
</header>

        {/* REFINED GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-24 w-full">
          {collections.map((item, index) => (
            <Link href={`/collections/${item.id}`} key={item.id}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4.5] overflow-hidden mb-6 bg-idelia-olive/5 shadow-sm">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-3000ms ease-out group-hover:scale-110"
                    loading="lazy" // Lightweight rule: only Hero is priority
                  />
                  
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-idelia-dark/0 group-hover:bg-idelia-dark/5 transition-colors duration-1000" />
                  
                  {/* EXPLORE BUTTON */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] 
                    opacity-100 md:opacity-0 md:group-hover:opacity-100 
                    translate-y-0 md:translate-y-4 md:group-hover:translate-y-0
                    transition-all duration-700 ease-out">
                    <button className="w-full bg-idelia-cream/90 backdrop-blur-md text-idelia-olive py-3 rounded-none text-[9px] uppercase tracking-[0.4em] font-bold border border-idelia-olive/10">
                      Explore
                    </button>
                  </div>
                </div>

                {/* Typography */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-serif italic text-idelia-olive/60">0{index + 1}</span>
                    <div className="h-px w-6 bg-idelia-olive/20" />
                  </div>
                  <h3 className="text-idelia-dark font-serif text-lg md:text-2xl leading-tight">
                    {item.title.split(' ')[0]} <span className="italic text-idelia-olive/80">{item.title.split(' ')[1]}</span>
                  </h3>
                  <p className="text-idelia-dark/40 font-sans text-[8px] md:text-[10px] uppercase tracking-[0.3em]">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
      
      </div>
    </section>
  );
}