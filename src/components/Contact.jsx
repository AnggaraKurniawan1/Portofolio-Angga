import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Peluang Kerjasama / Diskusi Portofolio'
    )}&body=${encodeURIComponent(
      `Halo Anggara,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Mari Terhubung
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi Saya
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Terbuka untuk peluang kerja full-time, freelance project, implementasi sistem informasi, atau sekadar berdiskusi seputar rekayasa sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={personal.phoneUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  WhatsApp / Telepon
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white truncate">
                  {personal.phone}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                  Klik untuk chat langsung →
                </div>
              </div>
            </a>

            {/* Email Card with Copy button */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Email Resmi
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white truncate">
                  {personal.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline mt-0.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Tersalin ke clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin alamat email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Profile */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  GitHub Profile
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white truncate">
                  github.com/AnggaraKurniawan1
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Buka repositori & aktivitas →
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Domisili
                </div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {personal.location}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Siap relokasi / kerja remote
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Kirim Pesan Cepat
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Formulir ini akan langsung menghubungkan Anda ke email saya.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                      Aplikasi Email Terbuka!
                    </h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                      Pesan Anda telah disiapkan di aplikasi email default. Anda juga dapat mengirim pesan langsung via WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@perusahaan.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subjek
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Tawaran Posisi IT Support / Proyek Web"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pesan atau detail peluang yang ingin didiskusikan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan ke Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
