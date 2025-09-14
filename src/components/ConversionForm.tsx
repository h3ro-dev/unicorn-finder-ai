import { useState } from "react";
import { submitLead } from "@/lib/lead";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const ConversionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fund: "",
    investmentFocus: "",
    dealVolume: "",
    portfolioSize: "",
    biggestFear: "",
    challenges: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLead(formData as any);
    toast({
      title: "Welcome to VC of One",
      description: "We'll be in touch within 24 hours to optimize your investment intelligence.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="conversion-form" className="py-20 px-4 gradient-section">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-vc-amber" />
            <h2 className="text-4xl md:text-5xl font-bold text-vc-text-primary">
              Never Miss Another <span className="text-vc-amber">Unicorn</span> in Your Deal Flow
            </h2>
          </div>
          <p className="text-xl text-vc-text-muted">
            Get early access to AI that thinks like a senior partner
          </p>
        </div>

        <Card className="bg-vc-surface border-vc-amber/20 p-8 md:p-12 shadow-vc">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-vc-text-primary font-medium">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your name"
                  className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary placeholder:text-vc-text-muted focus:border-vc-amber"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-vc-text-primary font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary placeholder:text-vc-text-muted focus:border-vc-amber"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="fund" className="text-vc-text-primary font-medium">Fund / Investment Entity</Label>
              <Input
                id="fund"
                value={formData.fund}
                onChange={(e) => handleInputChange("fund", e.target.value)}
                placeholder="Your fund name or 'Independent Investor'"
                className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary placeholder:text-vc-text-muted focus:border-vc-amber"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-vc-text-primary font-medium">Investment Focus</Label>
              <Select onValueChange={(value) => handleInputChange("investmentFocus", value)}>
                <SelectTrigger className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary">
                  <SelectValue placeholder="What stages and sectors do you invest in?" />
                </SelectTrigger>
                <SelectContent className="bg-vc-surface border-vc-amber/20">
                  <SelectItem value="pre-seed-seed">Pre-seed & Seed</SelectItem>
                  <SelectItem value="series-a-b">Series A & B</SelectItem>
                  <SelectItem value="growth-stage">Growth Stage</SelectItem>
                  <SelectItem value="multi-stage">Multi-stage</SelectItem>
                  <SelectItem value="sector-specific">Sector Specific (SaaS, Fintech, etc.)</SelectItem>
                  <SelectItem value="generalist">Generalist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-vc-text-primary font-medium">Monthly Deal Volume</Label>
              <Select onValueChange={(value) => handleInputChange("dealVolume", value)}>
                <SelectTrigger className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary">
                  <SelectValue placeholder="How many opportunities do you evaluate monthly?" />
                </SelectTrigger>
                <SelectContent className="bg-vc-surface border-vc-amber/20">
                  <SelectItem value="10-25">10-25 deals</SelectItem>
                  <SelectItem value="25-50">25-50 deals</SelectItem>
                  <SelectItem value="50-100">50-100 deals</SelectItem>
                  <SelectItem value="100-200">100-200 deals</SelectItem>
                  <SelectItem value="200+">200+ deals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-vc-text-primary font-medium">Portfolio Size</Label>
              <Select onValueChange={(value) => handleInputChange("portfolioSize", value)}>
                <SelectTrigger className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary">
                  <SelectValue placeholder="How many active investments are you managing?" />
                </SelectTrigger>
                <SelectContent className="bg-vc-surface border-vc-amber/20">
                  <SelectItem value="1-5">1-5 investments</SelectItem>
                  <SelectItem value="5-15">5-15 investments</SelectItem>
                  <SelectItem value="15-30">15-30 investments</SelectItem>
                  <SelectItem value="30-50">30-50 investments</SelectItem>
                  <SelectItem value="50+">50+ investments</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label className="text-vc-text-primary font-medium">What's Your Biggest Investment Fear?</Label>
              <RadioGroup 
                onValueChange={(value) => handleInputChange("biggestFear", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-vc-amber/10 hover:border-vc-amber/30 transition-colors">
                  <RadioGroupItem value="missing-unicorn" id="missing-unicorn" className="border-vc-amber text-vc-amber" />
                  <Label htmlFor="missing-unicorn" className="text-vc-text-primary cursor-pointer">
                    Missing the next big thing due to deal flow overwhelm
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-vc-amber/10 hover:border-vc-amber/30 transition-colors">
                  <RadioGroupItem value="wrong-investment" id="wrong-investment" className="border-vc-amber text-vc-amber" />
                  <Label htmlFor="wrong-investment" className="text-vc-text-primary cursor-pointer">
                    Investing in the wrong opportunities due to rushed decisions
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg border border-vc-amber/10 hover:border-vc-amber/30 transition-colors">
                  <RadioGroupItem value="portfolio-neglect" id="portfolio-neglect" className="border-vc-amber text-vc-amber" />
                  <Label htmlFor="portfolio-neglect" className="text-vc-text-primary cursor-pointer">
                    Neglecting existing portfolio companies while chasing new deals
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges" className="text-vc-text-primary font-medium">
                What's your biggest challenge in deal evaluation? (Optional)
              </Label>
              <Textarea
                id="challenges"
                value={formData.challenges}
                onChange={(e) => handleInputChange("challenges", e.target.value)}
                placeholder="Tell us about your specific pain points..."
                className="bg-vc-surface-elevated border-vc-amber/20 text-vc-text-primary placeholder:text-vc-text-muted focus:border-vc-amber min-h-20"
              />
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                variant="vc" 
                size="xl" 
                className="w-full text-lg font-semibold"
              >
                Optimize My Investment Intelligence
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-vc-text-muted text-sm text-center mt-4">
                Early access • No spam • Institutional-grade AI
              </p>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ConversionForm;