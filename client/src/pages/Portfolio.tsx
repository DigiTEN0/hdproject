import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "wouter";
import { ZoomIn, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Moderne Aluminium Veranda",
      location: "Apeldoorn",
      category: "Aluminium",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Douglas Overkapping met Lichtstraat",
      location: "Deventer",
      category: "Houtbouw",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Vrijstaande Terrasoverkapping",
      location: "Zutphen",
      category: "Aluminium",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Dubbele Carport met Berging",
      location: "Epe",
      category: "Carport",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Tuinkamer met Schuifpuien",
      location: "Vaassen",
      category: "Glaswanden",
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Antraciet Veranda Modern",
      location: "Apeldoorn",
      category: "Aluminium",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Landelijke Houten Pergola",
      location: "Hattem",
      category: "Houtbouw",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Strakke Veranda met LED",
      location: "Nunspeet",
      category: "Aluminium",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop"
    }
  ];

  const [filter, setFilter] = useState("Alles");
  const categories = ["Alles", "Aluminium", "Houtbouw", "Glaswanden", "Carport"];

  const filteredProjects = filter === "Alles" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Onze Projecten</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Bekijk een selectie van onze recent opgeleverde projecten in Apeldoorn en omstreken.
            Laat u inspireren voor uw eigen droomveranda.
          </p>
        </div>
      </div>

      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-testid={`filter-${cat.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-white"
                  : "bg-background text-muted-foreground hover:bg-muted border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 min-h-[50vh]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="group cursor-pointer"
                      data-testid={`project-${project.id}`}
                    >
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="text-white h-8 w-8" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-accent font-semibold uppercase tracking-wide">{project.category}</p>
                        <h3 className="text-base font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.location}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                      <p className="text-accent text-sm font-semibold">{project.category}</p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="opacity-80">{project.location}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            Ook zo'n mooie veranda?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Wij komen graag vrijblijvend bij u langs voor een adviesgesprek en meting op locatie.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
              data-testid="button-contact-portfolio"
            >
              Neem Contact Op <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
