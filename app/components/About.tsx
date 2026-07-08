import { Award, Users, CheckCircle2, ThumbsUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const values = [
  {
    icon: Award,
    title: 'Qualität',
    description: 'Wir verwenden ausschließlich hochwertige Materialien von geprüften Herstellern.',
  },
  {
    icon: Users,
    title: 'Erfahrung',
    description: 'Unser Team verfügt über langjährige Expertise im Bereich Insektenschutz.',
  },
  {
    icon: CheckCircle2,
    title: 'Zuverlässig',
    description: 'Pünktliche Termine, saubere Montage und faire Preise – darauf können Sie sich verlassen.',
  },
  {
    icon: ThumbsUp,
    title: 'Kundenzufriedenheit',
    description: 'Ihre Zufriedenheit ist unser Antrieb. Das bestätigen viele positive Bewertungen.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#5CB82E] font-bold text-sm uppercase tracking-widest mb-3">
              Über uns
            </span>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[#1C3D72] mb-6 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              GitterFix Kassel –<br />
              Ihr Experte vor Ort
            </h2>
            <div className="w-16 h-1 bg-[#5CB82E] rounded-full mb-6" />
            <p className="text-gray-500 mb-5 leading-relaxed">
              Seit über 10 Jahren ist GitterFix Ihr kompetenter Partner für hochwertigen
              Insektenschutz in Kassel und Umgebung. Ob Fenster, Türen, Dachfenster oder
              Wintergarten – wir finden für jede Öffnung die optimale Lösung.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Unsere Fliegengitter werden individuell für Sie maßgefertigt und professionell
              montiert. So genießen Sie frische Luft ohne lästige Insekten – bei bestem
              Preis-Leistungs-Verhältnis. Vertrauen Sie auf Qualität aus Kassel!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1C3D72] text-white px-8 py-3.5 rounded-xl hover:bg-[#163060] transition-colors font-bold text-sm shadow-md"
            >
              Jetzt Termin vereinbaren
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative background block */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#eef7e5] rounded-2xl -z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1681185361355-e3d3b8e74234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBpbnN0YWxsYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzNDI2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fliegengitter Montage"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            {/* Badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#1C3D72] text-white px-6 py-4 rounded-xl shadow-xl">
              <div className="text-2xl font-extrabold leading-none">10+</div>
              <div className="text-xs text-blue-200 mt-0.5">Jahre Erfahrung</div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f7f9fc] rounded-2xl p-6 text-center border border-gray-100 hover:border-[#5CB82E]/30 transition-colors"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className="w-7 h-7 text-[#5CB82E]" />
                </div>
                <h3
                  className="text-base font-bold text-[#1C3D72] mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
