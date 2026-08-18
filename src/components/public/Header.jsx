'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { headerNavData } from '@/data/HeroSectionData'; 

export default function Header({ cartCount = 0, setIsCartOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Deals", href: "#deals" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#home"
          className="flex items-center gap-2.5 text-decoration-none group"
        >
          <img
            src="/images/nblogo.svg"
            alt="Naimat Bazaar Logo"
            className="h-10 sm:h-11 w-auto rounded-full object-contain border border-gray-200 shadow-xs group-hover:border-[#8B0000] transition-colors"
          />
          <span className="text-lg sm:text-xl font-black text-[#8B0000] tracking-tight">
            Naimat Bazaar
          </span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex list-none gap-6 font-bold text-xs sm:text-sm text-gray-700 items-center">
          {navLinks.map((link, index) => (
            <motion.li key={index} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <a 
                href={link.href} 
                className="hover:text-[#8B0000] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B0000] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right Actions: Cart & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCartOpen(true)}
            className="bg-[#8B0000] hover:bg-[#a30000] text-white border-none px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-md transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            <motion.span 
              key={cartCount}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="bg-white text-[#8B0000] px-1.5 py-0.5 rounded-full text-[10px] font-black shadow-inner"
            >
              {cartCount}
            </motion.span>
          </motion.button>

          {/* Mobile Menu Hamburger Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#8B0000]" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3 font-bold text-sm text-gray-800">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 border-b border-gray-100 hover:text-[#8B0000] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}