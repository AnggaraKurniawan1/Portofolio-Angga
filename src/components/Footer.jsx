import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
              <div
                className="w-7 h-7 rounded-od-sm flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #5E6AD2 0%, #A78BFA 100%)' }}
              >
                AK
              </div>
              {portfolioData.personal.name}
            </div>
            <p className="text-[11px] mt-1 ml-9" style={{ color: 'var(--color-text-muted)' }}>
              S1 Sistem Informasi · ITK Kalimantan
            </p>
          </div>

          {/* Center */}
          <p className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
            Dibuat dengan React, Tailwind CSS & Vite · Open Design Pattern
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-od transition-all"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(94,106,210,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="od-btn-secondary text-xs py-2 px-3"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Ke Atas
            </button>
          </div>
        </div>

        <div
          className="mt-7 pt-5 text-center text-[11px]"
          style={{
            borderTop: '1px solid var(--color-border)',
            color: 'var(--color-text-muted)',
          }}
        >
          © {new Date().getFullYear()} Anggara Kurniawan. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
