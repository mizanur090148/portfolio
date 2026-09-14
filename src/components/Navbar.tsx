import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'skills', 'terminal', 'resume', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Resume', href: '#resume', id: 'resume' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'terminal') {
      onOpenTerminal();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none',
      }}
    >
      {/* Floating Island Navigation Capsule */}
      <nav
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1020px',
          height: '3.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.35rem 0.5rem 0.35rem 1.1rem',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(10, 15, 26, 0.82)'
            : 'rgba(13, 19, 32, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: scrolled
            ? '0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06), 0 0 24px rgba(6, 182, 212, 0.15)'
            : '0 10px 30px -10px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="nav-island"
      >
        {/* Brand Signature with Glowing Highlights */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'inherit',
            flexShrink: 0,
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            transition: 'all 200ms ease',
          }}
        >
          {/* Glowing Monogram Box */}
          <div
            style={{
              width: '2.15rem',
              height: '2.15rem',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.7), 0 2px 8px rgba(0, 0, 0, 0.5)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              position: 'relative',
            }}
          >
            MR
            <span
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
                border: '1.5px solid #0a0e1a',
              }}
            />
          </div>

          {/* Glowing Highlight Name + Role Micro-Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 40%, #38bdf8 80%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 24px rgba(56, 189, 248, 0.3)',
              }}
            >
              Mizanur Rahman
            </span>
            <span
              className="brand-role-badge"
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.18rem 0.55rem',
                borderRadius: '9999px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.4)',
                color: 'var(--cyan-400)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                boxShadow: '0 0 12px rgba(6, 182, 212, 0.25)',
              }}
            >
              Senior Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Centered Link Capsule */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.035)',
            padding: '0.25rem 0.35rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            gap: '0.2rem',
          }}
          className="desktop-links-capsule"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  borderRadius: '9999px',
                  color: isActive ? 'var(--cyan-400)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(6, 182, 212, 0.14)' : 'transparent',
                  border: isActive ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 12px rgba(6, 182, 212, 0.2)' : 'none',
                  transition: 'all 180ms ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Right Actions: Theme Toggle + "Let's Talk" CTA */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.45rem',
          }}
          className="desktop-nav-actions"
        >
          {/* Minimalist Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: '2.1rem',
              height: '2.1rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              transition: 'all 200ms ease',
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'scale(1.0)';
            }}
          >
            {theme === 'dark' ? <Sun size={15} color="#fbbf24" /> : <Moon size={15} color="#6366f1" />}
          </button>

          {/* Glowing Pill CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(6, 182, 212, 0.35)',
              transition: 'all 200ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(6, 182, 212, 0.35)';
            }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          className="mobile-nav-toggle"
        >
          <button
            onClick={toggleTheme}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Sun size={14} color="#fbbf24" /> : <Moon size={14} color="#6366f1" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Card */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '4.5rem',
            left: '1rem',
            right: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            pointerEvents: 'auto',
            background: 'rgba(12, 17, 29, 0.95)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '1.25rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1rem',
                borderRadius: '10px',
                fontSize: '0.92rem',
                fontWeight: 600,
                textDecoration: 'none',
                color: activeSection === link.id ? 'var(--cyan-400)' : 'var(--text-primary)',
                background: activeSection === link.id ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
              }}
            >
              <span>{link.name}</span>
              <ArrowRight size={14} style={{ opacity: 0.5 }} />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <span>Let's Talk</span>
            <ArrowRight size={16} />
          </a>
        </div>
      )}

      {/* Responsive Breakpoints CSS */}
      <style>{`
        @media (max-width: 540px) {
          .brand-role-badge {
            display: none !important;
          }
        }
        @media (min-width: 860px) {
          .desktop-links-capsule {
            display: flex !important;
          }
          .desktop-nav-actions {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
