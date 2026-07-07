import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";

import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const links = [
  { label: "O que é", id: "epi-o-que-e" },
  { label: "Como funciona", id: "epi-como-funciona" },
  { label: "Relatório", id: "epi-relatorio" },
  { label: "Dúvidas", id: "epi-duvidas" },
  { label: "Pagamento", id: "epi-pagamento" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const EpigenicsHeader = () => {
  const [open, setOpen] = useState(false);

  const navigate = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="epi-header">
      <div className="epi-container epi-header-inner">
        <Link
          to="/"
          className="epi-brand"
          aria-label="Voltar para a Clínica Asinelli"
        >
          <img src={logo} alt="Clínica Asinelli" />
          <span>Epigenics</span>
        </Link>

        <nav className="epi-nav" aria-label="Navegação Epigenics">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}

          <Link to="/cma">CMA</Link>
          <Link to="/">Clínica</Link>
        </nav>

        <a
          className="epi-header-cta"
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} />
          Solicitar informações
        </a>

        <button
          type="button"
          className="epi-menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="epi-mobile-menu">
          <div className="epi-container">
            {links.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
              >
                {item.label}
              </button>
            ))}

            <Link to="/cma" onClick={() => setOpen(false)}>
              CMA
            </Link>

            <Link to="/" onClick={() => setOpen(false)}>
              Clínica
            </Link>

            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar informações
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default EpigenicsHeader;
