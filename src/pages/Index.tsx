import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
