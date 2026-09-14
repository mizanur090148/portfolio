import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { X, CheckCircle2, Server, Cpu, Database, Layers, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 8, 14, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg), 0 0 50px rgba(6, 182, 212, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn btn-secondary"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            padding: '0.5rem',
            borderRadius: 'var(--radius-full)',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ paddingRight: '2.5rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: project.colorScheme.accent,
                background: project.colorScheme.badgeBg,
                border: `1px solid ${project.colorScheme.badgeBorder}`,
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {project.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>&bull;</span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {project.company}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>&bull;</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
              {project.role}
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
            {project.title}
          </h2>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Timeline: {project.period}
          </div>
        </div>

        {/* Executive Summary & Scope */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Executive Overview & Technical Scope
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.fullDescription.map((desc, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color={project.colorScheme.accent} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Flow Visualization */}
        <div
          style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <Layers size={18} color="var(--cyan-400)" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              System Architecture & Event Flow
            </h3>
          </div>

          {/* Visual Architecture Blocks */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                padding: '1rem 0.75rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <Cpu size={20} color="var(--cyan-400)" style={{ margin: '0 auto 0.4rem auto' }} />
              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Client & Storefront</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>React.js / Next.js / Mobile</div>
            </div>

            <div
              style={{
                padding: '1rem 0.75rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <Server size={20} color="var(--emerald-400)" style={{ margin: '0 auto 0.4rem auto' }} />
              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Application Services</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Laravel 8.x / NestJS REST</div>
            </div>

            <div
              style={{
                padding: '1rem 0.75rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <Activity size={20} color="var(--amber-500)" style={{ margin: '0 auto 0.4rem auto' }} />
              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Async Queues & Cache</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Redis Workers & Webhooks</div>
            </div>

            <div
              style={{
                padding: '1rem 0.75rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-medium)',
              }}
            >
              <Database size={20} color="var(--violet-500)" style={{ margin: '0 auto 0.4rem auto' }} />
              <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Data Persistence</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MySQL / MongoDB / S3</div>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.architectureHighlights.map((arch, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-400)' }} />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Production Metrics */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Key Performance Metrics & Deliverables
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={16} color="var(--emerald-400)" style={{ flexShrink: 0 }} />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Tech Stack Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Technologies & Tools Employed
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  padding: '0.35rem 0.75rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <a
            href="#contact"
            onClick={() => onClose()}
            className="btn btn-primary"
            style={{ fontSize: '0.9rem' }}
          >
            <span>Inquire About Similar Architecture</span>
            <ArrowRight size={16} />
          </a>
          <button onClick={onClose} className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
