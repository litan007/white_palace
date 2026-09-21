import React, { useState } from 'react';
import { GALLERY_ITEMS, VILLA_NATURE_IMAGE } from '../data/hotelData';
import { Camera, X, Maximize2, Sparkles, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { GalleryItem } from '../types';

export const GalleryView: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hotel' | 'restaurant' | 'nature' | 'experiences'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={VILLA_NATURE_IMAGE}
            alt="Galerie Photos White Palace"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            PORTFOLIO VISUEL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Galerie Photos
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Un aperçu en images de l'architecture, de la gastronomie et de la faune d'Andasibe.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('gallery-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Explorer la galerie</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* Filter Tabs */}
      <div id="gallery-content-section" className="max-w-4xl mx-auto px-4 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'TOUT' },
            { id: 'hotel', label: 'HÔTEL' },
            { id: 'restaurant', label: 'RESTAURANT' },
            { id: 'nature', label: 'NATURE' },
            { id: 'experiences', label: 'EXPÉRIENCES' },
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

      {/* Gallery Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EAE6DE] cursor-pointer shadow-sm hover:shadow-md transition-all bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Action Button at bottom */}
      <div className="text-center pt-4">
        <button
          onClick={() => setFilter('all')}
          className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs px-8 py-3 rounded-xl uppercase tracking-wider shadow-sm transition-all"
        >
          VOIR PLUS DE PHOTOS
        </button>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/50 rounded-full z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Controls */}
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-black/50 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-black/50 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-center space-y-1">
              <h3 className="font-serif text-lg font-bold text-white uppercase">{activeItem.title}</h3>
              <p className="text-xs text-gray-300 font-light">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
