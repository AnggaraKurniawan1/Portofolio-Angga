import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Database, Network, CheckCircle2, FileText } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    color: 'var(--color-brand)',
    bg: 'rgba(94,106,210,0.08)',
    border: 'rgba(94,106,210,0.15)',
    title: 'Analisis Sistem & Proses Bisnis',
    desc: 'Memahami user requirement, pemodelan alur kerja, dan penyusunan user stories.',
  },
  {
    icon: Network,
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.15)',
    title: 'IT Support & Jaringan Lapangan',
    desc: 'Pengalaman nyata setup router, switch, server lokal offline, dan troubleshooting PC.',
  },
  {
    icon: Database,
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.15)',
    title: 'Basis Data & Analisis Data',
    desc: 'Pemodelan relasi ERD, query MySQL terstruktur, dan pengolahan data untuk pengambilan keputusan.',
  },
  {
    icon: GraduationCap,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.18)',
    title: 'Pengembangan Web & Aplikasi',
    desc: 'Membangun aplikasi web fungsional dengan arsitektur MVC (Laravel, Vue.js, React).',
  },
];

export default function About() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="od-section-label mb-4">Latar Belakang & Profil</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Tentang Anggara Kurniawan
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Menggabungkan keahlian analisa proses bisnis sistem informasi dengan implementasi perangkat lunak modern dan infrastruktur jaringan handal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

          {/* Left: Narrative + Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <div className="od-surface p-6 sm:p-7">
              <h3 className="text-base font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Profil Profesional
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                Saya adalah lulusan{' '}
                <strong style={{ color: 'var(--color-text-primary)' }}>
                  S1 Sistem Informasi dari Institut Teknologi Kalimantan (ITK)
                </strong>{' '}
                dengan predikat kelulusan sangat memuaskan (IPK 3.63). Memiliki fokus keahlian di bidang Analisis Sistem, Basis Data, IT Support Lapangan, dan Pengembangan Aplikasi.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Pemahaman kuat terhadap alur proses bisnis dan logika sistem memungkinkan saya untuk cepat belajar secara mandiri, menelaah dokumentasi teknis, dan beradaptasi menyelesaikan implementasi nyata di lingkungan IT profesional.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="od-surface p-4"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="w-8 h-8 rounded-od-sm flex items-center justify-center shrink-0"
                        style={{ backgroundColor: p.bg, border: `1px solid ${p.border}` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: p.color }} />
                      </div>
                      <span className="text-xs font-bold" style={{ color: 'var(--color-text-primary)' }}>
                        {p.title}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Education Card */}
          <div className="lg:col-span-5">
            <div className="od-surface p-6 sm:p-7">
              <div
                className="w-11 h-11 rounded-od-md flex items-center justify-center mb-5 shadow-od-brand"
                style={{
                  background: 'linear-gradient(135deg, #5E6AD2, #A78BFA)',
                  color: '#fff',
                }}
              >
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between mb-4">
                <span
                  className="od-pill"
                  style={{
                    backgroundColor: 'rgba(94,106,210,0.08)',
                    border: '1px solid rgba(94,106,210,0.15)',
                    color: 'var(--color-brand)',
                  }}
                >
                  {education.period}
                </span>
                <span
                  className="od-pill"
                  style={{
                    backgroundColor: 'rgba(245,158,11,0.08)',
                    border: '1px solid rgba(245,158,11,0.18)',
                    color: '#D97706',
                  }}
                >
                  IPK {education.gpa}
                </span>
              </div>

              <h3 className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
                {education.degree}
              </h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-brand)' }}>
                {education.institution}
              </p>
              <p className="text-xs mt-0.5 mb-5" style={{ color: 'var(--color-text-muted)' }}>
                {education.faculty} · {education.location}
              </p>

              <div
                className="space-y-3 pt-4"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                    {item}
                  </div>
                ))}
              </div>

              <div
                className="mt-5 pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  Dokumen resmi:
                </span>
                <a
                  href={personal.cvPath}
                  download="CV_Anggara_Kurniawan.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: 'var(--color-brand)' }}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Unduh CV (PDF)
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
