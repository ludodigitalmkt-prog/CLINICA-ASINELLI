import { Link } from "react-router-dom";
import MainHeader from "@/components/shared/MainHeader";
import MainFooter from "@/components/shared/MainFooter";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-page text-foreground">
      <MainHeader />
      <main className="container-custom px-4 py-24 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto max-w-2xl rounded-[2rem] p-10 text-center">
          <p className="eyebrow justify-center">Página não encontrada</p>
          <h1 className="section-title">O conteúdo que você tentou abrir não existe.</h1>
          <p className="section-text mx-auto max-w-xl">
            Volte para a página principal para continuar navegando pela estrutura da Clínica Asinelli.
          </p>
          <Link to="/" className="mt-6 inline-flex rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Ir para a página inicial
          </Link>
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default NotFound;
