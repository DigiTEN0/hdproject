import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31648932007"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="button-whatsapp"
      className="fixed left-4 bottom-4 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg whatsapp-pulse transition-transform hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7" />
    </a>
  );
}
