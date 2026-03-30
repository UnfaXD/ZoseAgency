import Image from 'next/image';

/** Trusted-by row — logo assets in `public/assets/`. */
const partnerLogos = [
  { name: 'MTN', src: '/assets/mtn.svg', width: 140, height: 62 },
  { name: 'Chipper', src: '/assets/chipper.svg', width: 120, height: 40 },
  { name: 'Airtel', src: '/assets/airtel.svg', width: 100, height: 40 },
  { name: 'PiggyVest', src: '/assets/piggyvest.png', width: 120, height: 40 },
  { name: 'Bank of Kigali', src: '/assets/bk.png', width: 100, height: 52 },
  { name: 'Wise', src: '/assets/wise.png', width: 100, height: 36 },
  { name: 'Equity Bank', src: '/assets/equity.png', width: 100, height: 40 },
  { name: 'Air Peace', src: '/assets/air.png', width: 200, height: 42 },
] as const;

function AppStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.09 3.931-1.09.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.08c.34.27.54.68.54 1.12s-.21.85-.55 1.12l-2.07 1.67L15.62 12l1.57-1.78 2.97-2.28zm-3.62-7.07L6.05 2.66l10.76 6.22-2.26 2.26-8.5-8.5z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-14 sm:px-8 sm:pt-24 lg:px-10 lg:pt-52 pb-12 lg:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-8 xl:gap-12 flex-1">
        {/* Left: typographic stack — matches narrow subcopy column in mock */}
        <div className="lg:pt-6">
          <h1 className="font-display font-bold leading-[1.05] tracking-[-0.02em] text-dark text-[40px] sm:text-[48px] lg:text-[62px] xl:text-[72px]">
            Financial
            <br />
            Happiness,
            <br />
            Everywhere
          </h1>

          <p className="mt-6 w-full text-[14px] leading-[1.65] text-dark-60 sm:text-[15px]">
            Empowering businesses of all sizes with seamless payment solutions
            tailored for enterprises, startups, and emerging markets.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4">
            <span className="shrink-0 text-[11px] font-medium tracking-wide text-dark-60 sm:pb-2.5">
              Download app on
            </span>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="#"
                className="inline-flex h-[42px] items-center gap-2.5 rounded-full bg-primary pl-4 pr-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                App Store
                <span className="flex size-8 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <AppStoreIcon className="size-4 text-white" />
                </span>
              </a>
              <a
                href="#"
                className="inline-flex h-[42px] items-center gap-2.5 rounded-full bg-secondary pl-4 pr-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Play Store
                <span className="flex size-8 items-center justify-center rounded-full border border-white/25 bg-white/10">
                  <PlayStoreIcon className="size-4 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: full composition from design asset */}
        <div className="relative -mx-2 sm:mx-0">
          <div className="relative mx-auto w-full max-w-[920px]">
            <Image
              src="/assets/intro.png"
              alt="Product preview: devices and dashboard"
              width={1580}
              height={1040}
              priority
              className="h-auto w-full select-none"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 sm:mt-10 sm:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-dark-60 sm:text-xs sm:normal-case sm:tracking-wide">
          We are trusted by leading businesses across different sectors
        </p>
        <div className="mt-6 flex flex-wrap justify-between items-center gap-x-6 gap-y-5 sm:gap-x-8 lg:gap-x-10">
          {partnerLogos.map(logo => (
            <div
              key={logo.src}
              className="flex h-10 items-center justify-center sm:h-11"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto object-contain opacity-60 grayscale scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
