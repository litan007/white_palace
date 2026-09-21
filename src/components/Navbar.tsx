import React, { useState } from 'react';
import { PageType } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Accueil', page: 'accueil' },
    { label: 'Chambres', page: 'chambres' },
    { label: 'Restaurant', page: 'restaurant' },
    { label: 'Services', page: 'services' },
    { label: 'Galerie', page: 'galerie' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5eeea] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo
          variant="dark"
          onClick={() => handleNavClick('accueil')}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm tracking-wide transition-all relative py-2 ${
                  isActive
                    ? 'text-[#16332c] font-semibold'
                    : 'text-[#4e6861] hover:text-[#16332c]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1a3d35] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button: Réserver */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenReservation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#122b26] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:shadow active:scale-95"
          >
            <span>Réserver</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenReservation}
            className="px-3.5 py-1.5 rounded-full bg-[#1b3d36] text-white text-xs font-medium flex items-center gap-1.5"
          >
            <span>Réserver</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1b3d36] hover:bg-[#f0f6f3] rounded-lg transition"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5eeea] px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left py-2.5 px-3 rounded-lg text-sm tracking-wide transition ${
                    isActive
                      ? 'bg-[#eef5f2] text-[#16332c] font-semibold'
                      : 'text-[#4e6861] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#e5eeea]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-full bg-[#1b3d36] text-white text-center text-sm font-semibold flex items-center justify-center gap-2 shadow"
              >
                <span>Réserver un séjour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
