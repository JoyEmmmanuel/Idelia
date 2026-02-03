"use client";
import Link from "next/link"; // Required for Next.js optimization
import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-idelia-cream/90 backdrop-blur-xl border-b border-idelia-olive/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between relative">
        
        {/* LEFT: MOBILE MENU & DESKTOP NAV */}
        <div className="flex items-center">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 -ml-2 text-idelia-olive"
          >
            <Menu strokeWidth={1.2} size={22} />
          </motion.button>

          <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.4em] font-sans  text-idelia-dark/70 ">
            {/* Swapped <a> for <Link> for performance */}
            <Link href="/shop" className="hover:text-idelia-olive transition-colors hover:opacity-50">Shop All</Link>
            <Link href="/#Collections"  className="hover:text-idelia-olive transition-colors hover:opacity-50">Collections</Link>
          </div>
        </div>

        {/* CENTER: LOGO (Now SEO & Performance Optimized) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Link href="/" className="font-serif text-xl md:text-3xl italic text-idelia-olive tracking-tighter">
            IDELIA
          </Link>
        </motion.div>

        {/* RIGHT: ACTION ICONS */}
        <div className="flex items-center space-x-2 md:space-x-6 font-light ">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-2 text-idelia-olive"
          >
            <Search strokeWidth={1.2} size={20}  className="hover:opacity-50"/>
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="hidden md:block p-2 text-idelia-olive"
          >
            <User strokeWidth={1.2} size={20}  className="hover:opacity-50"/>
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="relative p-2 text-idelia-olive group"
          >
            <ShoppingBag strokeWidth={1.2} size={20}  className="hover:opacity-50"/>
            <span className="absolute top-1.5 right-1.5 bg-idelia-olive text-idelia-cream text-[8px] w-3.5 h-3.5 rounded-none flex items-center justify-center font-bold tracking-tighter">
              0
            </span>
          </motion.button>
        </div>

      </div>
    </nav>
  );
}