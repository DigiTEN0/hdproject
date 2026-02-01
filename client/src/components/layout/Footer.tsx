import { Link } from "wouter";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export function Footer() {
  const { user, logout } = useAuth();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <img 
              src="http://www.digiten.nl/wp-content/uploads/2026/02/HD-Project-Logo.png" 
              alt="HD Projects Logo" 
              className="h-16 w-auto" 
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Specialist in hoogwaardige veranda's en overkappingen. 
              Al meer dan 10 jaar uw partner voor een prachtige buitenruimte in Apeldoorn en heel Gelderland.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Navigatie</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-accent transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors" data-testid="link-footer-services">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors" data-testid="link-footer-portfolio">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Diensten</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Aluminium Veranda's</li>
              <li>Houten Overkappingen</li>
              <li>Glazen Schuifwanden</li>
              <li>Terrasoverkappingen</li>
              <li>Carports</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Apeldoorn, Gelderland<br/>Nederland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+31648932007" className="hover:text-accent transition-colors">
                  +31 06 489 32 007
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@hdproject.nl" className="hover:text-accent transition-colors">
                  info@hdproject.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} HD Projects. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-6">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/admin" className="text-white/70 hover:text-accent transition-colors" data-testid="link-dashboard">
                  Dashboard
                </Link>
                <button 
                  onClick={() => logout()} 
                  className="hover:text-accent transition-colors"
                  data-testid="button-logout"
                >
                  Uitloggen
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
                data-testid="link-admin-login"
              >
                <Shield className="h-3 w-3" /> Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
