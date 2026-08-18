'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '@/context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, openBlog } = useShop();
  
  const defaultSize = product.sizes.find(s => s.default) || product.sizes[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize.size);
  const [origPrice, setOrigPrice] = useState(defaultSize.orig);
  const [salePrice, setSalePrice] = useState(defaultSize.sale);

  const handleSizeChange = (e) => {
    const sizeVal = e.target.value;
    const found = product.sizes.find(s => s.size === sizeVal);
    setSelectedSize(sizeVal);
    setOrigPrice(found.orig);
    setSalePrice(found.sale);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.12)" }}
      className="bg-white border border-gray-200 rounded-xl p-3.5 flex flex-col justify-between shadow-sm transition-shadow duration-300"
    >
      <div>
        {/* Product Image Container with Zoom effect on hover */}
        <div className="w-full h-[170px] bg-gray-50 rounded-lg overflow-hidden mb-2.5 relative">
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold z-10 shadow-sm"
          >
            {product.badge}
          </motion.span>
          <motion.img 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover" 
            loading="lazy" 
          />
        </div>

        <h3 className="text-sm font-extrabold text-gray-900 mb-1">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-2.5 min-h-[32px]">{product.target}</p>

        {/* Size Selector */}
        <div className="mb-2">
          <label className="text-[11px] font-bold text-gray-600 block mb-1">Select Size / Grammage:</label>
          <select 
            value={selectedSize} 
            onChange={handleSizeChange}
            className="w-full p-1.5 border border-gray-300 rounded text-xs bg-gray-50 mb-2 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer transition-all"
          >
            {product.sizes.map((s) => (
              <option key={s.size} value={s.size}>
                {s.size} - Rs. {s.sale.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {/* Animated Price Section */}
        <div className="mb-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={salePrice}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="line-through text-gray-500 text-xs mr-1.5">Rs. {origPrice.toLocaleString()}</span>
              <span className="text-primary text-base font-black">Rs. {salePrice.toLocaleString()}</span>
            </motion.div>
          </AnimatePresence>

          {product.isFreeDelivery && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] text-wa font-bold block mt-0.5"
            >
              🚚 FREE DELIVERY
            </motion.span>
          )}
        </div>

        {/* Why Best For You Button with Tap Animation */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => openBlog(product)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-1.5 rounded mb-1.5 border border-gray-200 cursor-pointer transition-colors"
        >
          📖 Q Apky Liye Best ha?
        </motion.button>

        {/* Add to Cart Button with Full Animation */}
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product.title, selectedSize, salePrice)}
          className="w-full bg-primary hover:bg-primary-dark text-white border-none py-2 rounded font-bold text-xs cursor-pointer shadow-sm transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}