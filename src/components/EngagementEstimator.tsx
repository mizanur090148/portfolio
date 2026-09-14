import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Calculator, Check, MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EngagementOption {
  id: string;
  title: string;
  description: string;
  typicalDeliverables: string[];
  estimatedTimeline: string;
}

export const EngagementEstimator: React.FC = () => {
  const options: EngagementOption[] = [
    {
      id: 'tech-lead',
      title: 'Full-Time Technical Lead / Senior Full Stack',
      description: 'Permanent or long-term contract leading engineering squads, system architecture, and product delivery.',
      typicalDeliverables: [
        'End-to-end system design & domain modeling',
        'Sprint leadership & engineer mentorship (4-5 members)',
        'CI/CD automation with AWS & Docker containerization',
        'Continuous code reviews and high-availability architecture',
      ],
      estimatedTimeline: 'Full-Time / Long-Term Contract',
    },
    {
      id: 'system-architecture',
      title: 'Microservices & Enterprise System Architecture',
      description: 'Architecting scalable backend architectures, event-driven pipelines, and high-throughput APIs.',
      typicalDeliverables: [
        'Decoupled domain service architecture',
        'Redis queue workers & asynchronous event buses',
        'Idempotent webhook ledgers and transaction safety',
        'Detailed architectural diagrams and documentation',
      ],
      estimatedTimeline: 'Project / Advisory Basis',
    },
    {
      id: 'db-optimization',
      title: 'High-Volume Database & Performance Optimization',
      description: 'Supercharging slow queries, table partitioning on millions of records, and Redis caching layers.',
      typicalDeliverables: [
        'Slow query log audit and composite indexing',
        'Table partitioning for massive transaction ledgers',
        'Redis caching strategy for high-read endpoints',
        'Measurable 50-80% response time reduction',
      ],
      estimatedTimeline: '1 - 3 Weeks',
    },
    {
      id: 'api-integration',
      title: 'Multi-Vendor API, Payment & Webhook Synchronization',
      description: 'Integrating complex supplier catalogs, Shopify, ShipStation, Stripe, and PayPal with zero-latency webhooks.',
      typicalDeliverables: [
        'Bi-directional catalog & live inventory sync',
        'Automated fulfillment routing and label dispatch',
        'Stripe / PayPal payment ledger reconciliation',
        'Robust error handling, retries, and webhook audits',
      ],
      estimatedTimeline: '2 - 4 Weeks',
    },
  ];

  const [selectedId, setSelectedId] = useState<string>(options[0].id);

  const currentOption = options.find((o) => o.id === selectedId) || options[0];

  const handleAction = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6'],
    });

    const msg = `Hi Mizanur, I saw your portfolio and would like to discuss: ${currentOption.title}.`;
    const whatsappUrl = `https://wa.me/8801733714009?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} />
            <span>Tailored Collaboration</span>
          </div>
          <h2 className="section-title">
            Engagement Planner & <span className="gradient-text">Project Scope Estimator</span>
          </h2>
          <p className="section-subtitle">
            Need a dedicated Technical Lead or specific architectural consulting? 
            Select your project objective to preview deliverables and initiate a conversation.
          </p>
        </div>

        {/* Interactive Planner Card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '2.75rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            background: 'linear-gradient(180deg, rgba(14, 21, 36, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)',
            boxShadow: 'var(--shadow-lg), 0 0 50px rgba(6, 182, 212, 0.12)',
          }}
        >
          {/* Options Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            {options.map((opt) => {
              const isSelected = opt.id === selectedId;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    background: isSelected ? 'var(--bg-elevated)' : 'var(--bg-card)',
                    border: isSelected ? '1px solid var(--cyan-400)' : '1px solid var(--border-subtle)',
                    boxShadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.25)' : 'none',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: isSelected ? '5px solid var(--cyan-400)' : '2px solid var(--border-medium)',
                          background: isSelected ? '#ffffff' : 'transparent',
                          display: 'inline-block',
                        }}
                      />
                      <span style={{ fontSize: '0.72rem', color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        {opt.estimatedTimeline}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                      {opt.title}
                    </h4>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {opt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Deliverables Blueprint */}
          <div
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(6, 182, 212, 0.04)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--cyan-400)" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--cyan-400)', fontWeight: 700 }}>
                  Expected Scope & Core Deliverables
                </span>
              </div>

              <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem' }}>
                {currentOption.title}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentOption.typicalDeliverables.map((deliv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <Check size={15} color="var(--emerald-400)" style={{ flexShrink: 0 }} />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderLeft: '1px solid var(--border-medium)',
                paddingLeft: '2rem',
              }}
              className="planner-action-col"
            >
              <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Engagement Timeline</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--cyan-400)' }}>
                  {currentOption.estimatedTimeline}
                </div>
              </div>

              <button
                onClick={handleAction}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.4rem', fontSize: '0.92rem', justifyContent: 'center' }}
              >
                <MessageCircle size={17} />
                <span>Discuss via WhatsApp</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Engagement Inquiry: ${currentOption.title}`)}&body=${encodeURIComponent(`Hi Mizanur,\n\nI would like to discuss your availability for ${currentOption.title}.\n\nBest regards,`)}`}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.4rem', fontSize: '0.92rem', justifyContent: 'center' }}
              >
                <Mail size={17} color="var(--cyan-400)" />
                <span>Inquire via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .planner-action-col {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid var(--border-medium);
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
