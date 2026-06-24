import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>EMCOTIC S.A.S — Gerencia de Proyectos, Tecnología e Innovación</title>
        <meta name="description" content="Gerencia estratégica de proyectos, desarrollo tecnológico con IA y consultoría senior. Barranquilla, Colombia." />
      </Head>

      {/* ── HERO ── */}
      <section className="hero">
        <div style={{ marginBottom: '24px' }}>
          <img src="/logo_nav.png" alt="EMCOTIC S.A.S" style={{ width: 'auto', height: '72px', maxWidth: '100%' }} />
        </div>
        <div className="hero-eyebrow">Barranquilla, Colombia · 15+ años de experiencia</div>
        <h1>Estructuramos lo que tu empresa<br /><em>necesita para crecer.</em></h1>
        <p className="hero-sub">Gerencia estratégica de proyectos, desarrollo tecnológico con IA y consultoría senior. Todo bajo un mismo techo, con blindaje de propiedad intelectual.</p>
        <div className="hero-btns">
          <a href="/#servicios" className="btn-primary">Ver nuestros servicios</a>
          <a href="https://wa.me/573175103393" className="btn-secondary" target="_blank" rel="noopener noreferrer">Hablar con un experto →</a>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="services-bg section-padded" id="servicios">
        <div className="section-inner">
          <div className="section-label">Nuestros servicios</div>
          <div className="section-title">Tres capacidades. Un resultado: tu empresa con activos reales.</div>
          <div className="divider"></div>
          <div className="services-grid">

            <div className="srv-card">
              <div className="srv-icon">🏗</div>
              <div className="srv-title">Fábrica de Proyectos</div>
              <p className="srv-desc">Formulamos y gerenciamos proyectos de I+D+i con acceso a financiación pública y privada. Regalías, MinCiencias, fondos internacionales. Más de $37.000 millones COP movilizados en 15 años convierten ideas en activos financiables.</p>
            </div>

            <div className="srv-card featured">
              <div className="srv-icon">💡</div>
              <div className="srv-title">Tecnología e Innovación</div>
              <p className="srv-desc">Diseñamos y desarrollamos soluciones digitales con IA, automatización de procesos y software especializado. Si tienes un proceso que quieres optimizar o un producto digital que quieres construir, nosotros lo hacemos realidad.</p>
              <span className="srv-badge">Ver portafolio →</span>
            </div>

            <div className="srv-card">
              <div className="srv-icon">🔍</div>
              <div className="srv-title">Red de Consultores Senior</div>
              <p className="srv-desc">Acceso a especialistas multidisciplinares con décadas de experiencia en las principales áreas de la estructura empresarial. Cada activo digital y cada proyecto queda blindado con propiedad intelectual, contratos y derecho de autor.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className="section-padded" id="quienes">
        <div className="section-inner">
          <div className="section-label">¿Por qué Emcotic?</div>
          <div className="section-title">Los números hablan por nosotros.</div>
          <div className="divider"></div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-num" style={{ fontSize: '36px', color: 'var(--blue-dark)' }}>$37B</div>
              <div className="metric-label">COP movilizados en proyectos financiados</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">15+</div>
              <div className="metric-label">años en el mercado colombiano</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">360°</div>
              <div className="metric-label">Estructura + Tecnología + Conocimiento</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">IA</div>
              <div className="metric-label">propia — pioneros en diagnóstico con IA aplicada</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link href="/quienes-somos" className="btn-primary">Conoce al equipo →</Link>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="services-bg section-padded" id="quienes-somos-home">
        <div className="section-inner reveal">
          <div className="section-label">Quiénes somos</div>
          <div className="section-title">15 años construyendo lo que importa.</div>
          <div className="divider"></div>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', lineHeight: '1.8', maxWidth: '720px', marginBottom: '32px' }}>
            Fundada en 2010 en Barranquilla, EMCOTIC S.A.S. nació para convertir ideas complejas en activos reales. A lo largo de más de una década hemos movilizado más de COP $37.600 millones en proyectos de alto impacto tecnológico y social, combinando gerencia de proyectos, tecnología propia y un equipo de consultores senior multidisciplinar.
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', lineHeight: '1.8', maxWidth: '720px', marginBottom: '40px' }}>
            Entendemos que innovar no es solo tecnología: es una estructura legal sólida, una gestión eficiente y una estrategia financiera impecable. Por eso cada proyecto que tocamos queda blindado con propiedad intelectual, contratos robustos y derecho de autor.
          </p>
          <Link href="/quienes-somos" className="btn-primary">Conoce al equipo →</Link>
        </div>
      </section>

      {/* ── PORTAFOLIO — CAMINOS DEL SER COMO CASO DE ÉXITO ── */}
      <section className="cds-section" id="portafolio">
        <div className="cds-inner reveal">
          <div className="cds-top">
            <div className="cds-brand-block">
              <div className="cds-eyebrow">Nuestro trabajo en acción</div>
              <div className="cds-brand-name">Construimos Caminos del Ser.<br />Podemos construir lo tuyo.</div>
              <div className="divider teal"></div>
              <p className="cds-pitch">
                Cuando quisimos demostrar lo que la tecnología puede hacer por la salud mental, lo construimos nosotros mismos. Caminos del Ser es nuestra plataforma propia: herramientas de diagnóstico con IA, software clínico y programas de formación para psicólogos y organizaciones.
              </p>
              <p className="cds-pitch" style={{ marginTop: '12px' }}>
                <strong>Todo lo que ves en Caminos del Ser fue diseñado y construido por Emcotic.</strong>
              </p>
            </div>
            <div className="cds-b2b-callout">
              <p style={{ fontSize: '15px', fontWeight: '600', color: 'var(--teal-light)', marginBottom: '12px' }}>¿Tu empresa necesita una solución similar?</p>
              <p>Cuéntanos tu reto y construimos la solución tecnológica que tu empresa necesita.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
                <a href="https://wa.me/573175103393" className="btn-teal" target="_blank" rel="noopener noreferrer">Cuéntanos tu proyecto →</a>
                <a href="https://www.caminosdelser.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal-light)', fontSize: '13px', textAlign: 'center', textDecoration: 'underline' }}>Conocer Caminos del Ser →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="contact-section" id="contacto">
        <div className="section-inner">
          <h2>¿Listo para escalar tu empresa?</h2>
          <p>Más que consultores, socios estratégicos. Hablemos de tus proyectos y cómo podemos ayudarte a crecer de forma sostenible.</p>
          <a href="https://wa.me/573175103393" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer-full">
        <div className="footer-inner">
          <div className="footer-col">
            <img src="/logo_nav.png" alt="EMCOTIC S.A.S" style={{ height: '40px', width: 'auto', marginBottom: '10px' }} />
            <p className="footer-tagline">Innovación y tecnología para empresas que quieren crecer.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Servicios</div>
            <a href="/#servicios">Fábrica de Proyectos</a>
            <a href="/#servicios">Tecnología e Innovación</a>
            <a href="/#servicios">Red de Consultores Senior</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Marcas</div>
            <a href="https://www.caminosdelser.co" target="_blank" rel="noopener noreferrer">Caminos del Ser</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contacto</div>
            <a href="mailto:jarango@emcotic.com">jarango@emcotic.com</a>
            <span>Barranquilla, Colombia</span>
            <a href="https://wa.me/573175103393" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EMCOTIC S.A.S. Todos los derechos reservados.</span>
          <Link href="/politica-de-datos">Política de Tratamiento de Datos</Link>
        </div>
      </footer>
    </>
  );
}
