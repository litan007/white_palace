import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Wifi, 
  Tv, 
  Clock, 
  Bell, 
  ShieldCheck, 
  Bed, 
  UserCheck, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onOpenRoomDetail: (roomId: string) => void;
  onOpenVideoModal: () => void;
  onOpenRoomBooking: (roomId?: string) => void;
  onOpenTableBooking: () => void;
  onSearchRooms: (params: any) => void;
}

// 8 rooms with high quality photos from nouvelles_photos
const ROOM_CARDS = [
  {
    id: 'chambre-single',
    title: 'Single',
    price: '135 000 Ar',
    image: '/nouvelles_photos/chambre_lit_1.jpg'
  },
  {
    id: 'chambre-double',
    title: 'Double',
    price: '145 000 Ar',
    image: '/nouvelles_photos/chambre_lit_2.jpg'
  },
  {
    id: 'chambre-twin',
    title: 'Twin',
    price: '135 000 Ar',
    image: '/nouvelles_photos/chambre_lit_3.jpg'
  },
  {
    id: 'chambre-luxe',
    title: 'Luxe',
    price: '250 000 Ar',
    image: '/nouvelles_photos/chambre_de_fond.jpg'
  },
  {
    id: 'chambre-cuisine',
    title: 'Cuisine',
    price: '200 000 Ar',
    image: '/nouvelles_photos/chambre_sallon_2.jpg'
  },
  {
    id: 'appartement',
    title: 'Appartement',
    price: '200 000 Ar',
    image: '/nouvelles_photos/chambre_sallon_4.jpg'
  },
  {
    id: 'chambre-familiale',
    title: 'Familiale',
    price: '175 000 Ar',
    image: '/nouvelles_photos/chambre_lit_4.jpg'
  },
  {
    id: 'chambre-handicape',
    title: 'Handicapé',
    price: '180 000 Ar',
    image: '/nouvelles_photos/chambre_lit_5.jpg'
  }
];

// Hero slider with high resolution images
const HERO_SLIDES = [
  {
    image: '/nouvelles_photos/chambre_de_fond.jpg',
    caption: 'Chambre de prestige avec literie de luxe'
  },
  {
    image: '/nouvelles_photos/fascade_1.jpg',
    caption: 'Façade contemporaine du White Palace Hôtel'
  },
  {
    image: '/nouvelles_photos/terrasse_1.jpg',
    caption: 'Restaurant Rooftop avec vue panoramique'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenRoomDetail,
  onOpenRoomBooking
}) => {
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  const prevSlide = () => {
    setHeroSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setHeroSlideIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#F8FAFC] text-[#173C4D] min-h-screen pt-20 sm:pt-24 space-y-20 lg:space-y-28 overflow-x-hidden">
      
      {/* 1. HERO SECTION (100% FULL WIDTH) */}
      <section className="w-full relative bg-[#EAF2F6] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">

          {/* Left Column: Text & Buttons */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal direction="down" delay={100}>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C59A3D] uppercase">
                CONFORT &nbsp;•&nbsp; ÉLÉGANCE &nbsp;•&nbsp; BIEN-ÊTRE
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={200}>
              <div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-[66px] xl:text-[72px] font-bold text-[#173C4D] leading-[0.93] tracking-tight">
                  WHITE<br />
                  <span className="text-[#256079]">PALACE</span>
                </h1>
                <div className="font-serif italic text-3xl sm:text-4xl lg:text-[44px] text-[#C59A3D] font-normal mt-1 leading-tight">
                  Hôtel
                </div>
              </div>
            </Reveal>

            {/* Sub-headline */}
            <Reveal direction="up" delay={300}>
              <h2 className="font-serif text-lg sm:text-xl lg:text-[22px] text-[#173C4D] font-semibold leading-snug">
                Un séjour d'exception<br />à Antananarivo
              </h2>
            </Reveal>

            {/* Paragraph */}
            <Reveal direction="up" delay={400}>
              <p className="text-[13px] sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-[400px]">
                Découvrez un lieu unique où confort, élégance et hospitalité se rencontrent pour faire de votre séjour une expérience inoubliable.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal direction="up" delay={500}>
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Réserver</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
                </button>

                <button
                  onClick={() => document.getElementById('a-propos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center text-center border border-[#B8D1DC] hover:border-[#256079] text-[#256079] hover:bg-[#256079]/10 text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer"
                >
                  Découvrir l'hôtel
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Blob-shaped photo with layered SVG shadows in harmonized blue */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 650"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Main blob clip for the photo */}
                <clipPath id="heroBlobClip">
                  <path d="M 170 0 C 120 50, 45 135, 50 240 C 58 335, 115 425, 155 490 C 195 555, 240 605, 285 650 L 1000 650 L 1000 0 Z" />
                </clipPath>
              </defs>

              {/* Shadow layer 1 — outermost light translucent halo in brand slate tint */}
              <path
                d="M 70 0 C 20 60, -20 150, 8 245 C 32 335, 88 425, 128 490 C 168 555, 212 605, 250 650 L 315 650 C 275 600, 235 545, 195 480 C 155 410, 108 315, 95 235 C 80 155, 105 70, 125 0 Z"
                fill="#B8D4E2"
                opacity="0.55"
              />

              {/* Shadow layer 2 — upper ocean blue shadow arc */}
              <path
                d="M 105 0 C 55 50, 25 125, 35 195 C 48 265, 92 325, 138 375 C 112 305, 88 225, 92 150 C 102 80, 132 25, 158 0 Z"
                fill="#7EADC1"
                opacity="0.75"
              />

              {/* Shadow layer 3 — bottom deep blue accent */}
              <path
                d="M 135 650 C 165 565, 215 515, 265 530 C 298 545, 328 595, 348 650 Z"
                fill="#256079"
                opacity="0.9"
              />

              {/* The photo itself, clipped by the blob shape */}
              <g clipPath="url(#heroBlobClip)">
                <image
                  key={heroSlideIndex}
                  href={HERO_SLIDES[heroSlideIndex].image}
                  x="0"
                  y="0"
                  width="1000"
                  height="650"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>

            {/* Slider Controls — bottom right pill */}
            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center gap-3 bg-[#112A36]/80 backdrop-blur-xs text-white px-4 py-2 rounded-full text-xs tracking-widest shadow-md border border-[#256079]/40">
              <button
                onClick={prevSlide}
                className="p-1 hover:text-[#DFC27D] transition-colors cursor-pointer"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] tabular-nums font-medium text-white/90">
                0{heroSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
              <button
                onClick={nextSlide}
                className="p-1 hover:text-[#DFC27D] transition-colors cursor-pointer"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: À PROPOS DE NOUS */}
      <section id="a-propos" className="w-full relative overflow-hidden -mt-12 sm:-mt-16 lg:-mt-20 pt-2 pb-0">
        <div className="w-full pl-0 pr-6 sm:pr-12 md:pr-16 lg:pr-24 xl:pr-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left: Organic Blob facade photo */}
            <div className="lg:col-span-5 relative flex justify-start items-center pl-0">
              <Reveal direction="left" delay={150} className="w-full">
                <div className="w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[152/130] relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1615 -475 1520 1300"
                    className="w-full h-full drop-shadow-md"
                  >
                    <defs>
                      <clipPath id="aboutImageClip">
                        <path d="M -217.258 171.316 C -215.846 489.616 -374.37 749.727 -899.214 790.829 C -1244.673 804.225 -1562.45 589.874 -1532.588 226.178 C -1502.726 -137.518 -1339.835 -271.722 -896.52 -372.141 C -453.205 -472.56 -218.67 -146.984 -217.258 171.316 Z" />
                      </clipPath>
                    </defs>

                    {/* Path 1: Background accent (bottom right) */}
                    <path
                      fill="rgba(205, 226, 237, 0.6)"
                      d="M -95.269 820.228 L -934.101 823.213 C -934.161 823.105 -393.994 283.629 -95.269 820.228 Z"
                    />

                    {/* Path 2: Background accent (top left) */}
                    <path
                      fill="rgba(205, 226, 237, 0.6)"
                      d="M -1610.294 -409.184 L -1611.156 372.461 C -1611.156 372.461 -330.876 -276.257 -1610.294 -409.184 Z"
                    />

                    {/* Path 3: The hotel facade image clipped by the organic blob */}
                    <g clipPath="url(#aboutImageClip)">
                      <image
                        href="/nouvelles_photos/fascade_1.jpg"
                        x="-1565"
                        y="-475"
                        width="1350"
                        height="1280"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </g>

                    {/* Path 4: Soft warm gold accent overlay on bottom-left */}
                    <path
                      fill="rgba(223, 194, 125, 0.35)"
                      d="M -1612.527 821.832 L -1614.812 377.01 C -1508.53 218.247 -1251.294 126.99 -1217.087 504.087 C -1209.4 588.828 -1248.675 696.605 -1355.578 821.411 L -1612.527 821.832 Z"
                    />
                  </svg>
                </div>
              </Reveal>
            </div>

            {/* Right: Content & 3 feature icons */}
            <div className="lg:col-span-7 space-y-6 px-4 sm:px-0">
              <Reveal direction="up" delay={200}>
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase">
                  À PROPOS DE NOUS
                </div>
              </Reveal>

              <Reveal direction="up" delay={280}>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173C4D] leading-tight">
                  Un hôtel d'exception au cœur<br />d'Antananarivo
                </h2>
              </Reveal>

              <Reveal direction="up" delay={360}>
                <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-xl">
                  Le White Palace Hôtel est un établissement haut de gamme qui allie confort absolu, élégance architecturale et hospitalité chaleureuse. Nous mettons tout en œuvre pour vous offrir une expérience unique, dans un cadre raffiné et sécurisé.
                </p>
              </Reveal>

              {/* 3 Pillars / Feature items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <Reveal direction="up" delay={420}>
                  <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-snug">
                        Emplacement<br className="hidden sm:inline" /> privilégié
                      </h3>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={500}>
                  <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                      <Bed className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-snug">
                        Chambres confortables<br className="hidden sm:inline" /> et modernes
                      </h3>
                    </div>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={580}>
                  <div className="flex sm:flex-col items-center sm:items-start text-left gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-snug">
                        Service attentionné<br className="hidden sm:inline" /> et personnalisé
                      </h3>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES BAR */}
      <section className="w-full relative bg-[#F2F7F9] border-y border-[#DCE8ED] overflow-hidden -mt-20 sm:-mt-24 lg:-mt-28 py-10 sm:py-12 lg:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
          <Reveal direction="up" delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#DCE8ED]">
              {/* Service 1: WiFi */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-full bg-white text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-tight">
                  WiFi haut débit<br />gratuit
                </span>
              </div>

              {/* Service 2: Box TV */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-full bg-white text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-tight">
                  TV écran plat<br />satellite
                </span>
              </div>

              {/* Service 3: Réception 24h/24 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-full bg-white text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-tight">
                  Réception 24h/24<br />7j/7
                </span>
              </div>

              {/* Service 4: Conciergerie */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0">
                <div className="w-11 h-11 rounded-full bg-white text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-tight">
                  Conciergerie<br />& bagagerie
                </span>
              </div>

              {/* Service 5: Sécurité 24h/24 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-2 pt-2 sm:pt-0 col-span-2 sm:col-span-1">
                <div className="w-11 h-11 rounded-full bg-white text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-[13px] text-[#173C4D] font-medium leading-tight">
                  Sécurité privée<br />24h/24
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION: NOS CHAMBRES (4x2 GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Header with Title and "Voir toutes les chambres" button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <Reveal direction="left" delay={100} className="space-y-1.5">
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase">
              NOS CHAMBRES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173C4D] leading-tight">
              Un confort adapté à vos besoins
            </h2>
            <p className="text-xs sm:text-sm text-[#536E7B] font-light max-w-2xl leading-relaxed">
              Découvrez nos différentes catégories de chambres, spacieuses et élégantes, pensées pour votre bien-être.
            </p>
          </Reveal>

          <Reveal direction="right" delay={150} className="shrink-0 pt-2 md:pt-0">
            <button
              onClick={() => onNavigate('rooms')}
              className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>Voir toutes les chambres</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
            </button>
          </Reveal>
        </div>

        {/* 4x2 Grid of 8 Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROOM_CARDS.map((room, idx) => (
            <Reveal key={room.id} direction="up" delay={100 + (idx % 4) * 80}>
              <div
                onClick={() => onOpenRoomDetail(room.id)}
                className="bg-white rounded-2xl border border-[#DCE8ED] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Room Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={room.image}
                    alt={`Chambre ${room.title} - White Palace Hôtel`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#173C4D]/80 backdrop-blur-xs text-[#DFC27D] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                    Prestige
                  </div>
                </div>

                {/* Card Footer: Name, Price, and Circle Action Button */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-normal text-[#173C4D] leading-tight group-hover:text-[#256079] transition-colors">
                      {room.title}
                    </h3>
                    <div className="text-xs text-[#256079] font-medium mt-0.5">
                      {room.price} <span className="text-[11px] text-gray-400 font-light">/ nuit</span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#256079] group-hover:bg-[#1D4F64] text-white flex items-center justify-center transition-colors shadow-2xs shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. SECTION: RESTAURANT ROOFTOP & ESPACE FITNESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <Reveal direction="up" delay={150}>
          <div className="relative bg-[#173C4D] text-white rounded-[32px] p-8 sm:p-12 lg:p-14 overflow-hidden shadow-xl border border-[#256079]/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left side: Information and CTA button */}
              <div className="lg:col-span-5 space-y-5 z-10">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#DFC27D] uppercase">
                  NOTRE EXPÉRIENCE
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Restaurant Rooftop<br />& Espace Fitness
                </h2>

                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-md">
                  Savourez une cuisine raffinée dans notre restaurant rooftop avec une vue imprenable sur Antananarivo. Pour votre bien-être, notre espace fitness est à votre disposition.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('restaurant')}
                    className="group inline-flex items-center gap-2 bg-[#DFC27D] hover:bg-[#C59A3D] text-[#173C4D] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                  >
                    <span>Découvrir l'expérience</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right side: Two photos side by side */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 z-10">
                {/* Rooftop Sunset Dining Photo */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20 group bg-gray-900">
                  <img
                    src="/nouvelles_photos/terrasse_1.jpg"
                    alt="Restaurant Rooftop avec vue imprenable"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Fitness Gym Photo */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/20 group bg-gray-900">
                  <img
                    src="/nouvelles_photos/salle_sport.jpg"
                    alt="Espace Fitness moderne et tout équipé"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6. SECTION: GALERIE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text & Action */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal direction="left" delay={100}>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase">
                GALERIE
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#173C4D] leading-tight">
                Une immersion au cœur<br />de notre hôtel
              </h2>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-sm">
                Explorez notre univers en images et laissez-vous séduire par l'élégance et le charme du White Palace Hôtel.
              </p>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Voir toute la galerie</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right: Asymmetric Photo Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* 1 Large vertical photo on the left */}
            <div className="sm:col-span-6 rounded-2xl overflow-hidden shadow-xs border border-[#DCE8ED] aspect-[3/4] sm:aspect-auto sm:h-full group bg-gray-100">
              <Reveal direction="up" delay={200} className="w-full h-full">
                <img
                  src="/nouvelles_photos/fascade_1.jpg"
                  alt="Façade White Palace Hôtel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </Reveal>
            </div>

            {/* 2x2 grid on the right */}
            <div className="sm:col-span-6 grid grid-cols-2 gap-4">
              {/* Photo 1: Reception */}
              <Reveal direction="up" delay={250}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#DCE8ED] group bg-gray-100">
                  <img
                    src="/nouvelles_photos/accueil_1.jpg"
                    alt="Accueil Réception"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              {/* Photo 2: Salle restaurant */}
              <Reveal direction="up" delay={300}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#DCE8ED] group bg-gray-100">
                  <img
                    src="/nouvelles_photos/salle-restaurant_1.jpg"
                    alt="Salle de restaurant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              {/* Photo 3: Chambre */}
              <Reveal direction="up" delay={350}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#DCE8ED] group bg-gray-100">
                  <img
                    src="/nouvelles_photos/chambre_lit_1.jpg"
                    alt="Chambre de l'hôtel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              {/* Photo 4: Vue sunset */}
              <Reveal direction="up" delay={400}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#DCE8ED] group bg-gray-100">
                  <img
                    src="/nouvelles_photos/vue_sur_tana.jpg"
                    alt="Vue sur Antananarivo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: LOCALISATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <Reveal direction="up" delay={150}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCE8ED] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Reception Desk Photo */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden organic-location-curve border border-[#DCE8ED] shadow-sm bg-gray-100">
                  <img
                    src="/nouvelles_photos/accueil_1.jpg"
                    alt="Réception du White Palace Hôtel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Middle: Details & Itinéraire Button */}
              <div className="md:col-span-4 space-y-4">
                <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase">
                  LOCALISATION
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#173C4D] leading-tight">
                  Nous trouver
                </h2>

                <div className="space-y-2.5 text-xs sm:text-[13px] text-[#536E7B] font-light">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#256079] shrink-0" />
                    <span>Lot VB 12, Ambatoroka, Antananarivo</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#256079] shrink-0" />
                    <span>+261 32 07 669 98</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#256079] shrink-0" />
                    <span>whitepalacehtananarivo@gmail.com</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Lot+VB+12+Ambatoroka+Antananarivo"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-xs font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>Itinéraire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#DFC27D]" />
                  </a>
                </div>
              </div>

              {/* Right: Real Interactive Map Location */}
              <div className="md:col-span-4 h-full min-h-[240px]">
                <div className="w-full h-full min-h-[240px] rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-xs">
                  <iframe
                    title="Carte de localisation White Palace Hôtel Antananarivo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15096.38883606774!2d47.5300!3d-18.9248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e1123456789%3A0x123456789abcdef!2sAmbatoroka%2C%20Antananarivo!5e0!3m2!1sfr!2smg!4v1700000000000!5m2!1sfr!2smg"
                    className="w-full h-full min-h-[240px] border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. SECTION: CTA BANNER */}
      <section className="w-full relative overflow-hidden">
        <div className="relative w-full">
          {/* Background image: vue_sur_tana.jpg */}
          <div className="absolute inset-0 z-0">
            <img
              src="/nouvelles_photos/vue_sur_tana.jpg"
              alt="Vue panoramique Antananarivo"
              className="w-full h-full object-cover"
            />
            {/* Deep Blue overlay matching palette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#112A36]/95 via-[#173C4D]/90 to-[#112A36]/85" />
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14 lg:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
            <Reveal direction="left" delay={100} className="space-y-1.5 max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Votre séjour vous attend
              </h2>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                Réservez dès maintenant et vivez une expérience inoubliable au White Palace Hôtel.
              </p>
            </Reveal>

            <Reveal direction="right" delay={200} className="shrink-0">
              <button
                onClick={() => onOpenRoomBooking()}
                className="group inline-flex items-center gap-2 border border-[#DFC27D] text-[#DFC27D] hover:bg-[#DFC27D] hover:text-[#173C4D] text-xs sm:text-sm font-medium px-7 py-3 rounded-full transition-all duration-300 whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Réserver maintenant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <Footer onNavigate={onNavigate} />

    </div>
  );
};
