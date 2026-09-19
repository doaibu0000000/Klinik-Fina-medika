"use client";

import { useEffect, useState } from "react";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { cn } from "@/lib/utils";

export function FloatingWa() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp dengan Klinik Fina Medika"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25d366] py-3.5 pl-4 pr-5 text-sm font-bold text-white shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fb857]",
        "animate-wa-ring",
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </a>
  );
}
