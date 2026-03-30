import { FiArrowRight, FiFileText } from 'react-icons/fi';

import Image from 'next/image';

const features = [
  {
    title: 'Use Zose with your stack',
    description:
      'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
  },
  {
    title: 'Build Agent Account',
    description:
      'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
  },
  {
    title: 'Explore All Banking integrations',
    description:
      'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
  },
  {
    title: 'Generate Income with Zose',
    description:
      'We offer client and server libraries in everything from React and PHP to .NET and iOS.',
    linkText: 'See libraries',
  },
];

const SolutionSection = () => {
  return (
    <section
      id="solutions"
      className="relative w-full scroll-mt-24 overflow-hidden rounded-t-3xl bg-primary px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="text-secondary text-[11px] font-semibold">
              Designed for Agents
            </div>

            {/* Main Heading */}
            <h2 className="mt-6 font-display text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Powerful Platform to access all Bank in one app
            </h2>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-md bg-secondary px-6 py-3 text-[11px] font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Read the docs
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Feature Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 p-5 backdrop-blur-sm"
                >
                  {/* Icon */}
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-secondary shadow-sm">
                    <FiFileText
                      className="size-4 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-4 text-[11px] leading-relaxed text-white/75">
                    {feature.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-secondary transition-colors hover:text-secondary/90"
                  >
                    {feature.linkText}
                    <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mobile Phone Mockup */}
          <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <div className="relative">
              <div className="relative h-[560px] w-[300px] sm:h-[680px] sm:w-[360px] lg:h-[720px] lg:w-[380px]">
                <Image
                  src="/assets/mobile.png"
                  alt="Mobile app preview"
                  fill
                  priority
                  className="object-contain scale-125"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-14">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,48 C120,72 240,72 360,48 C480,24 600,24 720,48 C840,72 960,72 1080,48 C1200,24 1320,24 1440,48 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default SolutionSection;
