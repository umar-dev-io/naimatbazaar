'use client';

import { motion } from 'framer-motion';

export default function BusinessOpportunity() {
  const whatsappNumber = "923000000000"; // Apna WhatsApp Number yahan update karein (without +)
  const message = encodeURIComponent("Hello Naimat Bazaar! Main apna home business shuru karne ke baaray mein consultation lena chahta/chahti hoon.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
        >
          {/* Background Accent */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-extrabold px-3 py-1 rounded-full">
              ✨ Ghar Baithy
            </span>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">
              💰 Kam Investment
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-full">
              🛡️ Zero Risk
            </span>
          </div>

          {/* Heading & Subheading */}
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 leading-tight">
            Apna Organic Wellness Business Shuru Karein!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium mb-8 max-w-3xl leading-relaxed">
            Zero Sourcing Tension! Raw material, complete business guide, aur 100% wholesale rates—sab aap ke darwaze par.
          </p>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="text-xl mb-2">🏷️</div>
              <h3 className="font-extrabold text-gray-900 text-sm mb-1">First 6 Months Pure Wholesale Rates</h3>
              <p className="text-xs text-gray-600">Shuruat mein maximum profit margin aap ka.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="text-xl mb-2">🔄</div>
              <h3 className="font-extrabold text-gray-900 text-sm mb-1">Complete Supply Chain</h3>
              <p className="text-xs text-gray-600">Raw material + trusted sources ki direct access.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-4 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="text-xl mb-2">🚚</div>
              <h3 className="font-extrabold text-gray-900 text-sm mb-1">All-Pakistan Doorstep Delivery</h3>
              <p className="text-xs text-gray-600">Material se packaging tak, sab delivered.</p>
            </motion.div>
          </div>

          {/* WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.113 1.518 5.85L.03 24l6.297-1.487a11.98 11.98 0 005.705 1.45h.005c6.646 0 12.03-5.385 12.03-12.032C24.062 5.385 18.677 0 12.031 0zm0 22.032h-.004a9.96 9.96 0 01-5.081-1.395l-.364-.216-3.778.892.909-3.685-.237-.377a9.96 9.96 0 01-1.528-5.219c0-5.502 4.477-9.979 9.981-9.979 5.503 0 9.98 4.477 9.98 9.979 0 5.503-4.477 9.98-9.978 9.98z"/>
              </svg>
              <span>Get Business Consultation</span>
            </motion.a>
            <span className="text-xs text-gray-500 font-medium">
              ⚡ Direct Chat with Naimat Bazaar Advisory
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
