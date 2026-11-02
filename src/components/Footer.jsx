import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 dark:text-white font-bold text-base">
              <span>{portfolioData.personal.name}</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              S1 Sistem Informasi • Institut Teknologi Kalimantan (ITK)
            </p>
          </div>

          {/* Center Info */}
          <div className="text-xs text-slate-500 dark:text-slate-400 text-center flex items-center gap-1.5">
            <span>Dibuat dengan React, Tailwind CSS & Vite</span>
          </div>

          {/* Back to top & GitHub */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AnggaraKurniawan1/Portofolio-Angga"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
              title="Repositori GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-semibold transition-colors"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-[11px] text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Anggara Kurniawan. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
