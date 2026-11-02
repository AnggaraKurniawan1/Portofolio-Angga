import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Layers, Network, CheckCircle, Sparkles, TrendingUp, Info } from 'lucide-react';

export default function Skills() {
  const { skillCategories, learningPhilosophy } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = [Network, Layers, Code, TrendingUp];

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter((_, idx) => idx.toString() === activeCategory);

  const getBadgeStyle = (level) => {
    if (level.includes('Praktik')) {
      return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
    }
    if (level.includes('Familiar')) {
      return 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    }
    if (level.includes('Otodidak')) {
      return 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
    }
    if (level.includes('Pelatihan')) {
      return 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800';
    }
    return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Kompetensi Sesuai CV
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keahlian Teknis & Fondasi Sistem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Daftar keahlian riil: menguasai fondasi dan alur logika sistem, berpengalaman di lapangan, serta memiliki kesiapan tinggi untuk terus mendalami implementasi baru secara otodidak.
          </p>
        </div>

        {/* Learning Philosophy Alert Card */}
        {learningPhilosophy && (
          <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-3xl glass-card border border-blue-200 dark:border-blue-900/50 shadow-sm flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {learningPhilosophy.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic mt-1 leading-relaxed">
                "{learningPhilosophy.quote}"
              </p>
            </div>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Semua Bidang
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx.toString())}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === idx.toString()
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, catIdx) => {
            const Icon = categoryIcons[catIdx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-blue-400/50 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          {skill.note && (
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 ml-3.5 mt-0.5">
                              {skill.note}
                            </p>
                          )}
                        </div>

                        <span className={`self-start sm:self-auto text-[10px] font-bold px-2.5 py-1 rounded-lg border tracking-wide whitespace-nowrap ${getBadgeStyle(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
