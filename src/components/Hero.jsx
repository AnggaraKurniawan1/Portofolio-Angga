import React from 'react';
import { ArrowRight, Download, Mail, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden od-grid-bg">
      {/* Gradient glow blobs */}
      <div
        className="absolute top-0 left-0 w-[700px] h-[400px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(94,106,210,0.12) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-32 right-0 w-[500px] h-[350px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(167,139,250,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Status badge */}
          <div className="od-pill od-pill-success mb-7 od-animate-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            IT Support Intern @ PT Petrolab Services (Aktif)
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-5 od-animate-up"
            style={{ animationDelay: '50ms', color: 'var(--color-text-primary)' }}
          >
            Halo, Saya{' '}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #5E6AD2 0%, #A78BFA 50%, #60A5FA 100%)' }}
            >
              {personal.name}
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg sm:text-xl font-semibold mb-5 od-animate-up"
            style={{ animationDelay: '100ms', color: 'var(--color-text-secondary)' }}
          >
            IT Support Intern · Sistem Informasi · Analisis Sistem & Web Developer
          </p>

          {/* Bio */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-9 od-animate-up"
            style={{ animationDelay: '150ms', color: 'var(--color-text-secondary)', maxWidth: '600px' }}
          >
            Lulusan S1 Sistem Informasi dari{' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>Institut Teknologi Kalimantan</strong>{' '}
            (IPK 3.63), saat ini aktif sebagai{' '}
            <strong style={{ color: 'var(--color-brand)' }}>IT Support Intern di PT Petrolab Services</strong>{' '}
            (periode 16 November 2026 - Mei 2027). Berpengalaman dalam operasional IT Support & Jaringan, Analisis Proses Bisnis, Basis Data, serta Pengembangan Web.
          </p>

          {/* Meta chips */}
          <div
            className="flex flex-wrap gap-2 mb-10 od-animate-up"
            style={{ animationDelay: '180ms' }}
          >
            {[
              { icon: <MapPin className="w-3.5 h-3.5" />, text: personal.location },
              { icon: <Award className="w-3.5 h-3.5" style={{ color: '#F59E0B' }} />, text: `IPK ${personal.gpa}` },
              { icon: <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#10B981' }} />, text: 'Unit Test 100% Pass' },
            ].map((chip, i) => (
              <div
                key={i}
                className="od-skill-chip text-xs"
              >
                {chip.icon}
                {chip.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-9 od-animate-up"
            style={{ animationDelay: '220ms' }}
          >
            <a href="#projects" className="od-btn-primary">
              Eksplorasi Proyek
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={personal.phoneUrl}
              target="_blank"
              rel="noreferrer"
              className="od-btn-secondary"
            >
              <WhatsAppIcon className="w-4 h-4" style={{ color: '#10B981' }} />
              Hubungi via WhatsApp
            </a>
            <a
              href={personal.cvPath}
              download="CV_Anggara_Kurniawan.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-od text-sm font-medium transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <Download className="w-4 h-4" />
              Unduh CV
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center gap-3 od-animate-up"
            style={{ animationDelay: '260ms' }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Tautan:
            </span>
            {[
              {
                href: personal.github,
                icon: <GithubIcon className="w-4 h-4" />,
                label: 'GitHub',
              },
              {
                href: `mailto:${personal.email}`,
                icon: <Mail className="w-4 h-4" />,
                label: 'Email',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                title={s.label}
                className="p-2 rounded-od transition-all"
                style={{
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(94,106,210,0.4)';
                  e.currentTarget.style.color = 'var(--color-brand)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
