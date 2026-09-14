import React, { useState } from 'react';
import { Award, ShieldCheck, Terminal, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';

export const LeadershipBento: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'service' | 'docker'>('service');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    service: `// Example: Clean Domain Service with Idempotency & Event Bus
class OrderFulfillmentService
{
    public function __construct(
        private SupplierCatalogInterface $supplierApi,
        private PaymentLedgerService $ledger,
        private WebhookEventBus $eventBus
    ) {}

    public function processOrder(OrderPayload $payload): FulfillmentResult
    {
        return DB::transaction(function () use ($payload) {
            // 1. Idempotency Check
            if ($this->ledger->hasProcessed($payload->idempotencyKey)) {
                return $this->ledger->getExistingResult($payload->idempotencyKey);
            }

            // 2. Real-Time Supplier Inventory Lock (AS Colour / SanMar)
            $inventory = $this->supplierApi->reserveStock($payload->items);
            
            // 3. Dispatch Async Job to ShipStation & Shopify
            $this->eventBus->dispatch(new OrderDispatchedEvent($payload, $inventory));

            return new FulfillmentResult(status: 'SUCCESS', trackingId: $inventory->ref);
        });
    }
}`,
    docker: `# Production Dockerized Microservice on AWS EC2
version: '3.8'

services:
  app:
    build:
      context: .
      target: production
    restart: unless-stopped
    environment:
      APP_ENV: production
      CACHE_DRIVER: redis
      QUEUE_CONNECTION: redis
      AWS_BUCKET: ethos-production-s3
    deploy:
      resources:
        limits:
          cpus: '2.0'
          memory: 4096M

  queue_worker:
    build:
      context: .
      target: worker
    restart: always
    command: php artisan queue:work redis --tries=3 --timeout=90
    depends_on:
      - app
      - redis`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Engineering Excellence</span>
          </div>
          <h2 className="section-title">
            Technical Leadership & <span className="gradient-text">Architectural Standards</span>
          </h2>
          <p className="section-subtitle">
            How 12+ years of production experience translates into clean architecture, resilient teams, 
            and bulletproof code quality.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
          }}
          className="bento-grid"
        >
          {/* Card 1: Team Leadership & Delivery (Span 5) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 5',
              padding: '2.25rem',
              borderRadius: 'var(--radius-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(16, 23, 40, 0.85) 0%, rgba(9, 13, 22, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(6, 182, 212, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <ShieldCheck size={22} color="var(--cyan-400)" />
              </div>

              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-400)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Engineering Leadership
              </span>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '0.4rem', marginBottom: '0.75rem' }}>
                Technical Lead & Squad Mentorship
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Spearheading squads of 4–5 software engineers with a focus on sprint velocity, clean domain modeling, and uncompromised code reviews.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>Daily Architecture Reviews & Schema Audits</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>CI/CD Automation with Zero Downtime Deploys</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} color="var(--emerald-400)" />
                  <span>Mentoring Developers to Senior Standards</span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--cyan-400)' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Engineers Mentored</div>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--emerald-400)' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Code Review Coverage</div>
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--violet-500)' }}>0</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Production Regressions</div>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Production Code Snippet Deck (Span 7) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 7',
              padding: '2.25rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-medium)',
              background: 'rgba(9, 13, 21, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Deck Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={18} color="var(--cyan-400)" />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Production Pattern Deck</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <button
                    onClick={() => setActiveCodeTab('service')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: activeCodeTab === 'service' ? 'var(--cyan-500)' : 'var(--bg-elevated)',
                      color: activeCodeTab === 'service' ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Domain Service
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('docker')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: activeCodeTab === 'docker' ? 'var(--cyan-500)' : 'var(--bg-elevated)',
                      color: activeCodeTab === 'docker' ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    AWS Docker Compose
                  </button>

                  <button
                    onClick={handleCopyCode}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.75rem',
                    }}
                    title="Copy Code"
                  >
                    {copied ? <Check size={13} color="var(--emerald-400)" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              {/* Code Display Area */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  border: '1px solid var(--border-subtle)',
                  maxHeight: '340px',
                  overflowY: 'auto',
                }}
              >
                <pre
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    color: '#e2e8f0',
                    lineHeight: 1.6,
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {codeSnippets[activeCodeTab]}
                </pre>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span>Strict adherence to SOLID principles, dependency injection, and idempotency.</span>
              <span style={{ color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)' }}>PHP 8.2 &bull; Docker &bull; AWS</span>
            </div>
          </div>

          {/* Card 3: AI-Assisted Engineering Velocity (Span 12) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 12',
              padding: '2rem 2.5rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-medium)',
              background: 'linear-gradient(135deg, rgba(16, 23, 39, 0.9) 0%, rgba(13, 19, 32, 0.95) 100%)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(236, 72, 153, 0.1)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ec4899',
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                }}
              >
                <Sparkles size={13} />
                <span>Next-Gen Engineering</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                AI-Augmented Engineering Velocity
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                Leveraging state-of-the-art AI tooling (Claude, Gemini, GitHub Copilot, ChatGPT) not as a shortcut, but as a force multiplier for rapid architectural validation, automated test suite generation, and complex legacy refactoring.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
              }}
            >
              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--cyan-400)' }}>3x</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem' }}>Prototype Velocity</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>From concept to production API</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--emerald-400)' }}>90%+</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem' }}>Test Coverage</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Automated test generation</div>
              </div>

              <div style={{ padding: '1rem', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--violet-500)' }}>Zero</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '0.2rem' }}>Blind Copy-Paste</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Rigorous architectural oversight</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
