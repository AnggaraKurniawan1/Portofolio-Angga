import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { GithubIcon, WhatsAppIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Peluang Kerjasama / Diskusi Portofolio'
    )}&body=${encodeURIComponent(
      `Halo Anggara,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 'var(--radius-base)',
    backgroundColor: 'var(--color-surface-raised)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 150ms',
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-bg-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="od-section-label mb-4">Mari Terhubung</div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Hubungi Saya
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
            Terbuka untuk peluang kerja full-time, freelance, implementasi sistem informasi, atau sekadar berdiskusi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* Left: Contact Methods */}
          <div className="lg:col-span-2 space-y-3">
            {/* WhatsApp */}
            <a
              href={personal.phoneUrl}
              target="_blank"
              rel="noreferrer"
              className="od-surface flex items-center gap-4 p-4"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-11 h-11 rounded-od-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)' }}
              >
                <WhatsAppIcon className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>WhatsApp / Telepon</div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{personal.phone}</div>
                <div className="text-[11px] font-semibold mt-0.5" style={{ color: '#10B981' }}>Chat langsung →</div>
              </div>
            </a>

            {/* Email */}
            <div className="od-surface flex items-center gap-4 p-4">
              <div
                className="w-11 h-11 rounded-od-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(94,106,210,0.08)', border: '1px solid rgba(94,106,210,0.15)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--color-brand)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Email Resmi</div>
                <div className="text-sm font-bold truncate" style={{ color: 'var(--color-text-primary)' }}>{personal.email}</div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold mt-0.5"
                  style={{ color: 'var(--color-brand)' }}
                >
                  {copied
                    ? <><Check className="w-3 h-3" style={{ color: '#10B981' }} /><span style={{ color: '#10B981' }}>Tersalin!</span></>
                    : <><Copy className="w-3 h-3" />Salin email</>
                  }
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="od-surface flex items-center gap-4 p-4">
              <div
                className="w-11 h-11 rounded-od-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.15)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#A78BFA' }} />
              </div>
              <div>
                <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>Lokasi</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{personal.location}</div>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="od-surface flex items-center gap-4 p-4"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="w-11 h-11 rounded-od-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--color-surface-raised)', border: '1px solid var(--color-border)' }}
              >
                <GithubIcon className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
              </div>
              <div>
                <div className="text-[11px]" style={{ color: 'var(--color-text-muted)' }}>GitHub</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>AnggaraKurniawan1</div>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 od-surface p-6 sm:p-7">
            <h3 className="text-base font-bold mb-5" style={{ color: 'var(--color-text-primary)' }}>
              Kirim Pesan Langsung
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--color-brand)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--color-brand)'}
                    onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Subjek
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Tawaran IT Support / Kolaborasi Proyek"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--color-brand)'}
                  onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Pesan
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tuliskan detail peluang atau pesan Anda..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--color-brand)'}
                  onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                />
              </div>

              <button type="submit" className="od-btn-primary w-full justify-center">
                <Send className="w-4 h-4" />
                Kirim via Email
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
