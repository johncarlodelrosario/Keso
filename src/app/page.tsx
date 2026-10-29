import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
