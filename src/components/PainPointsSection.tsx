import { Scale, BatteryLow, HeartPulse } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    title: "Efeito Sanfona",
    description: "Você faz dietas, come pouco, mas a gordura abdominal insiste em ficar. A culpa não é sua — seu metabolismo precisa de uma investigação mais profunda.",
  },
  {
    icon: BatteryLow,
    title: "Fadiga Constante",
    description: "Acorda cansado, tem sono após o almoço e falta energia para o dia a dia. Esse não é o normal, é sinal de desequilíbrio que precisa ser tratado.",
  },
  {
    icon: HeartPulse,
    title: "Sinais do Corpo",
    description: "Queda de cabelo, unhas fracas, baixa libido e perda de massa muscular. Seu corpo está pedindo atenção e as respostas estão nos seus exames.",
  },
];

const PainPointsSection = () => {
  return (
    <section id="metodo" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 opacity-0 animate-fade-up">
            Você sente que seu metabolismo{" "}
            <span className="text-navy">parou no tempo?</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-up animation-delay-100">
            Esses sintomas são mais comuns do que você imagina — e podem ser resolvidos com a abordagem certa.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={`group relative bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <point.icon className="w-8 h-8 text-gold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent rounded-tr-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
