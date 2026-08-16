'use client';
import { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "Delivery charges kitne hain?", a: "Lahore ke liye Rs. 250, Lahore se bahar Rs. 350 standard charges hain. Lekin Rs. 4,000 se zyaada ke order par Delivery FREE hai!" },
    { q: "Order kitne din mein deliver hota hai?", a: "Lahore mein 24-48 ghante, aur baaqi cities mein 2 se 4 working days mein Cash on Delivery pohnch jata hai." },
    { q: "Payment ka kya tarika hai?", a: "Aap parcel received hone par Cash on Delivery (COD) de sakte hain." }
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-4 mt-10" id="faq">
      <h2 className="text-center text-primary text-xl md:text-2xl font-extrabold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2.5">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="p-3.5 font-bold text-xs md:text-sm bg-gray-50 flex justify-between items-center cursor-pointer"
            >
              {faq.q} <span>{openIndex === i ? '−' : '+'}</span>
            </div>
            {openIndex === i && (
              <div className="p-3.5 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}