'use client'
import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    { 
      q: "Is IDELIA hair human hair?", 
      a: "IDELIA specializes in premium Futura Blend—a high-tech, heat-resistant fiber engineered to mimic the protein structure of human hair for a natural finish that defies detection." 
    },
    { 
      q: "Can I style it with heat?", 
      a: "Yes. All IDELIA units are heat-safe up to 180°C. You can curl, straighten, and restyle your unit with the same freedom as raw human hair." 
    },
    { 
      q: "How long does delivery take?", 
      a: "Excellence takes time, but your wait is minimal. Lagos orders are delivered within 3-4 days, while interstate transit typically arrives within 5-7 business days." 
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-idelia-cream py-16 md:py-32 px-6 relative border-t border-idelia-olive/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* THE VISUAL SPINE */}
      

        <header className="text-center  mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.6em] text-idelia-dark/50 font-bold">Concierge</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-idelia-olive tracking-tighter italic">Peace of Mind</h3>
        </header>

        <div className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="group border-b border-idelia-olive/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left transition-all duration-500"
              >
                <span className={`text-sm md:text-base uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${openIndex === i ? 'text-idelia-olive' : 'text-idelia-dark'}`}>
                  {faq.q}
                </span>
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <div className={`absolute w-full h-px bg-idelia-olive transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}></div>
                  <div className={`absolute w-full h-px bg-idelia-olive transition-transform duration-500 ${openIndex === i ? 'rotate-180 opacity-0' : 'rotate-90'}`}></div>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="pb-8 text-sm md:text-base text-idelia-dark/70 leading-relaxed font-light max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SPINE */}
       
      </div>
    </section>
  );
}