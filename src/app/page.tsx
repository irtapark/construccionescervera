"use client";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const promoVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setStartTime = (video: HTMLVideoElement | null) => {
      if (video) video.currentTime = 18;
    };
    setStartTime(heroVideoRef.current);
    setStartTime(aboutVideoRef.current);
    setStartTime(promoVideoRef.current);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#333333] selection:bg-[#003366]/10">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0a0a0b]/80 z-10" />
          <video 
            ref={heroVideoRef}
            autoPlay muted loop playsInline 
            onLoadedData={(e) => (e.currentTarget.currentTime = 18)}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            poster="/hero-fallback.jpg"
          >
            <source src="/venta.mp4#t=18" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border border-white/20">
              Estilo de vida mediterráneo
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.9] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Tu hogar frente <br /> al mar en Benicarló
            </h1>
            <p className="text-base md:text-xl mb-10 md:text-12 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Viviendas exclusivas de 2 y 3 dormitorios a solo 50 metros de la costa. Calidad, diseño y una ubicación inmejorable desde 143.000 €.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <a href="#promociones" className="w-full sm:w-auto group px-8 py-4 rounded-xl bg-[#C5A059] text-white font-bold text-lg hover:bg-[#b38f4d] transition-all shadow-xl flex justify-center items-center gap-2">
                Explorar Promociones
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacto" className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[#003366] transition-all backdrop-blur-sm flex justify-center items-center">
                Solicitar Información
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-30 block">
          <div className="w-6 h-10 rounded-full border-2 border-[#003366] flex justify-center p-1">
            <div className="w-1 h-2 bg-[#003366] rounded-full" />
          </div>
        </div>
      </section>

      {/* --- PROMOCIONES SECTION --- */}
      <section id="promociones" className="py-20 md:py-32 px-4 md:px-6 bg-[#f4f4f4] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
            <div>
              <span className="text-[#C5A059] font-bold tracking-widest uppercase text-[10px] md:text-sm mb-2 md:mb-4 block text-center md:text-left">Catálogo Exclusivo</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#003366] text-center md:text-left">Últimas Unidades</h2>
            </div>
            <div className="w-24 h-1 bg-[#C5A059] mb-4" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-[#003366]/5 hover:border-[#003366]/10 transition-all duration-700 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-full overflow-hidden">
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10 glass px-4 md:px-6 py-2 md:py-2.5 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm text-[#003366]">
                  ¡Disponible ahora!
                </div>
                <video 
                  ref={promoVideoRef}
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                >
                  <source src="/venta.mp4#t=18" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight text-[#003366]">Edificio Brisa del Mar</h3>
                <p className="text-[#666666] mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  Viviendas de diseño moderno con amplias terrazas y vistas despejadas. Situadas en una zona tranquila de Benicarló con todos los servicios a tu alcance.
                </p>
                
                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  <FeatureItem text="2 y 3 Dormitorios Premium" />
                  <FeatureItem text="A 50m de la playa" />
                  <FeatureItem text="Eficiencia Energética Clase A" />
                </div>
                
                <div className="flex items-baseline gap-3 mb-8 md:mb-10">
                  <span className="text-xs md:text-sm text-[#666666] font-bold uppercase tracking-wider">Desde</span>
                  <span className="text-3xl md:text-4xl font-bold text-[#003366]">143.000 €</span>
                </div>
                
                <a href="#contacto" className="w-full bg-[#003366] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#002244] transition-all shadow-xl flex justify-center items-center gap-3">
                  Solicitar Dossier
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* --- NOSOTROS SECTION --- */}
      <section id="nosotros" className="py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter leading-tight text-[#003366]">Construyendo sueños <br /> en la costa</h2>
              <p className="text-[#666666] text-lg md:text-xl mb-8 md:mb-8 leading-relaxed">
                En Construcciones Cervera nos dedicamos a la creación de espacios únicos. Nuestra filosofía se basa en la calidad constructiva, el compromiso con el cliente y la elección de las mejores ubicaciones.
              </p>
              <div className="grid grid-cols-2 gap-8 md:gap-12 mb-6 md:mb-10">
                <StatItem number="+25" label="Años de historia" />
                <StatItem number="+500" label="Hogares entregados" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative w-full"
            >
              <div className="absolute -inset-4 bg-[#003366]/5 blur-[60px] md:blur-[100px] rounded-full" />
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-[#003366]/10 aspect-[4/3] w-full">
                <video 
                  ref={aboutVideoRef}
                  autoPlay muted loop playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="/nosotros.mp4#t=18" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO SECTION --- */}
      <section id="contacto" className="py-20 md:py-32 px-4 md:px-6 bg-[#f4f4f4] border-t border-[#003366]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-10 tracking-tighter text-[#003366]">¿Hablamos de <br /> tu futuro?</h2>
              <p className="text-[#666666] text-lg md:text-xl mb-12 md:mb-16 max-w-md">
                Estamos aquí para resolver tus dudas y ayudarte a encontrar tu próxima vivienda en el Mediterráneo.
              </p>
              
              <div className="space-y-8 md:space-y-10">
                <ContactInfo icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#C5A059]"/>} title="Oficina Central" detail="Calle Alcalá de Xivert 77, Local 1, Benicarló" />
                <ContactInfo icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-[#C5A059]"/>} title="Teléfono" detail="964 471 174" />
                <ContactInfo icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-[#C5A059]"/>} title="Correo electrónico" detail="construccionescervera@hotmail.com" />
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-[#003366]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#003366]/5 blur-[100px] -mr-32 -mt-32" />
              <form className="relative z-10 space-y-6 md:space-y-8">
                <div className="space-y-6 md:space-y-8">
                  <div className="space-y-2 md:space-y-3">
                    <label htmlFor="nombre" className="text-xs font-bold text-[#666666] uppercase tracking-widest">Nombre</label>
                    <input id="nombre" type="text" className="w-full bg-[#f4f4f4] border border-[#003366]/10 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all text-[#333333] text-sm md:text-base" placeholder="Tu nombre" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="email" className="text-xs font-bold text-[#666666] uppercase tracking-widest">Email</label>
                      <input id="email" type="email" className="w-full bg-[#f4f4f4] border border-[#003366]/10 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all text-[#333333] text-sm md:text-base" placeholder="tu@email.com" required />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label htmlFor="telefono" className="text-xs font-bold text-[#666666] uppercase tracking-widest">Teléfono</label>
                      <input id="telefono" type="tel" className="w-full bg-[#f4f4f4] border border-[#003366]/10 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all text-[#333333] text-sm md:text-base" placeholder="Tu teléfono" required />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label htmlFor="mensaje" className="text-xs font-bold text-[#666666] uppercase tracking-widest">Mensaje</label>
                  <textarea id="mensaje" rows={4} className="w-full bg-[#f4f4f4] border border-[#003366]/10 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-[#C5A059] focus:border-transparent outline-none transition-all text-[#333333] text-sm md:text-base" placeholder="¿En qué podemos ayudarte?" required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#003366] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-[#002244] transition-all shadow-xl active:scale-95">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 md:py-16 px-6 border-t border-[#003366]/5 text-center text-[#666666] bg-white">
        <Image src="/logo-blanco.png" alt="Logo Construcciones Cervera" width={140} height={40} className="mx-auto mb-6 md:mb-8 brightness-0 opacity-40 w-32 md:w-40" />
        <p className="text-[10px] md:text-sm font-medium">© {new Date().getFullYear()} Construcciones Cervera S.L. — Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 md:gap-4 group">
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center border border-[#C5A059]/20 group-hover:bg-[#C5A059] transition-colors duration-500">
        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#C5A059] group-hover:text-white transition-colors" />
      </div>
      <span className="text-sm md:text-[#666666] font-medium">{text}</span>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-5xl font-bold text-[#003366] mb-1 md:mb-2 tracking-tighter">{number}</div>
      <div className="text-[#666666] font-bold uppercase tracking-widest text-[10px] md:text-xs">{label}</div>
    </div>
  );
}

function ContactInfo({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-4 md:gap-6 group">
      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white shadow-lg border border-[#003366]/5 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div>
        <div className="text-[#666666] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-0.5 md:mb-1">{title}</div>
        <div className="text-[#003366] text-base md:text-lg font-semibold">{detail}</div>
      </div>
    </div>
  );
}
