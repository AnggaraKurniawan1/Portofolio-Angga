import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowRight, Award, Server, CheckCircle2, Bot } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', name: 'Semua Proyek' },
    { id: 'web', name: 'Web Application' },
    { id: 'it', name: 'IT Support & Infra' },
    { id: 'ai', name: 'AI & Automation' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category.includes('Web');
    if (filter === 'it') return p.category.includes('IT') || p.category.includes('Infra');
    if (filter === 'ai') return p.category.includes('Intelligence') || p.category.includes('Automation');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portofolio Unggulan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyek & Rekayasa Sistem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Kumpulan proyek nyata yang mencakup transformasi digital web enterprise, infrastruktur IT operasional lapangan, dan automasi cerdas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group ${
                project.featured ? 'ring-1 ring-blue-500/20 dark:ring-blue-400/20' : ''
              }`}
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 truncate max-w-[160px]">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Highlight (if available) */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 mb-5">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                          {m.label}
                        </span>
                        <span className="block text-xs font-extrabold text-blue-600 dark:text-blue-400">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/btn"
                >
                  <span>Detail Studi Kasus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Lihat GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Buka Link"
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

      {/* Pop-up Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
