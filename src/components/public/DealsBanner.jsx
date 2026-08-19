export default function DealsBanner() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-6" id="deals">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-4 text-center shadow-md">
        {/* Animated text with heart pump effect */}
        <div className="text-lg font-extrabold text-accent mb-1 inline-block animate-heartPump">
          🔥 UNIQUE OFFER FOR REAL CUSTOMERS
        </div>
        <div className="text-sm opacity-95">
          FREE DELIVERY All Over Pakistan, Rs.5000 Purchase per Hasil kreen.
          Free Gift, Kisi bhi (03) Product ko Purchase kreen.
          Real Wholesale Prices, 5kg product quantity per.

        </div>
      </div>
    </section>
  );
}