import { cn } from "@/lib/utils";

/** Logo mark: rounded evergreen tile with a caring cross-leaf */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <rect width="44" height="44" rx="13" fill="#0E7C6B" />
      <path
        d="M22 11v22M11 22h22"
        stroke="#fff"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
      <path
        d="M33.5 10.5c-4.4.5-7.2 2.3-8.6 5.3 1.9 1.3 4 1.7 6.2 1.1 2.3-.6 3.8-2.5 4.4-5.6l-2-.8Z"
        fill="#C08A2E"
      />
    </svg>
  );
}

export function LogoLockup({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] font-semibold tracking-tight",
            light ? "text-white" : "text-brand-ink"
          )}
        >
          Fina Medika
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.18em]",
            light ? "text-white/70" : "text-brand"
          )}
        >
          Klinik Pratama
        </span>
      </span>
    </span>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.25c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-[18px] w-[18px]", className)}>
      <path d="M16.6 3c.36 1.98 1.63 3.4 3.9 3.55v2.72c-1.34.13-2.52-.25-3.9-1.04v5.9c0 4.3-3.32 6.9-6.85 5.73-2.7-.9-4.15-3.2-3.95-5.9.2-2.75 2.5-4.98 5.35-4.98.34 0 .67.03 1.02.1v2.86c-.32-.1-.65-.15-.98-.13-1.34.06-2.35 1.13-2.3 2.44.05 1.26 1.1 2.32 2.35 2.32 1.34 0 2.32-1 2.32-2.5V3h3.04Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-[18px] w-[18px]", className)}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/** Row of 5 stars; value in 0..5, supports halves */
export function StarRow({
  value,
  className,
  size = "h-4 w-4",
}: {
  value: number;
  className?: string;
  size?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} role="img" aria-label={`Rating ${value} dari 5 bintang`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = value >= i - 0.25;
        const half = !filled && value >= i - 0.75;
        return (
          <svg key={i} viewBox="0 0 20 20" className={cn(size, filled || half ? "text-sand" : "text-stone-300")} fill="currentColor" aria-hidden="true">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#D6D3D1" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i})`}
                  d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
                />
              </>
            ) : (
              <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            )}
          </svg>
        );
      })}
    </span>
  );
}
