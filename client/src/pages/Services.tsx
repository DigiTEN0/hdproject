import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Phone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Aluminium Veranda's",
      description: "De populairste keuze voor wie kiest voor duurzaamheid en gemak. Onze aluminium veranda's zijn volledig onderhoudsvrij, verkrijgbaar in elke RAL-kleur en voorzien van hoogwaardige afwerking.",
      features: [
        "Poedercoating in alle RAL kleuren", 
        "Polycarbonaat of gehard glazen dak", 
        "Geintegreerde LED-verlichting", 
        "10 jaar garantie op constructie",
        "Keuze uit plat of schuin dak"
      ],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop"
    },
    {
      title: "Houten Overkappingen",
      description: "Voor een warme, natuurlijke uitstraling kiest u voor hout. Wij werken uitsluitend met hoogwaardig Douglas of Lariks hout, bekend om zijn duurzaamheid en prachtige uitstraling.",
      features: [
        "Douglas of Lariks constructie", 
        "Ambachtelijk vakmanschap", 
        "Natuurlijke warme uitstraling", 
        "Perfect voor landelijke stijl",
        "Optioneel met zwarte stalen accenten"
      ],
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop"
    },
    {
      title: "Glazen Schuifwanden",
      description: "Maak van uw veranda een volwaardige tuinkamer. Met onze glazen schuifpuien geniet u ook bij wind en regen van uw buitenruimte, met behoud van maximaal uitzicht op de tuin.",
      features: [
        "10mm gehard veiligheidsglas", 
        "Soepel lopend railsysteem", 
        "Tochtdichte afsluitborstels", 
        "Optioneel met vergrendelbaar slot",
        "Stapelbaar tot volledige opening"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
    },
    {
      title: "Zonwering & Screens",
      description: "Houd uw veranda koel op warme dagen met stijlvolle zonwering. Van klassieke knikarmschermen tot moderne screens - wij leveren en monteren alles op maat.",
      features: [
        "Elektrische bediening mogelijk", 
        "Windvast tot windkracht 6", 
        "Grote keuze in doeksoorten", 
        "Smart home integratie mogelijk",
        "Tot 6 meter overspanning"
      ],
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&auto=format&fit=crop"
    },
    {
      title: "Carports & Bergingen",
      description: "Bescherm uw auto tegen weersinvloeden met een stijlvolle carport, of creeer extra opslag met een bijpassende berging. Functioneel en esthetisch verantwoord.",
      features: [
        "Aluminium of houten uitvoering", 
        "Enkele of dubbele carport", 
        "Optioneel met berging", 
        "Zonnepanelen mogelijk op dak",
        "Passend bij uw woning"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Onze Diensten</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Van strakke aluminium veranda's tot sfeervolle houten overkappingen. 
            Ontdek wat HD Projects voor u kan betekenen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-display font-bold text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <span className="bg-accent/10 p-1.5 rounded-full">
                          <Check className="h-4 w-4 text-accent" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-white font-semibold"
                        data-testid={`button-offerte-${index}`}
                      >
                        Vraag Offerte Aan
                      </Button>
                    </Link>
                    <a href="tel:+31648932007">
                      <Button variant="outline" className="border-foreground/20">
                        <Phone className="mr-2 h-4 w-4" /> Bel Ons
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Iets Anders in Gedachten?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Wij leveren ook maatwerk oplossingen die niet direct op deze pagina staan. 
            Denk aan schuttingen, vlonderterrassen, buitenkeukens of complete tuinrenovaties.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              data-testid="button-contact-custom"
            >
              Bespreek Uw Wensen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
