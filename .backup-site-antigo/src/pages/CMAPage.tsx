import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck2,
  FileText,
  Plane,
  Shield,
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
    text: "Página com linguagem mais alinhada ao universo aeronáutico, sem perder o tom profissional da clínica.",
  },
  {
    icon: Users,
    title: "Comissários e candidatos",
    text: "Espaço ideal para orientar quem busca um atendimento mais organizado e visualmente claro.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Profissionais da aviação",
    text: "Estrutura útil para campanhas, anúncios e comunicação segmentada com esse público.",
  },
];

const steps = [
  {
    icon: CalendarCheck2,
    title: "Agendamento",
    text: "Botão de ação principal sempre visível para facilitar o contato imediato.",
  },
  {
    icon: FileText,
    title: "Orientações",
    text: "Área para documentos, preparo e informações importantes antes do atendimento.",
  },
  {
    icon: BadgeCheck,
    title: "Atendimento",
    text: "Página pronta para apresentar confiança, organização e direcionamento ao paciente.",
  },
];

const benefits = [
  "Estética inspirada em aviação, com azul, transparência e sensação de movimento",
  "Leitura limpa para funcionar bem em campanhas de tráfego e acessos pelo celular",
  "Espaço reservado para perguntas frequentes, instruções e diferenciais do atendimento",
  "Mesma base de contato e identidade da clínica, sem perder unidade visual",
];

const CMAPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <MainHeader />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.28),_transparent_25%),linear-gradient(135deg,#06101f_0%,#0f2747_48%,#12345d_100%)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-24 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-200/35 to-transparent" />
          </div>

          <div className="container-custom grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-white/10 px-4 py-2 text-sm text-sky-100 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-sky-300" />
                Página dedicada ao CMA
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Identidade visual com clima de <span className="text-sky-300">aviação</span>, mais leve e mais impactante.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
                  Aqui a proposta é separar o CMA em uma página própria, com uma pegada mais aérea, elegante e moderna para campanhas específicas.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    Agendar meu atendimento
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#cma-detalhes">Ver estrutura da página</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="rounded-[1.7rem] border border-white/12 bg-gradient-to-br from-sky-300/14 via-white/8 to-transparent p-6">
                  <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-sky-200/80">CMA</p>
                      <p className="mt-2 text-2xl font-semibold text-white">Página setorizada</p>
                    </div>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-300/12 text-sky-200">
                      <Plane className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      ["Visual", "Aviação + confiança"],
                      ["Objetivo", "Divulgação específica"],
                      ["Uso", "Desktop e mobile"],
                      ["CTA", "Agendamento rápido"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-black/10 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{label}</p>
                        <p className="mt-2 text-base font-semibold text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 bottom-8 hidden rounded-3xl border border-sky-200/15 bg-white/10 p-4 text-sm text-slate-100 backdrop-blur-xl lg:block">
                <p className="font-semibold text-white">Sensação visual</p>
                <p className="mt-1 max-w-[220px] leading-6 text-slate-200/90">Gradientes em azul, transparência e linhas sutis para remeter ao universo aeronáutico.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cma-detalhes" className="section-spacing bg-slate-950">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow !text-sky-300">Para quem a página fala</p>
              <h2 className="section-title !text-white">Comunicação direcionada para o público certo</h2>
              <p className="section-text !text-slate-300">
                A ideia é deixar o CMA com personalidade própria, sem poluir a página principal da clínica.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-200">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0 bg-slate-950">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_.92fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl lg:p-10">
                <p className="eyebrow !text-sky-300">Estrutura da experiência</p>
                <h2 className="section-title !text-white">Blocos que ajudam na conversão</h2>
                <p className="section-text !text-slate-300">
                  Esse formato facilita leitura rápida, entendimento do processo e clique no agendamento.
                </p>

                <div className="mt-8 grid gap-4">
                  {steps.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-black/10 p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-300/12 text-sky-200">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-sky-400/10 to-white/6 p-8 backdrop-blur-xl lg:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-200">
                  <Shield className="h-7 w-7" />
                </div>
                <p className="eyebrow !text-sky-300">Diferenciais visuais</p>
                <h2 className="section-title !text-white">Página preparada para crescer</h2>

                <div className="mt-6 space-y-3">
                  {benefits.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      <p className="text-sm leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="mt-8" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    Solicitar ajustes do CMA
                  </a>
                </Button>
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
