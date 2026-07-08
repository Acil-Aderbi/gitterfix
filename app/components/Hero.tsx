import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const badges = ['Maßanfertigung', 'Professionelle Montage', 'Vor-Ort-Beratung'];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[88px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600077349654-dafee19be957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHklMjBzY3JlZW4lMjB3aW5kb3clMjBob21lfGVufDF8fHx8MTc4MzQyNjM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fliegengitter Fenster"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradient overlay: brand navy left, transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2247]/90 via-[#1C3D72]/70 to-[#1C3D72]/20" />
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Luft rein,{' '}
            <span className="text-[#5CB82E]">Plagen raus.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
          >
            Professionelle Fliegengitter für Fenster, Türen und Wintergärten
            in Kassel. Individuell gefertigt – perfekt montiert.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#5CB82E] text-white px-8 py-4 rounded-xl hover:bg-[#4ea526] transition-all duration-200 flex items-center justify-center gap-2 font-bold text-base shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5"
            >
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/60 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#1C3D72] transition-all duration-200 font-bold text-base backdrop-blur-sm"
            >
              Unsere Produkte
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </motion.div>
    </section>
  );
}
