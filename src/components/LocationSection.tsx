import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const whatsappLink = "https://wa.me/5541992678750?text=Olá, vim do site e gostaria de uma consulta";
  const mapsLink = "https://maps.google.com/?q=Rua+Mal.+Humberto+de+Alencar+Castelo+Branco,+131,+Curitiba+PR";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      lines: [
        "Rua Mal. Humberto de Alencar",
        "Castelo Branco, 131, Cobertura",
        "Curitiba/PR"
      ],
    },
    {
      icon: Clock,
      title: "Horários",
      lines: [
        "Segunda a Sexta: 08:30 às 12h",
        "Segunda a Sexta: 14h às 17h",
        "Sábado e Domingo: Fechado"
      ],
    },
    {
      icon: Phone,
      title: "Contato",
      lines: [
        "(41) 3015-6001",
        "(41) 99267-8750"
      ],
    },
  ];

  return (
    <section id="localizacao" className="section-padding bg-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
            Venha nos <span className="text-navy">conhecer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos localizados em uma região privilegiada de Curitiba, 
            com fácil acesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px] opacity-0 animate-fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7123456789!2d-49.2655789!3d-25.4284123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQyLjMiUyA0OcKwMTUnNTYuMSJX!5e0!3m2!1sen!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            {/* Overlay with link */}
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 bg-card rounded-lg shadow-lg p-3 flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">Ver no Google Maps</span>
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 opacity-0 animate-fade-up animation-delay-200">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar Avaliação Agora
                </a>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Resposta rápida via WhatsApp
              </p>
              <p className="text-center text-sm font-medium text-foreground mt-2">
                📍 Realizamos consultas presenciais e on-line.
              </p>
              <p className="text-center text-sm font-medium text-foreground mt-1">
                📬 Enviamos receitas para todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
