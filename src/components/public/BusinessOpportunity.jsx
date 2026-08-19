
'use client';

import { motion } from 'framer-motion';

export default function BusinessOpportunity() {
  // Replace with your official WhatsApp number (e.g., 923001234567)
  const whatsappNumber = '923000000000';
  const whatsappMessage = encodeURIComponent(
    'Hi Naimat Bazaar, I want to get business consultation for starting my own organic wellness business.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-12 bg-gradient-to-b from-amber-50/50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-amber-200/80 rounded-2xl p-6 md:p-10 shadow-lg relative"
        >
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 text-center">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300/60">
              ✨ Ghar Baithy
            </span>
            <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300/60">
              💼 Kam Investment
            </span>
            <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full border border-blue-300/60">
              🛡️ Zero Risk
            </span>
          </div>

          {/* Main Headline & Subheadline */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
              Apna Organic Wellness Business Shuru Karein!
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
              Zero Sourcing Tension! Raw material, complete business guide, aur 100% wholesale rates—sab aap ke darwaze par.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">🏷️</div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                First 6 Months Pure Wholesale Rates
              </h3>
              <p className="text-xs text-gray-600">
                Shuruat mein maximum profit margin aap ka.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                Complete Supply Chain
              </h3>
              <p className="text-xs text-gray-600">
                Raw material + trusted sources ki direct access.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">📦</div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                All-Pakistan Doorstep Delivery
              </h3>
              <p className="text-xs text-gray-600">
                Material se packaging tak, sab delivered.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              <span>Get Business Consultation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
