import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, FileText, Video, Palette } from 'lucide-react';

const certIcons = { Award, FileText, Video, Palette };

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div
            className="od-section-label mb-4"
            style={{
              backgroundColor: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.18)',
              color: '#D97706',
            }}
          >
            Prestasi & Pengakuan
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Pencapaian & Sertifikasi
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Bukti dedikasi, daya saing di kompetisi regional & nasional, dan komitmen pembelajaran berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Awards */}
          <div>
            <h3
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <Trophy className="w-4 h-4" style={{ color: '#F59E0B' }} />
              Kompetisi & Penghargaan
            </h3>
            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="od-surface p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                      className="od-pill"
                      style={{
                        backgroundColor: 'rgba(245,158,11,0.08)',
                        border: '1px solid rgba(245,158,11,0.18)',
                        color: '#D97706',
                      }}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-brand)' }}>
                    {item.issuer}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-5"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <Award className="w-4 h-4" style={{ color: 'var(--color-brand)' }} />
              Sertifikasi & Pelatihan
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => {
                const Icon = certIcons[cert.icon] || Award;
                return (
                  <div
                    key={idx}
                    className="od-surface flex items-center gap-4 p-4"
                  >
                    <div
                      className="w-11 h-11 rounded-od-md flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: 'rgba(94,106,210,0.08)',
                        border: '1px solid rgba(94,106,210,0.15)',
                        color: 'var(--color-brand)',
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-sm font-bold truncate"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {cert.title}
                      </h4>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        {cert.issuer} · {cert.period}
                      </p>
                    </div>
                    <span
                      className="shrink-0 od-pill"
                      style={{
                        backgroundColor: 'rgba(16,185,129,0.08)',
                        border: '1px solid rgba(16,185,129,0.18)',
                        color: '#10B981',
                      }}
                    >
                      Verified
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
