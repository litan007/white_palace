import React, { useState } from 'react';
import {
  Wifi,
  Sparkles,
  Bell,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Bed,
  Tv,
  Wind,
  Bath,
  GlassWater,
  Lock,
  Trees,
  Users,
  Check
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface RoomsPageProps {
  onNavigate?: (view: string) => void;
  onOpenRoomDetail?: (roomId: string) => void;
  onOpenRoomBooking: (roomId?: string) => void;
}

interface RoomCategory {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  image: string;
  bed: string;
  price: string;
  priceNum: number;
  capacity: string;
  surface: string;
  description: string;
  images: string[];
  amenities: { icon: string; label: string }[];
}

const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'single',
    title: 'Single',
    subtitle: 'Confort et intimité',
    categoryTag: 'Chambre Single',
    image: '/nouvelles_photos/chambre_lit_1.jpg',
    bed: '1 lit simple',
    price: '136 000 Ar',
    priceNum: 136000,
    capacity: '1 personne',
    surface: '18 m²',
    description: "Chambre conçue pour les voyageurs seuls ou en déplacement professionnel. Alliant praticité et confort, elle offre un lit de qualité supérieure, un espace bureau et une salle de bain moderne privative.",
    images: [
      '/nouvelles_photos/chambre_lit_1.jpg',
      '/nouvelles_photos/chambre_lit_5.jpg',
      '/nouvelles_photos/coin_détente_1.jpg',
      '/nouvelles_photos/chambre_sallon_3.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit simple confortable' },
      { icon: 'tv', label: 'TV écran plat HD' },
      { icon: 'wifi', label: 'WiFi haut débit gratuit' },
      { icon: 'minibar', label: 'Mini bar approvisionné' },
      { icon: 'ac', label: 'Climatisation réversible' },
      { icon: 'safe', label: 'Coffre-fort sécurisé' },
      { icon: 'bath', label: 'Salle de bain privée' },
      { icon: 'view', label: 'Vue cour intérieure' },
    ],
  },
  {
    id: 'double',
    title: 'Double',
    subtitle: 'Confort et élégance',
    categoryTag: 'Chambre Double',
    image: '/nouvelles_photos/chambre_lit_2.jpg',
    bed: '1 lit double',
    price: '145 000 Ar',
    priceNum: 145000,
    capacity: '2 personnes',
    surface: '24 m²',
    description: "Idéale pour un séjour en couple ou entre amis, la chambre double allie confort moderne et ambiance chaleureuse. Profitez d'un espace spacieux, d'une literie de qualité et de toutes les commodités nécessaires pour un séjour agréable.",
    images: [
      '/nouvelles_photos/chambre_de_fond.jpg',
      '/nouvelles_photos/chambre_lit_2.jpg',
      '/nouvelles_photos/chambre_sallon_1.jpg',
      '/nouvelles_photos/chambre_sallon_2.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit double' },
      { icon: 'tv', label: 'TV écran plat' },
      { icon: 'wifi', label: 'WiFi gratuit' },
      { icon: 'minibar', label: 'Mini bar' },
      { icon: 'ac', label: 'Climatisation' },
      { icon: 'safe', label: 'Coffre-fort' },
      { icon: 'bath', label: 'Salle de bain privée' },
      { icon: 'view', label: 'Balcon / Vue jardin' },
    ],
  },
  {
    id: 'twin',
    title: 'Twin',
    subtitle: 'Partage et indépendance',
    categoryTag: 'Chambre Twin',
    image: '/nouvelles_photos/chambre_lit_3.jpg',
    bed: '2 lits séparés',
    price: '136 000 Ar',
    priceNum: 136000,
    capacity: '2 personnes',
    surface: '22 m²',
    description: "Parfaite pour des collègues ou amis souhaitant partager une chambre tout en préservant leur confort personnel grâce à deux lits séparés avec literie de luxe.",
    images: [
      '/nouvelles_photos/chambre_lit_3.jpg',
      '/nouvelles_photos/chambre_lit_5.jpg',
      '/nouvelles_photos/chambre_sallon_3.jpg',
      '/nouvelles_photos/salle-restaurant_2.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '2 lits individuels confort' },
      { icon: 'tv', label: 'TV écran plat' },
      { icon: 'wifi', label: 'WiFi haut débit' },
      { icon: 'minibar', label: 'Mini bar' },
      { icon: 'ac', label: 'Climatisation' },
      { icon: 'safe', label: 'Coffre-fort' },
      { icon: 'bath', label: 'Salle de bain avec douche' },
      { icon: 'view', label: 'Vue dégagée' },
    ],
  },
  {
    id: 'familiale',
    title: 'Familiale',
    subtitle: 'Espace et sérénité',
    categoryTag: 'Chambre Familiale',
    image: '/nouvelles_photos/chambre_lit_4.jpg',
    bed: '1 lit double + lit(s) simple(s)',
    price: '175 000 Ar',
    priceNum: 175000,
    capacity: '3-4 personnes',
    surface: '35 m²',
    description: "Conçue pour accueillir les familles dans les meilleures conditions. Un grand espace de vie, plusieurs couchages douillets et un agencement pensé pour le bien-être de chacun.",
    images: [
      '/nouvelles_photos/chambre_lit_4.jpg',
      '/nouvelles_photos/chambre_sallon_4.jpg',
      '/nouvelles_photos/chambre_sallon_2.jpg',
      '/nouvelles_photos/coin_détente_1.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit double + lit(s) simple(s)' },
      { icon: 'tv', label: 'TV grand écran HD' },
      { icon: 'wifi', label: 'WiFi illimité' },
      { icon: 'minibar', label: 'Réfrigérateur / Mini bar' },
      { icon: 'ac', label: 'Climatisation' },
      { icon: 'safe', label: 'Coffre-fort familial' },
      { icon: 'bath', label: 'Grande salle de bain' },
      { icon: 'view', label: 'Espace salon enfant' },
    ],
  },
  {
    id: 'luxe',
    title: 'Luxe',
    subtitle: 'Raffinement et exclusivité',
    categoryTag: 'Chambre Luxe',
    image: '/nouvelles_photos/chambre_de_fond.jpg',
    bed: '1 lit King Size',
    price: '250 000 Ar',
    priceNum: 250000,
    capacity: '2 personnes',
    surface: '42 m²',
    description: "Le summum du raffinement au White Palace. Finitions soignées, literie premium King Size, coin salon privatif et vue panoramique imprenable sur la ville.",
    images: [
      '/nouvelles_photos/chambre_de_fond.jpg',
      '/nouvelles_photos/chambre_lit_2.jpg',
      '/nouvelles_photos/chambre_sallon_1.jpg',
      '/nouvelles_photos/terrasse_1.jpg',
    ],
    amenities: [
      { icon: 'bed', label: '1 lit King Size Prestige' },
      { icon: 'tv', label: 'Smart TV 4K connectée' },
      { icon: 'wifi', label: 'WiFi fibre très haut débit' },
      { icon: 'minibar', label: 'Mini bar gourmand inclus' },
      { icon: 'ac', label: 'Climatisation silencieuse' },
      { icon: 'safe', label: 'Coffre-fort digital' },
      { icon: 'bath', label: 'Baignoire et douche italienne' },
      { icon: 'view', label: 'Balcon terrasse panoramique' },
    ],
  },
];

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenRoomBooking
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(1); // Defaults to Double
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [categoryPage, setCategoryPage] = useState<number>(1);

  const selectedRoom = ROOM_CATEGORIES[selectedRoomIndex];

  const handleSelectRoom = (idx: number) => {
    setSelectedRoomIndex(idx);
    setActiveThumbIndex(0);
    const detailSection = document.getElementById('featured-room-section');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const nextThumb = () => {
    setActiveThumbIndex((prev) => (prev + 1) % selectedRoom.images.length);
  };

  const prevThumb = () => {
    setActiveThumbIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
  };

  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'bed':
        return <Bed className="w-4 h-4 text-[#256079]" />;
      case 'tv':
        return <Tv className="w-4 h-4 text-[#256079]" />;
      case 'wifi':
        return <Wifi className="w-4 h-4 text-[#256079]" />;
      case 'minibar':
        return <GlassWater className="w-4 h-4 text-[#256079]" />;
      case 'ac':
        return <Wind className="w-4 h-4 text-[#256079]" />;
      case 'safe':
        return <Lock className="w-4 h-4 text-[#256079]" />;
      case 'bath':
        return <Bath className="w-4 h-4 text-[#256079]" />;
      case 'view':
        return <Trees className="w-4 h-4 text-[#256079]" />;
      default:
        return <Check className="w-4 h-4 text-[#256079]" />;
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-[#173C4D] min-h-screen pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION (100% FULL WIDTH) */}
      <section className="w-full relative bg-[#EAF2F6] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Text & Features */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal direction="down" delay={100}>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C59A3D] uppercase">
                NOS CHAMBRES
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal direction="up" delay={200}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#173C4D] leading-[1.08] tracking-tight">
                Des chambres élégantes<br />
                pour tous vos séjours
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal direction="up" delay={300}>
              <p className="text-[13px] sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-[440px]">
                Découvrez nos 64 chambres, spacieuses et élégantes, parfaitement équipées pour un séjour agréable et reposant.
              </p>
            </Reveal>

            {/* 3 Amenities / Highlights */}
            <Reveal direction="up" delay={400}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    WiFi gratuit<br className="hidden sm:inline" /> dans les chambres
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Service de ménage<br className="hidden sm:inline" /> quotidien
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Bell className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Room service<br className="hidden sm:inline" /> 24h/24
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Button */}
            <Reveal direction="up" delay={500}>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('categories-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2.5 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Voir toutes les chambres</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#DFC27D]" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Organic S-curve blob clipped photo with exact SVG paths */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            {/* Cursive script in top right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <span className="font-serif italic text-white text-2xl sm:text-3xl lg:text-4xl tracking-wide drop-shadow-md block font-normal -rotate-2 select-none">
                Votre confort,<br />
                <span className="relative inline-block text-[#DFC27D]">
                  notre priorité
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#DFC27D]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 50 10 100 3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </div>

            <svg
              className="w-full h-full"
              viewBox="550 -66 730 424"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Outer wave clip path (Path 2) */}
                <clipPath id="roomsOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 646.628 -66 L 646.628 -64.184 C 630.307 28.101 614.873 77.785 596.277 145.423 C 578.698 209.365 533.464 276.376 557.905 356.284 L 721.901 356.623 L 1280 358 Z" />
                </clipPath>

                {/* Inner main photo clip path (Path 1) */}
                <clipPath id="roomsHeroBlobClip">
                  <path d="M 1280 358 L 1280 -66 L 572.702 -66 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 660.324 168.813 661.881 210.903 660.29 237.456 C 656.625 298.638 676.362 343.694 717.099 355.801 L 717.099 358 L 1280 358 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft blue overlay */}
              <g clipPath="url(#roomsOuterWaveClip)">
                <image
                  href="/nouvelles_photos/chambre_lit_4.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.45"
                />
                <rect x="550" y="-66" width="730" height="424" fill="#A7C5D2" opacity="0.3" />
              </g>

              {/* 2. Main opaque photo clipped by Path 1 */}
              <g clipPath="url(#roomsHeroBlobClip)">
                <image
                  href="/nouvelles_photos/chambre_lit_4.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* 2. SECTION: NOS DIFFÉRENTES CATÉGORIES */}
      <section id="categories-section" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <Reveal direction="left" delay={100}>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase block">
              NOS CHAMBRES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#173C4D] font-bold mt-1">
              Nos différentes catégories
            </h2>
          </Reveal>

          {/* Carousel Arrows */}
          <Reveal direction="right" delay={150}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCategoryPage((prev) => (prev === 1 ? 2 : 1))}
                className="w-9 h-9 rounded-full border border-[#DCE8ED] hover:border-[#256079] text-[#173C4D] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Catégories précédentes"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-[#536E7B] tabular-nums">
                {categoryPage} / 2
              </span>
              <button
                onClick={() => setCategoryPage((prev) => (prev === 1 ? 2 : 1))}
                className="w-9 h-9 rounded-full border border-[#DCE8ED] hover:border-[#256079] text-[#173C4D] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Catégories suivantes"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {ROOM_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedRoomIndex === idx;
            return (
              <Reveal key={cat.id} direction="up" delay={100 + idx * 80}>
                <div
                  onClick={() => handleSelectRoom(idx)}
                  className={`bg-white rounded-2xl sm:rounded-3xl border overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer ${
                    isSelected ? 'border-[#256079] ring-2 ring-[#256079]/30' : 'border-[#DCE8ED]'
                  }`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {isSelected && (
                      <div className="absolute top-3 left-3 bg-[#256079] text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-xs">
                        Sélectionnée
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-bold text-[#173C4D] group-hover:text-[#256079] transition-colors">
                        {cat.title}
                      </h3>
                      <div className="space-y-1.5 text-xs text-[#536E7B]">
                        <div className="flex items-center gap-2">
                          <Bed className="w-3.5 h-3.5 text-[#256079] shrink-0" />
                          <span>{cat.bed}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-[#256079] shrink-0" />
                          <span className="font-semibold text-[#256079]">{cat.price}</span>
                          <span className="text-[11px] text-gray-400">/ nuit</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#EDF4F7]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectRoom(idx);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#256079] group-hover:text-[#173C4D] group-hover:translate-x-0.5 transition-all cursor-pointer"
                      >
                        <span>Voir les détails</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#DFC27D]" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 3. SECTION: ROOM DETAIL FOCUS SHOWCASE */}
      <section id="featured-room-section" className="w-full relative bg-[#F2F7F9] border-y border-[#DCE8ED] overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-20">
          <Reveal direction="up" delay={150}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left side: Main photo + thumbnails */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main photo */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] shadow-sm border-2 border-white bg-gray-100">
                  <img
                    src={selectedRoom.images[activeThumbIndex] || selectedRoom.image}
                    alt={selectedRoom.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Badge top-left */}
                  <div className="absolute top-4 left-4 z-10 bg-[#173C4D]/90 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
                    {selectedRoom.categoryTag}
                  </div>
                </div>

                {/* 4 Thumbnails strip */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={prevThumb}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#173C4D] hover:bg-[#256079] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer"
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-4 gap-2 sm:gap-2.5 flex-1">
                    {selectedRoom.images.slice(0, 4).map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveThumbIndex(idx)}
                        className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeThumbIndex === idx
                            ? 'border-[#256079] scale-102 shadow-xs ring-1 ring-[#256079]'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={thumb}
                          alt={`Aperçu ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={nextThumb}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#173C4D] hover:bg-[#256079] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors cursor-pointer"
                    aria-label="Photo suivante"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right side: Room Details & Amenities */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase block">
                    {selectedRoom.categoryTag.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#173C4D] font-bold mt-1">
                    {selectedRoom.subtitle}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed">
                  {selectedRoom.description}
                </p>

                {/* 2-Column Amenities List (8 items) */}
                <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-2 border-t border-[#DCE8ED]">
                  {selectedRoom.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs border border-[#DCE8ED]">
                        {renderAmenityIcon(item.icon)}
                      </div>
                      <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price & Action button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#DCE8ED]">
                  <div>
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-[#256079]">
                      {selectedRoom.price}
                    </span>
                    <span className="text-xs text-[#536E7B] ml-1">/ nuit</span>
                  </div>

                  <button
                    onClick={() => onOpenRoomBooking(selectedRoom.id)}
                    className="inline-flex items-center justify-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-7 py-3 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>Réserver maintenant</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC27D]" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION: ÉQUIPEMENTS & SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <Reveal direction="up" delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase block">
                ÉQUIPEMENTS &amp; SERVICES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173C4D] font-bold leading-tight">
                Tout le confort pour votre séjour
              </h2>
              <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-md">
                Toutes nos chambres sont équipées pour vous offrir un confort optimal. Profitez de nos services et équipements haut de gamme pensés pour votre bien-être.
              </p>
            </div>

            {/* Right Column: 6 circular icon badges */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-3 text-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    WiFi gratuit
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <Wind className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    Climatisation
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <Tv className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    TV écran plat
                  </span>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <GlassWater className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    Mini bar
                  </span>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    Room service<br />24h/24
                  </span>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-13 h-13 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shadow-2xs hover:bg-[#DCEAF0] transition-colors border border-[#DCE8ED]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#173C4D] font-medium leading-tight">
                    Ménage quotidien
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. SECTION: CTA BANNER */}
      <section className="w-full relative overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] xl:h-[290px] flex">
        {/* Left Side: Photo */}
        <div className="w-[52%] sm:w-[50%] lg:w-[48%] h-full relative shrink-0">
          <img
            src="/nouvelles_photos/terrasse_1.jpg"
            alt="Piscine et terrasse du White Palace Hôtel"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Deep Blue block */}
        <div className="flex-1 h-full relative bg-[#173C4D] text-white flex items-center justify-center -ml-[30px] sm:-ml-[45px] md:-ml-[60px] lg:-ml-[80px] z-10">
          {/* Organic wave transition on the left edge */}
          <svg
            className="absolute -left-[39px] sm:-left-[59px] md:-left-[79px] lg:-left-[99px] top-0 bottom-0 h-full w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] pointer-events-none text-[#173C4D]"
            viewBox="0 0 100 300"
            preserveAspectRatio="none"
          >
            <path
              d="M100,0 C65,70 15,120 40,195 C55,245 85,275 100,300 L100,0 Z"
              fill="currentColor"
            />
          </svg>

          {/* Content: Title with handwriting font + button */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 max-w-lg space-y-3 sm:space-y-4">
            <Reveal direction="up" delay={100}>
              <h2 className="font-['Caveat'] text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-white leading-tight tracking-wide select-none">
                Un séjour inoubliable
                <br />
                <span className="relative inline-block mt-0.5 text-[#DFC27D]">
                  au White Palace Hôtel
                  <svg
                    className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-2.5 sm:h-3 text-[#DFC27D]"
                    viewBox="0 0 160 12"
                    fill="none"
                  >
                    <path
                      d="M 5 6 Q 80 12 155 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="inline-flex items-center gap-2 border border-[#DFC27D] hover:bg-[#DFC27D] text-[#DFC27D] hover:text-[#173C4D] text-[11px] sm:text-xs md:text-sm font-medium px-5 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};
