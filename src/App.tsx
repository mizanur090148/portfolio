import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { TerminalConsole } from './components/TerminalConsole';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [toasts, setToasts] = useState<Array<{ id: number; message: string }>>([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('mizan_portfolio_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme';
    } else {
      document.body.className = 'dark-theme';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('mizan_portfolio_theme', newTheme);
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
    showToast(`Switched to ${newTheme} mode`);
  };

  const showToast = (message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleOpenTerminal = () => {
    const terminalEl = document.getElementById('terminal');
    if (terminalEl) {
      terminalEl.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = terminalEl.querySelector('input');
        input?.focus();
      }, 600);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Ambient Animated Mesh Background */}
      <div className="ambient-bg">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Main Floating Island Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenTerminal={handleOpenTerminal} />

      {/* Streamlined, Summarized Content Sections */}
      <main>
        <Hero onOpenTerminal={handleOpenTerminal} />
        <Projects />
        <Skills />
        <Experience />
        <TerminalConsole />
        <ResumeSection />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action: WhatsApp */}
      <a
        href={PERSONAL_INFO.whatsapp}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 80,
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'transform var(--transition-fast)',
        }}
        title="Direct WhatsApp Chat with Mizanur"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        <MessageCircle size={26} />
      </a>

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <CheckCircle2 size={18} color="var(--emerald-400)" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
