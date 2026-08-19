'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  BadgePercent, 
  Boxes, 
  Truck, 
  MessageCircle
} from 'lucide-react';

export default function BusinessOpportunity() {
  // Apna official WhatsApp number yahan update karein (without +)
  const whatsappNumber = "923000000000"; 
  const message = encodeURIComponent("Hello Naimat Bazaar! Main apna home business shuru karne ke baaray mein consultation lena chahta/chahti hoon.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200 relative overflow-hidden"
        >
          {/* Brand Ambient Glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Badges Bar */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Sparkles size={14} /> Ghar Baithy
            </span>
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <TrendingUp size={14} /> Kam Investment
            </span>
            <span className="bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <ShieldCheck size={14} /> Zero Risk
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight tracking-tight">
            Apna Organic Wellness Business Shuru Karein!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium mb-8 max-w-3xl leading-relaxed">
            Zero Sourcing Tension! Raw material, complete business guide, aur 100% wholesale rates—sab aap ke darwaze par.
          </p>

          {/* Feature Cards Grid (Matching ProductCard Hover Architecture) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.12)" }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3.5">
                  <BadgePercent size={22} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1.5">First 6 Months Pure Wholesale Rates</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Shuruat mein maximum profit margin aap ka.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.12)" }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3.5">
                  <Boxes size={22} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1.5">Complete Supply Chain</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Raw material + trusted sources ki direct access.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.12)" }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3.5">
                  <Truck size={22} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1.5">All-Pakistan Doorstep Delivery</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Material se packaging tak, sab delivered.</p>
              </div>
            </motion.div>
          </div>

          {/* Action Call Area */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-gray-100">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <MessageCircle size={20} className="fill-current" />
              <span>Get Business Consultation</span>
            </motion.a>
            <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
              ⚡ Direct Chat with Naimat Bazaar Advisory
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
