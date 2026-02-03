import { client } from "@/src/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';
import CollectionSubNav from "@/src/components/CollectionSubNav";
// 1. Define the Product Interface to remove the 'any' error
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: string;
  image: string;
}

export default async function ShopAllPage() {
  // Fetch products with correct types
  const products: Product[] = await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      price,
      "slug": slug.current,
      "image": mainImage.asset->url
    }
  `);

  return (
    
    <main className="bg-idelia-cream min-h-screen">
      <CollectionSubNav/>
      <div className="max-w-7xl mx-auto pt-10">
        <header className="mb-24 flex flex-col items-center text-center">
          
          <span className="text-[10px] uppercase tracking-[0.8em] text-idelia-olive font-bold mb-4">
            Master Archive
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-idelia-dark tracking-tighter">
            All <span className="italic text-idelia-olive">Creations</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product: Product) => ( // Use Product type here
            <Link key={product._id} href={`/shop/${product.slug}`} className="group block">
              <div className="relative aspect-3/4 overflow-hidden bg-white mb-8 border border-idelia-olive/5 shadow-sm">
                <Image 
                  src={product.image || '/placeholder.jpg'} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-3000ms ease-out group-hover:scale-105"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-[12px] uppercase tracking-[0.4em] font-bold text-idelia-dark">
                  {product.name}
                </h3>
                <div className="w-6 h-px bg-idelia-olive/30 mx-auto"></div>
                <p className="text-sm font-sans text-idelia-dark/60 tracking-tight">
                  ₦{product.price?.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}