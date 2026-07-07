import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Dna,
  FileCheck2,
  FlaskConical,
  MessageCircle,
  Microscope,
  Receipt,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

const highlights = [
  {
    icon: ScanSearch,
    title: "Análise personalizada",
    text: "Uma proposta de avaliação que ajuda a ampliar a compreensão sobre hábitos, organismo e estilo de vida.",
  },
  {
    icon: Dna,
    title: "Saúde além do básico",
    text: "Informações apresentadas de forma clara para apoiar uma conversa mais individualizada sobre saúde.",
  },
  {
    icon: Microscope,
    title: "Tecnologia aplicada",
    text: "Uma experiência moderna, organizada e pensada para facilitar o acesso às informações do exame.",
  },
  {
    icon: FileCheck2,
    title: "Resultado orientado",
    text: "A interpretação e o uso das informações devem sempre ser conduzidos com acompanhamento profissional.",
  },
];

const journey = [
  {
    number: "01",
    title: "Solicite informações",
    text: "Converse com a equipe para entender indicação, disponibilidade, investimento e condições de pagamento.",
  },
  {
    number: "02",
    title: "Receba as orientações",
    text: "A clínica explica como funciona o processo e quais cuidados devem ser observados antes da realização.",
  },
  {
    number: "03",
    title: "Realize o exame",
    text: "O atendimento segue as orientações informadas pela equipe responsável.",
  },
  {
    number: "04",
    title: "Acompanhe o resultado",
    text: "Os dados são apresentados para apoiar uma leitura mais personalizada da saúde e dos hábitos.",
  },
];

const paymentOptions = [
  {
    icon: WalletCards,
    title: "Pix",
    text: "Pagamento rápido e confirmação direta com a equipe da clínica.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    text: "Consulte disponibilidade de parcelamento e condições vigentes.",
  },
  {
    icon: Receipt,
    title: "Link de pagamento",
    text: "A clínica pode encaminhar um link seguro após a confirmação do pedido.",
  },
];

const EpigenicsPage = () => {
  return (
    <div className="min-h-screen bg-epigenics text-foreground">
      <MainHeader />

      <main>
        <section className="epi-hero relative overflow-hidden">
          <div className="epi-orb epi-orb-one" />
          <div className="epi-orb epi-orb-two" />
          <div className="epi-orb epi-orb-three" />
          <div className="epi-network" />

          <div className="container-custom relative grid gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-28">
            <div className="space-y-8">
              <div className="epi-pill">
                <Sparkles className="h-4 w-4 text-violet-600" />
                Exame Epigenics
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.07] text-slate-950 sm:text-5xl lg:text-7xl">
                  Informações do seu organismo para um cuidado mais
                  <span className="epi-gradient-text"> personalizado.</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Conheça a proposta do exame Epigenics e entenda como ele pode contribuir para uma conversa mais individualizada sobre saúde, hábitos e longevidade.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="xl" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    Solicitar informações
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outlineNavy" size="xl" asChild>
                  <a href="#como-funciona">Como funciona</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Atendimento personalizado", "Orientação profissional", "Condições de pagamento"].map((item) => (
                  <div key={item} className="epi-small-badge">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="epi-dna-card">
                <div className="epi-dna-visual">
                  <div className="epi-dna-line epi-dna-line-one" />
                  <div className="epi-dna-line epi-dna-line-two" />
                  <Dna className="h-28 w-28 text-violet-600/75" strokeWidth={1.2} />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Proposta", "Saúde personalizada"],
                    ["Experiência", "Processo orientado"],
                    ["Contato", "Direto com a clínica"],
                    ["Pagamento", "Consulte condições"],
                  ].map(([label, value]) => (
                    <div key={label} className="epi-data-card">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 epi-security-bar">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  Atendimento e pagamento confirmados diretamente com a clínica
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="epi-eyebrow">Por que conhecer</p>
                <h2 className="section-title">Uma experiência moderna para entender melhor o exame</h2>
              </div>
              <p className="section-text lg:pb-2">
                Esta página organiza as principais informações do Epigenics de forma visual, clara e acessível, facilitando a decisão e o contato com a clínica.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item, index) => (
                <article key={item.title} className="epi-highlight-card" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="epi-icon-box">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="epi-journey-shell">
              <div>
                <p className="epi-eyebrow">Etapas</p>
                <h2 className="section-title">Como funciona o processo</h2>
                <p className="section-text">
                  A equipe orienta cada etapa para que o paciente saiba exatamente como prosseguir.
                </p>
              </div>

              <div className="grid gap-4">
                {journey.map((item) => (
                  <div key={item.number} className="epi-step-card">
                    <span className="epi-step-number">{item.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_.92fr]">
              <div className="epi-clinical-panel">
                <div className="epi-icon-box">
                  <FlaskConical className="h-7 w-7" />
                </div>
                <p className="epi-eyebrow mt-6">Informação importante</p>
                <h2 className="section-title">O exame não substitui a avaliação profissional</h2>
                <p className="section-text">
                  Os resultados devem ser compreendidos dentro do contexto clínico de cada pessoa. Por isso, a orientação profissional é essencial para interpretar as informações com responsabilidade.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Avaliação do contexto individual",
                    "Interpretação responsável dos resultados",
                    "Condutas definidas por profissional habilitado",
                    "Acompanhamento conforme a necessidade do paciente",
                  ].map((item) => (
                    <div key={item} className="epi-check-item">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="epi-request-card">
                <MessageCircle className="h-8 w-8 text-violet-700" />
                <p className="epi-eyebrow mt-6">Solicitação</p>
                <h2 className="section-title">Quer saber se o exame é indicado para você?</h2>
                <p className="section-text">
                  Fale com a equipe da Clínica Asinelli para receber informações sobre disponibilidade, processo, investimento e formas de pagamento.
                </p>
                <Button variant="gold" size="lg" className="mt-8" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">Conversar com a equipe</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="pagamento" className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="epi-payment-shell">
              <div>
                <p className="epi-eyebrow">Pagamento</p>
                <h2 className="section-title">Condições pensadas para facilitar sua solicitação</h2>
                <p className="section-text">
                  Os valores e condições são confirmados diretamente pela clínica. A equipe informa as opções disponíveis no momento do pedido.
                </p>

                <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-5 text-sm leading-7 text-violet-900">
                  Nenhum pagamento será realizado sem a confirmação das informações do exame e das condições apresentadas pela equipe.
                </div>
              </div>

              <div className="grid gap-4">
                {paymentOptions.map((item) => (
                  <article key={item.title} className="epi-payment-card">
                    <div className="epi-icon-box">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </article>
                ))}

                <Button variant="gold" size="lg" className="mt-2" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">Consultar valores e condições</a>
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

export default EpigenicsPage;
