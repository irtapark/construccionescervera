"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        scrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
          scrolled || isOpen ? "glass shadow-xl px-4 md:px-6 py-2" : "px-0"
        }`}>
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo-blanco.png" 
                  alt="Construcciones Cervera" 
                  width={140} 
                  height={40} 
                  className={`transition-all duration-500 w-32 md:w-40 ${scrolled || isOpen ? "brightness-0" : "brightness-100"}`}
                />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/" scrolled={scrolled}>Inicio</NavLink>
              <NavLink href="#promociones" scrolled={scrolled}>Promociones</NavLink>
              <NavLink href="#nosotros" scrolled={scrolled}>Nosotros</NavLink>
              <Link 
                href="#contacto" 
                className={`ml-4 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95 ${
                  scrolled 
                    ? "bg-[#003366] text-white hover:bg-[#002244]" 
                    : "bg-white text-[#003366] hover:bg-zinc-100"
                }`}
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${scrolled || isOpen ? "text-[#003366]" : "text-white"}`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-4 py-6 border-t border-[#003366]/10 mt-2">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-lg px-2">Inicio</Link>
                  <Link href="#promociones" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-lg px-2">Promociones</Link>
                  <Link href="#nosotros" onClick={() => setIsOpen(false)} className="text-[#333333] font-bold text-lg px-2">Nosotros</Link>
                  <Link 
                    href="#contacto" 
                    onClick={() => setIsOpen(false)}
                    className="bg-[#003366] text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg"
                  >
                    Contacto
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
