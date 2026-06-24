import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav">
      <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <img src="/logo_compacto.png" alt="EMCOTIC S.A.S" style={{ height: '44px', width: 'auto' }} />
      </Link>

      {/* Desktop links */}
      <nav className="nav-links" style={{ display: menuOpen ? 'none' : undefined }}>
        <a href="/#servicios">Servicios</a>
        <Link href="/quienes-somos">Quiénes somos</Link>
        <a href="/#portafolio">Portafolio</a>
        <a href="/#contacto">Contacto</a>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        className="mobile-menu-btn"
        aria-label="Menú"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen
            ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'white', borderBottom: '1px solid var(--blue-pale)',
          boxShadow: '0 4px 12px rgba(26,58,92,.1)', zIndex: 99,
          display: 'flex', flexDirection: 'column', padding: '12px 16px', gap: '4px'
        }}>
          <a href="/#servicios" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: 'var(--text-light)', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none' }}>Servicios</a>
          <Link href="/quienes-somos" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: 'var(--text-light)', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none' }}>Quiénes somos</Link>
          <a href="/#portafolio" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: 'var(--text-light)', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none' }}>Portafolio</a>
          <a href="/#contacto" onClick={() => setMenuOpen(false)} style={{ padding: '10px 12px', color: 'var(--text-light)', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '14px', borderRadius: '6px', textDecoration: 'none' }}>Contacto</a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
