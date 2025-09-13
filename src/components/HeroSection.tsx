import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import overwhelmedInvestor from "@/assets/overwhelmed-investor.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('conversion-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-vc-text-primary text-shadow leading-tight">
              <span className="block">500 Pitch Decks</span>
              <span className="block">This Quarter.</span>
              <span className="block text-vc-amber">127 Hours</span>
              <span className="block">to Properly</span>
              <span className="block">Evaluate Them.</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-vc-text-muted">
                You Have 40.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-vc-text-muted max-w-2xl leading-relaxed">
              The next unicorn is buried in your deal flow. You're missing it because you're drowning in it.
            </p>
            
            <div className="pt-4">
              <p className="text-lg md:text-xl text-vc-amber italic font-medium">
                "When did finding winners become surviving deal flow?"
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="vc" 
              size="xl" 
              onClick={scrollToForm}
              className="text-lg"
            >
              Never Miss Another Unicorn
            </Button>
            <Button 
              variant="vcOutline" 
              size="xl"
              onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the Problem
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-vc">
            <img 
              src={overwhelmedInvestor} 
              alt="Overwhelmed venture capitalist surrounded by endless pitch decks and deal flow"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vc-dark/60 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating metrics */}
          <div className="absolute -top-4 -right-4 bg-vc-surface-elevated p-4 rounded-lg shadow-glow border border-vc-amber/20">
            <div className="text-vc-amber font-bold text-2xl">127</div>
            <div className="text-vc-text-muted text-sm">Hours Needed</div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-vc-surface-elevated p-4 rounded-lg shadow-glow border border-vc-amber/20">
            <div className="text-vc-amber font-bold text-2xl">40</div>
            <div className="text-vc-text-muted text-sm">Hours Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;