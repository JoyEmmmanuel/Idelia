import { client } from "@/src/sanity/lib/client";
import CollectionSubNav from "@/src/components/CollectionSubNav";
import CheckoutForm from '@/src/components/CheckoutForm';
import { notFound } from "next/navigation";
import Image from "next/image";

// 1. Define Props for Next.js 15 (params is a Promise)
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  // 2. Await the params (Required in the latest Next.js version)
  const { slug } = await params;

  // 3. Fetch data from Sanity with the slug variable provided
  const product = await client.fetch(`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      "image": mainImage.asset->url,
      careInstructions,
      capConstruction
    }
  `, { slug });

  // 4. Elegant 404 handling
  if (!product) {
    notFound();
  }

  return (
    <main className="bg-idelia-cream min-h-screen">
      <CollectionSubNav />

      <div className="max-w-7xl mx-auto p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* VISUAL PRESENTATION */}
          <div className="relative aspect-4/5 bg-white overflow-hidden border border-idelia-olive/5 shadow-sm">
            <Image 
              src={product.image || '/placeholder.jpg'} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* EDITORIAL DETAILS */}
          <div className="space-y-12">
            <header className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.8em] text-idelia-olive font-bold">The Archive</span>
              <h1 className="text-5xl md:text-6xl font-serif italic text-idelia-dark tracking-tighter">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-idelia-dark/80">₦{product.price.toLocaleString()}</p>
            </header>

            <div className="prose prose-sm font-light text-idelia-dark/70 leading-relaxed tracking-wide">
              <p>{product.description}</p>
            </div>

            {/* SPECS SECTION */}
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-idelia-olive/10">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-idelia-olive font-bold mb-2">Construction</h4>
                <p className="text-xs text-idelia-dark/60 font-light">{product.capConstruction || 'HD Lace Base'}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-idelia-olive font-bold mb-2">Composition</h4>
                <p className="text-xs text-idelia-dark/60 font-light">Silken Futura Fiber</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACQUISITION SECTION */}
        <div className="mt-32 pt-20 border-t border-idelia-olive/10">
          <div className="max-w-xl mx-auto bg-white p-10 md:p-16 shadow-sm border border-idelia-olive/5">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-[0.8em] text-idelia-olive font-bold block mb-4">
                Secure Acquisition
              </span>
              <h3 className="font-serif italic text-3xl text-idelia-dark">Finalize Selection</h3>
            </div>

            <CheckoutForm 
              cartItems={[
                {
                  id: product._id,
                  name: product.name,
                  price: product.price,
                  image: product.image || '',
                  quantity: 1
                }
              ]} 
            />

            <p className="mt-12 text-center text-[9px] uppercase tracking-[0.3em] text-idelia-dark/40">
              Hand-packed and dispatched from the IDELIA Atelier
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}