import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ConversionForm from "@/components/ConversionForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-vc-dark">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ConversionForm />
    </div>
  );
};

export default Index;