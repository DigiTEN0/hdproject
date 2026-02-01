import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Hammer, Star, Phone, Award, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxe veranda met tuin" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Meer dan 10 jaar vakmanschap
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Uw Droomveranda <span className="text-accent">Op Maat Gemaakt</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Geniet het hele jaar door van uw tuin met een prachtige veranda van HD Projects. 
              Wij ontwerpen en bouwen hoogwaardige overkappingen die perfect bij uw woning passen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white text-lg px-8 h-14 font-semibold w-full sm:w-auto"
                  data-testid="button-hero-offerte"
                >
                  Vraag Gratis Offerte Aan
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg px-8 h-14 font-semibold backdrop-blur-sm w-full sm:w-auto"
                  data-testid="button-hero-portfolio"
                >
                  Bekijk Ons Werk <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Gratis advies aan huis</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>10 jaar garantie</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Eigen montageteam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Wat wij doen</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Specialist in Buitenverblijven
            </h2>
            <p className="text-muted-foreground text-lg">
              Van strakke aluminium veranda's tot sfeervolle houten overkappingen. 
              Wij realiseren elke buitenruimte met oog voor detail en duurzaamheid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Aluminium Veranda's",
                desc: "Onderhoudsarm, strak design en geschikt voor elk seizoen. Inclusief geintegreerde LED-verlichting.",
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop"
              },
              {
                title: "Houten Overkappingen",
                desc: "Natuurlijke uitstraling met duurzaam hout. Perfect voor een warme, landelijke sfeer.",
                img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop"
              },
              {
                title: "Glazen Schuifwanden",
                desc: "Bescherming tegen wind en regen, met behoud van maximaal uitzicht op uw tuin.",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
              },
              {
                title: "Carports & Schuren",
                desc: "Bescherm uw auto of creeer extra opslagruimte met een stijlvolle overkapping.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden border-0 shadow-lg hover-elevate">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-display text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-accent font-semibold text-sm hover:underline"
                      data-testid={`link-service-${i}`}
                    >
                      Meer informatie <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Waarom HD Projects</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Vakmanschap Waar U Op Kunt Bouwen
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Bij HD Projects staat kwaliteit voorop. Met ons team van ervaren vakmensen 
                realiseren wij veranda's die generaties meegaan. Persoonlijk advies, 
                maatwerk en een strakke afwerking zijn onze standaard.
              </p>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: ShieldCheck, 
                    title: "10 Jaar Garantie", 
                    desc: "Op constructie, lakwerk en beglazing. U bent verzekerd van kwaliteit." 
                  },
                  { 
                    icon: Hammer, 
                    title: "Eigen Montageteam", 
                    desc: "Geen onderaannemers. Ons vaste team garandeert een perfecte afwerking." 
                  },
                  { 
                    icon: Clock, 
                    title: "Snelle Levering", 
                    desc: "Dankzij eigen voorraad kunnen wij vaak binnen 4-6 weken leveren." 
                  },
                  { 
                    icon: Users, 
                    title: "Persoonlijke Aanpak", 
                    desc: "Van eerste gesprek tot oplevering: u heeft een vast aanspreekpunt." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg h-fit">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-display mb-1">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop" 
                  alt="HD Projects vakmanschap" 
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold font-display">500+</div>
                <div className="text-sm">Tevreden klanten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Klanten vertellen</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Familie De Vries",
                location: "Apeldoorn",
                text: "Fantastische ervaring! Van advies tot oplevering was alles perfect geregeld. Onze veranda is prachtig geworden en we genieten er elke dag van.",
                rating: 5
              },
              {
                name: "Peter & Marieke",
                location: "Deventer",
                text: "Zeer professioneel team. Ze dachten goed mee over de indeling en het resultaat overtreft onze verwachtingen. Absolute aanrader!",
                rating: 5
              },
              {
                name: "Jan van den Berg",
                location: "Zutphen",
                text: "Kwaliteit staat voorop bij HD Projects. De montage was in twee dagen klaar en de afwerking is perfect. Top bedrijf!",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border shadow-md">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <div className="font-bold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="contact">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Neem Contact Op</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Klaar Voor Uw Droomproject?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Benieuwd naar de mogelijkheden? Wij komen graag vrijblijvend bij u langs 
                voor een adviesgesprek en meting. Binnen 48 uur ontvangt u een offerte op maat.
              </p>
              
              <div className="grid gap-4 mb-8">
                <Card className="p-6 border shadow-sm">
                  <h4 className="font-bold text-lg mb-2 text-foreground">Locatie</h4>
                  <p className="text-muted-foreground">Apeldoorn, Gelderland<br/>Werkgebied: Heel Gelderland en omstreken</p>
                </Card>
                <Card className="p-6 border shadow-sm">
                  <h4 className="font-bold text-lg mb-2 text-foreground">Contact</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <a href="mailto:info@hdproject.nl" className="flex items-center gap-2 hover:text-accent transition-colors">
                      info@hdproject.nl
                    </a>
                    <a href="tel:+31648932007" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Phone className="h-4 w-4" /> +31 06 489 32 007
                    </a>
                  </div>
                </Card>
              </div>

              <div className="space-y-3">
                {[
                  "Gratis en vrijblijvend adviesgesprek",
                  "Offerte binnen 48 uur",
                  "Geen voorrijkosten in heel Gelderland"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <InquiryForm className="shadow-xl border" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
