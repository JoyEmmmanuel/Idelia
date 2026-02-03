import { client } from "@/src/sanity/lib/client"
import Image from 'next/image'
import CheckoutForm from '@/src/components/CheckoutForm'

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  const { slug } = await params;

  // The query includes _id to provide a unique key for the cart
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    price,
    description,
    "image": mainImage.asset->url,
    careInstructions,
    capConstruction,
    status
  }`, { slug })

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-idelia-cream">
        <h1 className="text-xl font-serif text-idelia-olive">Unit not found.</h1>
      </div>
    )
  }

  return (
    <main className="max-w-7xl mx-auto p-6 lg:p-12 bg-idelia-cream min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* LEFT: Editorial Product Image */}
        <section className="relative">
          <div className="relative md:sticky md:top-12 w-full aspect-4/5 overflow-hidden bg-white shadow-sm border border-idelia-olive/10">
              {product.image ? (
                <Image 
                  src={product.image} 
                  alt={product.name || "IDELIA Wig Unit"} 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-idelia-olive/40">
                  <p className="font-serif italic tracking-widest uppercase text-[10px]">Image Coming Soon</p>
                </div>
              )}
          </div>
        </section>

        {/* RIGHT: Product Info & Atelier Experience */}
        <section className="space-y-12 py-4">
          <header className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-serif uppercase tracking-tighter leading-tight text-idelia-dark">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-idelia-olive"></span>
              <p className="text-2xl font-light tracking-tighter text-idelia-dark">
                ₦{product.price?.toLocaleString() || "0"}
              </p>
            </div>
          </header>

          <div className="prose prose-sm text-idelia-dark/80 leading-relaxed font-light whitespace-pre-line">
            <p>{product.description}</p>
          </div>

          {/* Luxury Accordions */}
          <div className="border-t border-idelia-olive/10">
            <details className="group py-6 border-b border-idelia-olive/10">
              <summary className="flex justify-between items-center cursor-pointer font-medium uppercase text-[10px] tracking-[0.3em] text-idelia-olive">
                The Futura Blend Detail 
                <span className="group-open:rotate-180 transition-transform duration-500">↓</span>
              </summary>
              <div className="pt-6 text-xs text-idelia-dark/60 leading-relaxed font-light">
                {product.careInstructions || "Heat resistant up to 180°C. Engineered to mimic the natural cuticle and movement of human hair."}
              </div>
            </details>

            <details className="group py-6 border-b border-idelia-olive/10">
              <summary className="flex justify-between items-center cursor-pointer font-medium uppercase text-[10px] tracking-[0.3em] text-idelia-olive">
                Cap & Construction 
                <span className="group-open:rotate-180 transition-transform duration-500">↓</span>
              </summary>
              <div className="pt-6 text-xs text-idelia-dark/60 leading-relaxed font-light">
                {product.capConstruction || "HD Lace, Glueless fit with adjustable security straps for a seamless silhouette."}
              </div>
            </details>
          </div>

          {/* THE CHECKOUT EXPERIENCE */}
          <div className="mt-16 bg-white p-8 md:p-12 shadow-sm border border-idelia-olive/5">
             <h3 className="text-[10px] uppercase font-bold mb-10 tracking-[0.4em] border-b border-idelia-olive/10 pb-6 text-idelia-olive">
               Secure Your Selection
             </h3>
             <CheckoutForm 
                cartItems={[
                  {
                    id: product._id || slug, 
                    name: product.name,
                    price: product.price,
                    image: product.image || '', 
                    quantity: 1
                  }
                ]} 
              />
             <p className="mt-8 text-center text-[8px] uppercase tracking-[0.2em] text-idelia-dark/40">
               Complimentary atelier delivery on all premium units
             </p>
          </div>
        </section>
      </div>
    </main>
  )
}