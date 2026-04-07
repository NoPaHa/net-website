import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", event: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${formData.name}. I'm interested in ${formData.event}. ${formData.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's <span className="text-gradient-gold italic">Create</span> Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h3>
            <p className="text-muted-foreground font-body mb-8">
              Ready to plan your next event? Reach out and let's discuss your vision. We respond within 2 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91 99999 99999" },
                { icon: Mail, label: "Email", value: "hello@nomeshevents.com" },
                { icon: MapPin, label: "Location", value: "Tirupathi, Andhra Pradesh" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body">{label}</p>
                    <p className="text-foreground font-body font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-muted-foreground font-body mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Nomesh"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground font-body mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="+91 99999 99999"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1.5 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1.5 block">Event Type</label>
              <select
                value={formData.event}
                onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option value="">Select event type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Floral Decoration</option>
                <option>Tent Setup</option>
                <option>Product Launch</option>
                <option>Real Estate Event</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground font-body mb-1.5 block">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell us about your event..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-gold"
            >
              <Send className="w-4 h-4" />
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
