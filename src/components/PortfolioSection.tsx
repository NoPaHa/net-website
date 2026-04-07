import { useState } from "react";
import corporateImg from "@/assets/corporate-event.jpg";
import weddingImg from "@/assets/wedding-decor.jpg";
import tentImg from "@/assets/tent-setup.jpg";
import floralImg from "@/assets/floral-decor.jpg";
import brandImg from "@/assets/brand-event.jpg";
import mediaImg from "@/assets/media-production.jpg";
import realestateImg from "@/assets/realestate-event.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const filters = ["All", "Weddings", "Corporate", "Floral Decor", "Tent Setup"];

const portfolioItems = [
  { src: heroImg, category: "Weddings", title: "Royal Wedding Ceremony" },
  { src: corporateImg, category: "Corporate", title: "Tech Summit 2025" },
  { src: floralImg, category: "Floral Decor", title: "Luxury Floral Design" },
  { src: tentImg, category: "Tent Setup", title: "Garden Party Setup" },
  { src: weddingImg, category: "Weddings", title: "Traditional Mandap Decor" },
  { src: brandImg, category: "Corporate", title: "Product Launch Event" },
  { src: realestateImg, category: "Corporate", title: "Villa Launch Event" },
  { src: mediaImg, category: "Corporate", title: "Live Stream Production" },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold italic">Finest</span> Work
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-gold text-primary-foreground shadow-gold"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs text-primary font-body font-medium">{item.category}</span>
                <h3 className="text-foreground font-display font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
