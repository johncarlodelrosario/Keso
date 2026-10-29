import HeroSection from "../components/Home/HeroSection";
import FeatureSection from "../components/Home/FeatureSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
