import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Database, Network, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

export default function About() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Latar Belakang & Profil
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tentang Anggara Kurniawan
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Menggabungkan keahlian analisa proses bisnis sistem informasi dengan implementasi perangkat lunak modern dan infrastruktur jaringan handal.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span>Profil Profesional</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Saya adalah lulusan <strong>S1 Sistem Informasi dari Institut Teknologi Kalimantan (ITK)</strong> dengan predikat kelulusan sangat memuaskan (IPK 3.63). Memiliki ketertarikan mendalam dan keahlian teruji dalam <strong>Analisis Sistem, Pengembangan Aplikasi Web (Laravel & Vue/React), Manajemen Basis Data, serta IT Support & Jaringan</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Selama perkuliahan dan pengalaman kerja di lapangan, saya terbiasa menghadapi tantangan nyata: mulai dari mendigitalisasi birokrasi manual laboratorium dengan 97 unit test tanpa cela (SIMLAB STMIK), pemodelan basis data relasional terintegrasi, hingga membangun infrastruktur jaringan server lokal mandiri tanpa koneksi internet luar saat gelaran acara maraton besar.
              </p>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>System & Business Analyst</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menganalisa user requirement, 24 User Stories PXP, perancangan basis data relasional.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span>Full-Stack Web Engineering</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Framework modern (Laravel, React, Vue.js, Tailwind) dengan standar clean code & PHPUnit.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-1">
                    <Database className="w-4 h-4" />
                    <span>Database & Data Modeling</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Perancangan ERD terstruktur, integrasi query MySQL efisien, dan data governance.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">
                    <Network className="w-4 h-4" />
                    <span>IT Support & Jaringan</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Konfigurasi router, switch, deployment server lokal, dan troubleshooting hardware lapangan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {education.period}
                </span>
                <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                  IPK: {education.gpa}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {education.institution}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {education.faculty} • {education.location}
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Dokumen Lengkap:
                </span>
                <a
                  href={personal.cvPath}
                  download="CV_Anggara_Kurniawan.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Unduh CV Resmi (PDF)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
