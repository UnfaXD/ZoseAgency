'use client';

import type { IconType } from 'react-icons';
import { FiBookOpen, FiSend } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

import { useState } from 'react';

import { cn } from '@/lib/utils';

type TariffTabId = 'sending' | 'deposit' | 'school';

type TariffRow = {
  min: string;
  max: string;
  onNet: string;
  offNet: string;
};

const sendingRows: TariffRow[] = [
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
];

const depositRows: TariffRow[] = [
  { min: '1', max: '5,000', onNet: '1', offNet: '1,001' },
  { min: '5,001', max: '10,000', onNet: '1', offNet: '1,001' },
  { min: '10,001', max: '50,000', onNet: '1', offNet: '1,001' },
  { min: '50,001', max: '100,000', onNet: '1', offNet: '1,001' },
];

const schoolRows: TariffRow[] = [
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
  { min: '1', max: '1,001', onNet: '1', offNet: '1,001' },
];

const tabConfig: {
  id: TariffTabId;
  label: string;
  Icon: IconType;
  rows: TariffRow[];
}[] = [
  { id: 'sending', label: 'Sending Money', Icon: FiSend, rows: sendingRows },
  {
    id: 'deposit',
    label: 'Deposit & Withdraw',
    Icon: MdOutlineAccountBalanceWallet,
    rows: depositRows,
  },
  { id: 'school', label: 'School Fees', Icon: FiBookOpen, rows: schoolRows },
];

export default function TariffSections() {
  const [active, setActive] = useState<TariffTabId>('sending');
  const rows = tabConfig.find(t => t.id === active)?.rows ?? sendingRows;

  return (
    <section
      id="tariffs"
      className="scroll-mt-24 bg-[#F8F9FA] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="text-sm font-medium text-dark-60">
          Rwanda Zose Applicable MFS Price Structure
        </p>
        <h2 className="mt-2 font-display text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-dark sm:text-[52px] lg:text-[60px]">
          Our Tariffs reach
        </h2>

        <div
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
          role="tablist"
          aria-label="Tariff categories"
        >
          {tabConfig.map(tab => {
            const isActive = active === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`tariff-tab-${tab.id}`}
                aria-controls={`tariff-panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'inline-flex items-center justify-center gap-2.5 rounded-2xl border px-2 py-2 text-[11px] font-semibold transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                  isActive
                    ? 'border-transparent bg-primary text-white'
                    : 'border-dark-10 bg-white/90 text-primary hover:border-primary/30 hover:bg-white'
                )}
              >
                <span
                  className={cn(
                    'flex size-6 items-center justify-center rounded-xl transition-colors'
                  )}
                >
                  <Icon
                    className={cn(
                      'size-4',
                      isActive ? 'text-white' : 'text-primary'
                    )}
                    aria-hidden
                  />
                </span>
                <span className="pr-2">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`tariff-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tariff-tab-${active}`}
          className="mt-8 sm:mt-10"
        >
          <div className="overflow-hidden rounded-2xl border border-dark-10/60 bg-white">
            <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-dark-10 bg-smoke/80">
                    {(
                      [
                        'Min (Frw)',
                        'Max (Frw)',
                        'P2P On-net',
                        'P2P Off-net',
                      ] as const
                    ).map(label => (
                      <th
                        key={label}
                        scope="col"
                        className="px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-dark-60 sm:px-6"
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-10/40">
                  {rows.map((row, index) => (
                    <tr
                      key={`${row.min}-${row.max}-${index}`}
                      className={cn(
                        'transition-colors duration-150 hover:bg-primary/4',
                        index % 2 === 0 ? 'bg-white' : 'bg-smoke/40'
                      )}
                    >
                      <td className="px-4 py-3.5 font-medium tabular-nums text-dark sm:px-6">
                        {row.min}
                      </td>
                      <td className="px-4 py-3.5 font-medium tabular-nums text-dark sm:px-6">
                        {row.max}
                      </td>
                      <td className="px-4 py-3.5 font-medium tabular-nums text-dark sm:px-6">
                        {row.onNet}
                      </td>
                      <td className="px-4 py-3.5 font-medium tabular-nums text-dark sm:px-6">
                        {row.offNet}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
