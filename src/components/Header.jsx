import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';

const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Process', href: '/#process' },
  { label: 'Core Engine', href: '/core-engine' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            <img src={logoMark} alt="" width="30" height="30" />
          </span>
          <span className="brand-name">Corentix<span className="brand-labs">&nbsp;Labs</span></span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} to={n.href}>{n.label}</Link>
          ))}
        </nav>

        <Link to="/#contact" className="btn btn-ghost header-cta">Start a Project</Link>

        <button
          className={`menu-btn ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {NAV.map((n) => (
              <Link key={n.href} to={n.href} onClick={close}>{n.label}</Link>
            ))}
            <Link to="/#contact" className="btn btn-primary" onClick={close}>Start a Project</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
