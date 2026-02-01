import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Diensten" },
    { href: "/portfolio", label: "Projecten" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center" data-testid="link-home-logo">
            <img 
              src="http://www.digiten.nl/wp-content/uploads/2026/02/HD-Project-Logo.png" 
              alt="HD Projects Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wide",
                  isActive(link.href) 
                    ? "text-accent" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a 
              href="tel:+31648932007" 
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium"
              data-testid="link-phone-header"
            >
              <Phone className="h-4 w-4" />
              +31 06 489 32 007
            </a>
            <Link href="/contact">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-6"
                data-testid="button-cta-header"
              >
                Gratis Offerte
              </Button>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-md px-3 py-3 text-base font-medium",
                  isActive(link.href)
                    ? "bg-white/10 text-accent"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="tel:+31648932007" 
              className="flex items-center gap-2 text-white px-3 py-3"
            >
              <Phone className="h-4 w-4" />
              +31 06 489 32 007
            </a>
            <div className="pt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Gratis Offerte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
