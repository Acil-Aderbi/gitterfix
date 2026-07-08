export default function Home() {
  const services = [
    {
      icon: "📏",
      title: "Maßanfertigung",
      description: "Jedes Fliegengitter wird millimetergenau nach Ihren Fenstern und Türen angefertigt."
    },
    {
      icon: "🔧",
      title: "Professionelle Montage",
      description: "Unsere erfahrenen Monteure installieren Ihre Fliegengitter fachgerecht und sauber."
    },
    {
      icon: "⭐",
      title: "Langlebige Qualität",
      description: "Hochwertige Materialien und stabile Rahmen garantieren jahrelange Freude."
    },
    {
      icon: "🎯",
      title: "Vielfältige Systeme",
      description: "Von Spannrahmen bis hin zu Rollos – wir haben die passende Lösung für jeden Bedarf."
    },
    {
      icon: "👨‍💼",
      title: "Vor-Ort-Beratung",
      description: "Wir kommen zu Ihnen nach Hause, nehmen Maß und beraten Sie individuell."
    },
    {
      icon: "🛡️",
      title: "Garantie & Service",
      description: "Umfassende Garantie und zuverlässiger Kundenservice für Ihre Sicherheit."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-green-600">GitterFix</div>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-900">Produkte</button>
            <button className="text-gray-600 hover:text-gray-900">Beratung</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>✓</span>
                <span>Kassel & Umgebung · Maßgefertigt</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Luft rein, <span className="text-green-600">Plagen</span> raus.
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Professionelle Fliegengitter für Fenster, Türen und Dachfenster in Kassel. Maßgefertigt, langlebig und perfekt auf Ihre Bedürfnisse abgestimmt.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Unsere Produkte →
                </button>
                <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition">
                  Kostenlose Beratung
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
              <span className="text-gray-400 text-center px-4">
                [Fliegengitter Fenster Image]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-gray-600">
              Von der Beratung über die Fertigung bis zur Montage – alles aus einer Hand.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihr Fliegengitter?</h2>
          <p className="text-lg mb-8 opacity-90">
            Vereinbaren Sie noch heute einen kostenlosen Beratungstermin mit unseren Experten.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Jetzt Termin vereinbaren
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">GitterFix</h4>
              <p className="text-sm">Professionelle Fliegengitter in Kassel</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produkte</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Fensterrahmen</a></li>
                <li><a href="#" className="hover:text-white">Türrahmen</a></li>
                <li><a href="#" className="hover:text-white">Rollos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Unternehmen</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Über uns</a></li>
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                <li><a href="#" className="hover:text-white">Impressum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Kontakt</h4>
              <p className="text-sm">Kassel, Deutschland</p>
              <p className="text-sm">info@gitterfix.de</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-sm text-center">
            <p>&copy; 2024 GitterFix. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
