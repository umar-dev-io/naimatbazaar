export default function DealsBanner() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-6" id="deals">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-5 text-center shadow-md">
        {/* Animated Title */}
        <div className="text-lg font-extrabold text-accent mb-3 inline-block animate-heartPump">
          🔥 SPECIAL BUNDLE OFFER
        </div>

        {/* Clean Structured Content List */}
        <ul className="text-sm opacity-95 space-y-1.5 max-w-lg mx-auto">
          <li>• <strong>Free Delivery:</strong> All Over Pakistan, Rs. 5000 Purchase per Hasil kreen.</li>
          <li>• <strong>Free Gift:</strong> Kisi bhi (03) Product ko Purchase kreen.</li>
          <li>• <strong>Wholesale Rates:</strong> 5kg product quantity ky sath.</li>
          {/* Aap mazeed points yahan add kar sakte hain */}
        </ul>
      </div>
    </section>
  );
}