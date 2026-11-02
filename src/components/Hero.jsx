import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Terminal,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-12 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Lulusan S1 ITK • Siap Berkontribusi (Full-time / Project)</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-5">
          Halo, Saya <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
          Sistem Informasi • IT Support • Analisis Sistem & Pemrograman
        </p>

        {/* Bio summary */}
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto mb-8">
          Lulusan S1 Sistem Informasi dari <strong className="text-slate-900 dark:text-white font-semibold">Institut Teknologi Kalimantan</strong> (IPK 3.63). Memahami fondasi analisis sistem, basis data, dan alur aplikasi web, dengan pengalaman praktis <span className="text-blue-600 dark:text-blue-400 font-medium">IT Support lapangan</span>. Adaptif, profesional, dan berkomitmen tinggi untuk terus belajar memperdalam implementasi teknologi secara <span className="text-purple-600 dark:text-purple-400 font-medium">mandiri (otodidak)</span>.
        </p>

        {/* Meta details (Location, GPA, Testing) */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-10">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{personal.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <Award className="w-4 h-4 text-amber-500" />
            <span>IPK: <strong>{personal.gpa}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Adaptif & Siap Otodidak</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 active:scale-95"
          >
            <span>Eksplorasi Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.phoneUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 font-semibold text-base shadow-sm hover:shadow transition-all duration-200 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-500" />
            <span>Hubungi via WhatsApp</span>
          </a>

          <a
            href={personal.cvPath}
            download="CV_Anggara_Kurniawan.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Unduh CV (PDF)</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Tautan Cepat:
          </span>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="GitHub Anggara Kurniawan"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Kirim Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
