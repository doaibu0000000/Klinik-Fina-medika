"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { PhoneCall } from "lucide-react";
import { CLINIC, NAV_LINKS, waLink, WA_MESSAGES } from "@/lib/site";
import { LogoLockup, WhatsAppIcon } from "./icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [navBottom, setNavBottom] = useState<number>(64);

  const updateNavBottom = useCallback(() => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setNavBottom(Math.round(rect.bottom));
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      updateNavBottom();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNavBottom);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNavBottom);
    };
  }, [updateNavBottom]);

  // Lock/unlock body scroll — zero reflow, no position:fixed (which causes white flash)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleMenuNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    // Scroll after CSS transition ends (no Radix lock to wait for)
    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 350);
  };

  const remainingHeight = `calc(100dvh - ${navBottom}px)`;

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-[60] transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-paper shadow-[0_1px_0_0_rgba(23,51,46,0.08),0_4px_16px_-4px_rgba(23,51,46,0.1)]"
            : "bg-paper"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[4.5rem]"
          aria-label="Navigasi utama"
        >
          <a href="#beranda" className="shrink-0" aria-label={`${CLINIC.name} - kembali ke atas`}>
            <LogoLockup />
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-[0.92rem] font-medium text-stone-600 transition hover:bg-brand-soft hover:text-brand-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC.phoneIntl}`}
              className="hidden items-center gap-2 rounded-full border border-stone-200 bg-paper px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:border-brand hover:text-brand md:inline-flex"
              aria-label={`Telepon klinik ${CLINIC.phoneDisplay}`}
            >
              <PhoneCall className="h-4 w-4 text-brand" aria-hidden="true" />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-deep sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hubungi Kami
            </a>

            {/* Hamburger button — pure CSS, no Radix Sheet */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border bg-paper text-brand-ink shadow-sm select-none touch-manipulation outline-none lg:hidden",
                open
                  ? "border-brand bg-brand-soft text-brand"
                  : "border-stone-200"
              )}
              style={{ WebkitTapHighlightColor: "transparent", WebkitAppearance: "none" }}
              aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {/* Morphing Hamburger → X */}
              <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]" aria-hidden="true">
                <span
                  className={cn(
                    "h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out origin-center",
                    open ? "translate-y-[7px] rotate-45" : ""
                  )}
                />
                <span
                  className={cn(
                    "h-[2px] w-5 rounded-full bg-current transition-all duration-200 ease-out origin-center",
                    open ? "opacity-0 scale-x-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-out origin-center",
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu drawer — always in DOM, CSS transition only, NO portal ── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[55] lg:hidden"
        style={{
          backgroundColor: "rgba(23,51,46,0.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 280ms ease",
          top: `${navBottom}px`,
        }}
      />

      {/* Drawer panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className="fixed inset-x-0 z-[58] overflow-y-auto rounded-b-[2rem] border-b border-brand/10 shadow-[0_24px_54px_-12px_rgba(23,51,46,0.22)] lg:hidden"
        style={{
          top: `${navBottom}px`,
          maxHeight: remainingHeight,
          backgroundColor: "var(--paper)",
          transform: open ? "translateY(0)" : "translateY(-105%)",
          transition: open
            ? "transform 380ms cubic-bezier(0.16,1,0.3,1)"
            : "transform 280ms cubic-bezier(0.4,0,1,1)",
          willChange: "transform",
        }}
      >
        <nav aria-label="Navigasi seluler" className="px-5 pt-3 pb-6">
          <ul className="space-y-1.5">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href} className={`menu-cascade-${idx + 1}`}>
                <a
                  href={link.href}
                  onClick={(e) => handleMenuNav(e, link.href)}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-stone-700 transition-all duration-200 hover:bg-brand-soft hover:text-brand-deep hover:pl-5"
                >
                  <span className="flex items-center">{link.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-stone-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="menu-cascade-actions mt-5 space-y-3 border-t border-stone-100/80 pt-5 pb-2">
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-center gap-2.5 rounded-full bg-brand px-5 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-deep hover:shadow-soft-lg active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Chat WhatsApp (Siaga 24 Jam)</span>
            </a>
            <a
              href={`tel:${CLINIC.phoneIntl}`}
              className="flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3.5 text-base font-semibold text-brand-ink transition-all duration-200 hover:border-brand hover:text-brand hover:bg-brand-soft/40 active:scale-[0.99]"
            >
              <PhoneCall className="h-5 w-5 text-brand" />
              {CLINIC.phoneDisplay}
            </a>
            <p className="pt-1 text-center text-xs font-medium text-stone-500">
              {CLINIC.openingNote}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
