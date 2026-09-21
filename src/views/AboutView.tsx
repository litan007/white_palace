import React from 'react';
import { ChevronDown, Trees, Sun, HeartHandshake, ShieldCheck, Award, Sparkles, MapPin, Leaf } from 'lucide-react';
import { KEY_STATS, HOTEL_EXTERIOR_IMAGE, VILLA_NATURE_IMAGE, PRESTIGE_LIVING_IMAGE, LEMUR_IMAGE } from '../data/hotelData';

interface AboutViewProps {
  onOpenRoomBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenRoomBooking }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-20 space-y-16">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_EXTERIOR_IMAGE}
            alt="À propos d'Andasibe Hotel"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            NOTRE HISTOIRE & NOS ENGAGEMENTS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            À Propos de White Palace
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Un refuge d'exception éco-responsable niché au cœur de la majestueuse forêt primaire d'Andasibe, à Madagascar.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('about-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Découvrir le domaine</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* KEY STATS BAR */}
      <div id="about-content-section" className="max-w-6xl mx-auto px-4 sm:px-8 pt-4">
        <div className="bg-[#1E293B] text-white rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-slate-800">
          {KEY_STATS.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-300">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs tracking-widest text-slate-100 uppercase font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 1: HISTOIRE ET HERITAGE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#EAE6DE] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-amber-600 text-xs tracking-widest font-semibold uppercase">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>UN HÉRITAGE BIODIVERS</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1E293B] leading-tight font-bold">
              Un sanctuaire né du respect de la forêt primaire
            </h2>
            
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Fondé avec la passion d'offrir une expérience de luxe authentique et consciente, White Palace Hotel & Restaurant est idéalement situé aux portes du Parc National d'Andasibe-Mantadia, célèbre mondialement pour abriter le plus grand lémurien vivant : l'Indri Indri.
            </p>
            
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Nos bungalows et suites s'intègrent harmonieusement dans la végétation naturelle sans altérer l'écosystème. Nous avons conçu chaque espace pour que nos hôtes ressentent le souffle de la forêt tropicale tout en bénéficiant de prestations très haut de gamme.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-[#1E293B]">
              <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-full border border-[#EAE6DE]">
                <Leaf className="w-4 h-4 text-slate-700" />
                <span>Architecture 100% Intégrée</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-full border border-[#EAE6DE]">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Au cœur de Mantadia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img
                src={VILLA_NATURE_IMAGE}
                alt="Architecture White Palace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-serif italic">
                Â« Un équilibre délicat entre le raffinement contemporain et la poésie de la nature sauvage. Â»
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY / VALUES CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-amber-600 font-semibold text-xs tracking-[0.25em] uppercase block">
            NOS PILIERS
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1E293B]">
            Trois Engagements Fondamentaux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#EAE6DE] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={PRESTIGE_LIVING_IMAGE}
                  alt="Notre Philosophie"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 text-[#1E293B] flex items-center justify-center">
                  <Trees className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111827]">
                  Notre Philosophie
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Allier le luxe absolu, la quiétude et la préservation environnementale. Nous offrons une réelle parenthèse d'apaisement et d'émerveillement au cœur d'une biodiversité unique.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFC] rounded-2xl border border-[#EAE6DE] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={HOTEL_EXTERIOR_IMAGE}
                  alt="Engagement Éco-responsable"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Sun className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111827]">
                  Engagement Éco-responsable
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Installations solaires, traitement écologique des eaux, potager bio-dynamique approvisionnant notre restaurant et éradication complète des emballages plastiques à usage unique.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#EAE6DE] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={LEMUR_IMAGE}
                  alt="Soutien aux Communautés"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 text-[#1E293B] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111827]">
                  Soutien aux Communautés
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Formation et emploi local valorisé, partenariat direct avec les guides naturalistes d'Andasibe et soutien aux écoles du district pour un développement solidaire et pérenne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE MANIFESTO / BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="bg-[#050A14] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase block">
              LE MOT DE LA DIRECTION
            </span>
            <blockquote className="font-serif text-lg sm:text-2xl text-amber-100 font-light italic leading-relaxed">
              Â« Recevoir nos clients à White Palace, c'est leur ouvrir les portes d'un paradis préservé. Notre promesse est d'offrir une expérience inoubliable tout en préservant le joyau naturel de Madagascar. Â»
            </blockquote>
            <div className="text-xs text-emerald-300 font-medium">
              â Ar” La Direction de White Palace Hotel & Restaurant
            </div>
          </div>

          <button
            onClick={onOpenRoomBooking}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest shadow-xl transition-all hover:scale-105 relative z-10"
          >
            RÉSERVER VOTRE SÉJOUR
          </button>
        </div>
      </section>

    </div>
  );
};

