import React, { useState } from 'react';
import { ROOMS, ROOMS_HERO_IMAGE } from '../data/hotelData';
import { TrustBadges } from '../components/TrustBadges';
import { Users, Maximize2, Eye, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';

interface RoomsViewProps {
  onOpenRoomDetail: (roomId: string) => void;
  onOpenRoomBooking: (roomId?: string) => void;
}

export const RoomsView: React.FC<RoomsViewProps> = ({ onOpenRoomDetail, onOpenRoomBooking }) => {
  const [filter, setFilter] = useState<'all' | 'suite' | 'villa' | 'vue-foret' | 'vue-lac'>('all');

  const filteredRooms = ROOMS.filter(r => {
    if (filter === 'all') return true;
    if (filter === 'suite') return r.category === 'suite';
    if (filter === 'villa') return r.category === 'villa' || r.category === 'lodge';
    if (filter === 'vue-foret') return r.view.toLowerCase().includes('forêt');
    if (filter === 'vue-lac') return r.view.toLowerCase().includes('lac');
    return true;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={ROOMS_HERO_IMAGE}
            alt="Nos Chambres & Suites"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            HÉBERGEMENT D'EXCEPTION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Nos chambres & suites
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Élégance, confort et nature en parfaite harmonie au cœur d'Andasibe.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('rooms-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Découvrir les suites</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* Filter Tabs & Content */}
      <div id="rooms-content-section" className="max-w-5xl mx-auto px-4 sm:px-8 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'TOUTES' },
            { id: 'suite', label: 'SUITES' },
            { id: 'villa', label: 'VILLAS' },
            { id: 'vue-foret', label: 'VUE FORÊT' },
            { id: 'vue-lac', label: 'VUE LAGON' },
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

      {/* Rooms List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group"
          >
            {/* Image */}
            <div className="md:col-span-5 relative min-h-[260px] overflow-hidden">
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 text-[10px] font-semibold uppercase tracking-widest border border-amber-400/30">
                {room.category.toUpperCase()}
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#111827] tracking-wide">
                  {room.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#EAE6DE] text-[#1E293B]"><Users className="w-3.5 h-3.5 text-amber-600" /> {room.capacity} personnes</span>
                  <span className="flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#EAE6DE] text-[#1E293B]"><Maximize2 className="w-3.5 h-3.5 text-amber-600" /> {room.surface} m²</span>
                  <span className="flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1 rounded-full border border-[#EAE6DE] text-[#1E293B]"><Eye className="w-3.5 h-3.5 text-amber-600" /> {room.view}</span>
                </div>

                <p className="text-xs text-gray-600 font-light leading-relaxed pt-1">
                  {room.shortDescription}
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-[#EAE6DE]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium block">Tarif indicatif</span>
                  <span className="font-serif font-bold text-lg text-[#111827]">{room.price.toLocaleString('fr-MG')} Ar<span className="text-xs font-normal text-gray-500"> / nuit</span></span>
                </div>

                <button
                  onClick={() => onOpenRoomDetail(room.id)}
                  className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs px-6 py-3 rounded-full tracking-widest uppercase transition-all shadow-md hover:scale-105 flex items-center gap-2"
                >
                  <span>DÉCOUVRIR</span>
                  <ChevronRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges Bar */}
      <div className="pt-6">
        <TrustBadges />
      </div>

    </div>
  );
};
