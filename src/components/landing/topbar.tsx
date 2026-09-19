import { Clock4 } from "lucide-react";
import { CLINIC, waLink, WA_MESSAGES } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Topbar() {
  return (
    <div className="relative z-[60] bg-brand-deep text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-[0.8rem] sm:px-6">
        <p className="flex items-center gap-2 font-medium">
          <Clock4 className="h-4 w-4 text-brand-soft" aria-hidden="true" />
          <span className="hidden sm:inline">UGD &amp; Rawat Inap siaga </span>
          <span className="font-bold tracking-wide">24 JAM</span>
          <span className="hidden md:inline text-white/75">· setiap hari</span>
        </p>
        <a
          href={waLink(WA_MESSAGES.emergency)}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-semibold text-white transition hover:bg-white/20"
          aria-label="Hubungi kami via WhatsApp"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          {CLINIC.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
