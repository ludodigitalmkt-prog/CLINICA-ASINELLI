import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import drAsinelli from "@/assets/dr-asinelli-terno.jpg";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { pageCards, siteData } from "@/lib/site";

const highlights = [
  {
    icon: Stethoscope,
    title: "Nutrologia personalizada",
    text: "Estratégias individualizadas para metabolismo, composição corporal e qualidade de vida.",
  },
  {
    icon: Brain,
    title: "Longevidade e performance",
    text: "Condutas pensadas para vitalidade, foco, energia e prevenção com acompanhamento clínico.",
  },
  {
    icon: Microscope,
    title: "Medicina de precisão",
    text: "Exames, análise detalhada e leitura estratégica para condutas mais assertivas.",
  },
  {
    icon: HeartPulse,
    title: "Protocolos avançados",
    text: "Tratamentos com visão integrativa, sempre respeitando a individualidade de cada paciente.",
  },
];

const methodSteps = [
  {
    step: "01",
    title: "Escuta e análise",
    text: "Entendimento do histórico, objetivos, sintomas e contexto de saúde do paciente.",
  },
  {
    step: "02",
    title: "Mapeamento clínico",
    text: "Leitura dos dados e direcionamento para uma conduta com mais precisão.",
  },
  {
    step: "03",
    title: "Acompanhamento",
    text: "Plano organizado para evolução, ajustes e constância no cuidado com a saúde.",
  },
];

const differentials = [
  "Atendimento com linguagem clara e acolhedora",
  "Visual moderno e responsivo para desktop e mobile",
  "Estrutura preparada para crescer com novas páginas e integrações",
  "Base pronta para receber informações do Epigenics e do CMA no mesmo projeto",
];

const scrollToId = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-page text-foreground">
      <MainHeader />

      <main>
        <section className="hero-orb overflow-hidden">
          <div className="container-custom grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-20">
            <div className="space-y-8">
              <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-navy">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                Reestruturação visual • Clínica + CMA + Epigenics
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Um site mais leve, elegante e com impacto visual para a
                  <span className="text-gradient ml-2">Clínica Asinelli</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Estrutura pensada para apresentar a clínica, abrir espaço para o CMA e receber o
                  Epigenics com uma estética clara, moderna e profissional.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5" />
                    Agendar consulta
                  </a>
                </Button>
                <Button variant="outlineNavy" size="xl" onClick={() => scrollToId("estrutura")}> 
                  Ver estrutura 3 em 1
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Visual", value: "Glass clean" },
                  { label: "Experiência", value: "Mobile + desktop" },
                  { label: "Estrutura", value: "3 páginas integradas" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-2xl p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card overflow-hidden rounded-[2rem] p-3 shadow-elevated-soft">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-cyan-100 via-white to-sky-50">
                  <img
                    src={drAsinelli}
                    alt="Dr. Maximo Asinelli"
                    className="h-[560px] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/60 bg-white/68 p-5 shadow-lg backdrop-blur-xl">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">Dr. Maximo Asinelli</p>
                        <p className="text-sm text-slate-600">Nutrologia • Longevidade • Medicina personalizada</p>
                      </div>
                      <div className="rounded-2xl bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Desde 1992
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-10 hidden rounded-3xl border border-white/60 bg-white/75 p-4 shadow-card backdrop-blur-xl lg:block">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Conceito visual</p>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-700">
                  Cores claras, efeito vidro e leitura mais premium para transmitir confiança na área da saúde.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">Áreas em destaque</p>
              <h2 className="section-title">Uma apresentação mais forte para a clínica</h2>
              <p className="section-text">
                Aqui deixei os principais blocos da página principal com linguagem mais nobre e organização
                visual que funciona bem tanto no computador quanto no celular.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <article key={item.title} className="glass-card rounded-3xl p-6">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
              <div className="glass-panel rounded-[2rem] p-8 lg:p-10">
                <p className="eyebrow">Jornada do paciente</p>
                <h2 className="section-title !mb-5">Fluxo simples, claro e elegante</h2>
                <p className="section-text !mb-8">
                  Montei uma lógica de conteúdo que ajuda o visitante a entender rapidamente o posicionamento da clínica.
                </p>

                <div className="grid gap-4">
                  {methodSteps.map((item) => (
                    <div key={item.step} className="rounded-3xl border border-white/55 bg-white/55 p-5 shadow-soft">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                          {item.step}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="sobre" className="glass-card rounded-[2rem] p-8 lg:p-10">
                <p className="eyebrow">Sobre o Dr.</p>
                <h2 className="section-title !mb-5">Confiança, credibilidade e presença</h2>
                <p className="section-text !mb-6">
                  O bloco institucional ficou mais refinado, com destaque para experiência, especialidade e uma fala mais humana.
                </p>

                <div className="space-y-3">
                  {differentials.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/65 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
                  <p className="text-lg font-semibold">{siteData.crm}</p>
                  <p className="mt-2 text-sm leading-7 text-white/75">
                    Espaço ideal para manter a parte profissional forte e ao mesmo tempo elegante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="estrutura" className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">Estrutura 3 em 1</p>
              <h2 className="section-title">As três páginas dentro do mesmo projeto</h2>
              <p className="section-text">
                Em vez de deixar tudo misturado, separei o projeto em três frentes para facilitar navegação, divulgação e futuras campanhas.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pageCards.map((card) => (
                <article key={card.title} className="glass-card rounded-[2rem] p-7">
                  <p className="mb-4 inline-flex rounded-full bg-soft-blue px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
                    {card.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">{card.description}</p>
                  <Button variant="outlineNavy" className="mt-6" asChild>
                    <Link to={card.to}>
                      Acessar página
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_.92fr]">
              <div className="glass-panel rounded-[2rem] p-8 lg:p-10">
                <p className="eyebrow">Contato e localização</p>
                <h2 className="section-title !mb-5">Sem alterar os dados principais da clínica</h2>
                <p className="section-text !mb-8">
                  Mantive a lógica de preservar telefone, localização e contato para você evoluir o visual sem perder a base importante que já existe.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/70 p-5 shadow-soft">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <p className="font-semibold text-slate-900">Contato</p>
                    <p className="mt-2 text-sm text-slate-600">{siteData.phoneDisplay}</p>
                    <p className="text-sm text-slate-600">{siteData.phoneMobileDisplay}</p>
                  </div>

                  <div className="rounded-3xl bg-white/70 p-5 shadow-soft">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Clock3 className="h-6 w-6" />
                    </div>
                    <p className="font-semibold text-slate-900">Horários</p>
                    <p className="mt-2 text-sm text-slate-600">Segunda a Sexta: 08:30 às 12h</p>
                    <p className="text-sm text-slate-600">Segunda a Sexta: 14h às 17h</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-8 lg:p-10">
                <div className="rounded-[1.6rem] border border-white/60 bg-white/75 p-6 shadow-soft">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">Endereço</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{siteData.addressLine1}</p>
                  <p className="text-sm leading-7 text-slate-600">{siteData.addressLine2}</p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="gold" asChild>
                      <a href={siteData.maps} target="_blank" rel="noopener noreferrer">
                        Ver no mapa
                      </a>
                    </Button>
                    <Button variant="outlineNavy" asChild>
                      <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                        Falar no WhatsApp
                      </a>
                    </Button>
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
