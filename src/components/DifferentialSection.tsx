import { CheckCircle, Search, Atom, Calendar } from "lucide-react";

const benefits = [
  "Avaliação diagnóstica profunda e personalizada",
  "Mapeamento completo de biomarcadores avançados",
  "Identificação de desequilíbrios hormonais e celulares",
  "Protocolos com terapias inovadoras e peptídeos",
];

const DifferentialSection = () => {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Medicina de Precisão</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-primary-foreground leading-tight">
              Os mais avançados Exames de Saúde com{" "}
              <span className="text-gold">Medicina de Precisão</span>.
            </h2>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Utilizando a experiência de mais de 33 anos de Medicina, nossa avaliação 
              Diagnóstica de Saúde fornece informações detalhadas e personalizadas para 
              atender às suas necessidades específicas, indo muito além dos exames tradicionais.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 opacity-0 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <Search className="w-10 h-10 text-gold mb-4" />
              <div className="text-2xl font-display font-bold text-primary-foreground mb-2">Análise Diagnóstica Profunda</div>
              <p className="text-primary-foreground/70 text-sm">Mapeamento completo da saúde física, sexual e mental.</p>
            </div>
            
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 mt-8">
              <Atom className="w-10 h-10 text-gold mb-4" />
              <div className="text-2xl font-display font-bold text-primary-foreground mb-2">A Revolução Celular</div>
              <p className="text-primary-foreground/70 text-sm">Programas avançados com o uso de Peptídeos.</p>
            </div>
            
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <Calendar className="w-10 h-10 text-gold mb-4" />
              <div className="text-4xl font-display font-bold text-primary-foreground mb-2">+33 Anos</div>
              <p className="text-primary-foreground/70 text-sm">De experiência clínica e resultados.</p>
            </div>
            
            <div className="bg-gold/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 mt-8">
              <div className="text-4xl font-display font-bold text-gold mb-2">★★★★★</div>
              <p className="text-primary-foreground/70 text-sm">Referência em Curitiba desde 1992</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
