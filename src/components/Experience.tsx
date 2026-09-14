import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Roadmap</span>
          </div>
          <h2 className="section-title">
            12+ Years of <span className="gradient-text">Leadership & Engineering</span>
          </h2>
          <p className="section-subtitle">
            A progressive journey from early software engineering roots to spearheading technical teams 
            and architecting complex enterprise systems for global organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--cyan-400), var(--emerald-400), var(--violet-500), rgba(255, 255, 255, 0.05))',
              zIndex: 0,
            }}
          />

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  paddingLeft: '3.75rem',
                }}
              >
                {/* Node Icon on Line */}
                <div
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '1.25rem',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: exp.isCurrent
                      ? 'var(--cyan-400)'
                      : 'var(--bg-elevated)',
                    border: '3px solid var(--bg-base)',
                    boxShadow: exp.isCurrent
                      ? '0 0 15px var(--cyan-400)'
                      : '0 0 0 2px var(--border-medium)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {exp.isCurrent && (
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: exp.isCurrent
                      ? '1px solid var(--border-active)'
                      : '1px solid var(--border-subtle)',
                    boxShadow: exp.isCurrent
                      ? 'var(--shadow-md), 0 0 30px rgba(6, 182, 212, 0.15)'
                      : 'var(--shadow-sm)',
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-full)',
                              background: 'rgba(16, 185, 129, 0.15)',
                              color: 'var(--emerald-400)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                            }}
                          >
                            Current Role
                          </span>
                        )}
                        {exp.type === 'Leadership' && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              padding: '0.2rem 0.6rem',
                              borderRadius: 'var(--radius-full)',
                              background: 'rgba(6, 182, 212, 0.15)',
                              color: 'var(--cyan-400)',
                              border: '1px solid rgba(6, 182, 212, 0.3)',
                            }}
                          >
                            Tech Leadership
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--cyan-400)',
                          marginTop: '0.2rem',
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.25rem',
                      }}
                      className="exp-meta"
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List (Summarized) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
                    {exp.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2
                          size={14}
                          color="var(--cyan-400)"
                          style={{ flexShrink: 0, marginTop: '0.2rem' }}
                        />
                        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {exp.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.techStack.length > 5 && (
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-400)', padding: '0.15rem 0.35rem' }}>
                        +{exp.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Education Milestone Item */}
            <div
              style={{
                position: 'relative',
                paddingLeft: '3.75rem',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '1.25rem',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--violet-500)',
                  border: '3px solid var(--bg-base)',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={13} color="#ffffff" />
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(15, 22, 36, 0.7) 100%)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--violet-500)',
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      Academic Education
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.4rem' }}>
                      {EDUCATION.degree}
                    </h3>
                    <div style={{ fontSize: '0.95rem', color: 'var(--cyan-400)', fontWeight: 600 }}>
                      {EDUCATION.institution}
                    </div>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Graduated {EDUCATION.year} &bull; {EDUCATION.location}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  {EDUCATION.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-meta {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
