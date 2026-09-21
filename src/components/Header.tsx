import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Menu, 
  X, 
  Trees, 
  Calendar, 
  UtensilsCrossed,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
  onOpenTableBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenRoomBooking,
  onOpenTableBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('FR');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ACCUEIL' },
    { id: 'rooms', label: 'CHAMBRES' },
    { id: 'restaurant', label: 'RESTAURANT' },
    { id: 'experiences', label: 'EXPÉRIENCES' },
    { id: 'offers', label: 'OFFRES' },
    { id: 'blog', label: 'BLOG' },
    { id: 'about', label: 'À PROPOS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white transition-all">
      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-amber-400/40 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner shrink-0">
            <img src="/nouvelles_photos/logo.jpg" alt="Logo White Palace" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-amber-100 uppercase leading-none">
              WHITE PALACE
            </div>
            <div className="text-[9px] tracking-widest uppercase text-amber-300/80 font-sans font-light mt-0.5">
              LUXURY HOTEL & RESTAURANT
            </div>
          </div>
        </button>

        {/* Navigation Links & Reserve Button */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 text-[11px] lg:text-[12px] font-medium tracking-wider">
          <nav className="flex items-center gap-3 lg:gap-6">
            {navItems.map((item) => {
              const isActive = currentView === item.id || (currentView === 'room-detail' && item.id === 'rooms');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-all uppercase tracking-wider whitespace-nowrap ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button - White Pill button right next to nav links */}
          <button
            onClick={onOpenRoomBooking}
            className="ml-2 bg-white text-[#050A14] hover:bg-amber-50 font-bold text-[11px] lg:text-xs px-5 py-2 lg:px-6 lg:py-2.5 rounded-full tracking-widest uppercase shadow-md transition-all whitespace-nowrap"
          >
            RÉSERVER
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-amber-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050A14]/95 backdrop-blur-lg border-t border-slate-800/60 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 px-3 text-xs tracking-wider uppercase rounded transition-colors ${
                  currentView === item.id
                    ? 'bg-slate-900/60 text-amber-300 font-semibold border-l-2 border-amber-400'
                    : 'text-slate-100/80 hover:bg-slate-900/30 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/40 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoomBooking();
              }}
              className="w-full bg-white text-[#0F172A] font-bold text-xs py-3 rounded-full text-center tracking-widest uppercase shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>RÉSERVER UNE CHAMBRE</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTableBooking();
              }}
              className="w-full bg-slate-900/70 border border-slate-700/60 text-amber-200 font-medium text-xs py-2.5 rounded-full text-center tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>Réserver une table au restaurant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

