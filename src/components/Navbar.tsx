"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-xl px-6 py-2" : "px-0"
        }`}>
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo-blanco.png" 
                  alt="Construcciones Cervera" 
                  width={140} 
                  height={40} 
                  className={`transition-all duration-500 ${scrolled ? "brightness-0" : "brightness-100"}`}
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/" scrolled={scrolled}>Inicio</NavLink>
              <NavLink href="#promociones" scrolled={scrolled}>Promociones</NavLink>
              <NavLink href="#nosotros" scrolled={scrolled}>Nosotros</NavLink>
              <Link 
                href="#contacto" 
                className={`ml-4 px-6 py-2 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95 ${
                  scrolled 
                    ? "bg-[#003366] text-white hover:bg-[#002244]" 
                    : "bg-white text-[#003366] hover:bg-zinc-100"
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode, scrolled: boolean }) {
  return (
    <Link 
      href={href} 
      className={`px-4 py-2 text-sm font-bold transition-colors relative group ${
        scrolled ? "text-[#333333] hover:text-[#003366]" : "text-white hover:text-white/80"
      }`}
    >
      {children}
      <span className={`absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
        scrolled ? "bg-[#C5A059]" : "bg-white"
      }`} />
    </Link>
  );
}
