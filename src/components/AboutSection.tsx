import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="text-primary text-sm font-body font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Where <span className="text-gradient-gold italic">Creativity</span> Meets Precision
            </h2>
            <p className="text-foreground/70 font-body text-lg leading-relaxed mb-8">
              Founded by Nomesh in the heart of Tirupathi, NET has grown into a premier event management company 
              delivering end-to-end event solutions. From intimate celebrations to grand spectacles, 
              we bring your vision to life with meticulous planning and creative excellence.
            </p>
            <p className="text-foreground/60 font-body leading-relaxed mb-10">
              Our unique edge? We combine real estate event expertise with traditional event management — 
              offering property launch events, villa promotions, and investor meets alongside weddings, 
              corporate galas, and cultural festivals.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: "Vision", desc: "Creativity + Precision in every detail" },
                { icon: Target, title: "Mission", desc: "Stress-free, memorable events" },
                { icon: Heart, title: "Values", desc: "Excellence, trust & innovation" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card-light rounded-xl p-5 hover:shadow-gold transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-gold">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=700&fit=crop"
                alt="NET Event team at work"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={600}
                height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-xl p-5">
                  <p className="text-primary font-display text-lg font-semibold mb-1">Nomesh</p>
                  <p className="text-foreground/70 text-sm font-body">Founder & Creative Director</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
