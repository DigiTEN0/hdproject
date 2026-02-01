import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte? 
            Wij staan klaar om uw droomproject te bespreken.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground">Neem Contact Op</h2>
              <p className="text-muted-foreground">
                Bel ons, stuur een bericht via WhatsApp of vul het formulier in. 
                Wij reageren altijd binnen 48 uur.
              </p>
              
              <div className="space-y-4">
                <Card className="p-5 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Telefoon</h3>
                      <a 
                        href="tel:+31648932007" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                        data-testid="link-phone"
                      >
                        +31 06 489 32 007
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ma-Vr: 08:00 - 18:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#25D366]/10 p-3 rounded-lg text-[#25D366]">
                      <SiWhatsapp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">WhatsApp</h3>
                      <a 
                        href="https://wa.me/31648932007" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#25D366] transition-colors"
                        data-testid="link-whatsapp"
                      >
                        +31 06 489 32 007
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Vaak sneller antwoord!</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">E-mail</h3>
                      <a 
                        href="mailto:info@hdproject.nl" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                        data-testid="link-email"
                      >
                        info@hdproject.nl
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Antwoord binnen 48 uur</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Locatie</h3>
                      <p className="text-muted-foreground">
                        Apeldoorn, Gelderland<br/>
                        Nederland
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Werkgebied: heel Gelderland</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-5 border shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Bereikbaarheid</h3>
                      <p className="text-sm text-muted-foreground">
                        Maandag - Vrijdag: 08:00 - 18:00<br/>
                        Zaterdag: Op afspraak<br/>
                        Zondag: Gesloten
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <InquiryForm className="shadow-lg border" />
            </div>

          </div>
        </div>
      </section>

      <section className="h-80 w-full bg-muted/50 flex items-center justify-center">
        <div className="text-center px-4">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="font-display font-bold text-lg text-foreground mb-2">Werkgebied</h3>
          <p className="text-muted-foreground max-w-md">
            Wij zijn gevestigd in Apeldoorn en werken door heel Gelderland en omstreken. 
            Geen voorrijkosten binnen een straal van 50 km.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
