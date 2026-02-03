import { client } from "@/src/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';
import CollectionSubNav from "@/src/components/CollectionSubNav";

// THE ATELIER TYPE DEFINITION
interface CollectionProduct {
  _id: string;
  name: string;
  subtitle?: string;
  price: number;
  slug: string;
  image: string;
}

export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  const products: CollectionProduct[] = await client.fetch(`
    *[_type == "product" && series == $slug] {
      _id,
      name,
      subtitle,
      price,
      "slug": slug.current,
      "image": mainImage.asset->url
    }
  `, { slug });

  return (
    <main className="bg-idelia-cream min-h-screen">
      <CollectionSubNav />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <header className="mb-24 flex flex-col items-center text-center">
        
          <span className="text-[10px] uppercase tracking-[0.8em] text-idelia-dark/50 font-bold mb-4">
            Atelier Archive
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-idelia-dark tracking-tighter leading-none capitalize">
            {slug} <span className="italic text-idelia-olive">Series</span>
          </h1>
        </header>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {products.map((unit) => (
              <Link href={`/shop/${unit.slug}`} key={unit._id} className="group block">
                <div className="relative aspect-3/4 overflow-hidden bg-white mb-8 border border-idelia-olive/5 shadow-sm">
                  <Image 
                    src={unit.image || '/placeholder.jpg'} 
                    alt={unit.name} 
                    fill 
                    className="object-cover transition-transform duration-3000ms ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="space-y-3 text-center">
                  <h3 className="text-[12px] uppercase tracking-[0.4em] font-bold text-idelia-dark leading-tight">
                    {unit.name} {unit.subtitle && <span className="italic text-idelia-olive font-serif normal-case block md:inline opacity-70">{unit.subtitle}</span>}
                  </h3>
                  <div className="w-6 h-px bg-idelia-olive/30 mx-auto"></div>
                  <p className="text-sm font-sans text-idelia-dark/60 tracking-tight">
                    ₦{unit.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-serif italic text-idelia-dark/40">The archive is currently being curated.</p>
          </div>
        )}
      </div>
    </main>
  );
}