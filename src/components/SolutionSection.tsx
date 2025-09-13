import { Brain, Search, BarChart3, Users } from "lucide-react";

const SolutionSection = () => {
  const capabilities = [
    {
      icon: Search,
      title: "Deal Sourcing AI",
      description: "Surface high-potential opportunities from the noise",
      details: "Advanced pattern recognition identifies unicorn potential before the market catches on"
    },
    {
      icon: Brain,
      title: "Due Diligence AI",
      description: "Comprehensive analysis in hours, not weeks",
      details: "Deep market analysis, competitive positioning, and risk assessment at institutional grade"
    },
    {
      icon: Users,
      title: "Portfolio Intelligence AI",
      description: "Monitor and support investments automatically",
      details: "Track performance, identify risks, and surface optimization opportunities across your portfolio"
    },
    {
      icon: BarChart3,
      title: "Market Analysis AI",
      description: "Trend identification and competitive positioning",
      details: "Real-time market intelligence and predictive analytics for timing and sector allocation"
    }
  ];

  return (
    <section className="py-20 px-4 bg-vc-dark">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vc-text-primary mb-6">
            Invest Like You Have a <span className="text-vc-amber">Team of Senior Partners</span>
          </h2>
          <p className="text-xl text-vc-text-muted max-w-3xl mx-auto">
            AI-powered investment intelligence that scales your decision-making capacity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index}
                className="group bg-vc-surface p-8 rounded-xl border border-vc-amber/10 hover:border-vc-amber/30 transition-all duration-300 hover:shadow-glow hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-vc-amber/10 rounded-xl group-hover:bg-vc-amber/20 transition-colors">
                    <Icon className="h-8 w-8 text-vc-amber" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-vc-text-primary mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-vc-amber font-medium mb-3 text-lg">
                      {capability.description}
                    </p>
                    <p className="text-vc-text-muted leading-relaxed">
                      {capability.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-vc-surface to-vc-surface-elevated p-8 md:p-12 rounded-2xl border border-vc-amber/20">
          <h3 className="text-2xl md:text-3xl font-bold text-vc-text-primary mb-4">
            From Overwhelmed to Optimized
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold text-vc-text-muted mb-4">Before VC of One:</h4>
              <ul className="space-y-2 text-vc-text-muted">
                <li>• Drowning in 500+ decks per quarter</li>
                <li>• Making gut decisions under pressure</li>
                <li>• Missing opportunities in the noise</li>
                <li>• Portfolio management suffering</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-vc-amber mb-4">After VC of One:</h4>
              <ul className="space-y-2 text-vc-text-primary">
                <li>• AI pre-screens and ranks opportunities</li>
                <li>• Data-driven investment decisions</li>
                <li>• Never miss another unicorn</li>
                <li>• Portfolio optimization on autopilot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;