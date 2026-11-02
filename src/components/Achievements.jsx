import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, TrendingUp, CheckCircle, FileText, Video, Palette, Sparkles } from 'lucide-react';

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  const certIcons = {
    Award: Award,
    FileText: FileText,
    Video: Video,
    Palette: Palette
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Prestasi & Pengakuan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pencapaian & Sertifikasi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Bukti dedikasi, daya saing di kompetisi tingkat regional & nasional, serta komitmen pembelajaran berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Awards & Competitions */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Kompetisi & Penghargaan</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Tahun {item.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-2">
                    {item.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Training */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-500" />
              <span>Sertifikasi & Pelatihan Teknis</span>
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => {
                const IconComponent = certIcons[cert.icon] || Award;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cert.issuer} • <span className="font-medium text-slate-700 dark:text-slate-300">{cert.period}</span>
                      </p>
                    </div>

                    <span className="shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      Terverifikasi
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
