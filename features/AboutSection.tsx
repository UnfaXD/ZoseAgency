import Image from 'next/image';

const paymentOptions = [
  'Debit & Credit cards',
  'M-Pesa',
  'Bank Account',
  'VISA QR',
  'Mobile money',
  'Bank Transfer',
  'POS',
  'USSD',
] as const;

const stats = [
  {
    title: '30+ Currencies',
    description: 'We accept payments in more than thirty currencies.',
  },
  {
    title: '20+ Banking Services',
    description: 'API calls per day, peaking at 231 requests per second.',
  },
  {
    title: '500k+ payments daily',
    description: 'Average number of payments processed daily.',
  },
  {
    title: '15+ payment options',
    description: 'Multiple rails to match how your customers pay.',
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start lg:gap-14">
          <div>
            <h2 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-dark sm:text-[52px] lg:text-[64px]">
              Our global reach
            </h2>

            <div className="mt-10 space-y-7 sm:mt-12">
              {stats.map(item => (
                <div
                  key={item.title}
                  className="grid grid-cols-[16px_1fr] gap-5"
                >
                  <div className="pt-2">
                    <div className="h-9 w-px bg-border" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-dark-60">
                      {item.description}
                    </p>

                    {item.title === '15+ payment options' ? (
                      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[12px] text-dark-60 sm:text-sm">
                        {paymentOptions.map(opt => (
                          <span key={opt}>{opt}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
              <Image
                src="/assets/mapping.png"
                alt="Map showing coverage and key cities"
                width={1600}
                height={1200}
                className="h-auto w-full select-none object-contain scale-90"
                sizes="(max-width: 1024px) 80vw, 60vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
