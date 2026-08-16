'use client';
import { useState } from 'react';
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
    <div className="bg-white border border-gray-200 rounded-xl p-3.5 flex flex-col justify-between shadow-sm">
      <div>
        <div className="w-full h-[170px] bg-gray-50 rounded-lg overflow-hidden mb-2.5 relative">
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded font-bold z-10">
            {product.badge}
          </span>
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <h3 className="text-sm font-extrabold text-gray-900 mb-1">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-2.5 min-h-[32px]">{product.target}</p>

        <div className="mb-2">
          <label className="text-[11px] font-bold text-gray-600 block mb-1">Select Size / Grammage:</label>
          <select 
            value={selectedSize} 
            onChange={handleSizeChange}
            className="w-full p-1.5 border border-gray-300 rounded text-xs bg-gray-50 mb-2"
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
        <div className="mb-3">
          <span className="line-through text-gray-500 text-xs mr-1.5">Rs. {origPrice.toLocaleString()}</span>
          <span className="text-primary text-base font-black">Rs. {salePrice.toLocaleString()}</span>
          {product.isFreeDelivery && (
            <span className="text-[10px] text-wa font-bold block">🚚 FREE DELIVERY</span>
          )}
        </div>

        <button 
          onClick={() => openBlog(product)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-1.5 rounded mb-1.5 border border-gray-200 cursor-pointer"
        >
          📖 Q Apky Liye Best ha?
        </button>

        <button 
          onClick={() => addToCart(product.title, selectedSize, salePrice)}
          className="w-full bg-primary hover:bg-primary-dark text-white border-none py-2 rounded font-bold text-xs cursor-pointer transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}