import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, Plane, X } from "lucide-react";

import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const links = [
  {
    label: "Diferenciais",
    id: "cma-diferenciais",
  },
  {
    label: "Certificações",
    id: "cma-servicos",
  },
  {
    label: "Como funciona",
    id: "cma-processo",
  },
  {
    label: "Dúvidas",
    id: "cma-duvidas",
  },
];

const goToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const CMAHeader = () => {
  const [open, setOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setOpen(false);
    goToSection(id);
  };

  return (
    <header className="cma-header">
      <div className="cma-header-inner">
        <Link
          to="/"
          className="cma-header-brand"
          aria-label="Voltar para Clínica Asinelli"
        >
          <img src={logo} alt="Clínica Asinelli" />

          <span>
            <Plane size={14} />
            Medicina aeronáutica
          </span>
        </Link>

        <nav className="cma-header-nav">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}

          <Link to="/">Clínica</Link>
          <Link to="/epigenics">Epigenics</Link>
        </nav>

        <a
          className="cma-header-button"
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone size={17} />
          Agendar exame
        </a>

        <button
          className="cma-menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="cma-mobile-menu">
          {links.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}

          <Link
            to="/"
            onClick={() => setOpen(false)}
          >
            Clínica
          </Link>

          <Link
            to="/epigenics"
            onClick={() => setOpen(false)}
          >
            Epigenics
          </Link>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default CMAHeader;
