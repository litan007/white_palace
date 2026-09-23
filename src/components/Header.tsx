import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'rooms', label: 'Chambres' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#DCE8ED]'
          : 'bg-[#F8FAFC]/90 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo White Palace */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/nouvelles_photos/Logo white palace.jpeg"
              alt="White Palace Hôtel"
              className="w-11 h-11 object-contain rounded-full shadow-2xs"
            />
          </div>
          <div>
            <div className="font-serif text-lg sm:text-xl font-bold tracking-[0.15em] text-[#256079] uppercase leading-tight">
              WHITE PALACE
            </div>
            <div className="font-serif italic text-[11px] text-[#C59A3D] font-medium leading-none tracking-wider pl-0.5">
              Hôtel
            </div>
          </div>
        </button>

        {/* Navigation Links in Center */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal tracking-normal text-[#173C4D]">
          {navItems.map((item) => {
            const isActive =
              currentView === item.id ||
              (currentView === 'room-detail' && item.id === 'rooms');
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#256079] font-semibold'
                    : 'text-[#536E7B] hover:text-[#256079]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C59A3D] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Reserve Pill Button on Right */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenRoomBooking}
            className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-[#256079]"
          >
            <span>Réserver</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#256079] hover:text-[#173C4D] focus:outline-none cursor-pointer"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE8ED] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 text-sm rounded-xl transition-colors cursor-pointer ${
                  currentView === item.id
                    ? 'bg-[#EBF3F6] text-[#256079] font-semibold'
                    : 'text-[#536E7B] hover:bg-[#EBF3F6]/50 hover:text-[#256079]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#DCE8ED]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoomBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-sm font-medium py-3 rounded-full shadow-md cursor-pointer"
            >
              <span>Réserver</span>
              <ArrowRight className="w-4 h-4 text-[#DFC27D]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
