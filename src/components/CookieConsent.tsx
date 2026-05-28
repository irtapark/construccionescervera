"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-sm z-50"
        >
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-[#003366]/10 relative">
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <h4 className="text-[#003366] font-bold mb-2">Uso de Cookies</h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico y personalizar el contenido.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#003366] text-white py-2 rounded-xl text-sm font-bold hover:bg-[#002244] transition-colors"
                  >
                    Aceptar
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-gray-100 text-[#003366] py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
