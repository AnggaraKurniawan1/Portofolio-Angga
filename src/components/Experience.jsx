import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-bg-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="od-section-label mb-4">Rekam Jejak Profesional</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Pengalaman Kerja & Operasional
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Pengalaman praktis mengelola infrastruktur IT, koordinasi logistik, dan penyelesaian masalah teknis di lapangan.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div
            className="hidden sm:block absolute left-7 top-6 bottom-6 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--color-brand), transparent)' }}
          />

          <div className="space-y-7">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">

                {/* Timeline node */}
                <div
                  className="hidden sm:flex relative z-10 w-14 h-14 rounded-od-md items-center justify-center shrink-0 shadow-od-brand"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '2px solid var(--color-brand)',
                    color: 'var(--color-brand)',
                  }}
                >
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Card */}
                <div className="od-surface w-full p-5 sm:p-6">
                  {/* Top badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`od-pill ${exp.type.includes('Aktif') ? 'od-pill-success' : ''}`}
                      style={
                        !exp.type.includes('Aktif')
                          ? {
                              backgroundColor: 'rgba(94,106,210,0.08)',
                              border: '1px solid rgba(94,106,210,0.15)',
                              color: 'var(--color-brand)',
                            }
                          : {}
                      }
                    >
                      {exp.type.includes('Aktif') && (
                        <span className="relative flex h-1.5 w-1.5 mr-0.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                      )}
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <h3 className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    {exp.role}
                  </h3>

                  <div
                    className="flex flex-wrap items-center gap-2 text-xs mt-1 mb-4"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <span className="font-semibold" style={{ color: 'var(--color-brand)' }}>
                      {exp.company}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    {exp.description}
                  </p>

                  <div
                    className="space-y-2 pt-3"
                    style={{ borderTop: '1px solid var(--color-border)' }}
                  >
                    {exp.tasks.map((task, ti) => (
                      <div key={ti} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
