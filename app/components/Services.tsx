'use client';

import { Shield, Scissors, Wrench, Package, Home, Award } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Scissors,
    title: 'Maßanfertigung',
    description: 'Jedes Fliegengitter wird millimetergenau nach Ihren Fenstern und Türen angefertigt – für perfekten Sitz und optimalen Schutz.',
    color: 'blue',
  },
  {
    icon: Wrench,
    title: 'Professionelle Montage',
    description: 'Unsere erfahrenen Monteure installieren Ihre Fliegengitter fachgerecht und sauber – schnell und zuverlässig.',
    color: 'green',
  },
  {
    icon: Shield,
    title: 'Langlebige Qualität',
    description: 'Hochwertige Materialien und stabile Rahmen garantieren jahrelange Freude an Ihrem Insektenschutz.',
    color: 'blue',
  },
  {
    icon: Package,
    title: 'Vielfältige Systeme',
    description: 'Von Spannrahmen über Schiebetüren bis Wintergärten – wir haben die passende Lösung für jeden Bedarf.',
    color: 'green',
  },
  {
    icon: Home,
    title: 'Vor-Ort-Beratung',
    description: 'Wir kommen zu Ihnen nach Hause, nehmen Maß und beraten Sie individuell – kostenfrei und unverbindlich.',
    color: 'blue',
  },
  {
    icon: Award,
    title: 'Garantie & Service',
    description: 'Profitieren Sie von unserer Zufriedenheitsgarantie und unserem schnellen Reparatur- und Wartungsservice.',
    color: 'green',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f7f9fc]">
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
            Was wir bieten
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C3D72] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Von der Beratung über die Fertigung bis zur Montage –
            bei GitterFix erhalten Sie alles aus einer Hand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGreen = service.color === 'green';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isGreen
                      ? 'bg-[#eef7e5] group-hover:bg-[#5CB82E]'
                      : 'bg-[#eef2fa] group-hover:bg-[#1C3D72]'
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 transition-colors duration-300 ${
                      isGreen
                        ? 'text-[#5CB82E] group-hover:text-white'
                        : 'text-[#1C3D72] group-hover:text-white'
                    }`}
                  />
                </div>
                <h3
                  className="text-lg font-bold text-[#1C3D72] mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
