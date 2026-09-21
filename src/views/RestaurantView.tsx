import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INTERIOR_IMAGE } from '../data/hotelData';
import { UtensilsCrossed, Download, Calendar, Sparkles, ChefHat, ChevronDown } from 'lucide-react';

interface RestaurantViewProps {
  onOpenTableBooking: () => void;
  onOpenMenuPdf: () => void;
}

export const RestaurantView: React.FC<RestaurantViewProps> = ({
  onOpenTableBooking,
  onOpenMenuPdf
}) => {
  const [activeTab, setActiveTab] = useState<'entrees' | 'plats' | 'desserts' | 'boissons'>('entrees');

  const filteredItems = MENU_ITEMS.filter(item => {
    if (activeTab === 'entrees') return item.category === 'entrees';
    if (activeTab === 'plats') return item.category === 'plats' || item.category === 'degustation';
    if (activeTab === 'desserts') return item.category === 'desserts';
    if (activeTab === 'boissons') return item.category === 'boissons';
    return true;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={RESTAURANT_INTERIOR_IMAGE}
            alt="Restaurant Gastronomique White Palace"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            HAUTE GASTRONOMIE MALGACHE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Le Restaurant
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Une alliance raffinée entre saveurs locales et haute cuisine internationale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenTableBooking}
              className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full tracking-wider uppercase transition-all shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-300" />
              <span>RÉSERVER UNE TABLE</span>
            </button>
            <button
              onClick={onOpenMenuPdf}
              className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full tracking-wider uppercase transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>TÉLÉCHARGER LE MENU (PDF)</span>
            </button>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('menu-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Découvrir la carte</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* Category Tabs */}
      <div id="menu-content-section" className="max-w-3xl mx-auto px-4 pt-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'entrees', label: 'ENTRÉES' },
            { id: 'plats', label: 'PLATS' },
            { id: 'desserts', label: 'DESSERTS' },
            { id: 'boissons', label: 'BOISSONS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-[#111827] shadow-sm border border-[#EAE6DE]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Card Container */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl border border-[#EAE6DE] p-6 sm:p-8 space-y-6 shadow-sm">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 pb-5 ${idx < filteredItems.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-full shrink-0 border border-gray-200"
                referrerPolicy="no-referrer"
              />

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-sm font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <span className="font-serif text-sm font-bold text-[#111827] shrink-0">
                    {item.price.toLocaleString('fr-MG')} Ar
                  </span>
                </div>

                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Note & Action Button */}
      <div className="max-w-xl mx-auto text-center space-y-6 pt-4 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#111827] text-xs font-medium">
          <ChefHat className="w-4 h-4 text-amber-600" />
          <span>Nos plats sont élaborés chaque jour à partir de produits frais et bio locaux.</span>
        </div>

        <div>
          <button
            onClick={onOpenMenuPdf}
            className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest shadow-xl transition-all hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Download className="w-4 h-4 text-amber-300" />
            <span>TÉLÉCHARGER LA CARTE COMPLÈTE (PDF)</span>
          </button>
        </div>
      </div>

    </div>
  );
};
