import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'rooms', label: 'Chambres' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#173C4D] text-white pt-14 pb-8 overflow-hidden border-t border-[#256079]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top section: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-10">
          {/* Col 1: Brand & tagline */}
          <div className="md:col-span-4 space-y-3">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            >
              {/* Crest SVG in Gold */}
              <div className="w-10 h-10 flex items-center justify-center text-[#DFC27D] shrink-0">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                  <path
                    d="M24 4L28 14H38L30 20L33 30L24 24L15 30L18 20L10 14H20L24 4Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 36C12 36 17 32 24 32C31 32 36 36 36 36"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 42C15 42 19 39 24 39C29 39 33 42 33 42"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-serif text-lg font-bold tracking-[0.15em] text-white uppercase leading-tight">
                  WHITE PALACE
                </div>
                <div className="font-serif italic text-xs text-[#DFC27D] leading-none tracking-wider">
                  Hôtel
                </div>
              </div>
            </button>
            <p className="text-xs text-white/70 font-light pl-0.5">
              Un lieu d'exception à Antananarivo
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/80 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="hover:text-[#DFC27D] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Col 3: Contact info & Socials */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <div className="space-y-1.5 text-xs text-white/80">
              <div className="flex items-center md:justify-end gap-2">
                <Phone className="w-3.5 h-3.5 text-[#DFC27D]" />
                <span>+261 32 07 669 98</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DFC27D]" />
                <span>whitepalacehtananarivo@gmail.com</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DFC27D]" />
                <span>Lot VB 12, Ambatoroka, Antananarivo</span>
              </div>
            </div>

            {/* Social icons row */}
            <div className="flex items-center md:justify-end gap-2 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#DFC27D] hover:text-[#173C4D] hover:border-[#DFC27D] transition-all text-white/80"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#DFC27D] hover:text-[#173C4D] hover:border-[#DFC27D] transition-all text-white/80"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#DFC27D] hover:text-[#173C4D] hover:border-[#DFC27D] transition-all text-white/80"
                aria-label="TikTok"
              >
                <span className="text-[10px] font-bold">Tk</span>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#DFC27D] hover:text-[#173C4D] hover:border-[#DFC27D] transition-all text-white/80"
                aria-label="TripAdvisor"
              >
                <span className="text-[10px] font-bold">Ta</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <div>
            © 2026 White Palace Hôtel. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
              Mentions légales
            </button>
            <span>|</span>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
