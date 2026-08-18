'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviewsData } from '@/data/LiveResultsSectionData';

export default function ReviewsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Handle responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(4); // Desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure currentIndex stays within valid bounds when screen size changes
  useEffect(() => {
    if (currentIndex > reviewsData.length - cardsPerView) {
      setCurrentIndex(Math.max(0, reviewsData.length - cardsPerView));
    }
  }, [cardsPerView, currentIndex]);

  const visibleCards = reviewsData.slice(currentIndex, currentIndex + cardsPerView);

  const nextSlide = () => {
    if (currentIndex < reviewsData.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10">
          Dekhein Naimat Bazaar Ky Live Results
        </h2>

        {/* Carousel Container */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0} 
            className="p-2 md:p-3 bg-black text-white rounded-full disabled:opacity-30 z-10 shrink-0"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-black text-white rounded-2xl overflow-hidden cursor-pointer shadow-xl relative"
                  onClick={() => setActiveVideo(item.videoUrl)}
                >
                  <img src={item.thumb} alt={item.title} className="w-full h-48 object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center animate-pulse">
                      <Play className="fill-white text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button 
            onClick={nextSlide} 
            disabled={currentIndex >= reviewsData.length - cardsPerView} 
            className="p-2 md:p-3 bg-black text-white rounded-full disabled:opacity-30 z-10 shrink-0"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" 
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white" 
              onClick={() => setActiveVideo(null)}
            >
              <X size={32}/>
            </button>
            <iframe 
              src={activeVideo} 
              className="w-full max-w-4xl aspect-video rounded-xl" 
              allowFullScreen 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}