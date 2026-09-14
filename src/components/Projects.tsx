import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Layers, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'architecture'>('cards');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'eCommerce', 'Healthcare', 'Enterprise ERP'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS.slice(0, 4) // Show top 4 major enterprise platforms
      : PROJECTS.filter((p) => p.category === selectedCategory);

  // Compact Architecture topologies
  const architectures = [
    {
      title: 'Ethos Merch Multi-Vendor & Webhook Engine',
      company: 'Clicko Digital &bull; US eCommerce',
      badge: 'eCommerce Engine',
      nodes: [
        { name: 'Storefront UI', type: 'Client', tech: 'React.js / Next.js', desc: 'Fast customized merchandise ordering interface' },
        { name: 'API Gateway', type: 'Gateway', tech: 'AWS ALB & NGINX', desc: 'Rate limiting and SSL termination' },
        { name: 'Core Microservices', type: 'Backend', tech: 'PHP 8 / Laravel / NestJS', desc: 'Idempotent order logic & payments' },
        { name: 'Async Event Bus', type: 'Queue', tech: 'Redis Queues', desc: 'Asynchronous webhook listeners' },
        { name: 'Supplier API Bus', type: 'Integration', tech: 'AS Colour / SanMar APIs', desc: 'Real-time inventory lookup' },
        { name: 'Fulfillment Dispatch', type: 'Fulfillment', tech: 'ShipStation & Shopify', desc: 'Automated warehouse dispatch' },
      ],
      metrics: ['< 1s Inventory Sync', '100% Automated Dispatch', '99.99% Webhook Reliability'],
    },
    {
      title: 'Garments Manufacturing ERP High-Volume Pipeline',
      company: 'Skylarksoft Ltd. &bull; Apparel Manufacturing',
      badge: 'Industrial ERP',
      nodes: [
        { name: 'Factory Terminals', type: 'Client', tech: 'Vue.js / Barcode Scans', desc: 'Shift tracking across cutting & sewing' },
        { name: 'ERP Core Engine', type: 'Backend', tech: 'PHP / Laravel Modular', desc: '12+ integrated manufacturing modules' },
        { name: 'Queue Workers', type: 'Queue', tech: 'Redis / Horizon', desc: 'Offloaded report & PDF generation' },
        { name: 'Partitioned Database', type: 'Storage', tech: 'MySQL Partitioning', desc: 'Partitioned ledger tables & views' },
      ],
      metrics: ['70%+ Faster Reports', '12+ Production Modules', 'Led 5 Engineers'],
    },
    {
      title: 'Clinical ePrescription & Healthcare Platform',
      company: 'iHealthScreen &bull; Telehealth Systems',
      badge: 'Healthcare Engine',
      nodes: [
        { name: 'Web & Mobile Apps', type: 'Client', tech: 'React & React Native', desc: 'Doctor & Patient consultation portals' },
        { name: 'Clinical Gateway', type: 'Gateway', tech: 'NestJS / TypeScript', desc: 'Role-based JWT access control' },
        { name: 'MongoDB Records', type: 'NoSQL', tech: 'Clinical History Docs', desc: 'Fast lookup by patient phone or ID' },
        { name: 'MySQL Relational', type: 'SQL', tech: 'Transactional Slots', desc: 'Appointment schedules & billing' },
      ],
      metrics: ['< 15ms History Search', 'Hybrid MongoDB/MySQL', '100% Mobile REST API'],
    },
  ];

  const [activeArchIdx, setActiveArchIdx] = useState(0);
  const currentArch = architectures[activeArchIdx];

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Layers size={14} />
            <span>Systems & Architecture</span>
          </div>
          <h2 className="section-title">
            Enterprise Platforms & <span className="gradient-text">System Architectures</span>
          </h2>
          <p className="section-subtitle">
            Concise overview of major production systems engineered across 12+ years of full-stack leadership.
          </p>
        </div>

        {/* View Mode Toggle: Case Studies vs Architecture Flow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '0.3rem',
              borderRadius: '9999px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              gap: '0.3rem',
            }}
          >
            <button
              onClick={() => setViewMode('cards')}
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                background: viewMode === 'cards' ? 'var(--gradient-brand)' : 'transparent',
                color: viewMode === 'cards' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 180ms ease',
              }}
            >
              Major Case Studies (4)
            </button>
            <button
              onClick={() => setViewMode('architecture')}
              style={{
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                background: viewMode === 'architecture' ? 'var(--gradient-brand)' : 'transparent',
                color: viewMode === 'architecture' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 180ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Zap size={14} />
              <span>System Flow Visualizer</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Case Studies Grid */}
        {viewMode === 'cards' && (
          <div>
            {/* Category Filter */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.35rem 0.9rem',
                    fontSize: '0.8rem',
                    borderRadius: 'var(--radius-full)',
                    background: selectedCategory === category ? 'var(--cyan-500)' : 'var(--bg-card)',
                    color: selectedCategory === category ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-medium)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveProject(project)}
                >
                  <div>
                    {/* Category & Period */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: project.colorScheme.accent,
                          background: project.colorScheme.badgeBg,
                          border: `1px solid ${project.colorScheme.badgeBorder}`,
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {project.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {project.period}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--cyan-400)', marginBottom: '0.3rem' }}>
                      {project.company} &bull; <span style={{ color: 'var(--text-secondary)' }}>{project.role}</span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                      {project.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                      {project.summary}
                    </p>

                    {/* Concise Metric Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                      {project.metrics.slice(0, 2).map((metric, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.75rem',
                            color: 'var(--text-primary)',
                            background: 'var(--bg-elevated)',
                            padding: '0.25rem 0.55rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-subtle)',
                            fontWeight: 600,
                          }}
                        >
                          <CheckCircle2 size={12} color={project.colorScheme.accent} />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tech Tags & Action */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            background: 'var(--bg-pill)',
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-400)' }}>
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--cyan-400)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <span>Inspect Architecture</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View Mode 2: Interactive System Architecture Flow */}
        {viewMode === 'architecture' && (
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(180deg, rgba(14, 20, 34, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)',
            }}
          >
            {/* Architecture Selector Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {architectures.map((arch, idx) => (
                <button
                  key={arch.title}
                  onClick={() => setActiveArchIdx(idx)}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: activeArchIdx === idx ? 'var(--cyan-500)' : 'var(--bg-elevated)',
                    color: activeArchIdx === idx ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {arch.badge}
                </button>
              ))}
            </div>

            {/* Selected Architecture Overview */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                {currentArch.company}
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.2rem' }}>
                {currentArch.title}
              </h3>

              {/* Metrics */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                {currentArch.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.35rem 0.75rem',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--cyan-400)',
                    }}
                  >
                    ✓ {m}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Flow Blocks Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {currentArch.nodes.map((node, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Node 0{idx + 1} &bull; {node.type}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {node.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)', margin: '0.2rem 0' }}>
                    {node.tech}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {node.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
