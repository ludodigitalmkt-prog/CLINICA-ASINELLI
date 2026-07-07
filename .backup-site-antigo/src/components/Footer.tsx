import { Instagram } from "lucide-react";
import logo from "@/assets/logo-asinelli.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/maximoasinelli", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "O Método", href: "#metodo" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Sobre o Dr.", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Clínica Asinelli" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Nutrologia e Longevidade em Curitiba. 
              Tratamento personalizado para sua saúde e bem-estar.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              📞 (41) 3015-6001
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Clínica Asinelli. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            CRM 13037-PR | RQE 10646
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
