import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Dna,
  HeartPulse,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import drAsinelli from "@/assets/dr-asinelli-terno.jpg";
import vitality from "@/assets/hero-vitality.jpg";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

const treatments = [
  {
    icon: Stethoscope,
    title: "Nutrologia e metabolismo",
    text: "Avaliação individualizada para compreender sinais do organismo, hábitos, composição corporal e objetivos de saúde.",
  },
  {
    icon: HeartPulse,
    title: "Longevidade e vitalidade",
    text: "Acompanhamento voltado à prevenção, energia, disposição e construção de uma rotina de cuidado mais consistente.",
  },
  {
    icon: Brain,
    title: "Performance física e mental",
    text: "Estratégias clínicas para apoiar foco, memória, desempenho, sono e recuperação, sempre de forma personalizada.",
  },
  {
    icon: Syringe,
    title: "Terapias e suplementação",
    text: "Condutas definidas após avaliação médica, exames e necessidade individual de cada paciente.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Consulta e escuta clínica",
    text: "O cuidado começa com uma avaliação detalhada do histórico, sintomas, rotina e objetivos do paciente.",
  },
  {
    number: "02",
    title: "Investigação personalizada",
    text: "Exames e informações clínicas ajudam a construir uma visão mais completa do organismo.",
  },
  {
    number: "03",
    title: "Plano individualizado",
    text: "A conduta é organizada de acordo com o momento, as necessidades e a evolução de cada pessoa.",
  },
];

const differentials = [
  "Mais de três décadas de experiência médica",
  "Avaliação clínica ampla e individualizada",
  "Atendimento presencial e on-line",
  "Acompanhamento com linguagem clara e próxima",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-clinic text-foreground">
      <MainHeader />

      <main>
        <section className="clinic-hero relative overflow-hidden">
          <div className="clinic-glow clinic-glow-one" />
          <div className="clinic-glow clinic-glow-two" />

          <div className="container-custom relative grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="glass-pill">
                <Sparkles className="h-4 w-4 text-sky-600" />
                Medicina personalizada em Curitiba
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-slate-950 sm:text-5xl lg:text-7xl">
                  Saúde, vitalidade e longevidade com um cuidado feito para
                  <span className="clinic-gradient-text"> você.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  A Clínica Asinelli reúne experiência médica, avaliação individualizada e uma visão ampla da saúde para acompanhar cada paciente de forma única.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5" />
                    Agendar consulta
                  </a>
                </Button>
                <Button variant="outlineNavy" size="xl" asChild>
                  <a href="#tratamentos">
                    Conhecer a clínica
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["+33 anos", "de experiência"],
                  ["Presencial", "em Curitiba"],
                  ["On-line", "para todo o Brasil"],
                ].map(([value, label]) => (
                  <div key={value} className="clinic-stat">
                    <p className="text-lg font-semibold text-slate-950">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="clinic-photo-shell">
                <img src={drAsinelli} alt="Dr. Maximo Asinelli" className="h-[580px] w-full object-cover object-top" />
                <div className="clinic-photo-overlay" />
                <div className="clinic-doctor-card">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">Dr. Maximo Asinelli</p>
                    <p className="mt-1 text-sm text-slate-600">Nutrologia, saúde metabólica e longevidade</p>
                  </div>
                  <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Desde 1992</div>
                </div>
              </div>

              <div className="clinic-floating-card clinic-floating-top">
                <Microscope className="h-5 w-5 text-sky-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Avaliação aprofundada</p>
                  <p className="text-xs text-slate-500">Cada paciente é único</p>
                </div>
              </div>

              <div className="clinic-floating-card clinic-floating-bottom">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Cuidado com propósito</p>
                  <p className="text-xs text-slate-500">Clareza em todas as etapas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tratamentos" className="section-spacing">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Áreas de cuidado</p>
                <h2 className="section-title">Uma visão mais completa da sua saúde</h2>
              </div>
              <p className="section-text lg:pb-2">
                O atendimento considera sintomas, histórico, rotina, exames e objetivos para construir uma estratégia clínica coerente com a realidade de cada paciente.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {treatments.map((item, index) => (
                <article key={item.title} className="clinic-service-card" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="clinic-service-icon">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="clinic-feature-grid">
              <div className="relative min-h-[480px] overflow-hidden rounded-[2.2rem]">
                <img src={vitality} alt="Saúde e vitalidade" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Cuidado integral</p>
                  <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                    Entender o organismo é o primeiro passo para cuidar melhor dele.
                  </h2>
                </div>
              </div>

              <div className="clinic-method-panel">
                <p className="eyebrow">Como funciona</p>
                <h2 className="section-title">Um acompanhamento organizado em etapas</h2>
                <p className="section-text">
                  A jornada é conduzida com escuta, investigação e acompanhamento, sempre respeitando o tempo e as necessidades de cada paciente.
                </p>

                <div className="mt-8 space-y-4">
                  {methodSteps.map((item) => (
                    <div key={item.number} className="clinic-step">
                      <span>{item.number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="clinic-doctor-section">
              <div>
                <p className="eyebrow">Sobre o médico</p>
                <h2 className="section-title">Experiência clínica com atendimento individualizado</h2>
                <div className="space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    O Dr. Maximo Asinelli atua desde 1992 e dedica sua prática à medicina preventiva, à nutrologia e ao acompanhamento de pacientes que buscam mais equilíbrio, vitalidade e qualidade de vida.
                  </p>
                  <p>
                    Sua abordagem combina escuta clínica, investigação detalhada e condutas personalizadas, com foco em decisões médicas mais conscientes e alinhadas à realidade de cada pessoa.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {differentials.map((item) => (
                    <div key={item} className="clinic-check-item">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="mt-8" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">Agendar com o Dr. Maximo</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Activity, title: "Saúde metabólica", text: "Acompanhamento baseado em contexto clínico e objetivos reais." },
                  { icon: Dna, title: "Medicina personalizada", text: "Condutas pensadas a partir da individualidade de cada paciente." },
                  { icon: Microscope, title: "Investigação clínica", text: "Exames e dados analisados de forma integrada." },
                  { icon: Brain, title: "Vitalidade e performance", text: "Estratégias voltadas ao bem-estar físico e mental." },
                ].map((item) => (
                  <article key={item.title} className="clinic-mini-card">
                    <item.icon className="h-6 w-6 text-sky-700" />
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">Outros serviços</p>
              <h2 className="section-title">Três áreas, uma experiência integrada</h2>
              <p className="section-text">
                A Clínica Asinelli também reúne páginas específicas para o Certificado Médico Aeronáutico e para o exame Epigenics.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Link to="/cma" className="clinic-link-card clinic-link-cma group">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">Aviação</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Certificado Médico Aeronáutico</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                    Informações, orientações e acesso rápido ao atendimento voltado ao público da aviação.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-1" />
              </Link>

              <Link to="/epigenics" className="clinic-link-card clinic-link-epi group">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">Saúde personalizada</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-950">Exame Epigenics</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    Conheça a proposta do exame, entenda o processo e solicite informações sobre investimento e pagamento.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-slate-950 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="clinic-contact-panel">
              <div>
                <p className="eyebrow">Atendimento</p>
                <h2 className="section-title">Agende sua consulta</h2>
                <p className="section-text max-w-2xl">
                  Fale com a equipe para receber orientações sobre horários, atendimento presencial ou consulta on-line.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="gold" size="lg" asChild>
                    <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
                  </Button>
                  <Button variant="outlineNavy" size="lg" asChild>
                    <a href={siteData.maps} target="_blank" rel="noopener noreferrer">Ver localização</a>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="clinic-contact-item">
                  <Phone className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="font-semibold text-slate-950">Contato</p>
                    <p className="mt-1 text-sm text-slate-600">{siteData.phoneDisplay}</p>
                    <p className="text-sm text-slate-600">{siteData.phoneMobileDisplay}</p>
                  </div>
                </div>
                <div className="clinic-contact-item">
                  <Clock3 className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="font-semibold text-slate-950">Horários</p>
                    <p className="mt-1 text-sm text-slate-600">Segunda a sexta: 08:30 às 12h</p>
                    <p className="text-sm text-slate-600">Segunda a sexta: 14h às 17h</p>
                  </div>
                </div>
                <div className="clinic-contact-item">
                  <MapPin className="h-5 w-5 text-sky-700" />
                  <div>
                    <p className="font-semibold text-slate-950">Endereço</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{siteData.addressLine1}</p>
                    <p className="text-sm text-slate-600">{siteData.addressLine2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
