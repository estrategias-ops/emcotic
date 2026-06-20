import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll reveal
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
        <meta name="description" content="Gerencia estratégica de proyectos, tecnología a la medida e inteligencia artificial aplicada al bienestar. Barranquilla, Colombia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── HERO ── */}
      <section className="hero">
        <div style={{ marginBottom: '20px' }}>
          <Image src="/logoprincipal.png" alt="EMCOTIC S.A.S" width={220} height={80} style={{ objectFit: 'contain', height: '64px', width: 'auto' }} priority />
        </div>
        <div className="hero-eyebrow">Innovación y Bienestar · Barranquilla, Colombia</div>
        <h1>Estructuramos tus proyectos,<br /><em>cuidamos a tus líderes.</em></h1>
        <p className="hero-sub">Gerencia estratégica de proyectos, tecnología a la medida e inteligencia artificial aplicada al bienestar. Más que consultores — socios estratégicos para el crecimiento sostenible de tu empresa.</p>
        <div className="hero-btns">
          <a href="#servicios" className="btn-primary">Ver nuestros servicios</a>
          <a href="#caminos" className="btn-secondary">✦ Conocer Caminos del Ser</a>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="services-bg section-padded" id="servicios">
        <div className="section-inner reveal">
          <div className="section-label">Nuestros servicios</div>
          <div className="section-title">Tres capacidades, un resultado sostenible</div>
          <div className="divider"></div>
          <p className="section-desc">No somos una consultora genérica. Combinamos estructura de proyectos, tecnología propia y conocimiento jurídico para acompañarte de principio a fin.</p>
          <div className="services-grid">

            <div className="srv-card">
              <div className="srv-icon">🏗</div>
              <div className="srv-title">Fábrica de Proyectos</div>
              <p className="srv-desc">Formulación y gerencia delegada de proyectos I+D+i. Acceso a financiación pública y privada: Regalías, MinCiencias y fondos internacionales. Más de 15 años convirtiendo ideas en activos financiables.</p>
            </div>

            <div className="srv-card featured">
              <div className="srv-icon">💡</div>
              <div className="srv-title">Tecnología e Innovación</div>
              <p className="srv-desc">Diseñamos y desarrollamos soluciones digitales con IA, automatización de procesos y software especializado a la medida. Si tienes un proceso que quieres optimizar con tecnología, nosotros lo construimos.</p>
              <span className="srv-badge">✦ Ver Caminos del Ser →</span>
            </div>

            <div className="srv-card">
              <div className="srv-icon">🧠</div>
              <div className="srv-title">Consultoría Especializada</div>
              <p className="srv-desc">Red de consultores senior multidisciplinar con décadas de experiencia acumulada, que incluye especialistas en las principales áreas de la estructura empresarial con enfoque de mejora de procesos con el blindaje de Propiedad intelectual, contratos y derecho de autor que requieren tus activos digitales y proyectos.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CAMINOS DEL SER ── */}
      <section className="cds-section" id="caminos">
        <div className="cds-inner reveal">

          <div className="cds-top">
            <div className="cds-brand-block">
              <div className="cds-eyebrow">✦ Tecnología e Innovación en acción</div>
              <div className="cds-brand-name">Caminos del Ser</div>
              <div className="cds-brand-sub">Una marca de Emcotic S.A.S · caminosdelser.co</div>
              <div className="divider teal"></div>
              <p className="cds-pitch">
                Construimos nuestras propias herramientas de IA aplicadas al bienestar y la productividad humana. <strong>Caminos del Ser es la demostración de lo que podemos hacer.</strong> Un líder agotado no puede construir una empresa exitosa — por eso desarrollamos tecnología que diagnostica, interviene y fortalece.
              </p>
            </div>
            <div className="cds-b2b-callout">
              <p>Todo lo que ves en Caminos del Ser — plataformas de diagnóstico con IA, software a la medida, herramientas de intervención — fue diseñado y construido por Emcotic.<br /><br /><strong style={{ color: 'var(--teal-light)' }}>¿Tu empresa necesita una solución similar?</strong></p>
              <a href="#contacto" className="btn-teal">Cuéntanos tu proyecto →</a>
            </div>
          </div>

          <div className="products-grid">

            <div className="prod-card">
              <div className="prod-header">
                <div className="prod-dot"></div>
                <span className="prod-name">AMELIA</span>
                <span className="prod-tag">IA · Salud mental organizacional</span>
              </div>
              <p className="prod-desc">Plataforma de diagnóstico de salud mental para toda la empresa — desde el CEO hasta el personal operativo. Mide burnout, ansiedad y motivación a nivel organizacional, entrega un índice consolidado de riesgo psicosocial y diseña el plan de intervención a la medida.</p>
            </div>

            <div className="prod-card">
              <div className="prod-header">
                <div className="prod-dot"></div>
                <span className="prod-name">DSME</span>
                <span className="prod-tag">IA · Diagnóstico para el CEO</span>
              </div>
              <p className="prod-desc">Diagnóstico de Salud Mental del Emprendedor. Herramienta especializada para CEOs y fundadores: evalúa el estado emocional del líder, identifica niveles de burnout y ansiedad, y genera un plan de acción personalizado para fortalecer su liderazgo y productividad.</p>
            </div>

            <div className="prod-card">
              <div className="prod-header">
                <div className="prod-dot"></div>
                <span className="prod-name">Cinformado</span>
                <span className="prod-tag">Software · Gestión clínica</span>
              </div>
              <p className="prod-desc">Sistema de gestión clínica y profesional desarrollado para psicólogos y profesionales de la salud mental. Optimiza la práctica clínica con tecnología diseñada para el contexto colombiano.</p>
            </div>

            <div className="prod-card">
              <div className="prod-header">
                <div className="prod-dot"></div>
                <span className="prod-name">Orientación en propósito</span>
                <span className="prod-tag">Acompañamiento · Proyecto de vida</span>
              </div>
              <p className="prod-desc">Guía integral para descubrir propósito de vida y construir proyectos personales concretos. Acompañamiento desde los 15 años, para personas en cualquier etapa vital.</p>
            </div>

            <div className="prod-card">
              <div className="prod-header">
                <div className="prod-dot"></div>
                <span className="prod-name">Talleres</span>
                <span className="prod-tag">Empresas · Instituciones educativas</span>
              </div>
              <p className="prod-desc">Talleres personalizados sobre PNL, liderazgo, cohesión de equipos y gestión del cambio. Adaptados a las necesidades específicas de organizaciones y centros educativos.</p>
            </div>

          </div>

          <div className="cds-footer">
            <a href="https://www.caminosdelser.co" target="_blank" rel="noopener noreferrer">🌐 www.caminosdelser.co</a>
            <span style={{ color: '#4a6a7a', fontSize: '13px' }}>·</span>
            <span style={{ color: '#8fa3bc', fontSize: '13px' }}>Una empresa de Emcotic S.A.S</span>
          </div>
        </div>
      </section>

      {/* ── B2B BRIDGE ── */}
      <section className="bridge-section">
        <div className="bridge-inner reveal">
          <div className="bridge-text">
            <h3>¿Tu empresa necesita optimizar procesos con tecnología?</h3>
            <p>Lo que construimos para Caminos del Ser — plataformas con IA, software especializado, automatización de procesos — lo podemos construir para tu empresa. Cuéntanos el reto y diseñamos la solución.</p>
          </div>
          <div className="bridge-cta">
            <a href="#contacto" className="btn-primary">Hablemos de tu proyecto →</a>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS / MÉTRICAS ── */}
      <section className="section-padded" id="quienes">
        <div className="section-inner reveal">
          <div className="section-label">¿Por qué Emcotic?</div>
          <div className="section-title">Experiencia, tecnología y enfoque humano</div>
          <div className="divider"></div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-num">15+</div>
              <div className="metric-label">años en el mercado colombiano</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">$37B</div>
              <div className="metric-label">COP movilizados en proyectos financiados</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">IA</div>
              <div className="metric-label">pioneros en diagnóstico de salud mental empresarial</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">360°</div>
              <div className="metric-label">estructura + tecnología + conocimiento</div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <Link href="/quienes-somos" className="btn-primary">Conoce al equipo →</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section className="contact-section" id="contacto">
        <div className="section-inner">
          <h2>¿Listo para escalar tu empresa?</h2>
          <p>Más que consultores, socios estratégicos. Hablemos de tus proyectos y cómo podemos ayudarte a crecer de forma sostenible.</p>
          <a href="https://wa.me/573175103393" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enviar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} EMCOTIC S.A.S. Todos los derechos reservados.</span>
        <Link href="/politica-de-datos">Política de Tratamiento de Datos</Link>
        <span>Barranquilla, Colombia · jarango@emcotic.com</span>
      </footer>
    </>
  );
}
