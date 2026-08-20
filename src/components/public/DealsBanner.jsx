
import { FaFire, FaTruck, FaGift, FaTag } from "react-icons/fa";

export default function DealsBanner() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-6" id="deals">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-5 text-center shadow-md">
        
        {/* Animated Title with Fire Icons */}
        <div className="text-lg font-extrabold text-accent mb-3 inline-flex items-center gap-2 animate-heartPump">
          <FaFire className="text-amber-400" />
          <span>SPECIAL OFFERS</span>
          <FaFire className="text-amber-400" />
        </div>

        {/* Clean Content List with Icons */}
        <ul className="text-sm opacity-95 space-y-2 max-w-xl mx-auto">
          <li className="flex items-center justify-center gap-2">
            <FaTruck className="text-amber-300 shrink-0" />
            <span><strong>Free Delivery:</strong> All Over Pakistan, Rs. 5000 Purchase per Hasil kreen.</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaGift className="text-amber-300 shrink-0" />
            <span><strong>Free Gift:</strong> koi bhi (03) Product ko Purchase kreen.</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaTag className="text-amber-300 shrink-0" />
            <span><strong>Wholesale Rates:</strong> 5kg product quantity ky sath.</span>
          </li>
        </ul>

      </div>
    </section>
  );
}



