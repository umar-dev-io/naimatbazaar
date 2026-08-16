export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[rgba(139,0,0,0.05)] to-[rgba(212,175,55,0.08)] py-10 px-4 text-center border-b border-gray-100" id="home">
      <div className="max-w-[1100px] mx-auto">
        <span className="inline-block bg-white text-primary px-3 py-1 rounded-full text-xs font-bold border border-red-900/15 mb-2.5">
          🌿 100% Khaalis & Pure Organic
        </span>
        <h1 className="text-4xl md:text-5xl text-primary mb-1.5 font-black">Naimat Bazaar</h1>
        <div className="text-accent bg-primary-dark inline-block px-3.5 py-1 rounded font-bold text-base md:text-lg mb-3.5">
          Har Dana Shifa Ka Khazana
        </div>
        <p className="text-sm md:text-base text-gray-600 max-w-[650px] mx-auto mb-5 leading-relaxed">
          100% Khaalis Herbal Wellness & Food Products — Bina Milawat, Pakistan Bhar Mein Fast Cash On Delivery.
        </p>
        <a href="#products" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-primary-dark transition-colors">
          Explore Products →
        </a>
      </div>
    </section>
  );
}