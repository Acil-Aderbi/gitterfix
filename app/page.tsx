'use client';

import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Zap, Wrench, Award, Layers } from 'lucide-react';
import { motion } from 'motion/react';

const badges = ['Maßanfertigung', 'Professionelle Montage', 'Vor-Ort-Beratung'];

const services = [
  {
    icon: Zap,
    title: 'Maßanfertigung',
    description: 'Jedes Fliegengitter wird millimetergenau nach Ihren Fenstern und Türen gefertigt.'
  },
  {
    icon: Wrench,
    title: 'Professionelle Montage',
    description: 'Fachgerechte Installation durch erfahrene Monteure – schnell und zuverlässig.'
  },
  {
    icon: Award,
    title: 'Langlebige Qualität',
    description: 'Hochwertige Materialien garantieren jahrelange Haltbarkeit und optimalen Schutz.'
  },
  {
    icon: Layers,
    title: 'Vielfältige Systeme',
    description: 'Von Spannrahmen bis Rollos – wir haben die perfekte Lösung für jeden Bedarf.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-gray-900">Gitter</span>
            <span className="text-[#5CB82E]">Fix</span>
          </div>
          <div className="hidden sm:flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Produkte</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Über uns</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Kontakt</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="w-full h-full bg-gradient-to-r from-[#0e2247] via-[#1C3D72] to-[#2E5C8A]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#5CB82E]/20 border border-[#5CB82E]/40 text-[#a8e57a] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#5CB82E] animate-pulse" />
              Kassel & Umgebung · Maßgefertigt
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              Luft rein,{' '}
              <span className="text-[#5CB82E]">Plagen raus.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Professionelle Fliegengitter für Fenster, Türen und Dachfenster in Kassel. Individuell gefertigt – perfekt montiert.
            </motion.p>

            {/* Badge list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-white/90 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#5CB82E] flex-shrink-0" />
                  {b}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-[#5CB82E] hover:bg-[#4aa61a] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                Kostenlose Beratung
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
                Mehr erfahren
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Beratung über die Fertigung bis zur Montage – alles aus einer Hand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100"
                >
                  <div className="w-12 h-12 bg-[#5CB82E]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#5CB82E]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0e2247] to-[#1C3D72] text-white py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Bereit für Ihr Fliegengitter?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen kostenlosen Beratungstermin mit unseren Experten vor Ort.
          </p>
          <button className="bg-[#5CB82E] hover:bg-[#4aa61a] text-white px-10 py-4 rounded-lg font-semibold transition shadow-lg flex items-center gap-2 mx-auto">
            Jetzt Termin vereinbaren
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">
                <span className="text-gray-400">Gitter</span>
                <span className="text-[#5CB82E]">Fix</span>
              </h4>
              <p className="text-sm leading-relaxed">
                Professionelle Fliegengitter in Kassel und Umgebung seit 2024.
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
                <li><a href="#" className="hover:text-white transition">Referenzen</a></li>
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Kontakt</h4>
              <ul className="text-sm space-y-3">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#5CB82E]" />
                  Kassel, Deutschland
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#5CB82E]" />
                  info@gitterfix.de
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#5CB82E]" />
                  +49 561 XXX XXXX
                </li>
              </ul>
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
