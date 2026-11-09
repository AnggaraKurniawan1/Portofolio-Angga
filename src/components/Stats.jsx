import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5 rounded-od-lg"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 py-4 ${
                i < stats.length - 1 ? 'border-r' : ''
              }`}
              style={{ borderColor: 'var(--color-border)' }}
            >
              <span
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: 'var(--color-brand)' }}
              >
                {stat.value}
                <span className="text-xs font-semibold ml-0.5" style={{ color: 'var(--color-text-muted)' }}>
                  {stat.suffix}
                </span>
              </span>
              <span className="text-[11px] sm:text-xs font-medium mt-1" style={{ color: 'var(--color-text-muted)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
