import React, { useState } from 'react';
import { 
  Laptop, 
  Layers, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  Play, 
  RotateCcw, 
  Palette, 
  Compass, 
  Code2, 
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function InteractiveStudio() {
  const [activeTab, setActiveTab] = useState('prototype');

  // Prototype state
  const [selectedService, setSelectedService] = useState('sertifikasi');
  const [applicantName, setApplicantName] = useState('Anggara Kurniawan');
  const [applicantNim, setApplicantNim] = useState('10221074');
  const [simState, setSimState] = useState('idle'); // idle | processing | done
  const [simStep, setSimStep] = useState(0);

  const services = [
    {
      id: 'sertifikasi',
      name: 'Sertifikasi Kompetensi',
      desc: 'Validasi kelulusan & penerbitan sertifikat laboratorium.',
      role: 'Staff Lab'
    },
    {
      id: 'penelitian',
      name: 'Izin Penelitian',
      desc: 'Pengajuan izin penggunaan fasilitas lab untuk riset tugas akhir.',
      role: 'Kepala Lab'
    },
    {
      id: 'peminjaman',
      name: 'Peminjaman Ruangan',
      desc: 'Pengecekan jadwal & peminjaman ruang komputer tanpa bentrok.',
      role: 'Koordinator'
    },
    {
      id: 'bebas-lab',
      name: 'Surat Bebas Lab',
      desc: 'Deteksi otomatis tanggungan alat/buku sebelum kelulusan.',
      role: 'Admin Akademik'
    }
  ];

  const handleRunSimulation = () => {
    setSimState('processing');
    setSimStep(1);

    setTimeout(() => {
      setSimStep(2);
    }, 700);

    setTimeout(() => {
      setSimStep(3);
    }, 1400);

    setTimeout(() => {
      setSimState('done');
    }, 2000);
  };

  const handleResetSimulation = () => {
    setSimState('idle');
    setSimStep(0);
  };

  return (
    <section id="studio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pola Desain OpenDesign: Interactive Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Laboratorium Interaktif & Prototipe Sistem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Terinspirasi dari konsep <em>AI Design Agent Workspace</em> OpenDesign: simulasi alur kerja digital interaktif, inspeksi token desain, dan peta pembelajaran otodidak.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/60 gap-1">
            <button
              onClick={() => setActiveTab('prototype')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'prototype'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Simulasi Alur SIMLAB</span>
            </button>
            <button
              onClick={() => setActiveTab('tokens')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tokens'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Design Tokens & Craft</span>
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Peta Belajar Otodidak</span>
            </button>
          </div>
        </div>

        {/* TAB 1: SIMLAB WORKFLOW SIMULATOR */}
        {activeTab === 'prototype' && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-5xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 uppercase tracking-wider">
                  Interactive Prototype
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1.5">
                  Simulasi 4 Alur Layanan SIMLAB STMIK
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Uji coba langsung bagaimana sistem memvalidasi alur birokrasi, pencegahan tumpang tindih, dan persetujuan.
                </p>
              </div>

              {simState === 'done' ? (
                <button
                  onClick={handleResetSimulation}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Uji Coba</span>
                </button>
              ) : (
                <button
                  onClick={handleRunSimulation}
                  disabled={simState === 'processing'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{simState === 'processing' ? 'Memproses Validasi...' : 'Jalankan Simulasi Alur'}</span>
                </button>
              )}
            </div>

            {/* Service Selection Cards */}
            <div className="my-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                1. Pilih Layanan Digital yang Diuji
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      if (simState === 'idle') setSelectedService(srv.id);
                    }}
                    disabled={simState !== 'idle'}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      selectedService === srv.id
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20'
                        : 'bg-slate-50/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/60 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {srv.name}
                      </span>
                      {selectedService === srv.id && (
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
                      {srv.desc}
                    </p>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      Verifikator: {srv.role}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Simulation & Execution Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              
              {/* Form Input Data */}
              <div className="lg:col-span-5 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  2. Parameter Pengajuan (Input)
                </label>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Nama Mahasiswa</span>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    disabled={simState !== 'idle'}
                    className="w-full mt-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none"
                  />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">NIM Terdaftar</span>
                  <input
                    type="text"
                    value={applicantNim}
                    onChange={(e) => setApplicantNim(e.target.value)}
                    disabled={simState !== 'idle'}
                    className="w-full mt-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>

              {/* Pipeline Process Visualizer */}
              <div className="lg:col-span-7 space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  3. Pipa Validasi Alur Sistem (Logic Pipeline)
                </label>

                <div className="space-y-2.5">
                  {/* Step 1 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                    simStep >= 1
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <FileCheck className="w-4 h-4 shrink-0" />
                      <span>Validasi Format Dokumen & Kelengkapan Identitas</span>
                    </div>
                    {simStep >= 1 && <span className="font-bold text-[10px]">TERVALIDASI</span>}
                  </div>

                  {/* Step 2 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                    simStep >= 2
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Pengecekan Tumpang Tindih Jadwal & Tanggungan Lintas Modul</span>
                    </div>
                    {simStep >= 2 && <span className="font-bold text-[10px]">AMAN (TIDAK BENTROK)</span>}
                  </div>

                  {/* Step 3 */}
                  <div className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                    simStep >= 3
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Notifikasi Alur Persetujuan ke Verifikator Lab</span>
                    </div>
                    {simStep >= 3 && <span className="font-bold text-[10px]">SELESAI (UAT 91.2%)</span>}
                  </div>
                </div>

              </div>

            </div>

            {/* Final Status Callout */}
            {simState === 'done' && (
              <div className="mt-6 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-slate-800 dark:text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                <div>
                  <h4 className="text-sm font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pengujian Alur Berhasil: Layanan Disetujui Secara Digital</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Mahasiswa: <strong>{applicantName}</strong> ({applicantNim}) • Layanan: <strong>{services.find(s => s.id === selectedService)?.name}</strong>
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500 text-white self-start sm:self-auto">
                  Status: Siap Cetak / Valid
                </span>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: DESIGN TOKENS & CRAFT */}
        {activeTab === 'tokens' && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-5xl mx-auto shadow-xl">
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 uppercase tracking-wider">
                DESIGN.md & Craft Specs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1.5">
                Token Desain & Standar Craft Portofolio
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Penerapan prinsip OpenDesign <em>od.craft</em>: palet warna berstandar kontras WCAG, tipografi berjenjang, dan state interaktif.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Color Tokens */}
              <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-500" />
                  <span>Palet Warna Utama</span>
                </h4>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-blue-600 shadow-sm"></div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Primary Blue</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">#2563EB</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-slate-900 dark:bg-white shadow-sm"></div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Surface Dark</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">#0F172A</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-emerald-500 shadow-sm"></div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Emerald Success</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">#10B981</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-amber-500 shadow-sm"></div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">Amber Highlight</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">#F59E0B</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Memenuhi Standar Aksesibilitas WCAG AA</span>
                </div>
              </div>

              {/* Typography Scale */}
              <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span>Tipografi & Hirarki</span>
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Display / H1</span>
                    <p className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      Plus Jakarta Sans (800)
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Sub-heading / H3</span>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Semi-bold 600 • Tracking Tight
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Body Copy</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Regular 400 • Line Height 1.6 untuk kenyamanan membaca.
                    </p>
                  </div>
                </div>
              </div>

              {/* Micro-interaction & Component States */}
              <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Uji State Interaksi</span>
                </h4>
                <div className="space-y-3 pt-1">
                  <button className="w-full py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-md transition-all">
                    Default / Hover (Klik Saya)
                  </button>
                  <button className="w-full py-2 px-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-blue-500 transition-colors">
                    Secondary Outlined
                  </button>
                  <button disabled className="w-full py-2 px-4 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 text-xs font-semibold cursor-not-allowed">
                    Disabled State (Tidak Aktif)
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: SELF-TAUGHT LEARNING ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-5xl mx-auto shadow-xl">
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 uppercase tracking-wider">
                Growth Mindset
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1.5">
                Peta Pembelajaran Mandiri & Otodidak
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Transparansi pemahaman: mengetahui konsep dasar, siap menghadapi kasus implementasi baru, dan terus belajar mandiri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Kolom 1: Fondasi yang Sudah Dikuasai */}
              <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>1. Fondasi yang Dipahami</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Hasil perkuliahan S1 Sistem Informasi ITK & praktik kepanitiaan:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ✓ Analisis Alur Sistem & User Story (PXP)
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ✓ Basis Data MySQL & Tabel Relasional
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ✓ IT Support Lapangan & Jaringan LAN Event
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ✓ Konsep Arsitektur Web MVC (Laravel)
                  </div>
                </div>
              </div>

              {/* Kolom 2: Siap Dipelajari saat Diperlukan */}
              <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-3">
                  <Code2 className="w-4 h-4" />
                  <span>2. Siap Dipelajari Otodidak</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Mengetahui dasarnya, siap mendalami implementasi kasus nyata:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    → Logika JavaScript & Komponen Modern
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    → Optimasi Query Database Kompleks
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    → Integrasi API Pihak Ketiga & Autentikasi
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    → Kustomisasi Modul Lanjutan Odoo ERP
                  </div>
                </div>
              </div>

              {/* Kolom 3: Metode Belajar Mandiri */}
              <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>3. Metode & Sikap Kerja</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Cara saya mengatasi ketidaktahuan saat bertugas:
                </p>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ★ Membaca dokumentasi resmi & repositori terbuka
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ★ Melakukan uji coba mandiri di lingkungan lokal
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ★ Aktif bertanya & berdiskusi dengan mentor/tim
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/60 dark:border-slate-700/60">
                    ★ Pantang menyerah hingga sistem berjalan stabil
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
