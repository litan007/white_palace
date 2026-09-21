import React, { useState } from 'react';
import { PageType, Room } from '../types';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { HeroWaveMask } from '../components/HeroWaveMask';
import { WaveDivider } from '../components/WaveDivider';
import { Reveal } from '../components/Reveal';
import {
  MapPin,
  Bed,
  Users,
  Wifi,
  Tv,
  Clock,
  Bell,
  ShieldCheck,
  Utensils,
  Dumbbell,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  Navigation,
} from 'lucide-react';

interface AccueilPageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: (roomId?: string) => void;
}

export const AccueilPage: React.FC<AccueilPageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [heroSlide, setHeroSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
      label: 'Chambre Deluxe',
    },
    {
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      label: 'Suite Prestige',
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      label: 'Hall & Réception',
    },
  ];

  const galleryImages = [
    {
      title: 'Chambre Double',
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Rooftop au crépuscule',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Espace Fitness',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Réception White Palace',
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Suite Luxe',
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleNextHero = () => {
    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevHero = () => {
    setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* ================= 1. HERO SECTION - FULL BLEED ================= */}
      <section className="relative w-full h-auto md:h-[650px] lg:h-[750px] bg-white flex flex-col md:flex-row overflow-hidden">
        {/* Mobile-only Image */}
        <div className="w-full h-64 md:hidden relative">
          <img
            src={heroSlides[heroSlide].image}
            alt={heroSlides[heroSlide].label}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Desktop Full Bleed Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src={heroSlides[heroSlide].image}
            alt={heroSlides[heroSlide].label}
            className="w-full h-full object-cover object-right transition-all duration-700 ease-in-out"
          />
          {/* Badge Overlay */}
          <div className="absolute bottom-6 left-1/2 md:left-auto md:right-10 transform -translate-x-1/2 md:translate-x-0 z-20 flex items-center gap-3">
             <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium tracking-wide">
               {heroSlides[heroSlide].label}
             </div>
             {/* Slider pagination & controls */}
             <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-3 text-xs font-semibold text-[#1b3d36] shadow">
                <button onClick={handlePrevHero} className="hover:text-black p-0.5" aria-label="Photo précédente">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono">0{heroSlide + 1} / 0{heroSlides.length}</span>
                <button onClick={handleNextHero} className="hover:text-black p-0.5" aria-label="Photo suivante">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
             </div>
          </div>
        </div>

        {/* Left Overlay Content with Wavy Edge */}
        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#f8faf9] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#f8faf9" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                CONFORT • ÉLÉGANCE • BIEN-ÊTRE
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#16332c] leading-[1.05]">
                WHITE <br />
                PALACE
              </h1>
              <span className="block font-serif italic text-3xl sm:text-4xl text-[#366155] font-normal">
                Hôtel
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#1f4239]">
              Un séjour d'exception à Antananarivo
            </h2>

            <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-md">
              Découvrez un lieu unique où confort, élégance et hospitalité se
              rencontrent pour faire de votre séjour une expérience inoubliable.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenReservation()}
                className="px-7 py-3.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow-md hover:shadow-lg flex items-center gap-2.5 active:scale-95"
              >
                <span>Réserver</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('chambres')}
                className="px-7 py-3.5 rounded-full border border-[#2a554a] text-[#1b3d36] hover:bg-[#1b3d36] hover:text-white text-xs font-semibold tracking-wider uppercase transition"
              >
                Découvrir l'hôtel
              </button>
            </div>
          </Reveal>
        </div>

        {/* Cursive text positioned absolute over the image on Desktop */}
        <Reveal direction="left" delay={500} className="hidden md:block absolute top-[25%] right-[10%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Plus qu'un hôtel, une expérience !
          </span>
        </Reveal>
      </section>

      {/* ================= 2. A PROPOS DE NOUS (FROM ACCUEIL 2) ================= */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual: Circular image + inset restaurant */}
            <div className="lg:col-span-5 relative flex justify-center">
              <Reveal direction="left" delay={100} className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Main Circular Building Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                    alt="Façade White Palace Hôtel"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Inset Circular Restaurant Image */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                    alt="Restaurant Rooftop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={200}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                  À PROPOS DE NOUS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                  Un hôtel au cœur d'Antananarivo
                </h2>
              </Reveal>

              <Reveal delay={300}>
                <p className="text-sm sm:text-base text-[#526f67] leading-relaxed">
                  Le White Palace Hôtel est un établissement 4 étoiles qui allie
                  confort, élégance et hospitalité. Nous mettons tout en œuvre pour vous
                  offrir une expérience unique, dans un cadre raffiné et sécurisé.
                </p>
              </Reveal>

              {/* 3 Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <Reveal delay={400} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#eaf4ef] text-[#1b3d36] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#142e27]">
                    Emplacement privilégié
                  </h4>
                  <p className="text-xs text-[#5e7c74] leading-relaxed">
                    Situé dans le quartier paisible d'Ambatobe à quelques minutes du centre-ville.
                  </p>
                </Reveal>

                <Reveal delay={500} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#eaf4ef] text-[#1b3d36] flex items-center justify-center">
                    <Bed className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#142e27]">
                    Chambres confortables et modernes
                  </h4>
                  <p className="text-xs text-[#5e7c74] leading-relaxed">
                    64 chambres pensées avec soin, literie haut de gamme et technologies modernes.
                  </p>
                </Reveal>

                <Reveal delay={600} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#eaf4ef] text-[#1b3d36] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#142e27]">
                    Service attentionné et personnalisé
                  </h4>
                  <p className="text-xs text-[#5e7c74] leading-relaxed">
                    Une équipe dévouée et souriante à votre écoute 24h/24 pour satisfaire tous vos désirs.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SERVICES STRIP (FROM ACCUEIL 1) ================= */}
      <section className="bg-[#183931] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <Reveal direction="left" className="font-script text-2xl sm:text-3xl text-emerald-200 shrink-0 text-center lg:text-left">
              Nos services à votre disposition
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 w-full lg:w-auto">
              <Reveal delay={100} className="flex flex-col items-center text-center gap-1.5">
                <Wifi className="w-5 h-5 text-emerald-300" />
                <span className="text-[11px] text-emerald-100 font-medium">
                  WiFi par chambre gratuit
                </span>
              </Reveal>
              <Reveal delay={200} className="flex flex-col items-center text-center gap-1.5">
                <Tv className="w-5 h-5 text-emerald-300" />
                <span className="text-[11px] text-emerald-100 font-medium">
                  Box TV
                </span>
              </Reveal>
              <Reveal delay={300} className="flex flex-col items-center text-center gap-1.5">
                <Clock className="w-5 h-5 text-emerald-300" />
                <span className="text-[11px] text-emerald-100 font-medium">
                  Réception ouverte 24h/24
                </span>
              </Reveal>
              <Reveal delay={400} className="flex flex-col items-center text-center gap-1.5">
                <Bell className="w-5 h-5 text-emerald-300" />
                <span className="text-[11px] text-emerald-100 font-medium">
                  Service de conciergerie gratuit
                </span>
              </Reveal>
              <Reveal delay={500} className="flex flex-col items-center text-center gap-1.5 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span className="text-[11px] text-emerald-100 font-medium">
                  Sécurité 24h/24
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. NOS CHAMBRES (FROM ACCUEIL 1 - 8 ROOM GRID) ================= */}
      <section className="py-16 sm:py-20 bg-[#fafcfa] relative">
        <BotanicalLeaf className="top-12 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                NOS CHAMBRES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Un confort adapté à vos besoins
              </h2>
              <p className="text-sm text-[#526f67] mt-1 max-w-xl">
                Découvrez nos différentes catégories de chambres, spacieuses et élégantes,
                pensées pour votre bien-être.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <button
                onClick={() => onNavigate('chambres')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow shrink-0 self-start sm:self-auto"
              >
                <span>Voir toutes les chambres</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>
          </div>

          {/* 8 Room Cards Grid (Single, Double, Twin, Luxe, Cuisine, Appartement, Familiale, Handicapé) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS.map((room, idx) => (
              <Reveal delay={100 * (idx % 4)} key={room.id}>
                <div
                  onClick={() => onOpenReservation(room.id)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#dce8e2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
                >
                  {/* Room Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#16332c]">
                      {room.name}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex items-center justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#142e27]">
                        {room.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#255246] mt-0.5">
                        {room.price} <span className="text-[11px] font-normal text-gray-500">/ nuit</span>
                      </p>
                    </div>

                    {/* Dark circular arrow button */}
                    <button
                      aria-label={`Réserver chambre ${room.name}`}
                      className="w-8 h-8 rounded-full bg-[#1b3d36] text-white flex items-center justify-center group-hover:bg-[#112721] group-hover:translate-x-0.5 transition"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. RESTAURANT ROOFTOP & FITNESS (FROM ACCUEIL 2) ================= */}
      <section className="py-20 sm:py-28 bg-[#15332c] relative mt-16 mb-16">
        <WaveDivider position="top" fill="#15332c" />
        <WaveDivider position="bottom" fill="#15332c" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 text-white px-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  UNE EXPÉRIENCE UNIQUE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                  Restaurant Rooftop & Espace Fitness
                </h2>
              </div>

              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Savourez une cuisine raffinée au restaurant Rooftop avec une vue imprenable sur
                Antananarivo. Pour votre bien-être, profitez également de notre espace fitness moderne
                et équipé.
              </p>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#15332c] hover:bg-emerald-50 text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95 mt-4"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                      alt="Restaurant Rooftop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center text-center gap-2 backdrop-blur-sm">
                    <Utensils className="w-5 h-5 text-emerald-300" />
                    <span className="text-xs font-semibold text-emerald-100">Restaurant Rooftop</span>
                  </div>
                </div>

                <div className="space-y-4 pt-12">
                  <div className="rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                      alt="Espace Fitness"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center text-center gap-2 backdrop-blur-sm">
                    <Dumbbell className="w-5 h-5 text-emerald-300" />
                    <span className="text-xs font-semibold text-emerald-100">Espace Fitness</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= 6. GALERIE PREVIEW (FROM ACCUEIL 1) ================= */}
      <section className="py-16 sm:py-20 bg-[#f8faf9] relative">
        <BotanicalLeaf className="bottom-4 left-0 -translate-x-1/3" opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                GALERIE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Découvrez le White Palace en images
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('galerie')}
                className="text-xs font-semibold uppercase tracking-wider text-[#1b3d36] hover:underline flex items-center gap-1.5"
              >
                <span>Voir toute la galerie</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-[#16332c] transition shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-[#16332c] transition shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 5 Gallery Photos Horizontal Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('galerie')}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 cursor-pointer shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end p-2.5">
                  <span className="text-[11px] font-medium text-white">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. LOCALISATION - NOUS TROUVER (FROM ACCUEIL 2) ================= */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Photo of reception marble desk */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e0ece6] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  alt="Réception marbre White Palace Hôtel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle: Info & Itinéraire */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                  LOCALISATION
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#16332c] mt-1">
                  Nous trouver
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#46665e]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#204940] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#15332c]">{HOTEL_INFO.address}</strong>
                    <p className="text-xs text-gray-500">À proximité immédiate du centre d'affaires et de l'aéroport</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#204940] shrink-0" />
                  <a href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#16332c]">
                    {HOTEL_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#204940] shrink-0" />
                  <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#16332c]">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow"
                >
                  <span>Itinéraire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Map Graphic with Pin */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#dbe7e1] shadow-md bg-[#eaf1ee] aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
                {/* Styled Map background graphic */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#204940_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Map labels */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  Ambatobe • Ivandry • Analamahitsy
                </div>

                {/* Pin Card */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#cce0d6] max-w-[220px]">
                  <div className="w-8 h-8 rounded-full bg-[#1b3d36] text-white flex items-center justify-center mx-auto mb-2 shadow">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-[#16332c]">
                    White Palace Hôtel
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    Ambatobe, Antananarivo
                  </p>
                </div>

                <div className="relative z-10 mt-4">
                  <span className="text-xs font-bold text-[#1b3d36]">
                    Antananarivo, Madagascar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. CALL TO ACTION (FROM ACCUEIL 2) ================= */}
      <section className="bg-[#142e28] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Votre séjour vous attend
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
                Réservez dès maintenant et vivez une expérience inoubliable au White Palace Hôtel.
              </p>
            </div>

            <button
              onClick={() => onOpenReservation()}
              className="px-8 py-3.5 rounded-full border border-white text-white hover:bg-white hover:text-[#142e28] text-xs font-semibold tracking-wider uppercase transition shrink-0 shadow-sm hover:shadow active:scale-95 flex items-center gap-2"
            >
              <span>Réserver maintenant</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
