import { Link } from "react-router-dom";
import {
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const CMAFooter = () => {
  return (
    <footer className="cma-footer">
      <div className="cma-container cma-footer-grid">
        <div className="cma-footer-brand">
          <img src={logo} alt="Clínica Asinelli" />

          <p>
            Atendimento em medicina aeronáutica com experiência,
            organização e acompanhamento em todas as etapas.
          </p>

          <div className="cma-footer-status">
            <ShieldCheck size={17} />
            Credenciamento ANAC ativo
          </div>

          <span>
            Clínica CLC 002 ANAC e MC 010 ANAC
          </span>
        </div>

        <div className="cma-footer-column">
          <h3>Contato</h3>

          <a href={siteData.phoneHref}>
            <Phone size={18} />
            <span>
              {siteData.phoneDisplay}
              <small>Telefone</small>
            </span>
          </a>

          <div>
            <Clock3 size={18} />

            <span>
              Segunda a sexta
              <small>08:30 às 12h e 14h às 17h</small>
            </span>
          </div>
        </div>

        <div className="cma-footer-column">
          <h3>Localização</h3>

          <a
            href={siteData.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={18} />

            <span>
              {siteData.addressLine1}
              <small>{siteData.addressLine2}</small>
            </span>
          </a>

          <Link to="/">
            Conhecer a Clínica Asinelli
          </Link>
        </div>
      </div>

      <div className="cma-footer-bottom">
        <div className="cma-container">
          <span>
            © {new Date().getFullYear()} Asinelli Clínicas.
          </span>

          <span>
            {siteData.crm}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default CMAFooter;
