import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#5CB82E] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Kontakt
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C3D72] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Sprechen Sie uns an
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto"
          >
            Vereinbaren Sie einen kostenlosen Beratungstermin – wir kommen zu Ihnen!
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact cards */}
            <div className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: 'Telefon',
                  value: '0123 / 456789',
                  href: 'tel:+490123456789',
                  sub: 'Rufen Sie uns einfach an',
                },
                {
                  icon: Mail,
                  label: 'E-Mail',
                  value: 'info@gitterfix-kassel.de',
                  href: 'mailto:info@gitterfix-kassel.de',
                  sub: 'Wir antworten schnell',
                },
                {
                  icon: MapPin,
                  label: 'Adresse',
                  value: 'Waldaustraße 12, 34344 Kassel',
                  href: undefined,
                  sub: 'Unser Standort',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-5 bg-[#f7f9fc] rounded-2xl p-5 border border-gray-100 hover:border-[#1C3D72]/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#1C3D72] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#5CB82E] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">{item.sub}</div>
                      <div className="font-bold text-[#1C3D72] text-sm mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-[#5CB82E] transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-600 text-sm">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Öffnungszeiten + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5"
            >
              {/* Öffnungszeiten */}
              <div className="bg-[#f7f9fc] rounded-2xl p-6 border border-gray-100 flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#eef7e5] rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#5CB82E]" />
                  </div>
                  <h4
                    className="font-bold text-[#1C3D72]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Öffnungszeiten
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    { day: 'Mo – Fr', time: '9:00 – 18:00 Uhr' },
                    { day: 'Samstag', time: '10:00 – 14:00 Uhr' },
                    { day: 'Sonntag', time: 'Geschlossen' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">{row.day}</span>
                      <span
                        className={`font-semibold ${
                          row.day === 'Sonntag' ? 'text-gray-400' : 'text-[#1C3D72]'
                        }`}
                      >
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA box */}
              <div className="bg-[#1C3D72] rounded-2xl p-7 text-white text-center">
                <div className="text-lg font-extrabold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Kostenlose Beratung
                </div>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  Wir messen, beraten und montieren – alles aus einer Hand. Jetzt Termin sichern!
                </p>
                <a
                  href="tel:+490123456789"
                  className="inline-block bg-[#5CB82E] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#4ea526] transition-colors text-sm shadow-lg"
                >
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
