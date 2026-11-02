import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Radio } from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Rekam Jejak Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pengalaman Kerja & Operasional
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pengalaman praktis mengelola infrastruktur IT, koordinasi logistik berskala besar, dan penyelesaian masalah teknis di bawah tekanan.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent dark:from-blue-600 dark:via-indigo-600" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 items-start group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 shadow-lg shadow-blue-500/20 items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>

                {/* Content Card */}
                <div className="w-full glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300">
                  
                  {/* Top Row: Role & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 mb-4">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tasks / Achievements */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    {exp.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{task}</span>
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
