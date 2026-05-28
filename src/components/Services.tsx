import { motion } from "framer-motion";
import { Home, Hammer, Wrench, Key } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Promoción Inmobiliaria",
    description: "Desarrollamos proyectos residenciales en ubicaciones prime, cuidando cada detalle desde el diseño hasta la entrega de llaves.",
    icon: Home,
  },
  {
    id: 2,
    title: "Construcción Obra Nueva",
    description: "Construimos tu vivienda a medida con materiales de primera calidad, eficiencia energética y cumplimiento de plazos.",
    icon: Hammer,
  },
  {
    id: 3,
    title: "Reformas Integrales",
    description: "Transformamos espacios existentes para adaptarlos a tus nuevas necesidades, dándoles una nueva vida con estilo moderno.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Venta y Alquiler",
    description: "Gestionamos la comercialización de nuestras promociones con un servicio de asesoramiento personalizado y transparente.",
    icon: Key,
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 px-4 md:px-6 bg-white relative z-10 border-t border-[#003366]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#C5A059] font-bold tracking-widest uppercase text-[10px] md:text-sm mb-2 md:mb-4 block">Lo que hacemos</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#003366]">Nuestros Servicios</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group p-8 rounded-[2rem] bg-[#f4f4f4] hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#003366]/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 text-[#C5A059] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-4 group-hover:text-[#C5A059] transition-colors">{service.title}</h3>
                <p className="text-[#666666] leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
