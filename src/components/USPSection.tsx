import { Building2, Repeat, Wifi } from "lucide-react";

const usps = [
  {
    icon: Building2,
    title: "Real Estate + Events Combo",
    desc: "The only event company combining property launch events with traditional event management. We create immersive experiences for villa promotions, layout launches & investor meets.",
    badge: "No One Does This 🔥",
  },
  {
    icon: Repeat,
    title: "Event-as-a-Service",
    desc: "Subscription-based event planning for corporates. Monthly contracts with dedicated event directors — predictable costs, consistent quality.",
    badge: "Recurring Revenue",
  },
  {
    icon: Wifi,
    title: "Digital-First Events",
    desc: "Hybrid event capabilities with live streaming, LED walls, drone coverage & instant social media reels. Your event reaches beyond the venue.",
    badge: "Future Ready",
  },
];

const USPSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Makes Us <span className="text-gradient-gold italic">Different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {usps.map(({ icon: Icon, title, desc, badge }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-8 hover:shadow-card-hover transition-all duration-500 group hover:scale-[1.02]"
            >
              <span className="inline-block text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold mb-4 font-body">
                {badge}
              </span>
              <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
