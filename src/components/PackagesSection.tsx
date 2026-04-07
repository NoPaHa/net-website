import { Check, Star, Crown, Gem } from "lucide-react";

const packages = [
  {
    icon: Star,
    name: "Basic",
    price: "₹20K – ₹50K",
    description: "Perfect for intimate celebrations & small corporate meets",
    features: [
      "Event Planning & Coordination",
      "Basic Venue Decoration",
      "Standard Sound & Lighting",
      "Photography (4 hours)",
      "50-100 Guest Capacity",
    ],
    popular: false,
  },
  {
    icon: Crown,
    name: "Premium",
    price: "₹50K – ₹2L",
    description: "Ideal for weddings, corporate galas & brand launches",
    features: [
      "Full Event Management",
      "Theme-based Floral Decoration",
      "Premium Stage & Lighting",
      "Photography + Videography",
      "Tent & Seating Setup",
      "Live Streaming Support",
      "100-500 Guest Capacity",
    ],
    popular: true,
  },
  {
    icon: Gem,
    name: "Luxury",
    price: "₹2L+",
    description: "For grand destination weddings & exclusive corporate events",
    features: [
      "Complete End-to-End Management",
      "Luxury Floral & Decor Design",
      "Custom Stage & LED Walls",
      "Drone Shoots + Reels",
      "Celebrity / Artist Management",
      "Catering Coordination",
      "Dedicated Event Director",
      "Unlimited Guest Capacity",
    ],
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
            Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient-gold italic">Experience</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Transparent pricing. Flexible plans. No hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                  pkg.popular
                    ? "glass-card border border-primary/30 shadow-gold"
                    : "glass-card-light"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">{pkg.name}</h3>
                <div className="text-gradient-gold text-xl font-display font-bold mb-3">{pkg.price}</div>
                <p className="text-sm text-muted-foreground font-body mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80 font-body">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90"
                      : "border border-primary/30 text-foreground hover:bg-primary/10"
                  }`}
                >
                  Get Quote
                </a>
              </div>
            );
          })}
        </div>

        {/* Business models note */}
        <div className="mt-16 glass-card-light rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-3">
            🔁 Corporate Subscription Plans Available
          </h3>
          <p className="text-muted-foreground font-body text-sm">
            Monthly event management contracts starting from ₹50K/month. Ideal for corporates, 
            colleges, and real estate developers needing regular event support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
