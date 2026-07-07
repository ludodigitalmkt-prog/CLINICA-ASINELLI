import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo-asinelli.png";
import { siteData } from "@/lib/site";

const navigation = [
  {
    label: "A clínica",
    id: "clinica",
  },
  {
    label: "Tratamentos",
    id: "tratamentos",
  },
  {
    label: "Dr. Maximo",
    id: "especialista",
  },
  {
    label: "Localização",
    id: "localizacao",
  },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const ClinicHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`clinic-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="clinic-shell clinic-header-inner">
        <button
          className="clinic-brand"
          onClick={() => scrollToSection("inicio")}
          aria-label="Ir para o início"
        >
          <img src={logo} alt="Clínica Asinelli" />
        </button>

        <nav className="clinic-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}

          <Link to="/cma">CMA</Link>
          <Link to="/epigenics">Epigenics</Link>
        </nav>

        <a
          className="clinic-header-cta"
          href={siteData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone size={17} />
          Agendar consulta
        </a>

        <button
          className="clinic-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="clinic-mobile-menu">
          <div className="clinic-shell">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </button>
            ))}

            <Link
              to="/cma"
              onClick={() => setMenuOpen(false)}
            >
              CMA
            </Link>

            <Link
              to="/epigenics"
              onClick={() => setMenuOpen(false)}
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
        </div>
      )}
    </header>
  );
};

export default ClinicHeader;
