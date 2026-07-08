'use client';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Spannrahmen',
    description: 'Der Klassiker für Fenster',
    features: ['Stabil & langlebig', 'Einfache Montage', 'Günstig im Preis'],
    image: 'https://images.unsplash.com/photo-1686766877606-589505f431ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnNlY3QlMjBzY3JlZW4lMjB3aW5kb3clMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc4MzQyNjM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Fenster',
  },
  {
    title: 'Schiebetür',
    description: 'Platzsparend und komfortabel',
    features: ['Leichtgängig', 'Große Öffnungen', 'Modernes Design'],
    image: 'https://images.unsplash.com/photo-1681185361355-e3d3b8e74234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBpbnN0YWxsYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzNDI2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Türen',
  },
  {
    title: 'Wintergarten',
    description: 'Rundum geschützt – auch im Sommer',
    features: ['Maßanfertigung für jede Größe', 'Insekten- & Pollenschutz', 'Licht & Luft bleiben ungehindert'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    tag: 'Wintergarten',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f7f9fc]">
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
            Unsere Lösungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1C3D72] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Unsere Produkte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Für jedes Fenster, jede Tür und jeden Wintergarten das passende System –
            in verschiedenen Farben und Ausführungen erhältlich.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3D72]/80 via-[#1C3D72]/20 to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-[#5CB82E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.tag}
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-white text-2xl font-extrabold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {project.title}
                  </div>
                  <div className="text-blue-200 text-sm mt-0.5">{project.description}</div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <div className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#5CB82E] flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-6 w-full border-2 border-[#1C3D72] text-[#1C3D72] py-2.5 rounded-xl text-sm font-bold hover:bg-[#1C3D72] hover:text-white transition-colors duration-200"
                >
                  Angebot anfragen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
