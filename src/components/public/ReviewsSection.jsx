export default function ReviewsSection() {
  const reviews = [
    { text: "Rustom Power Talbina boht zabardast hai, energy restore rehti hai. Quality 100% pure hai!", author: "Usman Ali (Lahore)" },
    { text: "Oats with nuts ki packing aur taste boht acha tha. Fast delivery in Karachi!", author: "Tariq Mahmood (Karachi)" },
    { text: "Multicare Dermix use kiya, result original hai. Naimat Bazaar ki service boht trusted hai.", author: "Mrs. Bilal (Islamabad)" },
    { text: "Fitness Combo purchase kiya tha. Body shapify aur skin product dono high quality hain. Recommended!", author: "Hamza Khan (Rawalpindi)" },
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-10 bg-[#fdfdfd] p-6 rounded-xl border border-gray-100" id="reviews">
      <h2 className="text-center text-primary text-xl md:text-2xl font-extrabold mb-4">Satisfied Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <div className="text-[#FFD700] text-sm mb-1.5">★★★★★</div>
            <p className="text-xs text-gray-700 leading-relaxed mb-2">"{r.text}"</p>
            <div className="text-[11px] font-bold text-primary">— {r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}