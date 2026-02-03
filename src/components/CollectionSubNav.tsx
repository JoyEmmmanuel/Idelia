'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SERIES = [
  { name: 'All', slug: '' }, // Leads to /shop
  { name: 'Swiss', slug: 'swiss' },
  { name: 'Natasha', slug: 'natasha' },
  { name: 'Afronita', slug: 'afronita' },
  { name: 'Bombshell', slug: 'bombshell' }
]

export default function CollectionSubNav() {
  const pathname = usePathname()

  return (
    <nav className="w-full border-b border-idelia-olive/10 bg-idelia-cream/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center gap-8 md:gap-12">
        {SERIES.map((item) => {
          // Logic to determine if we are in /shop or a specific /collections/slug
          const href = item.slug === '' ? '/shop' : `/collections/${item.slug}`
          const isActive = pathname === href

          return (
            <Link 
              key={item.name} 
              href={href}
              className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-700 ${
                isActive ? 'text-idelia-olive font-bold' : 'text-idelia-dark/40 hover:text-idelia-olive'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}