import {
  Activity,
  ArrowRight,
  Atom,
  Brain,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  CreditCard,
  Dna,
  FileText,
  FlaskConical,
  HeartPulse,
  Leaf,
  LockKeyhole,
  Microscope,
  MessageCircle,
  Orbit,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TestTube2,
  WalletCards,
  Waves,
} from "lucide-react";

import EpigenicsHeader from "@/components/epigenics/EpigenicsHeader";
import EpigenicsFooter from "@/components/epigenics/EpigenicsFooter";
import Reveal from "@/components/shared/Reveal";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

import "../epigenics.css";

const makeWhatsAppLink = (message: string) => {
  const baseUrl = siteData.whatsapp.split("?")[0];

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

const reportAreas = [
  {
    icon: FlaskConical,
    title: "Vitaminas e minerais",
    text: "Categorias nutricionais apresentadas por prioridade de relevância.",
  },
  {
    icon: Leaf,
    title: "Alimentos e sensibilidades",
    text: "Sugestões alimentares e itens a considerar durante o ciclo de orientação.",
  },
  {
    icon: HeartPulse,
    title: "Suporte circulatório",
    text: "Informações organizadas para conversar sobre hábitos e suporte nutricional.",
  },
  {
    icon: Activity,
    title: "Recuperação muscular",
    text: "Categorias relacionadas a desempenho, recuperação e rotina física.",
  },
  {
    icon: Brain,
    title: "Aminoácidos e antioxidantes",
    text: "Leitura de relevância dentro das categorias avaliadas pelo relatório.",
  },
  {
    icon: Waves,
    title: "Fatores ambientais",
    text: "Informações sobre influências ambientais e de estilo de vida descritas pelo sistema.",
  },
];

const steps = [
  {
    number: "01",
    icon: TestTube2,
    title: "Coleta",
    text: "São utilizados quatro fios de cabelo com bulbos, coletados conforme a orientação da equipe.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Digitalização",
    text: "A amostra é posicionada no S-Drive para a leitura e o envio seguro das informações digitais.",
  },
  {
    number: "03",
    icon: Orbit,
    title: "Processamento",
    text: "O sistema organiza os dados em categorias e gera um relatório personalizado de bem-estar.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Orientação",
    text: "O relatório é apresentado ao paciente com explicações e recomendações de acompanhamento.",
  },
];

const faqs = [
  {
    question: "O relatório diagnostica doenças?",
    answer:
      "Não. O S-Drive é apresentado pelo fabricante como um dispositivo de bem-estar. O relatório não foi concebido para diagnosticar, tratar, curar ou prevenir doenças e não substitui consulta, exames laboratoriais ou avaliação médica.",
  },
  {
    question:
      "O relatório identifica alergias ou deficiências nutricionais?",
    answer:
      "Não. Segundo o fabricante, os itens são apresentados por relevância dentro das categorias do relatório. Isso não confirma alergias, intolerâncias, presença de toxinas ou deficiência de nutrientes.",
  },
  {
    question: "Como é feita a coleta?",
    answer:
      "A leitura utiliza quatro fios de cabelo com seus bulbos. A equipe orienta o local e a forma correta da coleta para realizar a digitalização logo em seguida.",
  },
  {
    question: "O que recebo ao final?",
    answer:
      "O paciente recebe um relatório de otimização com categorias nutricionais, alimentares e ambientais, além de uma proposta de acompanhamento para o período definido pela clínica.",
  },
  {
    question: "Por que o acompanhamento considera 90 dias?",
    answer:
      "A proposta do fabricante considera um ciclo de 90 dias para mudanças de alimentação, ambiente e estilo de vida. Uma nova leitura não é recomendada antes desse período.",
  },
];

const payments = [
  {
    icon: WalletCards,
    title: "Pix",
    text: "Pagamento rápido após a confirmação do pedido.",
  },
  {
    icon: CreditCard,
    title: "Cartão",
    text: "Condições e parcelamento serão informados pela clínica.",
  },
  {
    icon: ReceiptText,
    title: "Link de pagamento",
    text: "Checkout seguro enviado após a confirmação dos dados.",
  },
];

const EpigenicsPage = () => {
  const whatsappInfo = makeWhatsAppLink(
    "Olá! Vim pelo site da Clínica Asinelli e gostaria de receber informações sobre a análise epigenética de bem-estar, valores, preparo e horários disponíveis.",
  );

  const whatsappPayment = makeWhatsAppLink(
    "Olá! Vim pelo site da Clínica Asinelli e gostaria de saber o valor e as formas de pagamento da análise epigenética de bem-estar.",
  );

  return (
    <div className="epi-page">
      <EpigenicsHeader />

      <main>
        <section className="epi-hero">
          <div className="epi-grid-lines" />
          <div className="epi-glow epi-glow-one" />
          <div className="epi-glow epi-glow-two" />

          <div className="epi-cell-field" aria-hidden="true">
            {["a", "b", "c", "d", "e", "f"].map((item) => (
              <span
                key={item}
                className={`epi-cell epi-cell-${item}`}
              >
                <i />
              </span>
            ))}
          </div>

          <div className="epi-container epi-hero-grid">
            <Reveal className="epi-hero-copy">
              <div className="epi-kicker">
                <Sparkles size={16} />
                Análise epigenética de bem-estar
              </div>

              <h1>
                Seu estilo de vida deixa sinais.
                <span>
                  A tecnologia ajuda a organizá-los.
                </span>
              </h1>

              <p>
                Uma experiência personalizada que reúne informações
                sobre alimentação, ambiente e rotina em um relatório de
                apoio ao bem-estar.
              </p>

              <div className="epi-hero-actions">
                <a
                  href={whatsappInfo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar informações
                  <ArrowRight size={18} />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("epi-como-funciona")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  Entender como funciona
                </button>
              </div>

              <div className="epi-hero-trust">
                <div>
                  <LockKeyhole size={16} />
                  Processo orientado
                </div>

                <div>
                  <Microscope size={16} />
                  Tecnologia S-Drive
                </div>

                <div>
                  <ShieldCheck size={16} />
                  Uso complementar
                </div>
              </div>
            </Reveal>

            <Reveal
              className="epi-hero-visual"
              delay={120}
            >
              <div className="epi-device-frame">
                <div className="epi-device-label">
                  <span>Cell Wellbeing</span>
                  <strong>S-Drive</strong>
                </div>

                <div className="epi-device-placeholder">
                  <Atom />
                  <span>EPIGENICS</span>
                </div>

                <img
                  src={`${import.meta.env.BASE_URL}images/epigenics/aparelho-maos.png`}
                  alt="Dispositivo S-Drive utilizado na análise epigenética"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="epi-scan-ring epi-scan-ring-one" />
                <div className="epi-scan-ring epi-scan-ring-two" />

                <div className="epi-device-card">
                  <Dna size={22} />

                  <div>
                    <strong>Relatório personalizado</strong>
                    <span>
                      Informações organizadas por relevância.
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="epi-container epi-hero-stats">
            <div>
              <strong>4 fios</strong>
              <span>com bulbos para a leitura</span>
            </div>

            <div>
              <strong>Relatório</strong>
              <span>nutricional e ambiental</span>
            </div>

            <div>
              <strong>90 dias</strong>
              <span>ciclo sugerido de acompanhamento</span>
            </div>
          </div>
        </section>

        <section
          id="epi-o-que-e"
          className="epi-section epi-about-section"
        >
          <div className="epi-container epi-about-grid">
            <Reveal className="epi-about-copy">
              <div className="epi-section-kicker">
                Epigenética e bem-estar
              </div>

              <h2>
                Informações sobre como hábitos e ambiente podem se
                relacionar com a expressão biológica.
              </h2>

              <p>
                A epigenética estuda como fatores de alimentação,
                ambiente e estilo de vida podem influenciar a maneira
                como os genes se expressam. Nesta experiência, o
                S-Drive organiza informações em um relatório de
                otimização nutricional e ambiental.
              </p>

              <div className="epi-checks">
                <div>
                  <CheckCircle2 />
                  Alimentação e rotina
                </div>

                <div>
                  <CheckCircle2 />
                  Categorias nutricionais
                </div>

                <div>
                  <CheckCircle2 />
                  Influências ambientais
                </div>

                <div>
                  <CheckCircle2 />
                  Orientação de 90 dias
                </div>
              </div>

              <div className="epi-warning">
                <ShieldCheck />

                <p>
                  O relatório é complementar e não confirma doenças,
                  alergias, intoxicações ou deficiências nutricionais.
                </p>
              </div>
            </Reveal>

            <Reveal
              className="epi-about-panel"
              delay={120}
            >
              <div className="epi-orbit-stage">
                <div className="epi-orbit epi-orbit-one" />
                <div className="epi-orbit epi-orbit-two" />
                <div className="epi-orbit epi-orbit-three" />
                <Dna />
              </div>

              <div className="epi-about-panel-content">
                <span>Visão personalizada</span>

                <strong>
                  Dados organizados para uma conversa mais clara sobre
                  bem-estar.
                </strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="epi-como-funciona"
          className="epi-section epi-process-section"
        >
          <div className="epi-container">
            <Reveal className="epi-heading">
              <div className="epi-section-kicker">
                Como funciona
              </div>

              <h2>
                Da coleta ao relatório em quatro etapas.
              </h2>

              <p>
                Um processo simples, orientado pela equipe e
                apresentado de forma clara ao paciente.
              </p>
            </Reveal>

            <div className="epi-process-grid">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 70}
                >
                  <article>
                    <span>{step.number}</span>

                    <div>
                      <step.icon />
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="epi-relatorio"
          className="epi-section epi-report-section"
        >
          <div className="epi-container">
            <div className="epi-report-intro">
              <Reveal>
                <div className="epi-section-kicker">
                  O que aparece no relatório
                </div>

                <h2>
                  Categorias organizadas para facilitar a compreensão.
                </h2>

                <p>
                  O relatório apresenta itens por relevância dentro de
                  diferentes grupos. Eles servem como apoio para
                  conversar sobre alimentação, rotina e acompanhamento
                  profissional.
                </p>
              </Reveal>

              <Reveal
                className="epi-report-image"
                delay={100}
              >
                <div className="epi-report-image-frame">
                  <img
                    src={`${import.meta.env.BASE_URL}images/epigenics/aparelho-mesa.png`}
                    alt="S-Drive sobre a mesa durante a preparação da análise"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="epi-report-image-fallback">
                    <ScanLine />
                    <strong>S-Drive</strong>
                  </div>

                  <div>
                    <span>Tecnologia portátil</span>

                    <strong>
                      Leitura digital e relatório personalizado.
                    </strong>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="epi-report-grid">
              {reportAreas.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 55}
                >
                  <article>
                    <div>
                      <item.icon />
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="epi-section epi-cycle-section">
          <div className="epi-container epi-cycle-grid">
            <Reveal className="epi-cycle-copy">
              <div className="epi-section-kicker">
                Acompanhamento
              </div>

              <h2>
                Um ciclo de 90 dias para colocar as orientações em
                prática.
              </h2>

              <p>
                A proposta do fabricante considera que mudanças de
                alimentação, ambiente e estilo de vida precisam de
                tempo. Por isso, a nova leitura não é recomendada antes
                de 90 dias.
              </p>

              <a
                href={whatsappInfo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar com a equipe
                <ArrowRight size={18} />
              </a>
            </Reveal>

            <Reveal
              className="epi-cycle-timeline"
              delay={100}
            >
              <div>
                <span>Dia 1</span>
                <strong>Relatório e orientação</strong>
                <small>
                  Entendimento das prioridades e definição do plano.
                </small>
              </div>

              <div>
                <span>30 dias</span>
                <strong>Adaptação da rotina</strong>
                <small>
                  Aplicação das orientações nutricionais e de estilo
                  de vida.
                </small>
              </div>

              <div>
                <span>60 dias</span>
                <strong>Acompanhamento</strong>
                <small>
                  Observação da experiência e ajustes profissionais
                  quando necessários.
                </small>
              </div>

              <div>
                <span>90 dias</span>
                <strong>Nova avaliação possível</strong>
                <small>
                  Momento indicado pelo fabricante para uma nova
                  leitura.
                </small>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="epi-duvidas"
          className="epi-section epi-faq-section"
        >
          <div className="epi-container">
            <Reveal className="epi-heading">
              <div className="epi-section-kicker">
                Perguntas frequentes
              </div>

              <h2>
                Entenda os limites e a proposta da análise.
              </h2>

              <p>
                Transparência é essencial para usar as informações com
                responsabilidade.
              </p>
            </Reveal>

            <div className="epi-faq-list">
              {faqs.map((item, index) => (
                <Reveal
                  key={item.question}
                  delay={index * 45}
                >
                  <details>
                    <summary>
                      <span>{item.question}</span>
                      <ChevronDown />
                    </summary>

                    <p>{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="epi-pagamento"
          className="epi-section epi-payment-section"
        >
          <div className="epi-container">
            <div className="epi-payment-grid">
              <Reveal className="epi-payment-copy">
                <div className="epi-payment-icon">
                  <CircleDollarSign />
                </div>

                <div className="epi-section-kicker">
                  Formas de pagamento
                </div>

                <h2>
                  Escolha a condição mais adequada após confirmar o
                  atendimento.
                </h2>

                <p>
                  Os valores e as condições serão informados pela
                  Clínica Asinelli. Os botões de checkout direto serão
                  adicionados quando você enviar os links de
                  pagamento.
                </p>

                <a
                  href={whatsappPayment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar valor e condições
                  <MessageCircle size={18} />
                </a>
              </Reveal>

              <div className="epi-payment-cards">
                {payments.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 65}
                  >
                    <article>
                      <div>
                        <item.icon />
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span>Disponível após confirmação</span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="epi-disclaimer">
              <ShieldCheck />

              <div>
                <strong>Aviso importante</strong>

                <p>
                  O S-Drive é um dispositivo de bem-estar. O relatório
                  não se destina a diagnosticar, tratar, curar ou
                  prevenir doenças e não substitui consulta médica,
                  exames laboratoriais ou avaliação profissional.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <EpigenicsFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default EpigenicsPage;
