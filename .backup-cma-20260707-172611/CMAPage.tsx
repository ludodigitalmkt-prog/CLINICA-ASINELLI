import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

const audiences = [
  {
    icon: Plane,
    title: "Pilotos",
    text: "Atendimento voltado a profissionais e candidatos que precisam realizar sua avaliação médica aeronáutica.",
  },
  {
    icon: Users,
    title: "Comissários",
    text: "Orientação clara para quem está ingressando ou já atua na aviação civil.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Profissionais da aviação",
    text: "Uma experiência organizada para facilitar o agendamento e o preparo para a avaliação.",
  },
];

const process = [
  {
    icon: CalendarCheck2,
    title: "Agendamento",
    text: "Entre em contato com a equipe para consultar disponibilidade e receber as orientações iniciais.",
  },
  {
    icon: FileText,
    title: "Documentação",
    text: "A clínica informa previamente quais documentos e informações devem ser levados no dia.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação",
    text: "O atendimento é realizado de forma organizada, com foco em clareza e segurança em cada etapa.",
  },
];

const cmaFaq = [
  "Quem precisa realizar o CMA?",
  "Quais documentos devo levar?",
  "Como devo me preparar para a avaliação?",
  "Como consultar horários disponíveis?",
];

const CMAPage = () => {
  return (
    <div className="min-h-screen bg-cma text-white">
      <MainHeader />

      <main>
        <section className="cma-hero relative overflow-hidden">
          <div className="cma-grid" />
          <div className="cma-radar cma-radar-one" />
          <div className="cma-radar cma-radar-two" />
          <div className="cma-route-line" />
          <Plane className="cma-plane" />

          <div className="container-custom relative grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:px-8 lg:py-28">
            <div className="space-y-8">
              <div className="cma-pill">
                <Sparkles className="h-4 w-4 text-sky-300" />
                Certificado Médico Aeronáutico
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.07] text-white sm:text-5xl lg:text-7xl">
                  Seu próximo passo na aviação começa com o
                  <span className="text-sky-300"> cuidado certo.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                  Agende sua avaliação para o CMA com uma equipe preparada para orientar você antes, durante e depois do atendimento.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    Agendar avaliação
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white/25 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Atendimento organizado", "Orientações antecipadas", "Localização em Curitiba"].map((item) => (
                  <div key={item} className="cma-small-badge">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="cma-cockpit-card">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">CMA</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Avaliação médica aeronáutica</h2>
                  </div>
                  <div className="cma-icon-box">
                    <Plane className="h-8 w-8" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Agendamento", "Direto com a equipe"],
                    ["Atendimento", "Presencial em Curitiba"],
                    ["Orientações", "Antes da consulta"],
                    ["Suporte", "WhatsApp da clínica"],
                  ].map(([label, value]) => (
                    <div key={label} className="cma-data-card">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 cma-status-bar">
                  <span className="cma-status-dot" />
                  Atendimento disponível mediante agendamento
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-slate-950">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="cma-eyebrow">Para quem é</p>
              <h2 className="section-title !text-white">Atendimento direcionado ao público da aviação</h2>
              <p className="section-text !text-slate-300">
                A página do CMA foi organizada para facilitar o acesso às informações essenciais e tornar o agendamento mais rápido.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((item) => (
                <article key={item.title} className="cma-audience-card">
                  <div className="cma-icon-box">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-spacing bg-slate-950 pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="cma-process-shell">
              <div>
                <p className="cma-eyebrow">Etapas</p>
                <h2 className="section-title !text-white">Como funciona o atendimento</h2>
                <p className="section-text !text-slate-300">
                  A equipe acompanha o paciente desde o primeiro contato, ajudando a organizar o processo com mais tranquilidade.
                </p>
              </div>

              <div className="grid gap-4">
                {process.map((item, index) => (
                  <div key={item.title} className="cma-process-card">
                    <div className="flex items-center gap-4">
                      <span className="cma-number">0{index + 1}</span>
                      <div className="cma-process-icon">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-slate-950 pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
              <div className="cma-info-panel">
                <div className="cma-icon-box">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="cma-eyebrow mt-6">Antes do atendimento</p>
                <h2 className="section-title !text-white">Receba as orientações corretas antes da avaliação</h2>
                <p className="section-text !text-slate-300">
                  Como documentos, exigências e preparo podem variar de acordo com o perfil do atendimento, a equipe confirma tudo diretamente no agendamento.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    [BadgeCheck, "Documentos", "Confirme previamente o que deverá ser apresentado."],
                    [Clock3, "Horário", "Chegue com antecedência conforme a orientação da equipe."],
                    [FileText, "Informações", "Tenha em mãos dados médicos relevantes para o atendimento."],
                    [MapPin, "Localização", "A clínica está localizada em Curitiba, com acesso facilitado."],
                  ].map(([Icon, title, text]) => {
                    const CardIcon = Icon as typeof BadgeCheck;
                    return (
                      <div key={title as string} className="cma-detail-card">
                        <CardIcon className="h-5 w-5 text-sky-300" />
                        <h3 className="mt-4 font-semibold text-white">{title as string}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{text as string}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="cma-faq-panel">
                <p className="cma-eyebrow">Dúvidas frequentes</p>
                <h2 className="section-title !text-white">Informações rápidas</h2>
                <div className="mt-8 space-y-3">
                  {cmaFaq.map((item) => (
                    <div key={item} className="cma-faq-item">
                      <span>{item}</span>
                      <ArrowRight className="h-4 w-4 text-sky-300" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-sky-300 p-6 text-slate-950">
                  <p className="text-lg font-semibold">Ainda tem dúvidas?</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Fale com a equipe e receba as orientações necessárias para o seu atendimento.
                  </p>
                  <Button variant="navy" size="lg" className="mt-5" asChild>
                    <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">Falar com a clínica</a>
                  </Button>
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

export default CMAPage;
