import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// import logo removed;

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Leistungen', id: 'services' },
  { label: 'Über uns', id: 'about' },
  { label: 'Produkte', id: 'projects' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/98 border-b border-gray-100'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#1C3D72] text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <a href="tel:+490123456789" className="flex items-center gap-1.5 hover:text-[#5CB82E] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            0123 / 456789
          </a>
          <a href="mailto:info@gitterfix-kassel.de" className="hover:text-[#5CB82E] transition-colors">
            info@gitterfix-kassel.de
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center">
            <img
              src="/placeholder.svg"
              alt="GitterFix Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-[#1C3D72] font-semibold text-sm hover:text-[#5CB82E] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#5CB82E] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-[#5CB82E] text-white px-6 py-2.5 rounded-lg hover:bg-[#4ea526] transition-colors font-semibold text-sm shadow-sm"
            >
              Kostenlos anfragen
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#1C3D72] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left px-4 py-3 text-[#1C3D72] font-semibold hover:bg-[#f0f4fb] rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 mx-4 bg-[#5CB82E] text-white px-6 py-3 rounded-lg hover:bg-[#4ea526] transition-colors font-semibold text-center"
                >
                  Kostenlos anfragen
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
