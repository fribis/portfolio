import { useState } from 'react'
import Head from 'next/head'

const content = {
  en: {
    name: 'Friedrich Bischoff',
    title: 'Design Talks Consulting',
    subtitle: 'Lectures at the intersection of design and computing',
    about: 'I explore the creative potential where computational thinking meets design practice. My lectures bridge disciplines, making complex technical concepts accessible through design thinking.',
    topics: 'Topics',
    topicsList: [
      'Computational Design',
      'Creative Coding',
      'Digital Ethics',
      'Human-Computer Interaction',
      'Design Systems',
      'AI & Design'
    ],
    cta: 'Get in touch',
    availability: 'Available for lectures, workshops, and consulting',
    newsletter: 'Subscribe to Newsletter'
  },
  de: {
    name: 'Friedrich Bischoff',
    title: 'Design Talks Consulting',
    subtitle: 'Vorträge an der Schnittstelle von Design und Computing',
    about: 'Ich erforsche das kreative Potenzial, wo rechnerisches Denken auf Designpraxis trifft. Meine Vorträge verbinden Disziplinen und machen komplexe technische Konzepte durch Design Thinking zugänglich.',
    topics: 'Themen',
    topicsList: [
      'Computational Design',
      'Creative Coding',
      'Digitale Ethik',
      'Mensch-Computer-Interaktion',
      'Design-Systeme',
      'KI & Design'
    ],
    cta: 'Kontakt aufnehmen',
    availability: 'Verfügbar für Vorträge, Workshops und Beratung',
    newsletter: 'Newsletter abonnieren'
  }
}

export default function Home() {
  const [lang, setLang] = useState('en')
  const t = content[lang]

  return (
    <>
      <Head>
        <title>{t.title} | {t.name}</title>
        <meta name="description" content={t.subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Language Switcher */}
        <div className="fixed top-8 right-8 z-50">
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-accent transition-colors"
            aria-label="Switch language"
          >
            {lang === 'en' ? 'DE' : 'EN'}
          </button>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8">
            {t.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-4xl leading-relaxed">
            {t.subtitle}
          </p>
          <p className="text-xl md:text-2xl text-gray-500 mt-6">
            {t.name}
          </p>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {t.about}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.topics}</h2>
              <ul className="space-y-4">
                {t.topicsList.map((topic, index) => (
                  <li key={index} className="flex items-center text-lg md:text-xl text-gray-700">
                    <span className="w-2 h-2 bg-accent rounded-full mr-4"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="bg-gray-50 rounded-3xl p-12 md:p-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t.cta}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10">
              {t.availability}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
              >
                {t.cta}
              </a>
              <a
                href="#newsletter"
                className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg border-2 border-gray-200 transition-colors"
              >
                {t.newsletter}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-12 pt-10 border-t border-gray-200">
              <a
                href="mailto:hello@example.com"
                className="text-gray-600 hover:text-accent transition-colors text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 hover:text-accent transition-colors text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-accent transition-colors text-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 py-12 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {t.name} — {t.title}</p>
        </footer>
      </main>
    </>
  )
}
