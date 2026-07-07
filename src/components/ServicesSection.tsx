import { Scale, Syringe, Brain, Pill, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scale,
    title: "Peso Saudável e Revitalização",
    description: "Foco na composição corporal ideal e recuperação da energia vital através de estratégias metabólicas inteligentes.",
    features: ["Composição corporal", "Energia vital", "Estratégias metabólicas"],
  },
  {
    icon: Syringe,
    title: "Terapias Injetáveis e Peptídeos",
    description: "Reposição rápida e direta de nutrientes e uso de sinalizadores celulares (peptídeos) para otimização biológica.",
    features: ["Nutrientes diretos", "Peptídeos", "Otimização biológica"],
  },
  {
    icon: Brain,
    title: "Potencial Cerebral e Performance",
    description: "Protocolos focados em melhorar a função cognitiva, foco, memória e desempenho físico.",
    features: ["Função cognitiva", "Foco e memória", "Desempenho físico"],
  },
  {
    icon: Pill,
    title: "Suplementação \"Holistic Health\"",
    description: "Longevidade através de suplementos orais e injetáveis personalizados (vitaminas, minerais, aminoácidos) para melhorar a imunidade e função celular.",
    features: ["Vitaminas e minerais", "Aminoácidos", "Função celular"],
  },
];

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/5541992678750?text=Olá, vim do site e gostaria de uma consulta";

  return (
    <section id="tratamentos" className="section-padding bg-muted/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-medium text-sm tracking-wider uppercase mb-4">
            Nossos Tratamentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
            Protocolos <span className="text-navy">Personalizados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A revolução celular a partir de programas com o uso de Peptídeos. 
            Cada organismo é único, por isso desenvolvemos protocolos individuais baseados na sua genética, 
            estilo de vida e objetivos pessoais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outlineNavy" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Conhecer todos os tratamentos
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
