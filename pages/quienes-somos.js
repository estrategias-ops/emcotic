import Head from 'next/head';
import Image from 'next/image';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>Quiénes Somos — EMCOTIC S.A.S</title>
        <meta name="description" content="Conoce al equipo experto detrás de EMCOTIC: Gestión de Proyectos, Derecho Tecnológico y Finanzas Estratégicas." />
      </Head>

      <main>
        {/* --- HERO --- */}
        <section style={{ background: 'linear-gradient(160deg, var(--blue-dark) 0%, var(--blue-mid) 100%)', padding: '80px 1rem', textAlign: 'center' }}>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: 'white', fontFamily: 'Raleway, sans-serif' }}>
              Más que Consultores, <span style={{ color: 'var(--teal-light)' }}>Socios Estratégicos</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--blue-pale)' }}>
              Desde 2010, fusionamos la rigurosidad de la gerencia de proyectos, la seguridad del derecho tecnológico y la solidez financiera para escalar empresas.
            </p>
          </div>
        </section>

        {/* --- HISTORIA Y ENFOQUE --- */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Nuestra Trayectoria</h2>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-light)' }}>
                <p>
                  Fundada el 18 de marzo de 2010 en Barranquilla, <strong>EMCOTIC S.A.S.</strong> nació con una visión clara: ser el motor que impulsa la investigación, el desarrollo y la innovación tecnológica en la región.
                </p>
                <p>
                  A lo largo de más de una década, hemos evolucionado de ser una consultora tecnológica a convertirnos en una firma integral capaz de movilizar recursos superiores a los <strong style={{ color: 'var(--blue-dark)' }}>COP $37.600 millones</strong> en proyectos de alto impacto social y tecnológico.
                </p>
                <p>
                  Entendemos que la innovación no es solo tecnología; es una estructura legal sólida, una gestión humana eficiente y una estrategia financiera impecable.
                </p>
              </div>
            </div>
            <div className="rounded-lg h-64 md:h-full flex items-center justify-center p-8" style={{ background: 'var(--blue-bg)' }}>
              <Image
                src="/logo_emcotic_2026.png"
                alt="EMCOTIC Historia"
                width={240}
                height={230}
                style={{ width: 'auto', maxWidth: '240px', height: 'auto', opacity: 0.9 }}
              />
            </div>
          </div>
        </section>

        {/* --- MISIÓN Y VISIÓN --- */}
        <section className="py-16 px-4" style={{ background: 'var(--gray-100)' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md" style={{ borderTop: '4px solid var(--blue-mid)' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full mr-4" style={{ background: 'var(--blue-bg)' }}>
                  <svg className="w-8 h-8" fill="none" stroke="var(--blue-mid)" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Nuestro Propósito (Misión)</h3>
              </div>
              <p className="text-lg" style={{ color: 'var(--text-light)' }}>
                Democratizar el éxito de la innovación, blindando legal y técnicamente las ideas que transforman sociedades. Facilitamos la maduración tecnológica y empresarial con un enfoque ético y humano.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md" style={{ borderTop: '4px solid var(--teal-mid)' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full mr-4" style={{ background: 'var(--teal-pale)' }}>
                  <svg className="w-8 h-8" fill="none" stroke="var(--teal-mid)" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Nuestra Ambición (Visión)</h3>
              </div>
              <p className="text-lg" style={{ color: 'var(--text-light)' }}>
                Ser el puente estratégico en Latinoamérica donde la tecnología, el derecho y la gestión humana convergen para convertir proyectos complejos en realidades sostenibles y rentables.
              </p>
            </div>
          </div>
        </section>

        {/* --- EL EQUIPO DIRECTIVO --- */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Liderazgo Experto</h2>

          <div className="grid md:grid-cols-2 gap-12 gap-y-16">

            {/* Jorge Arango */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto relative" style={{ background: 'var(--gray-200)', border: '4px solid var(--blue-pale)' }}>
                  <Image src="/equipo/jorge.jpg" alt="Jorge Arango" layout="fill" objectFit="cover" objectPosition="center top" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Jorge Arango Castaño</h3>
                <p className="font-semibold mb-1" style={{ color: 'var(--teal-mid)' }}>CEO Fundador & Director de Proyectos</p>
                <a href="mailto:jarangoc@emcotic.com" className="text-sm mb-3 block" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>jarangoc@emcotic.com</a>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>
                  Psicólogo y Magíster en Dirección y Gestión de Proyectos. Con más de 14 años de experiencia, ha liderado iniciativas de innovación movilizando más de COP $37 mil millones. Experto en formulación de proyectos (Regalías, MinCiencias) y metodologías ágiles.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Project Management</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Innovación</span>
                </div>
              </div>
            </div>

            {/* Javier Cantillo */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto relative" style={{ background: 'var(--gray-200)', border: '4px solid var(--blue-pale)' }}>
                  <Image src="/equipo/javier.jpg" alt="Javier Cantillo" layout="fill" objectFit="cover" objectPosition="center top" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Javier Cantillo</h3>
                <p className="font-semibold mb-1" style={{ color: 'var(--teal-mid)' }}>Socio & Director Legal-Tech</p>
                <a href="mailto:javier.cantillo@emcotic.com" className="text-sm mb-3 block" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>javier.cantillo@emcotic.com</a>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>
                  Abogado y Magíster en Derecho. Especialista en Derecho Contractual y nuevas tecnologías con más de 20 años de experiencia. Referente en Propiedad Intelectual y estructuración legal para Startups y emprendimientos digitales.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Legal-Tech</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Propiedad Intelectual</span>
                </div>
              </div>
            </div>

            {/* Jaime Blanco */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto relative" style={{ background: 'var(--gray-200)', border: '4px solid var(--blue-pale)' }}>
                  <Image src="/equipo/jaime.jpg" alt="Jaime Blanco" layout="fill" objectFit="cover" objectPosition="center top" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--blue-dark)', fontFamily: 'Raleway, sans-serif' }}>Jaime Blanco Aristizábal</h3>
                <p className="font-semibold mb-1" style={{ color: 'var(--teal-mid)' }}>Gestor de Proyectos Senior</p>
                <a href="mailto:jaime.blanco@emcotic.com" className="text-sm mb-3 block" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>jaime.blanco@emcotic.com</a>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>
                  Ingeniero Civil y Especialista en Gerencia Integral de Obras. Cuenta con una amplia trayectoria en el sector público y privado, liderando planes de desarrollo económico y social. Su experiencia asegura la viabilidad técnica y la ejecución eficiente de proyectos de gran envergadura.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Gerencia Integral</span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--blue-bg)', color: 'var(--blue-mid)' }}>Desarrollo Social</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
