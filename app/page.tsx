export default function Home() {
  const services = [
    {
      title: "Maßanfertigung",
      description: "Jedes Fliegengitter wird millimetergenau nach Ihren Fenstern und Türen angefertigt – für perfekten Sitz."
    },
    {
      title: "Professionelle Montage",
      description: "Unsere erfahrenen Monteure installieren fachgerecht und zuverlässig – schnell und sauber."
    },
    {
      title: "Langlebige Qualität",
      description: "Hochwertige Materialien und stabile Rahmen garantieren jahrelange Haltbarkeit und Freude."
    },
    {
      title: "Vielfältige Systeme",
      description: "Von Spannrahmen über Dreh- und Schiebetüren bis hin zu Rollos – die perfekte Lösung."
    },
    {
      title: "Vor-Ort-Beratung",
      description: "Wir kommen zu Ihnen, nehmen Maß und beraten Sie kostenlos und unverbindlich vor Ort."
    },
    {
      title: "Garantie & Service",
      description: "Umfassende Garantie und zuverlässiger Service – wir unterstützen Sie auch nach der Montage."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-gray-900">Gitter</span>
            <span className="text-green-600">Fix</span>
          </div>
          <div className="hidden sm:flex gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">Unsere Produkte</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">Kostenlose Beratung</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Kassel & Umgebung · Maßgefertigt</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Luft rein, <br/>
                <span className="text-green-600">Plagen</span> raus.
              </h1>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Professionelle Fliegengitter für Fenster, Türen und Dachfenster in Kassel. Maßgefertigt, langlebig und perfekt auf Ihre Bedürfnisse abgestimmt.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-sm">
                  Unsere Produkte
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition">
                  Kostenlose Beratung
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-square flex items-center justify-center shadow-lg">
              <div className="text-center">
                <svg className="w-24 h-24 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">Fliegengitter Fenster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Beratung über die Fertigung bis zur Montage – bei GitterFix erhalten Sie alles aus einer Hand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Bereit für Ihr Fliegengitter?</h2>
          <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen kostenlosen Beratungstermin mit unseren Experten vor Ort.
          </p>
          <button className="bg-white text-green-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">
                <span className="text-gray-400">Gitter</span>
                <span className="text-green-500">Fix</span>
              </h4>
              <p className="text-sm leading-relaxed">
                Professionelle Fliegengitter und Insektenschutzsysteme in Kassel und Umgebung.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Produkte</h4>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="hover:text-white transition">Fensterrahmen</a></li>
                <li><a href="#" className="hover:text-white transition">Türrahmen</a></li>
                <li><a href="#" className="hover:text-white transition">Dachfenster</a></li>
                <li><a href="#" className="hover:text-white transition">Rollos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Unternehmen</h4>
              <ul className="text-sm space-y-3">
                <li><a href="#" className="hover:text-white transition">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition">Referenzen</a></li>
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Kontakt</h4>
              <p className="text-sm mb-2">📍 Kassel, Deutschland</p>
              <p className="text-sm mb-4">📧 info@gitterfix.de</p>
              <p className="text-sm">Mo–Fr: 09:00–17:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2024 GitterFix Kassel. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
