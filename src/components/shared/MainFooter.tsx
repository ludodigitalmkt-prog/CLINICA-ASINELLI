import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-asinelli.webp";
import { siteData } from "@/lib/site";

const MainFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/40 bg-slate-950 text-white">
      <div className="container-custom grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <img src={logo} alt="Clínica Asinelli" className="h-12 w-auto brightness-0 invert" />
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            Estrutura digital pensada para apresentar a clínica, o CMA e o exame Epigenics com
            uma comunicação mais clara, moderna e responsiva.
          </p>
          <div className="space-y-2 text-sm text-white/75">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {siteData.phoneDisplay}</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {siteData.addressLine1}</p>
            <p>{siteData.addressLine2}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">Páginas</h3>
          <nav className="space-y-3 text-sm text-white/75">
            <Link to="/" className="block transition-colors hover:text-white">Clínica</Link>
            <Link to="/cma" className="block transition-colors hover:text-white">CMA</Link>
            <Link to="/epigenics" className="block transition-colors hover:text-white">Epigenics</Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">Contato</h3>
          <div className="space-y-3 text-sm text-white/75">
            <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-white">
              WhatsApp: {siteData.phoneMobileDisplay}
            </a>
            <a href={siteData.maps} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-white">
              Ver localização no mapa
            </a>
            <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} Clínica Asinelli. Todos os direitos reservados.</p>
          <p>{siteData.crm}</p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
