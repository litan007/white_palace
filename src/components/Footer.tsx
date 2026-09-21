import React from 'react';
import { PageType } from '../types';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Globe } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122823] text-white pt-14 pb-10 border-t border-[#1e3c35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-[#21433b]">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Logo variant="light" showSubtitle={true} onClick={() => handleNav('accueil')} />
            <p className="mt-4 text-xs text-[#a0bcaf] leading-relaxed">
              Le White Palace Hôtel est un établissement 4 étoiles alliant luxe discret, confort moderne et hospitalité malgache au cœur d'Antananarivo.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8daea0] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#d0ded7]">
              <li>
                <button
                  onClick={() => handleNav('accueil')}
                  className="hover:text-white transition"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chambres')}
                  className="hover:text-white transition"
                >
                  Chambres
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('restaurant')}
                  className="hover:text-white transition"
                >
                  Restaurant & Bar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition"
                >
                  Services & Équipements
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('galerie')}
                  className="hover:text-white transition"
                >
                  Galerie Photos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition"
                >
                  Contact & Accès
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8daea0] font-semibold mb-4">
              Coordonnées
            </h4>
            <div className="space-y-3 text-xs text-[#d0ded7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#7eb39f] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7eb39f] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7eb39f] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition">
                  {HOTEL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#a2beb2]">
                <Globe className="w-4 h-4 text-[#7eb39f] shrink-0" />
                <span>Réception ouverte {HOTEL_INFO.receptionHours}</span>
              </div>
            </div>
          </div>

          {/* Social and Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#8daea0] font-semibold mb-4">
              Suivez-nous
            </h4>
            <p className="text-xs text-[#a0bcaf] mb-4">
              Retrouvez nos actualités, offres exclusives et événements sur nos réseaux sociaux.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1b3d35] hover:bg-[#28574c] flex items-center justify-center transition text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1b3d35] hover:bg-[#28574c] flex items-center justify-center transition text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1b3d35] hover:bg-[#28574c] flex items-center justify-center transition text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#789b8d]">
          <p>© 2025 White Palace Hôtel. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#mentions" className="hover:text-white transition">
              Mentions légales
            </a>
            <span>|</span>
            <a href="#politique" className="hover:text-white transition">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
