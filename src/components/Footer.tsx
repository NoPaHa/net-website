import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <span className="text-3xl font-display font-bold text-gradient-gold">NET</span>
            <p className="text-muted-foreground font-body text-sm mt-3 max-w-sm leading-relaxed">
              Nomesh Events Tirupathi — Your one-stop event management, decoration, and production partner. 
              Turning visions into unforgettable experiences since day one.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#services" className="hover:text-primary transition-colors">Event Management</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Flower & Decoration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Tent & Infrastructure</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Media Production</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-body">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © 2026 NET - Nomesh Events Tirupathi. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent" /> in Tirupathi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
