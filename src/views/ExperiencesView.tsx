import React, { useState } from 'react';
import { EXPERIENCES, LEMUR_IMAGE } from '../data/hotelData';
import { Compass, Clock, Check, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { Experience } from '../types';

interface ExperiencesViewProps {
  onOpenRoomBooking: () => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({ onOpenRoomBooking }) => {
  const [filter, setFilter] = useState<'all' | 'nature' | 'aventure' | 'bien-etre' | 'culture'>('all');
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const filteredExperiences = EXPERIENCES.filter(exp => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={LEMUR_IMAGE}
            alt="Expériences & Safari Andasibe"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            IMMERSION & DECOUVERTES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Nos Expériences
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Rencontrez les Indri Indri, explorez la forêt primaire et ressourcez-vous au Spa.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('experiences-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Explorer les activités</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* Filter Tabs */}
      <div id="experiences-content-section" className="max-w-4xl mx-auto px-4 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'TOUTES' },
            { id: 'nature', label: 'NATURE' },
            { id: 'aventure', label: 'AVENTURE' },
            { id: 'bien-etre', label: 'BIEN-ÊTRE' },
            { id: 'culture', label: 'CULTURE' },
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

      {/* Grid of Experiences */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            onClick={() => setSelectedExp(exp)}
            className="bg-white rounded-3xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 text-[10px] font-semibold uppercase tracking-widest border border-amber-400/30">
                  {exp.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#111827]">
                  {exp.title}
                </h3>

                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {exp.shortDescription}
                </p>

                <div className="pt-2 border-t border-[#EAE6DE] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium block">Tarif indicatif</span>
                    <span className="font-serif font-bold text-lg text-[#111827]">{exp.price.toLocaleString('fr-MG')} Ar<span className="text-xs font-normal text-gray-500"> / pers</span></span>
                  </div>

                  <span className="text-xs font-bold text-[#1E293B] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    VOIR DÉTAILS →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button at bottom */}
      <div className="text-center pt-4">
        <button
          onClick={() => setFilter('all')}
          className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs px-8 py-3 rounded-xl uppercase tracking-wider shadow-sm transition-all"
        >
          VOIR TOUTES LES EXPÉRIENCES
        </button>
      </div>

      {/* Experience Details Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-[#EAE6DE] rounded-2xl max-w-lg w-full text-gray-800 p-6 space-y-4 shadow-xl relative">
            <h3 className="font-serif text-xl font-bold text-[#111827]">
              {selectedExp.title}
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed font-light">
              {selectedExp.fullDescription}
            </p>

            <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-100 text-xs">
              <span className="font-semibold text-[#111827] block uppercase">Inclus dans l'activité:</span>
              {selectedExp.included.map((inc, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-3.5 h-3.5 text-[#1E293B]" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">Prix par personne:</span>
                <span className="font-serif text-2xl font-bold text-[#111827]">{selectedExp.price.toLocaleString('fr-MG')} Ar</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedExp(null)}
                  className="px-4 py-2 bg-gray-100 text-xs rounded-lg text-gray-600 uppercase font-semibold"
                >
                  Fermer
                </button>
                <button
                  onClick={() => {
                    setSelectedExp(null);
                    onOpenRoomBooking();
                  }}
                  className="px-5 py-2 bg-[#1E293B] text-white font-semibold text-xs rounded-lg uppercase tracking-wider"
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
