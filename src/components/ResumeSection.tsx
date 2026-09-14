import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, FileDown, ExternalLink, CheckCircle, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResumeSection: React.FC = () => {
  const handleDownloadCV = () => {
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6', '#3b82f6', '#f59e0b'],
    });
  };

  const strengths = [
    '12+ Years Enterprise Web Application Engineering',
    'Technical Leadership & Mentorship of 4-5 Engineer Squads',
    'High-Throughput Database Optimization (Partitioning, Indexing, Views)',
    'Distributed Architecture & Resilient Queue Workers (Redis, RabbitMQ)',
    'Multi-Vendor API Integrations & Webhook Synchronization',
    'Containerized AWS Deployments (EC2, S3, Docker, DeployHQ, GitHub Actions)',
  ];

  return (
    <section id="resume" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Executive Summary & <span className="gradient-text">Verified Credentials</span>
          </h2>
          <p className="section-subtitle">
            Need an offline document for hiring committees or executive review? Download the 
            verified CV or preview the condensed credentials below.
          </p>
        </div>

        {/* Resume Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '3rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            background: 'linear-gradient(180deg, rgba(14, 21, 35, 0.95) 0%, rgba(8, 12, 20, 0.98) 100%)',
            boxShadow: 'var(--shadow-lg), 0 0 50px rgba(6, 182, 212, 0.12)',
          }}
        >
          {/* Header Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border-medium)',
              marginBottom: '2rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{PERSONAL_INFO.name}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.secondaryRole}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {PERSONAL_INFO.location} &bull; {PERSONAL_INFO.email} &bull; {PERSONAL_INFO.phone}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={PERSONAL_INFO.cvUrl}
                download="Md_Mizanur_Rahman_CV.pdf"
                onClick={handleDownloadCV}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.4rem' }}
              >
                <FileDown size={18} />
                <span>Download Verified PDF</span>
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.25rem' }}
              >
                <ExternalLink size={17} />
                <span>View Full CV in Tab</span>
              </a>
            </div>
          </div>

          {/* Core Strengths Checklist */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Award size={18} color="var(--amber-500)" />
              <span>Core Strengths & Executive Competencies</span>
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '0.85rem',
              }}
            >
              {strengths.map((str, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle size={16} color="var(--cyan-400)" style={{ flexShrink: 0 }} />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Domain Matrix */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Proven Domain Expertise
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--cyan-400)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Custom Merchandise eCommerce
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Supplier APIs, ShipStation & Shopify sync, Stripe/PayPal checkout ledgers.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--emerald-400)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Telehealth & Clinical Systems
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Doctor scheduling, ePrescription calculation, medical history retrieval.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--violet-500)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Garments & Industrial ERP
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  12+ production modules, table partitioning, queue worker reporting.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontWeight: 700, color: 'var(--amber-500)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  Higher Education LMS
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Student admissions, course enrollments, automated CGPA grading engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
