import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import brandEvent from "@/assets/brand-event.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import floralDecor from "@/assets/floral-decor.jpg";
import mediaProduction from "@/assets/media-production.jpg";
import realestateEvent from "@/assets/realestate-event.jpg";
import tentSetup from "@/assets/tent-setup.jpg";
import weddingDecor from "@/assets/wedding-decor.jpg";

const HeroSection = () => {
  const images = [heroBg, brandEvent, corporateEvent, floralDecor, mediaProduction, realestateEvent, tentSetup, weddingDecor];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event setup ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-dark opacity-20" />
      </div>

      {/* Floating accents */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary font-medium">Tirupathi's Premium Event Partner</span>
          </div>
        </div>

        <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
          Creating{" "}
          <span className="text-gradient-gold italic">Unforgettable</span>
          <br />
          Experiences
        </h1>

        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-foreground/70 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          From royal weddings to grand corporate galas — we craft events that leave lasting impressions. Your one-stop solution for events, decor & beyond.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-gold hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            Plan Your Event
          </a>
          <a
            href="#portfolio"
            className="border border-primary/30 text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/10 transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up-delay-3">
          {[
            { number: "500+", label: "Events" },
            { number: "10+", label: "Years" },
            { number: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-5 h-5 text-primary/60" />
      </a>

      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-primary w-8" : "bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
