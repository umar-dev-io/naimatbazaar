import HeroSection from "@/components/public/HeroSection";
import DealsBanner from "@/components/public/DealsBanner";
import TrustBar from "@/components/public/TrustBar";
import ProductCatalog from "@/components/public/ProductCatalog";
import LiveResultsSection from "@/components/public/LiveResultsSection";
import AboutSection from "@/components/public/AboutSection";
import TrustAndStatsSection from "@/components/public/TrustAndStatsSection";
import CallToActionBanner from "@/components/public/CallToActionBanner";
import ReviewsSection from "@/components/public/ReviewsSection";
import FaqSection from "@/components/public/FaqSection";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <DealsBanner />
      <TrustBar />
      <ProductCatalog />
      <LiveResultsSection />
      <AboutSection/>
      <TrustAndStatsSection />
      <CallToActionBanner />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}
