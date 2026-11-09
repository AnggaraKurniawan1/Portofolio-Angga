import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const FILTER_TABS = [
  { id: 'all',  name: 'Semua Proyek' },
  { id: 'web',  name: 'Web App' },
  { id: 'it',   name: 'IT Support & Infra' },
  { id: 'ai',   name: 'AI & Automation' },
];

export default function Projects() {
  const { projects } = portfolioData;
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category.includes('Web');
    if (filter === 'it')  return p.category.includes('IT') || p.category.includes('Infra');
    if (filter === 'ai')  return p.category.includes('Intelligence') || p.category.includes('Automation');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="od-section-label mb-4">Portofolio Unggulan</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Proyek & Rekayasa Sistem
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Proyek nyata mencakup transformasi digital web enterprise, infrastruktur IT lapangan, dan automasi cerdas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className="od-pill transition-all"
              style={
                filter === tab.id
                  ? { backgroundColor: 'var(--color-brand)', color: '#fff', border: '1px solid var(--color-brand)' }
                  : { backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }
              }
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="od-surface flex flex-col justify-between p-6"
              style={project.featured ? { borderColor: 'rgba(94,106,210,0.3)', boxShadow: '0 0 0 1px rgba(94,106,210,0.1)' } : {}}
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className="od-pill"
                    style={{
                      backgroundColor: 'rgba(94,106,210,0.08)',
                      border: '1px solid rgba(94,106,210,0.15)',
                      color: 'var(--color-brand)',
                    }}
                  >
                    {project.category}
                  </span>
                  {project.badge && (
                    <span
                      className="od-pill"
                      style={{
                        backgroundColor: 'rgba(245,158,11,0.08)',
                        border: '1px solid rgba(245,158,11,0.18)',
                        color: '#D97706',
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-1 group-hover:text-brand transition-colors"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {project.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p
                  className="text-xs leading-relaxed line-clamp-3 mb-5"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {project.summary}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div
                    className="grid grid-cols-2 gap-2 p-3 rounded-od-sm mb-5"
                    style={{
                      backgroundColor: 'var(--color-surface-raised)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                          {m.label}
                        </span>
                        <span
                          className="block text-xs font-extrabold"
                          style={{ color: 'var(--color-brand)' }}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((t) => (
                    <span key={t} className="od-skill-chip text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div
                className="pt-4 flex items-center justify-between gap-2"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: 'var(--color-brand)' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Detail Studi Kasus
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-od-sm transition-colors"
                      style={{ color: 'var(--color-text-muted)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-od-sm transition-colors"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
