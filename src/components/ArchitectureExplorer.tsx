import React, { useState } from 'react';
import { Layers, Server, Database, Cloud, Activity, Cpu, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

interface ArchNode {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'storage' | 'external';
  description: string;
  tech: string;
  latency?: string;
  throughput?: string;
}

interface ArchDiagram {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  nodes: ArchNode[];
  flowSteps: string[];
  metrics: { label: string; value: string; detail: string }[];
}

export const ArchitectureExplorer: React.FC = () => {
  const architectures: ArchDiagram[] = [
    {
      id: 'ethos-merch-flow',
      title: 'Ethos Merch Multi-Vendor & Webhook Engine',
      subtitle: 'US B2B/B2C custom merchandise ecosystem with live supplier catalogs and automated dispatch.',
      badge: 'eCommerce Architecture',
      badgeColor: 'var(--cyan-400)',
      nodes: [
        {
          id: 'storefront',
          name: 'Storefront & Mobile UI',
          type: 'client',
          description: 'High-performance reactive customer checkout and merchandise customization interface.',
          tech: 'React.js, Next.js, TypeScript',
          latency: '< 45ms',
          throughput: '2,500+ active sessions',
        },
        {
          id: 'gateway',
          name: 'API Gateway & ALB',
          type: 'gateway',
          description: 'AWS Application Load Balancer with SSL termination, rate limiting, and request routing.',
          tech: 'AWS ALB, NGINX, CloudWatch',
          latency: '< 8ms',
          throughput: 'Zero dropped requests',
        },
        {
          id: 'core-api',
          name: 'Core Microservices',
          type: 'service',
          description: 'Domain-driven business logic for order configuration, inventory reservation, and payment reconciliation.',
          tech: 'PHP 8.2, Laravel, NestJS',
          latency: '85ms avg response',
          throughput: 'Idempotent execution',
        },
        {
          id: 'async-bus',
          name: 'Redis Queue & Event Bus',
          type: 'queue',
          description: 'Asynchronous event bus dispatching webhook listeners, supplier orders, and background jobs.',
          tech: 'Redis Queues, Supervisor workers',
          latency: 'Real-time pub/sub',
          throughput: '100% async resilience',
        },
        {
          id: 'supplier-api',
          name: 'Supplier Sync Bus',
          type: 'external',
          description: 'Automated catalog & inventory sync across AS Colour, SanMar, Stanley/Stella & S&S Activewear.',
          tech: 'REST API, OAuth2, Webhooks',
          latency: 'Sub-second inventory lookups',
          throughput: '4 Tier-1 US Suppliers',
        },
        {
          id: 'fulfillment',
          name: 'ShipStation & Shopify Sync',
          type: 'external',
          description: 'Automated webhook-driven dispatch and shipment label generation.',
          tech: 'Shopify Webhooks, ShipStation API',
          latency: 'Instant dispatch push',
          throughput: 'Zero-touch fulfillment',
        },
        {
          id: 'database',
          name: 'Persistence & Caching',
          type: 'storage',
          description: 'Transactional database cluster with Redis caching layer and AWS S3 media asset storage.',
          tech: 'MySQL 8, Redis Cache, AWS S3',
          latency: '< 5ms query index',
          throughput: '99.9% availability',
        },
      ],
      flowSteps: [
        '1. Customer customizes apparel and submits purchase via tokenized Stripe/PayPal checkout.',
        '2. Core API validates order idempotency and broadcasts OrderCreated event to Redis queue.',
        '3. Supplier worker queries AS Colour / SanMar APIs to reserve inventory in real time.',
        '4. Asynchronous worker pushes order details to ShipStation for automated warehouse printing.',
        '5. Webhook listener synchronizes fulfillment status with Shopify and notifies customer.',
      ],
      metrics: [
        { label: 'Inventory Latency', value: '< 1s', detail: 'Real-time multi-vendor sync' },
        { label: 'Order Processing', value: '100%', detail: 'Automated ShipStation dispatch' },
        { label: 'Payment Resilience', value: '99.99%', detail: 'Idempotent webhook ledger' },
      ],
    },
    {
      id: 'garments-erp-flow',
      title: 'High-Volume Garments Manufacturing ERP Data Pipeline',
      subtitle: 'Industrial ERP managing 12+ factory modules with table partitioning and background processing.',
      badge: 'Enterprise ERP Architecture',
      badgeColor: 'var(--violet-500)',
      nodes: [
        {
          id: 'factory-terminal',
          name: 'Factory Shift Terminals',
          type: 'client',
          description: 'Industrial shop-floor stations logging Cutting, Sewing, Quality, and Packing lines.',
          tech: 'Vue.js, React.js, Barcode Scanners',
          latency: '< 50ms per scan',
          throughput: 'Multi-line concurrent entry',
        },
        {
          id: 'erp-monolith',
          name: 'Modular ERP Core Engine',
          type: 'service',
          description: '12 integrated modules: Merchandising, Costing, Inventory, Textile, Finishing, Shipment.',
          tech: 'PHP 8, Laravel, Service Layer',
          latency: 'Optimized internal APIs',
          throughput: '12+ Production Modules',
        },
        {
          id: 'queue-processor',
          name: 'Redis Queue Workers',
          type: 'queue',
          description: 'Offloads compute-heavy report aggregations, cost calculations, and multi-page PDF generation.',
          tech: 'Redis, Laravel Horizon, Supervisor',
          latency: '70%+ faster UI response',
          throughput: 'Zero web timeout drops',
        },
        {
          id: 'partitioned-db',
          name: 'Partitioned MySQL Cluster',
          type: 'storage',
          description: 'Table partitioning by date & order ranges with composite indexing and summary views.',
          tech: 'MySQL Partitioning, Indexed Views',
          latency: '< 120ms heavy reports',
          throughput: 'Millions of ledger records',
        },
      ],
      flowSteps: [
        '1. Factory operators scan production bundles across Cutting, Sewing, and Finishing lines.',
        '2. Core ERP validates piece rates, inventory allocations, and line capacity.',
        '3. Shift transaction logs are written directly to partitioned tables for ultra-fast indexing.',
        '4. Heavy management reports and costing analytics are delegated to Redis background workers.',
        '5. Denormalized summary tables provide instant dashboard telemetry to plant executives.',
      ],
      metrics: [
        { label: 'Report Speedup', value: '70%+', detail: 'Via database partitioning & views' },
        { label: 'Production Modules', value: '12+', detail: 'Merchandising to Shipment' },
        { label: 'Team Leadership', value: '5 Eng.', detail: 'Led full lifecycle development' },
      ],
    },
    {
      id: 'telehealth-flow',
      title: 'Clinical ePrescription & Telehealth Architecture',
      subtitle: 'Doctor appointment scheduling, medical history records, and instant prescription generation.',
      badge: 'Healthcare Architecture',
      badgeColor: 'var(--emerald-400)',
      nodes: [
        {
          id: 'patient-app',
          name: 'Web & Native Mobile Apps',
          type: 'client',
          description: 'Patient booking portal and dedicated doctor consultation applications.',
          tech: 'React.js, React Native, Mobile REST',
          latency: 'Ultra-responsive UI',
          throughput: 'Doctor & Patient portals',
        },
        {
          id: 'clinical-gateway',
          name: 'NestJS Gateway & Auth',
          type: 'gateway',
          description: 'Role-based access control (Doctor, Patient, Clinic Admin) with JWT security.',
          tech: 'NestJS, TypeScript, Passport JWT',
          latency: '< 20ms auth check',
          throughput: 'HIPAA-aware security',
        },
        {
          id: 'nosql-records',
          name: 'MongoDB Clinical History',
          type: 'storage',
          description: 'Flexible schema documents for vitals, chief complaints, investigations, and diagnoses.',
          tech: 'MongoDB, Aggregation Pipeline',
          latency: '< 15ms patient search',
          throughput: 'Instant Phone/ID lookup',
        },
        {
          id: 'relational-db',
          name: 'MySQL Transaction Ledger',
          type: 'storage',
          description: 'ACID-compliant relational store for appointment slots, doctor schedules, and billing.',
          tech: 'MySQL 8, Foreign key constraints',
          latency: '< 10ms slot locking',
          throughput: 'Zero double-booking',
        },
        {
          id: 'rx-generator',
          name: 'PDF Prescription Engine',
          type: 'service',
          description: 'Generates authenticated digital prescriptions with dosage schedules and doctor signatures.',
          tech: 'Node.js, AWS S3, CloudFront',
          latency: '< 800ms PDF generation',
          throughput: 'Instant downloadable Rx',
        },
      ],
      flowSteps: [
        '1. Patient searches specialist doctors and books appointment slot with transactional lock.',
        '2. Doctor logs clinical notes, chief complaints, physical examinations, and ICD diagnoses.',
        '3. System looks up historical prescriptions instantly via Patient ID or mobile phone number.',
        '4. Prescription generation engine formats dosage timelines, instructions, and follow-up advice.',
        '5. Secure PDF prescription is archived in AWS S3 and pushed to mobile app and patient portal.',
      ],
      metrics: [
        { label: 'Patient History', value: '< 15ms', detail: 'Instant multi-visit lookup' },
        { label: 'Dual Database', value: 'Hybrid', detail: 'MongoDB records + MySQL slots' },
        { label: 'Mobile API', value: '100% REST', detail: 'Serving iOS and Android apps' },
      ],
    },
  ];

  const [activeArchIdx, setActiveArchIdx] = useState(0);
  const [activeNode, setActiveNode] = useState<ArchNode | null>(architectures[0].nodes[0]);

  const currentArch = architectures[activeArchIdx];

  const handleSelectArch = (idx: number) => {
    setActiveArchIdx(idx);
    setActiveNode(architectures[idx].nodes[0]);
  };

  const getNodeIcon = (type: ArchNode['type']) => {
    switch (type) {
      case 'client':
        return <Cpu size={18} color="var(--cyan-400)" />;
      case 'gateway':
        return <Cloud size={18} color="var(--blue-500)" />;
      case 'service':
        return <Server size={18} color="var(--emerald-400)" />;
      case 'queue':
        return <Activity size={18} color="var(--amber-500)" />;
      case 'storage':
        return <Database size={18} color="var(--violet-500)" />;
      case 'external':
        return <Zap size={18} color="#ec4899" />;
    }
  };

  return (
    <section id="architecture" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Interactive System Topology</span>
          </div>
          <h2 className="section-title">
            Enterprise Architecture & <span className="gradient-text">Event Flow Visualizer</span>
          </h2>
          <p className="section-subtitle">
            Explore the real-world distributed architectures I designed and engineered: 
            from multi-vendor API webhook buses to partitioned database clusters handling high-volume workloads.
          </p>
        </div>

        {/* Architecture Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {architectures.map((arch, idx) => {
            const isSelected = activeArchIdx === idx;
            return (
              <button
                key={arch.id}
                onClick={() => handleSelectArch(idx)}
                className="btn"
                style={{
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.875rem',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'var(--gradient-brand)' : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: isSelected ? '1px solid transparent' : '1px solid var(--border-medium)',
                  boxShadow: isSelected ? '0 4px 16px rgba(6, 182, 212, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <RefreshCw size={14} />
                <span>{arch.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            background: 'linear-gradient(180deg, rgba(14, 20, 34, 0.95) 0%, rgba(9, 13, 22, 0.98) 100%)',
            boxShadow: 'var(--shadow-lg), 0 0 50px rgba(6, 182, 212, 0.15)',
          }}
        >
          {/* Header of Active Diagram */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: currentArch.badgeColor,
                    background: 'rgba(6, 182, 212, 0.1)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {currentArch.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>&bull; Click any node below to inspect</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{currentArch.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {currentArch.subtitle}
              </p>
            </div>

            {/* Quick Metrics Chips */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {currentArch.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.5rem 0.9rem',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    textAlign: 'right',
                  }}
                >
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--cyan-400)', lineHeight: 1.1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Topology Nodes Grid */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Zap size={14} color="var(--cyan-400)" />
              <span>Interactive Architecture Nodes (Select to Inspect)</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
              className="topology-grid"
            >
              {currentArch.nodes.map((node) => {
                const isNodeActive = activeNode?.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    style={{
                      padding: '1.15rem',
                      borderRadius: 'var(--radius-md)',
                      background: isNodeActive ? 'var(--bg-elevated)' : 'var(--bg-card)',
                      border: isNodeActive ? '1px solid var(--cyan-400)' : '1px solid var(--border-subtle)',
                      boxShadow: isNodeActive ? '0 0 20px rgba(6, 182, 212, 0.25)' : 'none',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (!isNodeActive) {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isNodeActive) {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getNodeIcon(node.type)}
                      </div>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {node.type}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {node.name}
                    </div>

                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-400)' }}>
                      {node.tech.split(',')[0]}
                    </div>

                    {isNodeActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-4px',
                          right: '-4px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: 'var(--cyan-400)',
                          boxShadow: '0 0 8px var(--cyan-400)',
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deep-Dive Inspector Panel for Selected Node */}
          {activeNode && (
            <div
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(6, 182, 212, 0.05)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                marginBottom: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--cyan-400)', fontFamily: 'var(--font-mono)' }}>
                    Node Inspector &bull; {activeNode.type}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {activeNode.name}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {activeNode.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Technologies & Protocols</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {activeNode.tech}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {activeNode.latency && (
                    <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Latency Benchmark</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--emerald-400)' }}>
                        {activeNode.latency}
                      </div>
                    </div>
                  )}

                  {activeNode.throughput && (
                    <div style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Throughput / Scale</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan-400)' }}>
                        {activeNode.throughput}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* End-to-End Event Pipeline Steps */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ShieldCheck size={18} color="var(--emerald-400)" />
              <span>Production Event Sequence & Fail-Safe Pipeline</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {currentArch.flowSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(6, 182, 212, 0.15)',
                      color: 'var(--cyan-400)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
