import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1rem',
                }}
              >
                MR
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {PERSONAL_INFO.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                  {PERSONAL_INFO.role}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              12+ years of continuous production excellence. Architecting reliable, high-throughput web 
              ecosystems with clean code, modern DevOps, and engineering leadership.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} color="#0077b5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn btn-secondary"
                style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}
                aria-label="Send Email"
              >
                <Mail size={16} color="var(--cyan-400)" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Mizanur</a>
              <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Career Experience</a>
              <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Enterprise Projects</a>
              <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Technical Arsenal</a>
              <a href="#terminal" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>CLI Terminal</a>
              <a href="#resume" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Verified Resume</a>
              <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact & Hire</a>
            </div>
          </div>

          {/* Col 3: Tech Stack & System Badges */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Key Core Stacks
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div>&bull; PHP 8.x / Laravel Ecosystem</div>
              <div>&bull; NestJS / Node.js Microservices</div>
              <div>&bull; React.js / Next.js Frontends</div>
              <div>&bull; MySQL Partitioning & Redis Caching</div>
              <div>&bull; AWS EC2, S3, Docker & CI/CD</div>
            </div>
          </div>

          {/* Col 4: Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.15rem',
                fontSize: '0.875rem',
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Md. Mizanur Rahman. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Code2 size={15} color="var(--cyan-400)" />
            <span>Architected with React, TypeScript & Bespoke Modern CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
