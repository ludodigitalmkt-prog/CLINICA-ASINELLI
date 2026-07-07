import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/dr-asinelli-terno.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5541992678750?text=Olá, vim do site e gostaria de uma consulta";

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 rounded-full px-4 py-2 opacity-0 animate-fade-up">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">Desde 1992: O Segredo da Vida</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight opacity-0 animate-fade-up animation-delay-100">
                Compartilhamos nossa paixão pela vida para{" "}
                <span className="text-navy italic">potencializar sua transformação</span>.
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-up animation-delay-200">
                Medicina de precisão e mais de 33 anos de experiência focados em revitalização, 
                potencial cerebral e longevidade saudável através de terapias avançadas.
              </p>

              {/* CTA Button */}
              <div className="pt-4 opacity-0 animate-fade-up animation-delay-300">
                <Button variant="hero" size="xl" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Quero recuperar minha vitalidade
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3 pt-4 opacity-0 animate-fade-up animation-delay-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-navy/20 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-navy">+</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">+33 anos</span> de experiência em Medicina de Precisão
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 opacity-0 animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gold/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-navy/10 rounded-3xl -z-10" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Dr. Asinelli - Especialista em Medicina de Precisão"
                  className="w-full h-auto object-cover aspect-square"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-6 bg-card rounded-2xl shadow-card p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Medicina de Precisão</p>
                    <p className="text-sm text-muted-foreground">Terapias avançadas e personalizadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
