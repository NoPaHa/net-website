import { useState } from "react";
import { Calendar, Tent, Flower2, Megaphone, Camera, Building2, ChevronRight } from "lucide-react";
import corporateImg from "@/assets/corporate-event.jpg";
import weddingImg from "@/assets/wedding-decor.jpg";
import tentImg from "@/assets/tent-setup.jpg";
import floralImg from "@/assets/floral-decor.jpg";
import brandImg from "@/assets/brand-event.jpg";
import mediaImg from "@/assets/media-production.jpg";
import realestateImg from "@/assets/realestate-event.jpg";

const services = [
  {
    icon: Calendar,
    title: "Event Management",
    image: corporateImg,
    items: ["Corporate Events", "Weddings & Destination Weddings", "Birthday & Private Parties", "College & Cultural Events", "Government & Public Events"],
  },
  {
    icon: Flower2,
    title: "Flower & Decoration",
    image: floralImg,
    items: ["Wedding Mandap & Stage Decor", "Theme-based Decorations", "Balloon & LED Decor", "Entrance Arches & Walkways", "Car & Temple Decorations"],
  },
  {
    icon: Tent,
    title: "Tent & Infrastructure",
    image: tentImg,
    items: ["Luxury Tent Setup", "Stage & Lighting", "Sound Systems", "Seating & Decor", "Outdoor Event Setup"],
  },
  {
    icon: Megaphone,
    title: "Promotions & Branding",
    image: brandImg,
    items: ["Product Launches", "Brand Activations", "Exhibitions & Stalls", "Roadshows"],
  },
  {
    icon: Camera,
    title: "Media & Production",
    image: mediaImg,
    items: ["Photography & Videography", "Drone Shoots", "Event Reels & Ads", "LED Walls & Live Streaming"],
  },
  {
    icon: Building2,
    title: "Real Estate Events",
    image: realestateImg,
    items: ["Property Launch Events", "Site Visit Experience Design", "Layout & Villa Promotions", "Investor Meet Events"],
    badge: "Our Edge 🔥",
  },
];

const ServicesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            End-to-End <span className="text-gradient-gold italic">Event Solutions</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            One vendor. Every detail. From concept to cleanup — we handle it all so you can enjoy the moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 min-w-max lg:min-w-0 ${
                    isActive
                      ? "glass-card shadow-gold border-gold"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-body font-medium text-sm ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {service.title}
                  </span>
                  {service.badge && (
                    <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-semibold ml-auto hidden lg:inline">
                      {service.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Service detail */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl overflow-hidden glass-card">
              <img
                src={services[activeIdx].image}
                alt={services[activeIdx].title}
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <div className="relative p-6 md:p-8 -mt-20">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = services[activeIdx].icon;
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {services[activeIdx].title}
                  </h3>
                  {services[activeIdx].badge && (
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                      {services[activeIdx].badge}
                    </span>
                  )}
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services[activeIdx].items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80 font-body text-sm">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
