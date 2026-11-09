import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Network, Layers, Code, TrendingUp, ChevronRight } from 'lucide-react';

const CATEGORY_META = [
  { icon: Network,    color: '#5E6AD2', bg: 'rgba(94,106,210,0.08)',   border: 'rgba(94,106,210,0.15)' },
  { icon: Layers,     color: '#10B981', bg: 'rgba(16,185,129,0.08)',   border: 'rgba(16,185,129,0.15)' },
  { icon: Code,       color: '#A78BFA', bg: 'rgba(167,139,250,0.08)',  border: 'rgba(167,139,250,0.15)' },
  { icon: TrendingUp, color: '#F59E0B', bg: 'rgba(245,158,11,0.08)',   border: 'rgba(245,158,11,0.15)' },
];

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeIdx, setActiveIdx] = useState(null); // null = all

  const displayed = activeIdx === null
    ? skillCategories
    : [skillCategories[activeIdx]];

  return (
    <section
      id="skills"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-bg-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="od-section-label mb-4">Kompetensi Utama</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Keahlian Teknis & Fondasi Sistem
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Keahlian teknis yang siap diimplementasikan secara profesional di industri teknologi informasi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveIdx(null)}
            className="od-pill transition-all"
            style={
              activeIdx === null
                ? { backgroundColor: 'var(--color-brand)', color: '#fff', border: '1px solid var(--color-brand)' }
                : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }
            }
          >
            Semua
          </button>
          {skillCategories.map((cat, idx) => {
            const meta = CATEGORY_META[idx % CATEGORY_META.length];
            return (
              <button
                key={cat.title}
                onClick={() => setActiveIdx(idx)}
                className="od-pill transition-all"
                style={
                  activeIdx === idx
                    ? { backgroundColor: meta.color, color: '#fff', border: `1px solid ${meta.color}` }
                    : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }
                }
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayed.map((cat, catIdx) => {
            const realIdx = activeIdx !== null ? activeIdx : catIdx;
            const meta = CATEGORY_META[realIdx % CATEGORY_META.length];
            const Icon = meta.icon;

            return (
              <div
                key={cat.title}
                className="od-surface p-6 sm:p-7 flex flex-col"
              >
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-od-md flex items-center justify-center shrink-0"
                    style={{ backgroundColor: meta.bg, border: `1px solid ${meta.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: meta.color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
                      {cat.title}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-od-sm"
                      style={{
                        backgroundColor: 'var(--color-surface-raised)',
                        border: '1px solid var(--color-border-subtle)',
                      }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: meta.color }}
                        />
                        <span
                          className="text-xs font-medium truncate"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded whitespace-nowrap shrink-0"
                        style={{
                          backgroundColor: meta.bg,
                          border: `1px solid ${meta.border}`,
                          color: meta.color,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
