import { Award, GraduationCap, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import drAsinelli from "@/assets/dr-asinelli-terno.jpg";

const credentials = [
  {
    icon: GraduationCap,
    label: "Especialista em Nutrologia",
  },
  {
    icon: Award,
    label: "Membro ABRAN",
  },
  {
    icon: Users,
    label: "Milhares de pacientes atendidos",
  },
  {
    icon: Calendar,
    label: "+33 anos de experiência",
  },
];

const DoctorSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5541992678750&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+uma+consulta&type=phone_number&app_absent=0";

  return (
    <section id="sobre" className="section-padding bg-background overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative opacity-0 animate-fade-up">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-navy/5 rounded-3xl -z-10" />
            
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={drAsinelli}
                alt="Dr. Asinelli - Médico Nutrólogo"
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>

            {/* CRM Badge */}
            <div className="absolute -bottom-4 right-4 bg-card rounded-xl shadow-card p-4 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Registro</p>
                  <p className="font-semibold text-foreground">CRM 13037-PR</p>
                  <p className="font-semibold text-foreground text-sm">RQE 10646</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 opacity-0 animate-fade-up animation-delay-200">
            <div>
              <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4">
                Conheça o Especialista
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
                Dr. <span className="text-navy">Maximo Asinelli</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 33 anos de experiência, desde 1992 dedicados à medicina preventiva 
                e à nutrologia, o Dr. Asinelli desenvolveu uma abordagem única que combina 
                ciência de ponta com uma visão integrativa da saúde.
              </p>
              <p>
                Sua metodologia vai além das dietas convencionais, focando na investigação 
                profunda das causas metabólicas e utilizando terapias avançadas como peptídeos 
                para resultados extraordinários.
              </p>
              <p>
                "Acredito que cada paciente é único e merece um tratamento verdadeiramente 
                personalizado. Meu compromisso é com resultados reais e duradouros através 
                da medicina de precisão."
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {credentials.map((cred, index) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cred.label}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Agendar Com Dr. Maximo Asinelli
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
