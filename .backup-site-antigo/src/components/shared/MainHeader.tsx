import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-asinelli.png";
import { siteData } from "@/lib/site";

const navItems = [
  { label: "Clínica", to: "/" },
  { label: "CMA", to: "/cma" },
  { label: "Epigenics", to: "/epigenics" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-navy" : "text-foreground/70 hover:text-foreground"
  }`;

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55">
      <div className="container-custom flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="Clínica Asinelli" className="h-12 w-auto shrink-0" />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold text-navy">Clínica Asinelli</p>
            <p className="truncate text-xs text-muted-foreground">Clínica • CMA • Epigenics</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="gold" size="lg" asChild>
            <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Agendar atendimento
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-white/70 text-foreground md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/40 bg-white/90 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="container-custom space-y-4">
            <div className="glass-card rounded-2xl p-4">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-soft-blue px-3 py-1 text-xs font-medium text-navy">
                <Sparkles className="h-3.5 w-3.5" />
                Navegação rápida
              </div>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={navClass}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <Button variant="gold" size="lg" className="w-full" asChild>
              <a href={siteData.whatsapp} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Agendar atendimento
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
