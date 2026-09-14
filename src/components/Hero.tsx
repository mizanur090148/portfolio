import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileDown, Terminal, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const handleDownloadCV = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6', '#3b82f6'],
    });
  };

  const coreStacks = [
    'PHP 8.2',
    'Laravel',
    'NestJS',
    'Node.js',
    'React.js',
    'Next.js',
    'TypeScript',
    'MySQL Indexing',
    'Redis Queues',
    'Docker',
    'AWS (EC2/S3/ALB)',
    'DeployHQ CI/CD',
    'Microservices',
    'Stripe & PayPal APIs',
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Left: Text & Pitch */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Status Pill */}
            <div>
              <div
                className="badge-pill"
                style={{
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.85rem',
                  color: '#34d399',
                  borderColor: 'rgba(16, 185, 129, 0.45)',
                  background: 'rgba(16, 185, 129, 0.1)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.25)',
                }}
              >
                <span className="badge-pulse" />
                <span style={{ fontWeight: 700 }}>Open to Senior Full Stack, Senior Software Engineer & Tech Lead Roles</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.12,
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.025em',
                }}
              >
                Hi, I'm{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 10%, #38bdf8 55%, #818cf8 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 35px rgba(56, 189, 248, 0.4))',
                  }}
                >
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <h2
                style={{
                  fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#38bdf8',
                  lineHeight: 1.3,
                  letterSpacing: '-0.015em',
                  textShadow: '0 0 24px rgba(56, 189, 248, 0.4)',
                }}
              >
                Senior Full Stack Software Engineer &bull; Senior Software Engineer
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  alignItems: 'center',
                  marginTop: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(6, 182, 212, 0.14)',
                    border: '1px solid rgba(6, 182, 212, 0.4)',
                    color: '#38bdf8',
                    boxShadow: '0 0 14px rgba(6, 182, 212, 0.25)',
                  }}
                >
                  Software Engineer
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(139, 92, 246, 0.14)',
                    border: '1px solid rgba(139, 92, 246, 0.4)',
                    color: '#c084fc',
                    boxShadow: '0 0 14px rgba(139, 92, 246, 0.25)',
                  }}
                >
                  Optionally Tech Lead
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(16, 185, 129, 0.14)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#34d399',
                    boxShadow: '0 0 14px rgba(16, 185, 129, 0.25)',
                  }}
                >
                  12+ Years Enterprise Experience
                </span>
              </div>
            </div>

            {/* Comprehensive Pitch */}
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '640px',
              }}
            >
              With <strong style={{ color: 'var(--text-primary)' }}>12+ years of enterprise experience</strong>, I architect resilient distributed systems, high-throughput REST APIs, and modern reactive applications. Core expertise spans{' '}
              <span style={{ color: 'var(--cyan-400)', fontWeight: 600 }}>Laravel, NestJS, Node.js, React.js, AWS, Docker</span>, and database optimization across high-impact eCommerce, Healthcare, Education, and Garments ERP platforms.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                paddingTop: '0.25rem',
              }}
            >
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '0.98rem' }}>
                <span>Explore Architecture & Projects</span>
                <ArrowDown size={18} />
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                download="Md_Mizanur_Rahman_CV.pdf"
                onClick={handleDownloadCV}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
              >
                <FileDown size={18} color="var(--cyan-400)" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="btn btn-outline font-mono"
                style={{ padding: '0.85rem 1.4rem', fontSize: '0.9rem' }}
              >
                <Terminal size={17} color="var(--emerald-400)" />
                <span>$ mizanur --cli</span>
              </button>
            </div>

            {/* Production Stack Chips Strip */}
            <div style={{ paddingTop: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Core Production Technologies:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {coreStacks.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social & Contact Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Direct Channels:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem' }}
              >
                <LinkedinIcon size={16} color="#0077b5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem' }}
              >
                <Mail size={16} color="var(--cyan-400)" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Clean Executive Portrait Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Ambient Backlight Glow */}
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(139, 92, 246, 0.22) 50%, transparent 75%)',
                filter: 'blur(55px)',
                zIndex: 0,
              }}
            />

            {/* Clean Executive Card with Glowing Highlight */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.7), 0 0 45px rgba(6, 182, 212, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                maxWidth: '390px',
                width: '100%',
                border: '1.5px solid rgba(6, 182, 212, 0.45)',
                background: 'rgba(14, 20, 36, 0.92)',
              }}
            >
              {/* Portrait Frame - Pure, Clean Image with Refined Edge */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  aspectRatio: '4/4.6',
                  background: 'linear-gradient(180deg, #162033 0%, #0a0d14 100%)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                }}
              >
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    filter: 'contrast(1.05) brightness(1.03)',
                    transition: 'transform var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
              </div>

              {/* Card Bottom Credentials Strip */}
              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {PERSONAL_INFO.name}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#34d399',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 0 12px rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    <ShieldCheck size={13} />
                    <span>Senior Full Stack</span>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, marginBottom: '0.75rem', textShadow: '0 0 12px rgba(56, 189, 248, 0.3)' }}>
                  Senior Full Stack Software Engineer | Tech Lead
                </div>

                {/* Core Expertise Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '0.22rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.35)',
                      color: '#e0f2fe',
                    }}
                  >
                    Laravel & NestJS
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '0.22rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.35)',
                      color: '#f3e8ff',
                    }}
                  >
                    AWS & Docker
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '0.22rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      color: '#d1fae5',
                    }}
                  >
                    High-Volume ERP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Production Stats Bar */}
        <div
          className="glass-card"
          style={{
            marginTop: '4rem',
            padding: '2rem',
            borderRadius: 'var(--radius-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            border: '1px solid var(--border-medium)',
          }}
        >
          {PERSONAL_INFO.keyStats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                padding: '0.75rem',
                borderLeft: idx !== 0 ? '1px solid var(--border-subtle)' : 'none',
              }}
              className="stat-card"
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--cyan-400)',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.2rem',
                }}
              >
                <span>{stat.value}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatBadge {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        @media (max-width: 640px) {
          .stat-card {
            border-left: none !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
