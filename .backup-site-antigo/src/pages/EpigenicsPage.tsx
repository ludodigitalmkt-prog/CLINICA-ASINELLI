import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FlaskConical,
  LayoutPanelTop,
  MonitorSmartphone,
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

const benefits = [
  {
    icon: ScanSearch,
    title: "Leitura estratégica",
    text: "Página com foco em clareza para explicar o exame, diferenciais e proposta de valor.",
  },
  {
    icon: FlaskConical,
    title: "Visual contemporâneo",
    text: "Estética mais tecnológica e premium, sem perder a leveza e a confiança da área da saúde.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsivo",
    text: "Blocos desenhados para ter boa navegação tanto no celular quanto no desktop.",
  },
  {
    icon: LayoutPanelTop,
    title: "Área pronta para expansão",
    text: "Estrutura separada para incluir checkout, pedido e meios de pagamento depois.",
  },
];

const journey = [
  "Apresentação do exame com explicação clara e objetiva",
  "Bloco de benefícios e diferenciais em cards organizados",
  "Seção de investimento e formas de pagamento com destaque visual",
  "CTA para pedir, tirar dúvidas ou finalizar pelo canal escolhido",
];

const paymentOptions = [
  {
    icon: WalletCards,
    title: "Pix",
    text: "Ideal para pagamento rápido. Condições podem ser ajustadas depois conforme a clínica definir.",
  },
  {
    icon: CreditCard,
    title: "Cartão de crédito",
    text: "Espaço pronto para destacar parcelamento ou condições especiais quando vocês definirem.",
  },
  {
    icon: Receipt,
    title: "Link de pagamento",
    text: "Fica fácil integrar futuramente com checkout online, emissão de cobrança ou pedido digital.",
  },
];

const EpigenicsPage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6fcff_0%,#eef7ff_32%,#f7fbff_100%)] text-foreground">
      <MainHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute left-[8%] top-20 h-44 w-44 rounded-full bg-cyan-200/45 blur-3xl" />
            <div className="absolute right-[8%] top-8 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl" />
          </div>

          <div className="container-custom relative grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-navy">
                <Sparkles className="h-4 w-4 text-violet-600" />
                Página dedicada ao Epigenics
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Uma vitrine mais moderna para o <span className="text-gradient">Epigenics</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Separei o Epigenics em uma página com estética mais contemporânea, preparada para destacar benefícios, investimento e o futuro pagamento online.
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
                  <a href="#pagamento">Ver bloco de pagamento</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel rounded-[2rem] p-4 shadow-elevated-soft">
                <div className="grid gap-4 rounded-[1.7rem] border border-white/60 bg-white/65 p-6 lg:grid-cols-2">
                  <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-white p-5 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Modo visual</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-900">Tecnologia + saúde</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Mistura de clareza, sofisticação e linguagem premium para um produto de alto valor percebido.</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-white p-5 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Estrutura</p>
                    <p className="mt-3 text-2xl font-semibold text-slate-900">Pronta para vendas</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">Espaços definidos para pedido, pagamento e integrações que você quiser colocar depois.</p>
                  </div>
                  <div className="rounded-3xl border border-dashed border-cyan-200 bg-cyan-50/70 p-5 lg:col-span-2">
                    <p className="text-sm font-semibold text-cyan-800">Observação estratégica</p>
                    <p className="mt-2 text-sm leading-7 text-cyan-900/80">
                      Como os valores são mais altos, essa página já deixa preparada uma área mais organizada para apresentar investimento, parcelamento e recebimento de pedido sem poluição visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">Benefícios da página</p>
              <h2 className="section-title">Separação inteligente para valorizar o exame</h2>
              <p className="section-text">
                Em vez de deixar tudo dentro da mesma página, o Epigenics ganha um ambiente próprio e mais preparado para venda consultiva.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((item) => (
                <article key={item.title} className="glass-card rounded-[2rem] p-6">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
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
            <div className="grid gap-8 lg:grid-cols-[1fr_.92fr]">
              <div className="glass-panel rounded-[2rem] p-8 lg:p-10">
                <p className="eyebrow">Estrutura de conteúdo</p>
                <h2 className="section-title">Como a página pode conduzir a venda</h2>
                <div className="mt-8 space-y-4">
                  {journey.map((item, index) => (
                    <div key={item} className="flex items-start gap-4 rounded-3xl bg-white/70 p-5 shadow-soft">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-8 lg:p-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="eyebrow">Mensagem importante</p>
                <h2 className="section-title">Página ideal para produto de maior ticket</h2>
                <p className="section-text">
                  O desenho visual ajuda a transmitir mais valor e organização, o que é essencial quando o serviço possui investimento maior.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Visual mais premium e confiável",
                    "Blocos separados para explicar o exame",
                    "Espaço para estratégia comercial mais clara",
                    "Base pronta para futura automação de pagamento",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-white/70 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pagamento" className="section-spacing pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">Formas de pagamento</p>
              <h2 className="section-title">Bloco pronto para receber o financeiro depois</h2>
              <p className="section-text">
                Por enquanto deixei uma área elegante e funcional, sem inventar valores. Depois a gente pluga as condições reais e, se quiser, já encaixa um checkout.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_.95fr]">
              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                {paymentOptions.map((item) => (
                  <article key={item.title} className="glass-card rounded-[2rem] p-6">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="glass-panel rounded-[2rem] p-8 lg:p-10">
                <p className="eyebrow">Próxima etapa</p>
                <h2 className="section-title">Integração comercial</h2>
                <p className="section-text !mb-8">
                  Quando você quiser, o próximo passo é ligar essa página a uma rotina de pedido e pagamento. Dá para fazer de um jeito simples e seguro.
                </p>

                <div className="space-y-4">
                  {[
                    "Formulário de solicitação ou pré-cadastro do paciente",
                    "Botão para geração de link de pagamento",
                    "Pagamento por Pix, cartão ou parcelamento",
                    "Confirmação automática por WhatsApp ou e-mail",
                  ].map((item) => (
                    <div key={item} className="rounded-3xl bg-white/70 p-5 shadow-soft">
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <Button variant="gold" size="lg" className="mt-8" asChild>
                  <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                    Planejar integração de pagamento
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

export default EpigenicsPage;
