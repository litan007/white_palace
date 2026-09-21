import React, { useState } from 'react';
import { OFFERS, SUITE_LAGON_IMAGE, RESTAURANT_INTERIOR_IMAGE } from '../data/hotelData';
import { ChevronDown } from 'lucide-react';

interface OffersViewProps {
  onOpenRoomBooking: () => void;
  onOpenTableBooking?: () => void;
}

export const OffersView: React.FC<OffersViewProps> = ({ onOpenRoomBooking, onOpenTableBooking }) => {
  const [filter, setFilter] = useState<'all' | 'romantique' | 'famille' | 'long-sejour'>('all');

  const filteredOffers = OFFERS.filter(offer => {
    if (filter === 'all') return true;
    if (filter === 'romantique') return offer.id.includes('romantique');
    if (filter === 'famille') return offer.id.includes('famille');
    if (filter === 'long-sejour') return offer.id.includes('bien-etre');
    return true;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={SUITE_LAGON_IMAGE}
            alt="Nos Offres Spéciales"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            PRIVILÈGES & PRIVILEGES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Nos Offres Spéciales
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Des séjours d'exception et des attentions exclusives à prix privilégiés.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('offers-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Découvrir les offres</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* Filter Tabs */}
      <div id="offers-content-section" className="max-w-4xl mx-auto px-4 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'TOUTES LES OFFRES' },
            { id: 'romantique', label: 'ROMANTIQUES' },
            { id: 'famille', label: 'FAMILLE' },
            { id: 'long-sejour', label: 'LONG SÉJOUR' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                filter === tab.id
                  ? 'bg-[#1E293B] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-[#EAE6DE]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Offers Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            onClick={onOpenRoomBooking}
            className="bg-white rounded-3xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 text-[10px] font-semibold uppercase tracking-widest border border-amber-400/30">
                  OFFRE EXCLUSIVE
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#111827]">
                  {offer.title}
                </h3>

                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {offer.description}
                </p>

                <div className="pt-2 border-t border-[#EAE6DE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium block">Tarif privilège</span>
                    <span className="font-serif font-bold text-lg text-[#111827]">{offer.price.toLocaleString('fr-MG')} Ar</span>
                  </div>

                  <span className="text-xs font-bold text-[#1E293B] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    RÉSERVER →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table Reservation Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-6">
        <div className="relative bg-[#0F172A] text-white rounded-2xl overflow-hidden p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src={RESTAURANT_INTERIOR_IMAGE}
              alt="Dining Table Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 space-y-2 text-center md:text-left max-w-lg">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
              Réservez votre table
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-light">
              Pour un dîner romantique, un repas en famille ou un événement spécial.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={onOpenTableBooking || onOpenRoomBooking}
              className="bg-[#1E293B] hover:bg-[#002B24] text-white font-bold text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-md transition-all whitespace-nowrap border border-white/20"
            >
              RÉSERVER UNE TABLE
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
