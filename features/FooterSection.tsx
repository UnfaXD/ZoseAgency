import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from 'react-icons/ri';

import Link from 'next/link';

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Collect Payments', href: '#' },
      { label: 'Send Money', href: '#' },
      { label: 'Payment Links', href: '#' },
      { label: 'Invoices', href: '#' },
      { label: 'Grow', href: '#' },
      { label: 'Send App', href: '#' },
      { label: 'Tuition', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Why you got charged', href: '#' },
      { label: 'Cookie settings', href: '#' },
      { label: 'Payment protection promise', href: '#' },
      { label: 'Dashboard Guide', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'API Status', href: '#', statusDot: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Customers', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
] as const;

const socialLinks = [
  { label: 'X', href: '#', Icon: RiTwitterXFill },
  { label: 'Facebook', href: '#', Icon: RiFacebookCircleFill },
  { label: 'Instagram', href: '#', Icon: RiInstagramLine },
  { label: 'YouTube', href: '#', Icon: RiYoutubeFill },
  { label: 'LinkedIn', href: '#', Icon: RiLinkedinBoxFill },
] as const;

export default function FooterSection() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-dark-10 bg-bg">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 xl:gap-12">
          {columns.map(col => (
            <div key={col.title}>
              <h3 className="text-sm font-bold tracking-wide text-dark">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-dark-60 transition-colors hover:text-dark"
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.label}
                        {'statusDot' in item && item.statusDot ? (
                          <span
                            className="inline-block size-2 shrink-0 rounded-full bg-primary"
                            title="Operational"
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold tracking-wide text-dark">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:hi@zosefinancial.com"
                  className="text-sm text-dark-60 transition-colors hover:text-dark"
                >
                  hi@zosefinancial.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-dark-10 pt-10 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dark-60 sm:justify-start">
            <Link href="#" className="transition-colors hover:text-dark">
              Privacy notice
            </Link>
            <Link href="#" className="transition-colors hover:text-dark">
              Terms of use
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-dark transition-opacity hover:opacity-70"
              >
                <Icon className="size-6 sm:size-7" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-dark-60">
          All right reserved © Zose
        </p>
      </div>
    </footer>
  );
}
