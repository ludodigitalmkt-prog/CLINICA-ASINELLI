import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Gauge,
  Headphones,
  MapPin,
  Plane,
  Radio,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Users,
  Zap,
} from "lucide-react";

import CMAHeader from "@/components/cma/CMAHeader";
import CMAFooter from "@/components/cma/CMAFooter";
import Reveal from "@/components/clinic/Reveal";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

import "../cma.css";

const makeWhatsAppLink = (message: string) => {
  const baseUrl = siteData.whatsapp.split("?")[0];

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

const numbers = [
  {
    number: "+5.000",
    label: "pilotos e profissionais atendidos",
  },
  {
    number: "Até 24h",
    label: "para resultado em muitos casos",
  },
  {
    number: "+32",
    label: "anos de experiência",
  },
];

const differentials = [
  {
    icon: BadgeCheck,
    title: "Pioneirismo no Sul",
    text: "Experiência consolidada em medicina aeronáutica e atendimento a profissionais da aviação.",
  },
  {
    icon: Building2,
    title: "Estrutura completa",
    text: "Avaliações e especialidades organizadas para tornar o processo mais simples e eficiente.",
  },
  {
    icon: Zap,
    title: "Atendimento ágil",
    text: "Fluxo otimizado, orientações claras e acompanhamento durante cada etapa do exame.",
  },
];

const certificates = [
  {
    icon: Plane,
    tag: "Classe 1",
    title: "Aviação comercial",
    text: "Atendimento para pilotos de linha aérea e pilotos comerciais, em exames iniciais e revalidações.",
    featured: true,
    whatsappMessage:
      "Olá! Vim pelo site da Clínica Asinelli e gostaria de agendar uma avaliação para o CMA Classe 1 — Aviação Comercial. Poderiam me informar os horários disponíveis e as orientações necessárias?",
  },
  {
    icon: Users,
    tag: "Classe 2",
    title: "Aviação geral e comissários",
    text: "Atendimento para pilotos privados, comissários de voo e outros profissionais da aviação.",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da Clínica Asinelli e gostaria de agendar uma avaliação para o CMA Classe 2 — Aviação Geral e Comissários. Poderiam me informar os horários disponíveis e as orientações necessárias?",
  },
  {
    icon: Radio,
    tag: "Classes 4 e 5",
    title: "Planadores e operações especiais",
    text: "Avaliações direcionadas a categorias específicas, conforme a necessidade de cada profissional.",
    featured: false,
    whatsappMessage:
      "Olá! Vim pelo site da Clínica Asinelli e gostaria de agendar uma avaliação para o CMA Classes 4 e 5 — Planadores e Operações Especiais. Poderiam me informar os horários disponíveis e as orientações necessárias?",
  },
];

const steps = [
  {
    number: "01",
    icon: CalendarCheck2,
    title: "Agendamento",
    text: "Entre em contato com nossa equipe e escolha a melhor data para sua avaliação.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Orientações",
    text: "Você recebe as informações sobre documentos, preparo e etapas necessárias.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Avaliação",
    text: "Realização das avaliações e exames indicados para a sua categoria.",
  },
  {
    number: "04",
    icon: UserRoundCheck,
    title: "Conclusão",
    text: "Após a análise, nossa equipe orienta sobre o resultado e os próximos passos.",
  },
];

const faqs = [
  {
    question: "Quais documentos preciso levar para o exame?",
    answer:
      "Para realizar seu exame CMA, você precisará levar o Código ANAC (CANAC), documento de identidade com foto, como RG ou CNH, CPF e, em caso de revalidação, o CMA anterior. Recomendamos chegar com 15 minutos de antecedência.",
  },
  {
    question: "O resultado sai na hora?",
    answer:
      "Na maioria dos casos, sim. Nosso processo é otimizado para entregar o laudo no mesmo dia. Quando houver necessidade de revisão de exames complementares, o prazo pode ser de 24 a 48 horas úteis.",
  },
  {
    question: "A clínica atende planos de saúde?",
    answer:
      "Sim. Atualmente, a Clínica Asinelli atende UNIMED. Entre em contato com nossa equipe para confirmar a cobertura e as condições do atendimento.",
  },
  {
    question: "Qual é o horário de atendimento?",
    answer:
      "Atendemos de segunda a sexta-feira, das 08h30 às 17h00. Recomendamos agendar com antecedência para garantir seu horário.",
  },
  {
    question: "Posso fazer todos os exames no mesmo dia?",
    answer:
      "Sim. Nossa estrutura Full Service permite realizar os exames necessários, como oftalmológico, cardiológico, psicológico e otorrinolaringológico, em uma única visita. Basta agendar com antecedência para que nossa equipe organize o atendimento.",
  },
];

const CMAPage = () => {
  return (
    <div className="cma-page">
      <main>
        <section className="cma-hero-section">
          <div className="cma-hero-card">
            <CMAHeader />

            <div className="cma-hero-background-word">
              CMA
            </div>

            <div className="cma-hero-grid">
              <div className="cma-hero-copy">
                <div className="cma-hero-badge cma-rise cma-delay-1">
                  <ShieldCheck size={17} />
                  Credenciamento ANAC
                </div>

                <h1>
                  <span className="cma-rise cma-delay-2">
                    Renove seu CMA
                  </span>

                  <span className="cma-rise cma-delay-3">
                    com quem entende
                  </span>

                  <span className="cma-rise cma-delay-4">
                    de <em>aviação.</em>
                  </span>
                </h1>

                <p className="cma-rise cma-delay-5">
                  Exames iniciais e revalidações para diferentes
                  classes de certificação, com estrutura completa em
                  Curitiba.
                </p>

                <div className="cma-hero-actions cma-rise cma-delay-6">
                  <a
                    href={siteData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar meu exame
                    <ArrowRight size={18} />
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("cma-servicos")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                  >
                    Conhecer certificações
                  </button>
                </div>
              </div>

              <div className="cma-plane-stage">
                <div className="cma-flight-line">
                  <span />
                </div>

                <div className="cma-plane-wrapper">
                  <Plane className="cma-plane-fallback" />

                  <img
                    src={`${import.meta.env.BASE_URL}images/cma/aviao-cma.png`}
                    alt=""
                    className="cma-plane-image"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="cma-cloud cma-cloud-one" />
                <div className="cma-cloud cma-cloud-two" />
                <div className="cma-cloud cma-cloud-three" />
                <div className="cma-cloud cma-cloud-four" />
              </div>
            </div>

            <div className="cma-hero-search">
              <div>
                <MapPin size={18} />
                Curitiba, Paraná
              </div>

              <div>
                <CalendarCheck2 size={18} />
                Agendamento organizado
              </div>

              <div>
                <Clock3 size={18} />
                Atendimento de segunda a sexta
              </div>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar horário
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="cma-numbers">
            {numbers.map((item) => (
              <Reveal key={item.number}>
                <div>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="cma-trust-row">
            <span>Credenciamento ANAC</span>
            <span>Medicina aeronáutica</span>
            <span>Atendimento em Curitiba</span>
            <span>Exames iniciais e revalidações</span>
          </div>
        </section>

        <section
          id="cma-diferenciais"
          className="cma-section cma-light-section"
        >
          <div className="cma-container">
            <Reveal className="cma-heading">
              <div className="cma-kicker">
                Diferenciais
              </div>

              <h2>
                Por que realizar seu CMA com a Clínica Asinelli?
              </h2>

              <p>
                Uma estrutura preparada para atender profissionais da
                aviação com clareza, organização e experiência.
              </p>
            </Reveal>

            <div className="cma-card-grid cma-card-grid-three">
              {differentials.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                >
                  <article className="cma-feature-card">
                    <div className="cma-feature-icon">
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

        <section
          id="cma-servicos"
          className="cma-section cma-services-section"
        >
          <div className="cma-container">
            <Reveal className="cma-heading">
              <div className="cma-kicker">
                Certificações
              </div>

              <h2>
                Avaliações para diferentes classes de CMA.
              </h2>

              <p>
                Atendimento direcionado à categoria e à necessidade
                de cada profissional.
              </p>
            </Reveal>

            <div className="cma-card-grid cma-card-grid-three">
              {certificates.map((item, index) => (
                <Reveal
                  key={item.tag}
                  delay={index * 90}
                >
                  <article
                    className={`cma-service-card ${
                      item.featured ? "is-featured" : ""
                    }`}
                  >
                    {item.featured && (
                      <span className="cma-popular">
                        Mais procurado
                      </span>
                    )}

                    <div className="cma-service-top">
                      <div className="cma-service-icon">
                        <item.icon />
                      </div>

                      <span>{item.tag}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <a
                      href={makeWhatsAppLink(item.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar avaliação
                      <ArrowRight size={18} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>

            <p className="cma-service-note">
              Exames iniciais e revalidações são organizados conforme
              a categoria e a necessidade de cada paciente.
            </p>
          </div>
        </section>

        <section
          id="cma-processo"
          className="cma-process-section"
        >
          <div className="cma-container">
            <Reveal className="cma-process-copy">
              <div className="cma-kicker cma-kicker-dark">
                Como funciona
              </div>

              <h2>
                Um processo organizado do agendamento à conclusão.
              </h2>

              <p>
                Nossa equipe acompanha cada etapa para que você saiba
                exatamente como se preparar e o que esperar.
              </p>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a equipe
                <ArrowRight size={18} />
              </a>
            </Reveal>

            <div className="cma-process-list">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 80}
                >
                  <article>
                    <span>{step.number}</span>

                    <div className="cma-process-icon">
                      <step.icon />
                    </div>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="cma-section cma-support-section">
          <div className="cma-container cma-support-grid">
            <Reveal className="cma-support-copy">
              <div className="cma-kicker">
                Atendimento especializado
              </div>

              <h2>
                Você não precisa organizar tudo sozinho.
              </h2>

              <p>
                Nossa equipe orienta sobre documentos, preparo,
                avaliações e etapas necessárias para o seu atendimento.
              </p>

              <div className="cma-support-items">
                <div>
                  <Headphones />
                  <span>Orientação antes do exame</span>
                </div>

                <div>
                  <Gauge />
                  <span>Fluxo de atendimento otimizado</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Acompanhamento durante o processo</span>
                </div>
              </div>

              <a
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar atendimento
                <ArrowRight size={18} />
              </a>
            </Reveal>

            <Reveal
              className="cma-support-panel"
              delay={120}
            >
              <div className="cma-panel-radar">
                <span />
                <span />
                <span />
                <Plane />
              </div>

              <div className="cma-panel-content">
                <Sparkles size={18} />
                <span>Destino</span>
                <strong>Sua próxima certificação</strong>
                <small>
                  Atendimento em Curitiba, com agendamento prévio.
                </small>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="cma-duvidas"
          className="cma-section cma-faq-section"
        >
          <div className="cma-container">
            <Reveal className="cma-heading">
              <div className="cma-kicker">
                Perguntas frequentes
              </div>

              <h2>Dúvidas sobre o CMA.</h2>

              <p>
                Confira respostas para algumas das perguntas mais
                comuns antes do agendamento.
              </p>
            </Reveal>

            <div className="cma-faq-list">
              {faqs.map((item, index) => (
                <Reveal
                  key={item.question}
                  delay={index * 50}
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

        <section className="cma-final-cta">
          <div className="cma-container cma-final-cta-inner">
            <div>
              <span>Pronto para o próximo passo?</span>

              <h2>
                Agende seu atendimento para o CMA.
              </h2>

              <p>
                Fale com nossa equipe e receba as primeiras orientações.
              </p>
            </div>

            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar pelo WhatsApp
              <ArrowRight size={19} />
            </a>
          </div>
        </section>
      </main>

      <CMAFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default CMAPage;
