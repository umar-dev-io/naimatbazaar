'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '@/data/productsData';

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter(p => 
    p.searchKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-8" id="products">
      <h2 className="text-center text-primary text-xl md:text-2xl font-extrabold mb-4">Our Pure Organic Products</h2>

      <div className="max-w-[480px] mx-auto mb-6 relative">
        <input 
          type="text" 
          placeholder="Search products (e.g. Talbina, Oats, Skincare)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2.5 pl-4 pr-10 border-2 border-gray-200 rounded-full text-sm outline-none focus:border-primary"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}