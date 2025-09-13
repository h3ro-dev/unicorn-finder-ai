import { AlertTriangle, Clock, Target, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      text: "Every 'no' could be the next Airbnb you passed on",
      emphasis: "next Airbnb"
    },
    {
      icon: Clock,
      text: "Due diligence that should take weeks gets compressed into gut decisions",
      emphasis: "gut decisions"
    },
    {
      icon: Target,
      text: "Portfolio companies need attention but new deals keep flooding in",
      emphasis: "flooding in"
    },
    {
      icon: TrendingDown,
      text: "You're playing a numbers game where one miss could define your career",
      emphasis: "define your career"
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 gradient-section">
      <div className="container max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vc-text-primary mb-6">
            The VC of One <span className="text-vc-amber">FOMO</span> That's Costing You Millions
          </h2>
          <p className="text-xl text-vc-text-muted max-w-3xl mx-auto">
            The investment overwhelm that's turning every opportunity into anxiety
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-vc-surface p-8 rounded-xl border border-vc-amber/10 hover:border-vc-amber/30 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-vc-amber/10 rounded-lg">
                    <Icon className="h-6 w-6 text-vc-amber" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg text-vc-text-primary leading-relaxed">
                      {point.text.split(point.emphasis)[0]}
                      <span className="text-vc-amber font-semibold">{point.emphasis}</span>
                      {point.text.split(point.emphasis)[1]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-vc-surface-elevated p-8 md:p-12 rounded-2xl border border-vc-amber/20 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-vc-text-primary mb-4">
              The Brutal Reality
            </h3>
            <p className="text-xl text-vc-amber italic font-medium mb-6">
              "Institutional VCs have teams of analysts. You have spreadsheets and stress."
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-vc-amber mb-2">15+</div>
                <div className="text-vc-text-muted">Analysts per fund</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vc-amber mb-2">1</div>
                <div className="text-vc-text-muted">You</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vc-amber mb-2">∞</div>
                <div className="text-vc-text-muted">Deal flow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;