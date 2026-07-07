import { useEffect, useState } from "react";
import { whatsappUrl } from "../lib/site";
import { IconWhatsapp } from "./Icons";

export default function WhatsappFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 font-semibold text-white shadow-2xl shadow-black/40 transition-all duration-300 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="pulse-ring relative grid h-7 w-7 place-items-center rounded-full">
        <IconWhatsapp className="relative h-7 w-7" />
      </span>
      <span className="hidden text-sm sm:inline">Cotiza gratis</span>
    </a>
  );
}
