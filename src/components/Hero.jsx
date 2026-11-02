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
  ExternalLink
} from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Lulusan S1 ITK • Siap Berkontribusi (Full-time / Project)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Sub-headline / Roles */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
              Information System Specialist, Software Engineer & IoT Enthusiast
            </p>

            {/* Bio summary */}
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
              Lulusan S1 Sistem Informasi dari <strong className="text-slate-900 dark:text-white font-semibold">Institut Teknologi Kalimantan</strong> (IPK 3.63). Berpengalaman dalam perancangan aplikasi web enterprise (<span className="text-blue-600 dark:text-blue-400 font-medium">Laravel & Vue.js/React</span>), sistem monitoring cerdas <span className="text-indigo-600 dark:text-indigo-400 font-medium">IoT PZEM-004T</span>, dan infrastruktur <span className="text-purple-600 dark:text-purple-400 font-medium">IT Support on-site</span>.
            </p>

            {/* Meta details (Location, GPA, Degree) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <Award className="w-4 h-4 text-amber-500" />
                <span>IPK: <strong>{personal.gpa}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>PXP & Unit Testing 100%</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 active:scale-95"
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
                <span>Unduh CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Tautan:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="GitHub Anggara Kurniawan"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Kirim Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Photo Card with Aesthetic Glows */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Animated decorative gradient borders */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card shadow-2xl p-3 bg-white/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Tag inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                    <p className="font-bold text-sm leading-tight flex items-center justify-between">
                      <span>{personal.name}</span>
                      <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300 border border-blue-400/30">
                        S.Kom (ITK)
                      </span>
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Institut Teknologi Kalimantan
                    </p>
                  </div>
                </div>

                {/* Floating Metric Badge 1: Top Right */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5 animate-bounce-slow">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">IPK Akademik</span>
                    <span className="block text-sm font-extrabold text-slate-900 dark:text-white">3.63 / 4.00</span>
                  </div>
                </div>

                {/* Floating Metric Badge 2: Bottom Left */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">UAT Score SIMLAB</span>
                    <span className="block text-sm font-extrabold text-emerald-600 dark:text-emerald-400">91.2% (Sangat Baik)</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
