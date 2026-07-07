import { useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-asinelli.png";
import { siteData } from "@/lib/site";

const navItems = [
  { label: "Clínica", to: "/" },
  { label: "CMA", to: "/cma" },
  { label: "Epigenics", to: "/epigenics" },
];

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isCma = location.pathname === "/cma";

  const navClass = useMemo(
    () =>
      ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium transition-colors ${
          isActive
            ? isCma
              ? "text-sky-300"
              : "text-slate-950"
            : isCma
              ? "text-white/70 hover:text-white"
              : "text-slate-600 hover:text-slate-950"
        }`,
    [isCma],
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-2xl ${
        isCma
          ? "border-white/10 bg-slate-950/80 text-white"
          : "border-white/70 bg-white/72 text-slate-950"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className={`rounded-2xl p-2 ${isCma ? "bg-white" : "bg-white/80 shadow-soft"}`}>
            <img src={logo} alt="Clínica Asinelli" className="h-9 w-auto shrink-0" />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className={`truncate text-sm font-semibold ${isCma ? "text-white" : "text-slate-950"}`}>
              Clínica Asinelli
            </p>
            <p className={`truncate text-xs ${isCma ? "text-white/55" : "text-slate-500"}`}>
              Clínica • CMA • Epigenics
            </p>
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
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border md:hidden ${
            isCma ? "border-white/15 bg-white/10 text-white" : "border-slate-200 bg-white/80 text-slate-950"
          }`}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className={`border-t px-4 py-4 md:hidden ${isCma ? "border-white/10 bg-slate-950/95" : "border-white/70 bg-white/95"}`}>
          <div className="container-custom space-y-4">
            <div className={`rounded-3xl border p-4 ${isCma ? "border-white/10 bg-white/[0.06]" : "border-white/70 bg-white/80 shadow-soft"}`}>
              <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${isCma ? "bg-sky-300/10 text-sky-200" : "bg-sky-100 text-sky-800"}`}>
                <Sparkles className="h-3.5 w-3.5" />
                Navegação
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={navClass} onClick={() => setOpen(false)}>
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
