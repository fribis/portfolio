import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const content = {
  en: {
    name: 'Friedrich Bischoff',
    tagline: 'Designer, Educator',
    nav: {
      design: 'Design',
      talks: 'Talks',
      consulting: 'Consulting'
    },
    sections: {
      design: {
        title: 'Design',
        description: 'Creating meaningful digital experiences at the intersection of aesthetics, functionality, and human-centered innovation.',
        content: 'Design is more than aesthetics—it\'s about creating systems that resonate with human needs and technological possibilities. My work spans digital interfaces, interactive installations, and design systems that bridge the gap between vision and execution.\n\nEvery project begins with understanding context: the users, the constraints, the opportunities. Through iterative prototyping and rigorous testing, ideas transform into solutions that feel both inevitable and surprising.\n\nThe intersection of design and technology offers endless possibilities. From generative systems that create unique experiences to interfaces that adapt to individual needs, the future of design lies in embracing complexity while maintaining clarity.'
      },
      talks: {
        title: 'Talks',
        description: 'Lectures on computational design, creative coding, and the future of human-computer interaction.',
        content: 'Speaking at conferences, universities, and organizations about the evolving relationship between humans and technology. Topics range from the fundamentals of computational thinking to emerging paradigms in interface design.\n\nEach talk is tailored to the audience, whether introducing creative coding to designers or exploring ethical implications of AI with technologists. The goal is always to bridge disciplines and inspire new ways of thinking.\n\nRecent topics include generative design systems, the role of AI in creative processes, and how computational thinking reshapes traditional design methodologies. These conversations explore not just what\'s possible, but what\'s meaningful.'
      },
      consulting: {
        title: 'Consulting',
        description: 'Strategic design consulting, workshops, and lectures for organizations navigating digital transformation and innovation.',
        content: 'Working with organizations to develop design strategies that align with business goals and user needs. This includes design audits, team workshops, and long-term strategic partnerships.\n\nWhether establishing design systems, training teams in new methodologies, or guiding product vision, the focus remains on creating sustainable change. It\'s about building capability, not just delivering solutions.\n\nWorkshops range from intensive one-day sessions to multi-week programs, covering topics like design thinking, prototyping methodologies, and computational design. The aim is to empower teams to continue evolving their practice long after our collaboration ends.'
      }
    }
  },
  de: {
    name: 'Friedrich Bischoff',
    tagline: 'Designer, Educator',
    nav: {
      design: 'Design',
      talks: 'Talks',
      consulting: 'Consulting'
    },
    sections: {
      design: {
        title: 'Design',
        description: 'Bedeutungsvolle digitale Erlebnisse an der Schnittstelle von Ästhetik, Funktionalität und menschenzentrierter Innovation.',
        content: 'Design ist mehr als Ästhetik—es geht um Systeme, die mit menschlichen Bedürfnissen und technologischen Möglichkeiten resonieren. Meine Arbeit umfasst digitale Interfaces, interaktive Installationen und Design-Systeme, die Vision und Umsetzung verbinden.\n\nJedes Projekt beginnt mit dem Verstehen des Kontexts: die Nutzer, die Einschränkungen, die Möglichkeiten. Durch iteratives Prototyping und rigoroses Testen werden Ideen zu Lösungen, die sich sowohl unvermeidlich als auch überraschend anfühlen.\n\nDie Schnittstelle von Design und Technologie bietet endlose Möglichkeiten. Von generativen Systemen bis zu Interfaces, die sich individuellen Bedürfnissen anpassen—die Zukunft des Designs liegt darin, Komplexität zu umarmen und dabei Klarheit zu bewahren.'
      },
      talks: {
        title: 'Talks',
        description: 'Vorträge über Computational Design, Creative Coding und die Zukunft der Mensch-Computer-Interaktion.',
        content: 'Vorträge auf Konferenzen, Universitäten und in Organisationen über die sich entwickelnde Beziehung zwischen Mensch und Technologie. Themen reichen von Grundlagen des computational thinking bis zu neuen Paradigmen im Interface-Design.\n\nJeder Vortrag ist auf das Publikum zugeschnitten, sei es die Einführung in Creative Coding für Designer oder die Erforschung ethischer Implikationen von KI mit Technologen. Das Ziel ist stets, Disziplinen zu verbinden und neue Denkweisen anzuregen.\n\nAktuelle Themen umfassen generative Design-Systeme, die Rolle von KI in kreativen Prozessen und wie computational thinking traditionelle Design-Methodologien neu formt. Diese Gespräche erforschen nicht nur was möglich ist, sondern was bedeutsam ist.'
      },
      consulting: {
        title: 'Consulting',
        description: 'Strategische Design-Beratung, Workshops und Vorträge für Organisationen auf dem Weg durch digitale Transformation und Innovation.',
        content: 'Zusammenarbeit mit Organisationen zur Entwicklung von Design-Strategien, die sich an Geschäftszielen und Nutzerbedürfnissen orientieren. Dies umfasst Design-Audits, Team-Workshops und langfristige strategische Partnerschaften.\n\nOb beim Aufbau von Design-Systemen, der Schulung von Teams in neuen Methodologien oder der Leitung der Produktvision—der Fokus bleibt auf nachhaltiger Veränderung. Es geht darum, Fähigkeiten aufzubauen, nicht nur Lösungen zu liefern.\n\nWorkshops reichen von intensiven Eintages-Sessionen bis zu mehrwöchigen Programmen und decken Themen wie Design Thinking, Prototyping-Methodologien und Computational Design ab. Das Ziel ist es, Teams zu befähigen, ihre Praxis lange nach Ende unserer Zusammenarbeit weiterzuentwickeln.'
      }
    }
  }
}

export default function Home() {
  const [lang, setLang] = useState('en')
  const [activeSection, setActiveSection] = useState('design')
  const t = content[lang]

  return (
    <>
      <Head>
        <title>{t.name} — {t.tagline}</title>
        <meta name="description" content={t.sections[activeSection].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="relative border-b border-gray-200 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/header-bg.jpg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                {/* Outer glow circle with gradient fade */}
                <div className="absolute inset-0 w-[70px] h-[70px] rounded-full -translate-x-[9px] -translate-y-[9px]"
                     style={{background: 'radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, rgba(96, 165, 250, 0.5) 50%, rgba(96, 165, 250, 0.12) 100%)'}}>
                </div>
                {/* Avatar circle */}
                <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden bg-white">
                  <Image
                    src="/portrait.png"
                    alt={t.name}
                    fill
                    className="object-cover scale-[1.3]"
                    sizes="52px"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold text-white">{t.name}</h1>
                <div className="bg-white pl-4 pr-3 pt-0.5 pb-1 w-full rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{t.tagline}</span>
                </div>
              </div>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
              className="text-sm font-semibold text-gray-900 bg-white px-4 py-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'DE' : 'EN'}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-5xl">
            {/* Large Letter Navigation */}
            <nav className="mb-20">
              <ul className="flex items-baseline justify-center gap-12 md:gap-20 lg:gap-32">
                <li className="flex flex-col items-start">
                  <button
                    onClick={() => setActiveSection('design')}
                    className={`text-7xl md:text-9xl lg:text-[12rem] font-bold transition-colors ${
                      activeSection === 'design'
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    D
                  </button>
                  {activeSection === 'design' && (
                    <span className="text-sm uppercase tracking-wider text-gray-500 mt-2 ml-2 md:ml-3 lg:ml-3">
                      {t.nav.design}
                    </span>
                  )}
                </li>
                <li className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveSection('talks')}
                    className={`text-7xl md:text-9xl lg:text-[12rem] font-bold transition-colors ${
                      activeSection === 'talks'
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    T
                  </button>
                  {activeSection === 'talks' && (
                    <span className="text-sm uppercase tracking-wider text-gray-500 mt-2">
                      {t.nav.talks}
                    </span>
                  )}
                </li>
                <li className="flex flex-col items-end">
                  <button
                    onClick={() => setActiveSection('consulting')}
                    className={`text-7xl md:text-9xl lg:text-[12rem] font-bold transition-colors ${
                      activeSection === 'consulting'
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-gray-400'
                    }`}
                  >
                    C
                  </button>
                  {activeSection === 'consulting' && (
                    <span className="text-sm uppercase tracking-wider text-gray-500 mt-2">
                      {t.nav.consulting}
                    </span>
                  )}
                </li>
              </ul>
            </nav>

            {/* Section Description */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {t.sections[activeSection].description}
            </p>
          </div>
        </div>

        {/* Below the Fold Content */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="max-w-6xl mx-auto pl-0 pr-0 md:pr-12">
            <div className="grid md:grid-cols-[300px,1fr] lg:grid-cols-[400px,1fr] gap-12 lg:gap-16 items-start">
              {/* Image - Portrait */}
              <div>
                <div className="aspect-[3/4] w-full max-w-[300px] lg:max-w-none relative">
                  <Image
                    src={`/${activeSection}.jpg`}
                    alt={t.nav[activeSection.toLowerCase()]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="prose prose-lg max-w-none px-6 md:px-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent">
                  {t.nav[activeSection.toLowerCase()]}
                </h2>
                {t.sections[activeSection].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-gray-700 mb-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Icons */}
        <footer className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            <div className="flex items-center justify-center gap-8">
              <a
                href="mailto:hello@example.com"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
