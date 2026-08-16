import HeroSection from '@/components/public/HeroSection';
import DealsBanner from '@/components/public/DealsBanner';
import TrustBar from '@/components/public/TrustBar';
import ProductCatalog from '@/components/public/ProductCatalog';
import ReviewsSection from '@/components/public/ReviewsSection';
import FaqSection from '@/components/public/FaqSection';

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <DealsBanner />
      <TrustBar />
      <ProductCatalog />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}