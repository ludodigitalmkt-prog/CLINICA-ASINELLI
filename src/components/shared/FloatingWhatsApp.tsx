import { MessageCircle } from "lucide-react";
import { siteData } from "@/lib/site";

const FloatingWhatsApp = () => {
  return (
    <a
      href={siteData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </a>
  );
};

export default FloatingWhatsApp;
