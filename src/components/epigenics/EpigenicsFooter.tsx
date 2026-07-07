import { Link } from "react-router-dom";
import {
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const EpigenicsFooter = () => {
  return (
    <footer className="epi-footer">
      <div className="epi-container epi-footer-grid">
        <div className="epi-footer-brand">
          <img src={logo} alt="Clínica Asinelli" />

          <p>
            Análise epigenética de bem-estar com orientação
            profissional e atendimento pela Clínica Asinelli.
          </p>

          <div>
            <ShieldCheck size={17} />
            Informação complementar, não diagnóstica.
          </div>
        </div>

        <div className="epi-footer-column">
          <h3>Contato</h3>

          <a href={siteData.phoneHref}>
            <Phone size={17} />
            <span>{siteData.phoneDisplay}</span>
          </a>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={17} />
            <span>{siteData.phoneMobileDisplay}</span>
          </a>
        </div>

        <div className="epi-footer-column">
          <h3>Localização</h3>

          <a
            href={siteData.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} />

            <span>
              {siteData.addressLine1}
              <small>{siteData.addressLine2}</small>
            </span>
          </a>

          <a
            href="https://www.cell-wellbeing.com/pt/ciencia-epigenetica"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={17} />
            <span>Conhecer o fabricante</span>
          </a>
        </div>
      </div>

      <div className="epi-footer-bottom">
        <div className="epi-container">
          <span>
            © {new Date().getFullYear()} Clínica Asinelli.
          </span>

          <span>{siteData.crm}</span>

          <Link to="/">Voltar à clínica</Link>
        </div>
      </div>
    </footer>
  );
};

export default EpigenicsFooter;
