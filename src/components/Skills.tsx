import React from 'react';
import { Server, Layout, Database, Cloud, CheckCircle2, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const pillars = [
    {
      title: 'Backend & Microservices',
      icon: <Server size={20} color="var(--cyan-400)" />,
      tagline: 'Enterprise architectures, REST APIs & event buses',
      skills: ['Laravel (PHP 8.x)', 'NestJS & Node.js', 'RESTful APIs & Webhooks', 'Microservices Architecture', 'OOP & SOLID Principles'],
      highlight: '10+ years production mastery in high-throughput APIs',
      color: 'var(--cyan-400)',
      bg: 'rgba(6, 182, 212, 0.08)',
      border: 'rgba(6, 182, 212, 0.25)',
    },
    {
      title: 'Frontend & UI Engineering',
      icon: <Layout size={20} color="var(--blue-500)" />,
      tagline: 'Component-driven, responsive & reactive apps',
      skills: ['React.js & Next.js', 'TypeScript & ES6+', 'Vue.js (2/3)', 'Modern CSS & Glassmorphism', 'State Management'],
      highlight: 'Scalable, accessible, and reactive frontend architectures',
      color: 'var(--blue-500)',
      bg: 'rgba(59, 130, 246, 0.08)',
      border: 'rgba(59, 130, 246, 0.25)',
    },
    {
      title: 'Databases, Caching & Queues',
      icon: <Database size={20} color="var(--emerald-400)" />,
      tagline: 'High-volume storage, partitioning & caching',
      skills: ['MySQL Table Partitioning', 'MySQL Query Indexing', 'MongoDB Aggregations', 'Redis Caching & Queues', 'RabbitMQ / Kafka'],
      highlight: 'Scaled millions of records with 70%+ latency reductions',
      color: 'var(--emerald-400)',
      bg: 'rgba(16, 185, 129, 0.08)',
      border: 'rgba(16, 185, 129, 0.25)',
    },
    {
      title: 'Cloud, DevOps & Leadership',
      icon: <Cloud size={20} color="var(--violet-500)" />,
      tagline: 'Containerized deployments & agile mentorship',
      skills: ['AWS (EC2, S3, RDS, ALB)', 'Docker & Multi-Stage Builds', 'GitHub Actions & DeployHQ', 'Dokploy & Linux Ops', 'Led 4–5 Eng. Squads'],
      highlight: 'Zero-downtime CI/CD and rigorous code review culture',
      color: 'var(--violet-500)',
      bg: 'rgba(139, 92, 246, 0.08)',
      border: 'rgba(139, 92, 246, 0.25)',
    },
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Pillars</span>
          </div>
          <h2 className="section-title">
            Core Competencies & <span className="gradient-text">Engineering Stack</span>
          </h2>
          <p className="section-subtitle">
            Curated across 12+ years of production experience: scalable backends, reactive frontends, 
            optimized databases, and cloud-native DevOps.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: 'var(--radius-sm)',
                      background: pillar.bg,
                      border: `1px solid ${pillar.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{pillar.title}</h3>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  {pillar.tagline}
                </p>

                {/* Skill Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        fontWeight: 600,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Highlight */}
              <div
                style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <CheckCircle2 size={14} color={pillar.color} style={{ flexShrink: 0 }} />
                <span>{pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
