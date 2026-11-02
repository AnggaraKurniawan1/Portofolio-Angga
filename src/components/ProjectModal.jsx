import React from 'react';
import { X, ExternalLink, CheckCircle2, Award, Zap, Layers, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl glass-card bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>{project.badge}</span>
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center"
              >
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Description */}
        <div className="my-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Ringkasan Proyek & Solusi
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && (
          <div className="my-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Fitur & Implementasi Kunci
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="my-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Lihat Kode di GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Kunjungi Publikasi / Link</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-medium transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
