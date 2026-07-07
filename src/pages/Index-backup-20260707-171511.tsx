import type { LucideIcon } from "lucide-react";

import {
  Activity,
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Dna,
  HeartPulse,
  MapPin,
  MessageCircle,
  Microscope,
  Pill,
  Scale,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

import ClinicHeader from "@/components/clinic/ClinicHeader";
import ClinicFooter from "@/components/clinic/ClinicFooter";
import Reveal from "@/components/clinic/Reveal";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { siteData } from "@/lib/site";

import "../clinic.css";

type InfoCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const symptoms: InfoCard[] = [
  {
    icon: Scale,
    title: "Efeito sanfona",
    text: "Dificuldade para manter resultados, alterações metabólicas e gordura abdominal persistente.",
  },
  {
    icon: Activity,
    title: "Fadiga constante",
    text: "Cansaço ao acordar, pouca disposição e queda de energia ao longo do dia.",
  },
  {
    icon: HeartPulse,
    title: "Sinais do corpo",
    text: "Queda de cabelo, baixa libido, perda de massa muscular e outros sinais que merecem investigação.",
  },
];

const treatments: InfoCard[] = [
  {
    icon: Scale,
    title: "Peso saudável e revitalização",
    text: "Estratégias individualizadas para composição corporal, metabolismo e recuperação da vitalidade.",
  },
  {
    icon: Syringe,
    title: "Terapias injetáveis e peptídeos",
    text: "Protocolos personalizados com foco em reposição, sinalização celular e otimização biológica.",
  },
  {
    icon: Brain,
    title: "Potencial cerebral e performance",
    text: "Acompanhamento voltado à função cognitiva, foco, memória, disposição e desempenho.",
  },
  {
    icon: Pill,
    title: "Suplementação personalizada",
    text: "Vitaminas, minerais e aminoácidos definidos de acordo com exames, objetivos e necessidades individuais.",
  },
];

const precisionBenefits = [
  "Avaliação diagnóstica profunda e personalizada",
  "Mapeamento de biomarcadores e sinais metabólicos",
  "Investigação de desequilíbrios hormonais e celulares",
  "Protocolos construídos conforme o perfil de cada paciente",
];

const stats = [
  {
    value: "+33",
    label: "anos de experiência",
  },
  {
    value: "1992",
    label: "início da trajetória",
  },
  {
    value: "On-line",
    label: "e presencial",
  },
  {
    value: "Brasil",
    label: "receitas enviadas",
  },
];

const Index = () => {
  return (
    <div className="clinic-page">
      <ClinicHeader />

      <main>
        <section id="inicio" className="clinic-hero">
          <picture className="clinic-hero-media">
            <source
              media="(max-width: 720px)"
              srcSet={`${import.meta.env.BASE_URL}images/clinic/banner-clinica-mobile.jpg`}
            />

            <img
              src={`${import.meta.env.BASE_URL}images/clinic/banner-clinica-desktop.jpg`}
              alt="Atendimento médico na Clínica Asinelli"
            />
          </picture>

          <div className="clinic-hero-overlay" />

          <div className="clinic-shell clinic-hero-content">
            <Reveal className="clinic-hero-copy">
              <div className="clinic-eyebrow clinic-eyebrow-light">
                <Sparkles size={16} />
                Desde 1992 cuidando de pessoas
              </div>

              <h1>
                Medicina personalizada para viver com mais
                <span> saúde, energia e longevidade.</span>
              </h1>

              <p>
                Nutrologia e medicina de precisão com avaliação completa,
                acompanhamento individualizado e protocolos pensados para a
                sua realidade.
              </p>

              <div className="clinic-hero-actions">
                <a
                  className="clinic-button clinic-button-primary"
                  href={siteData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar minha consulta
                  <ArrowRight size={18} />
                </a>

                <button
                  className="clinic-button clinic-button-ghost"
                  onClick={() =>
                    document.getElementById("clinica")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Conhecer a clínica
                </button>
              </div>
            </Reveal>
          </div>

          <div className="clinic-shell clinic-stats-wrap">
            <div className="clinic-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="clinica"
          className="clinic-section clinic-about"
        >
          <div className="clinic-shell clinic-two-columns">
            <Reveal className="clinic-about-copy">
              <div className="clinic-eyebrow">
                Sobre a Clínica Asinelli
              </div>

              <h2>
                Cuidado médico com ciência, escuta e uma visão completa da
                saúde.
              </h2>

              <p>
                Na Clínica Asinelli, cada atendimento parte de uma análise
                individual. O objetivo é entender o que está por trás dos
                sintomas, identificar necessidades específicas e construir
                um plano de cuidado coerente com cada fase da vida.
              </p>

              <div className="clinic-check-grid">
                <div>
                  <CheckCircle2 />
                  Atendimento individualizado
                </div>

                <div>
                  <CheckCircle2 />
                  Medicina de precisão
                </div>

                <div>
                  <CheckCircle2 />
                  Acompanhamento contínuo
                </div>

                <div>
                  <CheckCircle2 />
                  Consulta presencial e on-line
                </div>
              </div>

              <a
                className="clinic-text-link"
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com nossa equipe
                <ArrowRight size={17} />
              </a>
            </Reveal>

            <Reveal
              className="clinic-about-image"
              delay={120}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/clinic/atendimento.jpg`}
                alt="Atendimento médico humanizado"
              />

              <div className="clinic-image-note">
                <Stethoscope size={22} />

                <div>
                  <strong>Atendimento com propósito</strong>

                  <span>
                    Escuta, investigação e cuidado personalizado.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="clinic-section clinic-soft-section">
          <div className="clinic-shell">
            <Reveal className="clinic-section-heading clinic-heading-center">
              <div className="clinic-eyebrow">
                Quando procurar avaliação
              </div>

              <h2>
                Seu corpo pode estar pedindo uma investigação mais profunda.
              </h2>

              <p>
                Sintomas frequentes não devem ser normalizados. Uma avaliação
                completa ajuda a entender causas e possibilidades de cuidado.
              </p>
            </Reveal>

            <div className="clinic-card-grid clinic-card-grid-3">
              {symptoms.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                >
                  <article className="clinic-info-card">
                    <div className="clinic-icon-box">
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

        <section className="clinic-precision">
          <div className="clinic-shell clinic-two-columns clinic-precision-grid">
            <Reveal>
              <div className="clinic-eyebrow clinic-eyebrow-dark">
                <Microscope size={16} />
                Medicina de precisão
              </div>

              <h2>
                Informações mais completas para decisões mais personalizadas.
              </h2>

              <p>
                A avaliação reúne experiência clínica, exames e análise
                individual para compreender aspectos físicos, metabólicos,
                hormonais e celulares.
              </p>

              <div className="clinic-benefit-list">
                {precisionBenefits.map((item) => (
                  <div key={item}>
                    <CheckCircle2 />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              className="clinic-precision-cards"
              delay={120}
            >
              <article>
                <Dna />
                <strong>Visão individual</strong>
                <span>
                  Cada organismo responde de forma única.
                </span>
              </article>

              <article>
                <Microscope />
                <strong>Análise aprofundada</strong>
                <span>
                  Exames avaliados dentro do contexto clínico.
                </span>
              </article>

              <article>
                <HeartPulse />
                <strong>Plano personalizado</strong>
                <span>
                  Condutas alinhadas aos objetivos e necessidades.
                </span>
              </article>

              <article>
                <CalendarDays />
                <strong>Acompanhamento</strong>
                <span>
                  Evolução observada ao longo do tratamento.
                </span>
              </article>
            </Reveal>
          </div>
        </section>

        <section
          id="tratamentos"
          className="clinic-section"
        >
          <div className="clinic-shell">
            <Reveal className="clinic-section-heading clinic-heading-center">
              <div className="clinic-eyebrow">
                Tratamentos
              </div>

              <h2>
                Protocolos construídos para diferentes necessidades.
              </h2>

              <p>
                O tratamento é definido somente após avaliação médica e análise
                das necessidades de cada paciente.
              </p>
            </Reveal>

            <div className="clinic-card-grid clinic-card-grid-2">
              {treatments.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                >
                  <article className="clinic-treatment-card">
                    <div className="clinic-icon-box">
                      <item.icon />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                    <ArrowRight className="clinic-card-arrow" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="especialista"
          className="clinic-section clinic-doctor-section"
        >
          <div className="clinic-shell clinic-doctor-grid">
            <Reveal className="clinic-doctor-image">
              <img
                src={`${import.meta.env.BASE_URL}images/clinic/dr-maximo.jpg`}
                alt="Dr. Maximo Asinelli"
              />

              <div className="clinic-doctor-register">
                <span>Registro profissional</span>
                <strong>CRM 13037-PR</strong>
                <small>RQE 10646</small>
              </div>
            </Reveal>

            <Reveal
              className="clinic-doctor-copy"
              delay={120}
            >
              <div className="clinic-eyebrow">
                Conheça o especialista
              </div>

              <h2>Dr. Maximo Asinelli</h2>

              <p className="clinic-doctor-intro">
                Mais de 33 anos de experiência dedicados à medicina
                preventiva, nutrologia e investigação personalizada da saúde.
              </p>

              <p>
                Sua abordagem combina experiência clínica, ciência e uma visão
                integrativa, com atenção às causas metabólicas e às
                particularidades de cada paciente.
              </p>

              <blockquote>
                “Cada paciente é único e merece um tratamento verdadeiramente
                personalizado.”
              </blockquote>

              <div className="clinic-doctor-tags">
                <span>Especialista em Nutrologia</span>
                <span>Membro ABRAN</span>
                <span>Desde 1992</span>
                <span>Medicina de precisão</span>
              </div>

              <a
                className="clinic-button clinic-button-dark"
                href={siteData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar com o Dr. Maximo
                <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="clinic-cta-strip">
          <div className="clinic-shell clinic-cta-strip-inner">
            <div>
              <span>
                Comece seu cuidado com uma avaliação individualizada.
              </span>

              <h2>
                Agende sua consulta com a Clínica Asinelli.
              </h2>
            </div>

            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </a>
          </div>
        </section>

        <section
          id="localizacao"
          className="clinic-section clinic-location-section"
        >
          <div className="clinic-shell">
            <Reveal className="clinic-section-heading clinic-heading-center">
              <div className="clinic-eyebrow">
                Localização
              </div>

              <h2>Venha nos conhecer.</h2>

              <p>
                Atendimento em Curitiba, com estrutura confortável e fácil
                acesso.
              </p>
            </Reveal>

            <div className="clinic-location-grid">
              <Reveal className="clinic-map-wrap">
                <iframe
                  title="Mapa da Clínica Asinelli"
                  src="https://www.google.com/maps?q=Rua%20Mal.%20Humberto%20de%20Alencar%20Castelo%20Branco%2C%20131%2C%20Curitiba%2C%20PR&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>

              <Reveal
                className="clinic-contact-panel"
                delay={120}
              >
                <article>
                  <MapPin />

                  <div>
                    <strong>Endereço</strong>

                    <span>
                      {siteData.addressLine1}
                      <br />
                      {siteData.addressLine2}
                    </span>
                  </div>
                </article>

                <article>
                  <Clock3 />

                  <div>
                    <strong>Horários</strong>

                    <span>
                      Segunda a Sexta: 08:30 às 12h
                      <br />
                      Segunda a Sexta: 14h às 17h
                    </span>
                  </div>
                </article>

                <article>
                  <MessageCircle />

                  <div>
                    <strong>Contato</strong>

                    <span>
                      {siteData.phoneDisplay}
                      <br />
                      {siteData.phoneMobileDisplay}
                    </span>
                  </div>
                </article>

                <a
                  className="clinic-button clinic-button-primary clinic-full-button"
                  href={siteData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar avaliação
                  <ArrowRight size={18} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <ClinicFooter />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
