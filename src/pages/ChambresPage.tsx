import React, { useState } from 'react';
import { PageType, Room } from '../types';
import { ROOMS } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { HeroWaveMask } from '../components/HeroWaveMask';
import { Reveal } from '../components/Reveal';
import {
  Wifi,
  Bell,
  Utensils,
  Tv,
  Wind,
  Shield,
  Bath,
  TreePine,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Bed,
  Check,
  Coffee,
} from 'lucide-react';

interface ChambresPageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: (roomId?: string) => void;
}

export const ChambresPage: React.FC<ChambresPageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('double');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [categoryPage, setCategoryPage] = useState<number>(1);

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[1];
  const gallery = selectedRoom.gallery || [selectedRoom.image];

  // Pagination for categories: 4 per page
  const totalCategoryPages = Math.ceil(ROOMS.length / 4);
  const displayedRooms = ROOMS.slice((categoryPage - 1) * 4, categoryPage * 4);

  const handleSelectRoom = (room: Room) => {
    setSelectedRoomId(room.id);
    setActivePhotoIdx(0);
    // Smooth scroll down to details
    const el = document.getElementById('room-detail-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[600px] lg:h-[700px] bg-white flex flex-col md:flex-row">
        {/* Mobile-only Image */}
        <div className="w-full h-64 md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
            alt="Chambres élégantes White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Full Bleed Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
            alt="Chambres élégantes White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Left Overlay Content with Wavy Edge */}
        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#f8faf9] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#f8faf9" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              NOS CHAMBRES
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
              Des chambres élégantes pour tous vos séjours
            </h1>

            <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-md">
              Découvrez nos 64 chambres, spacieuses et élégantes, parfaitement équipées pour un
              séjour agréable et reposant.
            </p>

            {/* 3 Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Wifi className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">WiFi gratuit dans<br/>toutes les chambres</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Bell className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Service de ménage<br/>quotidien</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Room service<br/>24h/24</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#categories-section"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
              >
                <span>Voir toutes les chambres</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cursive text positioned absolute over the image on Desktop */}
        <Reveal direction="left" delay={500} className="hidden md:block absolute top-[20%] right-[10%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Votre confort, notre priorité
          </span>
        </Reveal>
      </section>

      {/* 2. NOS DIFFÉRENTES CATÉGORIES (CAROUSEL / GRID) */}
      <section id="categories-section" className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                NOS CHAMBRES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Nos différentes catégories
              </h2>
            </Reveal>

            {/* Pagination controls */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#16332c]">
              <button
                onClick={() => setCategoryPage((p) => Math.max(1, p - 1))}
                disabled={categoryPage === 1}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-1">{categoryPage}/{totalCategoryPages}</span>
              <button
                onClick={() => setCategoryPage((p) => Math.min(totalCategoryPages, p + 1))}
                disabled={categoryPage === totalCategoryPages}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedRooms.map((room, idx) => {
              const isCurrent = room.id === selectedRoomId;
              return (
                <Reveal
                  key={room.id}
                  delay={150 + (idx % 4) * 100}
                  className="h-full"
                >
                <div
                  onClick={() => handleSelectRoom(room)}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer h-full ${
                    isCurrent
                      ? 'border-[#1b3d36] shadow-xl ring-2 ring-[#1b3d36]/20'
                      : 'border-[#dce8e2] hover:shadow-lg'
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#142e27]">
                        {room.name}
                      </h3>
                      <p className="text-xs text-[#526f67] flex items-center gap-1.5 mt-1">
                        <Bed className="w-3.5 h-3.5" />
                        <span>{room.bed}</span>
                      </p>
                      <p className="text-xs font-bold text-[#1b3d36] mt-2">
                        {room.price} <span className="text-[11px] font-normal text-gray-500">/ nuit</span>
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#1b3d36] group-hover:translate-x-1 transition">
                      <span>Voir les détails</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED ROOM DETAIL (CHAMBRE DOUBLE / ACTIVE SELECTION) */}
      <section id="room-detail-section" className="py-16 sm:py-20 bg-[#f8faf9] relative">
        <BotanicalLeaf className="top-8 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dbe7e1] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Photo & Thumbnails */}
              <Reveal direction="left" className="lg:col-span-6 space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
                  <img
                    src={gallery[activePhotoIdx] || selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover transition duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Chambre {selectedRoom.name}
                  </div>
                </div>

                {/* Thumbnails row */}
                <div className="grid grid-cols-4 gap-3">
                  {gallery.map((thumb, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition ${
                        activePhotoIdx === idx
                          ? 'border-[#1b3d36] ring-2 ring-[#1b3d36]/20'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={thumb} alt={`Vue ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </Reveal>

              {/* Right Details */}
              <Reveal delay={150} className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                    CHAMBRE {selectedRoom.name.toUpperCase()}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                    Confort et élégance
                  </h2>
                </div>

                <p className="text-sm text-[#526f67] leading-relaxed">
                  {selectedRoom.description}
                </p>

                {/* Amenities 2-column grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-3 border-y border-gray-100 text-xs text-[#2c4e45]">
                  <div className="flex items-center gap-2.5">
                    <Bed className="w-4 h-4 text-[#1b3d36]" />
                    <span>{selectedRoom.bed}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Tv className="w-4 h-4 text-[#1b3d36]" />
                    <span>TV écran plat</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Wifi className="w-4 h-4 text-[#1b3d36]" />
                    <span>WiFi gratuit</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Coffee className="w-4 h-4 text-[#1b3d36]" />
                    <span>Mini bar</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-[#1b3d36]" />
                    <span>Climatisation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-[#1b3d36]" />
                    <span>Coffre-fort</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Bath className="w-4 h-4 text-[#1b3d36]" />
                    <span>Salle de bain privée</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <TreePine className="w-4 h-4 text-[#1b3d36]" />
                    <span>Balcon / Vue jardin</span>
                  </div>
                </div>

                {/* Price and booking CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#142e27]">
                      {selectedRoom.price}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">/ nuit</span>
                  </div>

                  <button
                    onClick={() => onOpenReservation(selectedRoom.id)}
                    className="px-7 py-3.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Réserver maintenant</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ÉQUIPEMENTS & SERVICES */}
      <section className="py-16 sm:py-20 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
            ÉQUIPEMENTS & SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
            Tout le confort pour votre séjour
          </h2>
          <p className="text-sm text-[#526f67] mt-2">
            Toutes nos chambres sont équipées pour vous offrir un confort optimal. Profitez de nos
            services et équipements pensés pour votre bien-être.
          </p>
        </Reveal>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <Reveal delay={0} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">WiFi gratuit</span>
            </Reveal>

            <Reveal delay={100} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Wind className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">Climatisation</span>
            </Reveal>

            <Reveal delay={200} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">TV écran plat</span>
            </Reveal>

            <Reveal delay={300} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">Mini bar</span>
            </Reveal>

            <Reveal delay={400} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">Room service 24h/24</span>
            </Reveal>

            <Reveal delay={500} className="p-5 rounded-2xl bg-[#f6faf8] border border-[#dbe7e1] text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1b3d36]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#142e27]">Ménage quotidien</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM BANNER */}
      <section className="relative py-16 bg-[#132c25] overflow-hidden text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
            alt="Piscine White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Reveal direction="left">
            <span className="font-script text-3xl sm:text-4xl text-emerald-200">
              Un séjour inoubliable au White Palace Hôtel
            </span>
          </Reveal>

          <Reveal delay={200} direction="right">
            <button
              onClick={() => onOpenReservation()}
              className="px-8 py-3.5 rounded-full bg-white text-[#132c25] hover:bg-emerald-50 text-xs font-semibold tracking-wider uppercase transition shadow-lg shrink-0 flex items-center gap-2"
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
