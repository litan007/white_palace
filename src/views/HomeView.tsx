import React from 'react';
import { 
  Play, 
  Sparkles, 
  TreePine, 
  BedDouble, 
  Utensils, 
  Crown, 
  ChevronRight, 
  ChevronDown,
  Check, 
  Award,
  ArrowRight,
  Eye,
  Calendar,
  Compass
} from 'lucide-react';
import { HERO_LODGE_IMAGE, LEMUR_IMAGE, ROOMS, OFFERS, KEY_STATS } from '../data/hotelData';
import { HeroSearch } from '../components/HeroSearch';
import { Room, Offer } from '../types';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenRoomDetail: (roomId: string) => void;
  onOpenVideoModal: () => void;
  onOpenRoomBooking: () => void;
  onOpenTableBooking: () => void;
  onSearchRooms: (params: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenRoomDetail,
  onOpenVideoModal,
  onOpenRoomBooking,
  onOpenTableBooking,
  onSearchRooms
}) => {
  const featuredRooms = ROOMS.filter(r => r.featured).slice(0, 3).map(room => ({
    id: room.id,
    title: room.title,
    price: room.price,
    image: room.images[0]
  }));

  return (
    <div className="bg-[#F8FAFC] text-[#2D433E] min-h-screen space-y-16 pb-12">
      
      {/* HERO BANNER SECTION */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-start text-left px-6 sm:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_LODGE_IMAGE}
            alt="White Palace Eco Lodge"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        </div>

        {/* Hero Content Left Aligned */}
        <div className="relative z-10 max-w-2xl space-y-6 pt-16 sm:pt-20 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            WHITE PALACE
          </span>

          <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-wide text-white leading-tight">
            Luxe, Confort<br />& Bien-être
          </h1>

          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-lg leading-relaxed">
            Votre escale de prestige en plein cœur d'Antananarivo.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('rooms')}
              className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full tracking-wider uppercase transition-all shadow-xl hover:scale-105"
            >
              DÉCOUVRIR L'HÔTEL
            </button>

            <button
              onClick={onOpenVideoModal}
              className="flex items-center gap-3 text-white hover:text-amber-300 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all px-4 py-3"
            >
              <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </div>
              <span>VOIR LA VIDÉO</span>
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('search-bar-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Découvrir</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* FLOATING BOOKING SEARCH BAR */}
      <div id="search-bar-section">
        <HeroSearch onSearch={onSearchRooms} />
      </div>

      {/* SECTION 1: UNE EXPÉRIENCE UNIQUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B]/10 border border-[#1E293B]/20 text-[#1E293B] text-[11px] font-semibold uppercase tracking-[0.25em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>L'ART DE RECEVOIR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E293B] tracking-tight">
            Une Expérience Unique & Inégalée
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
            Plongez dans un univers d'exception où chaque détail est pensé pour éveiller vos sens et préserver la sérénité du lieu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#EAE6DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#1E293B] flex items-center justify-center mx-auto group-hover:bg-[#1E293B] group-hover:text-amber-300 transition-colors duration-300">
              <TreePine className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#111827]">Nature Préservée</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              11 hectares de forêt tropicale primaire préservée et sanctuaire de biodiversité.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EAE6DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#1E293B] flex items-center justify-center mx-auto group-hover:bg-[#1E293B] group-hover:text-amber-300 transition-colors duration-300">
              <BedDouble className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#111827]">Hébergement de Luxe</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Suites & lodges d'exception offrant une vue panoramique époustouflante.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EAE6DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#1E293B] flex items-center justify-center mx-auto group-hover:bg-[#1E293B] group-hover:text-amber-300 transition-colors duration-300">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#111827]">Gastronomie Raffinée</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Cuisine gastronomique malgache revisitée par notre chef passionné.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EAE6DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#1E293B] flex items-center justify-center mx-auto group-hover:bg-[#1E293B] group-hover:text-amber-300 transition-colors duration-300">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#111827]">Service d'Exception</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Conciergerie personnalisée dédiée à réaliser chacun de vos désirs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: VIVEZ ANDASIBE AUTREMENT */}
      <section id="experience-section" className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="bg-[#050A14] rounded-3xl p-8 sm:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden border border-slate-900/60 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-5 h-72 sm:h-96 relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={LEMUR_IMAGE}
              alt="Lémurien Indri Indri Andasibe"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 text-[10px] font-semibold uppercase tracking-widest border border-amber-400/30">
              SANCTUAIRE NATUREL
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 sm:p-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[10px] font-semibold uppercase tracking-widest border border-amber-400/20">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>SÉJOUR IMMERSIF</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Vivez Andasibe<br /><span className="italic text-amber-300 font-light">Autrement</span>
            </h2>

            <p className="text-xs sm:text-base text-slate-100/90 font-light leading-relaxed max-w-xl">
              Entre la symphonie mystique de l'Indri Indri au lever du jour, les balades guidées nocturnes et la quiétude absolue de votre bungalow, offrez-vous un voyage d'exception gravé à jamais.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('experiences')}
                className="bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-4 rounded-full tracking-widest uppercase transition-all shadow-xl hover:scale-105 flex items-center gap-2"
              >
                <span>DÉCOUVRIR NOS EXPÉRIENCES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOS CHAMBRES & SUITES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 pt-6">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B]/10 border border-[#1E293B]/20 text-[#1E293B] text-[11px] font-semibold uppercase tracking-[0.25em] shadow-sm">
            <BedDouble className="w-3.5 h-3.5 text-amber-600" />
            <span>COLLECTION RESORT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E293B] tracking-tight">
            Nos Suites & Villas d'Exception
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
            Espaces généreux façonnés avec des matériaux nobles, ouverts sur la forêt tropicale ou le lac privé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-semibold">
                    <span className="text-amber-300 font-bold">{room.price.toLocaleString('fr-MG')} Ar</span> / nuit
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#111827] tracking-wide">
                    {room.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    Espace privatif d'exception avec terrasse panoramique et vue dégagée sur le domaine.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenRoomDetail(room.id)}
                  className="w-full py-3 px-4 rounded-xl border border-[#1E293B]/30 text-[#1E293B] hover:bg-[#1E293B] hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>DÉCOUVRIR LA SUITE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('rooms')}
            className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs px-10 py-4 rounded-full uppercase tracking-widest shadow-xl transition-all hover:scale-105"
          >
            EXPLORER TOUTE LA COLLECTION
          </button>
        </div>
      </section>

      {/* BOTTOM COUNTER STATS BANNER */}
      <section className="bg-[#111827] text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-normal text-amber-100">
              120+
            </div>
            <div className="text-[10px] sm:text-xs tracking-widest text-slate-200/90 uppercase font-light">
              ESPÈCES OBSERVABLES
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-normal text-amber-100">
              11
            </div>
            <div className="text-[10px] sm:text-xs tracking-widest text-slate-200/90 uppercase font-light">
              HECTARES PRÉSERVÉS
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-normal text-amber-100">
              40+
            </div>
            <div className="text-[10px] sm:text-xs tracking-widest text-slate-200/90 uppercase font-light">
              ESPÈCES D'ORCHIDÉES
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-5xl font-normal text-amber-100">
              98%
            </div>
            <div className="text-[10px] sm:text-xs tracking-widest text-slate-200/90 uppercase font-light">
              CLIENTS SATISFAITS
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
