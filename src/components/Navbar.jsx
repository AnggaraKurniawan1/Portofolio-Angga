import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang',     href: '#about' },
    { name: 'Keahlian',    href: '#skills' },
    { name: 'Proyek',      href: '#projects' },
    { name: 'Pengalaman',  href: '#experience' },
    { name: 'Prestasi',    href: '#achievements' },
    { name: 'Kontak',      href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? (darkMode ? 'rgba(14,15,20,0.90)' : 'rgba(248,250,252,0.90)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        padding: scrolled ? '10px 0' : '18px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-od flex items-center justify-center text-white font-bold text-sm shadow-od-brand"
              style={{ background: 'linear-gradient(135deg, #5E6AD2 0%, #A78BFA 100%)' }}
            >
              AK
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                {portfolioData.personal.name}
              </span>
              <span className="block text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
                S.Kom · ITK Kalimantan
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-od text-[13px] font-medium transition-colors duration-150"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-od transition-all"
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-secondary)',
              }}
              aria-label="Toggle Dark Mode"
            >
              {darkMode
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4" />
              }
            </button>
            <a
              href={portfolioData.personal.cvPath}
              download="CV_Anggara_Kurniawan.pdf"
              className="od-btn-primary text-[13px]"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-od"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-od"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-3 p-4 rounded-od-lg shadow-od-md od-animate-in flex flex-col gap-1"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-od text-sm font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1" style={{ borderTop: '1px solid var(--color-border)' }}>
              <a
                href={portfolioData.personal.cvPath}
                download="CV_Anggara_Kurniawan.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="od-btn-primary w-full justify-center"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
