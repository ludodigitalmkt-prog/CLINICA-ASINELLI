import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const ClinicFooter = () => {
  return (
    <footer className="clinic-footer">
      <div className="clinic-shell clinic-footer-grid">
        <div className="clinic-footer-brand">
          <img src={logo} alt="Clínica Asinelli" />

          <p>
            Nutrologia, longevidade e medicina de precisão com atendimento
            individualizado.
          </p>
        </div>

        <div>
          <h3>Contato</h3>

          <a href={siteData.phoneHref}>
            <Phone size={16} />
            {siteData.phoneDisplay}
          </a>

          <a
            href={siteData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={16} />
            {siteData.phoneMobileDisplay}
          </a>

          <a
            href={siteData.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} />
            Curitiba/PR
          </a>
        </div>

        <div>
          <h3>Atendimento</h3>

          <p>Consultas presenciais e on-line.</p>
          <p>Envio de receitas para todo o Brasil.</p>

          <a
            href={siteData.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} />
            Instagram
          </a>
        </div>
      </div>

      <div className="clinic-footer-bottom">
        <div className="clinic-shell">
          <span>
            © {new Date().getFullYear()} Clínica Asinelli.
          </span>

          <span>{siteData.crm}</span>
        </div>
      </div>
    </footer>
  );
};

export default ClinicFooter;
