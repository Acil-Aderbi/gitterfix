'use client';

import {  Phone, Mail, MapPin } from 'lucide-react';
// import logo removed;

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2247] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block mb-5 shadow-md">
              <img
                src="/placeholder.svg"
                alt="GitterFix Kassel"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Ihr Experte für hochwertigen Insektenschutz in Kassel und Umgebung.
              Maßgefertigt, langlebig und professionell montiert.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#1C3D72] rounded-lg flex items-center justify-center hover:bg-[#5CB82E] transition-colors"
                aria-label="Facebook"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sefadreiacht?igsh=MXBvaWZzYnRxdnR2Nw%3D%3D"
                className="w-9 h-9 bg-[#1C3D72] rounded-lg flex items-center justify-center hover:bg-[#5CB82E] transition-colors"
                aria-label="Instagram"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#5CB82E] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Leistungen', id: 'services' },
                { label: 'Über uns', id: 'about' },
                { label: 'Produkte', id: 'projects' },
                { label: 'Kontakt', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-blue-200 hover:text-[#5CB82E] transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Produkte */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#5CB82E] mb-5">
              Produkte
            </h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li>Spannrahmen</li>
              <li>Schiebetüren</li>
              <li>Wintergarten</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#5CB82E] mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+490123456789" className="flex items-start gap-3 text-blue-200 hover:text-[#5CB82E] transition-colors text-sm group">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5CB82E]" />
                  0123 / 456789
                </a>
              </li>
              <li>
                <a href="mailto:info@gitterfix-kassel.de" className="flex items-start gap-3 text-blue-200 hover:text-[#5CB82E] transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5CB82E]" />
                  info@gitterfix-kassel.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-200 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5CB82E]" />
                  Waldaustraße 12, Kassel
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1C3D72] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © 2026 GitterFix Kassel. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-blue-300">
            <a href="#" className="hover:text-[#5CB82E] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#5CB82E] transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-[#5CB82E] transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
