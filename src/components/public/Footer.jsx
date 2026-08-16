export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#dddddd] mt-12 py-8 px-4 text-xs">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <h4 className="text-accent text-sm font-bold mb-2.5">Naimat Bazaar</h4>
          <p className="leading-relaxed text-[#aaa] text-[11px]">100% Khaalis Herbal Wellness & Food Products. Har Dana Shifa Ka Khazana. Pure Organic taste and health delivered straight to your door across Pakistan.</p>
        </div>
        <div>
          <h4 className="text-accent text-sm font-bold mb-2.5">Quick Navigation</h4>
          <ul className="space-y-1.5 list-none p-0 text-[11px]">
            <li><a href="#home" className="hover:text-accent">Home</a></li>
            <li><a href="#deals" className="hover:text-accent">Special Deals</a></li>
            <li><a href="#products" className="hover:text-accent">Product Catalog</a></li>
            <li><a href="#reviews" className="hover:text-accent">Customer Reviews</a></li>
            <li><a href="#faq" className="hover:text-accent">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-accent text-sm font-bold mb-2.5">Contact & Orders</h4>
          <p className="text-[11px]">📍 Lahore, Punjab, Pakistan</p>
          <p className="mt-1 text-[11px]">📞 Phone/WhatsApp: 03258060699</p>
          <p className="mt-1 text-[11px]">🚚 Cash On Delivery Available</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-4 text-center text-[10px] text-gray-500">
        <p>© 2026 Naimat Bazaar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}