import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { whatsappLink } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Përshëndetje! Dëshiroj informacion për punime gipsi.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Na shkruani në WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 motion-safe:animate-ping" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
