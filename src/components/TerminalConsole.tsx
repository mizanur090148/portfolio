import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';

export const TerminalConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'welcome',
      output: `Welcome to Mizanur Rahman's Interactive Developer Terminal (v2.4.0)
Type "help" to list available commands, or click the quick command chips below.`,
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output =
      TERMINAL_COMMANDS[trimmed] ||
      `bash: command not found: "${trimmed}". Type "help" to see available commands.`;

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const quickCommands = ['about', 'skills', 'projects', 'experience', 'stats', 'contact', 'clear'];

  return (
    <section id="terminal" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <TerminalIcon size={14} />
            <span>Interactive CLI Console</span>
          </div>
          <h2 className="section-title">
            Explore My Profile via <span className="gradient-text">Interactive Terminal</span>
          </h2>
          <p className="section-subtitle">
            Built for engineering leaders and developers who appreciate command-line efficiency. 
            Run native commands or click the shortcut buttons below.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="glass-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.15)',
            background: 'rgba(9, 13, 21, 0.95)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Window Titlebar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <TerminalIcon size={14} color="var(--cyan-400)" />
              <span>mizanur@architecture-core:~ (zsh)</span>
            </div>

            <button
              onClick={() => setHistory([])}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
              }}
              title="Clear Terminal"
            >
              <Trash2 size={13} />
              <span>Clear</span>
            </button>
          </div>

          {/* Quick Command Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
              padding: '0.75rem 1.25rem',
              background: 'rgba(0, 0, 0, 0.25)',
              borderBottom: '1px solid var(--border-subtle)',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Quick Run:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.25rem 0.6rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--cyan-400)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan-400)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.color = 'var(--cyan-400)';
                }}
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen Output Area */}
          <div
            style={{
              padding: '1.5rem',
              minHeight: '280px',
              maxHeight: '440px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              lineHeight: 1.6,
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, idx) => (
              <div key={idx} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <span style={{ color: 'var(--cyan-400)' }}>visitor@portfolio</span>
                  <span style={{ color: 'var(--text-muted)' }}>:</span>
                  <span style={{ color: 'var(--emerald-400)' }}>~</span>
                  <span style={{ color: 'var(--text-muted)' }}>$</span>
                  <span style={{ fontWeight: 600 }}>{entry.command}</span>
                </div>
                <div
                  style={{
                    color: 'var(--text-secondary)',
                    whiteSpace: 'pre-wrap',
                    paddingLeft: '1.25rem',
                    marginTop: '0.35rem',
                    borderLeft: '2px solid rgba(6, 182, 212, 0.3)',
                  }}
                >
                  {entry.output}
                </div>
              </div>
            ))}

            {/* Current Command Line Prompt */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--cyan-400)' }}>visitor@portfolio</span>
              <span style={{ color: 'var(--text-muted)' }}>:</span>
              <span style={{ color: 'var(--emerald-400)' }}>~</span>
              <span style={{ color: 'var(--text-muted)' }}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. help, skills, contact)..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  caretColor: 'var(--cyan-400)',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--cyan-400)',
                  cursor: 'pointer',
                  padding: '0.2rem',
                }}
                aria-label="Run command"
              >
                <CornerDownLeft size={16} />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
