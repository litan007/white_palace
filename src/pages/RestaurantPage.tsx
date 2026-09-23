import React from 'react';
import {
  ArrowRight,
  Plus,
  Wind,
  Trees,
  Music,
  Wifi,
  Sparkles,
  Clock,
  ShieldCheck,
  Car,
  Compass,
  Wine,
  UtensilsCrossed
} from 'lucide-react';
import { Reveal } from '../components/Reveal';

interface RestaurantPageProps {
  onNavigate?: (view: string) => void;
  onOpenTableBooking: () => void;
  onOpenMenuPdf: () => void;
}

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  onOpenTableBooking,
  onOpenMenuPdf
}) => {
  return (
    <div className="bg-[#F8FAFC] text-[#173C4D] min-h-screen pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24 overflow-x-hidden">
      
      {/* 1. HERO SECTION: Restaurant & Bar */}
      <section className="w-full relative bg-[#EAF2F6] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Text & Badges */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal direction="down" delay={100}>
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C59A3D] uppercase">
                RESTAURANT &amp; BAR
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={200}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#173C4D] leading-[1.1] tracking-tight">
                Une cuisine raffinée<br />aux saveurs locales
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={300}>
              <p className="text-[13px] sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-[440px]">
                Notre restaurant vous propose une cuisine gastronomique soignée, alliant saveurs malgaches et internationales, dans un cadre chaleureux et panoramique.
              </p>
            </Reveal>

            {/* 3 Pillars / Feature pills */}
            <Reveal direction="up" delay={400}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3F6] border border-[#DCE8ED] flex items-center justify-center shrink-0 text-[#256079]">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#173C4D] font-medium leading-tight">
                    Cuisine locale &amp; internat.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3F6] border border-[#DCE8ED] flex items-center justify-center shrink-0 text-[#256079]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#173C4D] font-medium leading-tight">
                    Produits frais &amp; bio
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#EBF3F6] border border-[#DCE8ED] flex items-center justify-center shrink-0 text-[#256079]">
                    <Wine className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#173C4D] font-medium leading-tight">
                    Bar &amp; Cocktails rooftop
                  </span>
                </div>
              </div>
            </Reveal>

            {/* CTA Button */}
            <Reveal direction="up" delay={500}>
              <div className="pt-2">
                <button
                  onClick={onOpenMenuPdf}
                  className="group inline-flex items-center gap-2.5 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Découvrir notre carte</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#DFC27D]" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Organic S-curve blob clipped restaurant photo with cursive title */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            {/* Cursive script in top right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <span className="font-['Caveat'] text-white text-3xl sm:text-4xl lg:text-[46px] tracking-wide drop-shadow-md block font-normal -rotate-2 select-none">
                Une expérience<br />
                <span className="relative inline-block text-[#DFC27D]">
                  gustative unique
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#DFC27D]" viewBox="0 0 120 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 60 10 120 3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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
                {/* Outer wave clip path with exact user curve */}
                <clipPath id="restoOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 552.48 -66 L 552.48 -61.788 C 652.496 123.538 720.389 194.239 569.196 356.975 L 1280 358 Z" />
                </clipPath>

                {/* Inner main photo clip path with exact user path */}
                <clipPath id="restoHeroBlobClip">
                  <path d="M 1277.015 355.296 L 1277.694 -65.134 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 664.514 164.832 662.003 293.027 587.351 356.305 L 1277.015 355.296 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft blue tint */}
              <g clipPath="url(#restoOuterWaveClip)">
                <image
                  href="/nouvelles_photos/salle-restaurant_1.jpg"
                  x="550"
                  y="-66"
                  width="730"
                  height="424"
                  preserveAspectRatio="xMidYMid slice"
                  opacity="0.45"
                />
                <rect x="550" y="-66" width="730" height="424" fill="#A7C5D2" opacity="0.3" />
              </g>

              {/* 2. Main opaque photo clipped by inner path */}
              <g clipPath="url(#restoHeroBlobClip)">
                <image
                  href="/nouvelles_photos/salle-restaurant_1.jpg"
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

      {/* 2. SECTION: NOTRE OFFRE CULINAIRE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, description and button */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal direction="left" delay={100}>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase block">
                NOTRE OFFRE CULINAIRE
              </span>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173C4D] font-bold leading-tight">
                Une carte variée<br />pour tous les goûts
              </h2>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed">
                Découvrez une sélection de plats préparés avec des produits frais et locaux, mettant en valeur les saveurs de Madagascar, ainsi que les incontournables de la gastronomie internationale.
              </p>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="pt-2">
                <button
                  onClick={onOpenMenuPdf}
                  className="group inline-flex items-center gap-2 bg-[#256079] hover:bg-[#1D4F64] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Voir la carte complète</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#DFC27D]" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Rounded Category Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Spécialités locales */}
            <Reveal direction="up" delay={150}>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-xs hover:shadow-lg transition-all flex flex-col group h-full">
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/nouvelles_photos/plat_carpaccio.jpg"
                    alt="Spécialités locales"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-[#173C4D] mb-1">
                    Spécialités locales
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                    <p className="text-[10px] sm:text-[11px] text-[#536E7B] font-light line-clamp-2 leading-tight flex-1">
                      Découvrez les trésors culinaires de Madagascar
                    </p>
                    <button
                      onClick={onOpenMenuPdf}
                      className="w-6 h-6 rounded-full bg-[#256079] text-white flex items-center justify-center hover:bg-[#1D4F64] transition-colors shrink-0 cursor-pointer"
                      aria-label="Voir spécialités"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Fruits de mer */}
            <Reveal direction="up" delay={250}>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-xs hover:shadow-lg transition-all flex flex-col group h-full">
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/nouvelles_photos/plat_poisson.jpg"
                    alt="Fruits de mer & poissons"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-[#173C4D] mb-1">
                    Fruits de mer
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                    <p className="text-[10px] sm:text-[11px] text-[#536E7B] font-light line-clamp-2 leading-tight flex-1">
                      Pêche fraîche et cuisine soignée
                    </p>
                    <button
                      onClick={onOpenMenuPdf}
                      className="w-6 h-6 rounded-full bg-[#256079] text-white flex items-center justify-center hover:bg-[#1D4F64] transition-colors shrink-0 cursor-pointer"
                      aria-label="Voir fruits de mer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Cuisine internationale */}
            <Reveal direction="up" delay={350}>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-xs hover:shadow-lg transition-all flex flex-col group h-full">
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/images/gourmet_dish.jpeg"
                    alt="Cuisine internationale"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-[#173C4D] mb-1">
                    Cuisine du monde
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                    <p className="text-[10px] sm:text-[11px] text-[#536E7B] font-light line-clamp-2 leading-tight flex-1">
                      Des classiques revisités avec passion
                    </p>
                    <button
                      onClick={onOpenMenuPdf}
                      className="w-6 h-6 rounded-full bg-[#256079] text-white flex items-center justify-center hover:bg-[#1D4F64] transition-colors shrink-0 cursor-pointer"
                      aria-label="Voir cuisine internationale"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Bar & Cocktails */}
            <Reveal direction="up" delay={450}>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-xs hover:shadow-lg transition-all flex flex-col group h-full">
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src="/nouvelles_photos/boisson_cocktail.jpg"
                    alt="Bar & Cocktails"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-[#173C4D] mb-1">
                    Bar &amp; Cocktails
                  </h3>
                  <div className="flex items-end justify-between gap-2 mt-auto pt-1.5">
                    <p className="text-[10px] sm:text-[11px] text-[#536E7B] font-light line-clamp-2 leading-tight flex-1">
                      Cocktails créatifs et signature
                    </p>
                    <button
                      onClick={onOpenMenuPdf}
                      className="w-6 h-6 rounded-full bg-[#256079] text-white flex items-center justify-center hover:bg-[#1D4F64] transition-colors shrink-0 cursor-pointer"
                      aria-label="Voir cocktails"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. SECTION: DEEP BLUE AMBIANCE */}
      <section className="w-full relative bg-[#173C4D] text-white overflow-hidden border-y border-[#256079]/50">
        <div className="relative w-full flex flex-col lg:flex-row items-stretch min-h-[360px] lg:min-h-[380px]">
          {/* Left Col: Photo filling 100% of container height */}
          <div className="w-full lg:w-[40%] xl:w-[43%] h-[280px] sm:h-[340px] lg:h-auto self-stretch relative shrink-0">
            <svg
              className="w-full h-full block"
              viewBox="-50.882 -86.458 565 369"
              preserveAspectRatio="none"
            >
              <defs>
                <clipPath id="restoAmbianceExactClip">
                  <path d="M -50.882 -86.458 L 411.448 -86.458 C 505.688 -33.464 524.798 38.331 508.439 104.655 C 481.659 213.229 347.56 294.136 333.77 281.509 L -50.882 261.569 Z" />
                </clipPath>
              </defs>

              <g clipPath="url(#restoAmbianceExactClip)">
                <image
                  href="/nouvelles_photos/terrasse_1.jpg"
                  x="-50.882"
                  y="-86.458"
                  width="565"
                  height="369"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>

          {/* Center & Right content */}
          <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10 self-center">
            {/* Center Col: Text, Kicker and 3 circular feature badges */}
            <Reveal direction="up" delay={150} className="space-y-4 max-w-md">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#DFC27D] uppercase block">
                NOTRE RESTAURANT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                Un cadre exceptionnel
              </h2>
              <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed">
                Profitez d'un cadre élégant et apaisant, mêlant finitions soignées et terrasse avec vue sur la ville. Que ce soit pour un déjeuner d'affaires, un dîner romantique ou un verre au coucher du soleil, notre équipe vous accueille avec distinction.
              </p>

              {/* 3 Circular Badges */}
              <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[#DFC27D]">
                    <Wind className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Salle intérieure climatisée
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[#DFC27D]">
                    <Trees className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Terrasse panoramique
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-[#DFC27D]">
                    <Music className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-white/90 font-medium leading-tight">
                    Ambiance lounge douce
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Col: Cursive title + 2 preview photos strictly bottom-aligned */}
            <Reveal direction="right" delay={250} className="flex flex-col items-center lg:items-end gap-3 shrink-0">
              <div className="text-center lg:text-right mb-0.5">
                <span className="font-['Caveat'] text-[#DFC27D] text-2xl sm:text-3xl leading-tight block select-none">
                  Une vue<br />et ambiance<br />chaleureuse
                </span>
              </div>

              {/* Both images aligned at bottom strictly */}
              <div className="flex items-end gap-2.5 sm:gap-3">
                <div className="w-24 sm:w-28 h-36 sm:h-40 overflow-hidden shadow-lg border border-white/20 opacity-80 shrink-0 rounded-xl">
                  <img
                    src="/nouvelles_photos/terrasse_2.jpg"
                    alt="Terrasse cosy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-2xl overflow-hidden shadow-xl border border-white/30 shrink-0">
                  <img
                    src="/nouvelles_photos/terrasse_1.jpg"
                    alt="Terrasse panoramique"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Wavy bottom border */}
        <div className="relative w-full leading-none">
          <svg
            className="w-full block"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 40 L 0 15 Q 360 0 720 15 Q 1080 30 1440 5 L 1440 40 Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* 4. SECTION: SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <Reveal direction="left" delay={100} className="space-y-2 max-w-xl">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#C59A3D] uppercase block">
              NOS SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#173C4D] font-bold leading-tight">
              Des services pensés pour votre confort
            </h2>
            <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed">
              Profitez d'un large éventail de services pour rendre votre séjour encore plus agréable. Tout est mis en œuvre pour votre bien-être.
            </p>
          </Reveal>

          <Reveal direction="right" delay={150} className="text-right">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#256079] block select-none">
              Tout ce dont vous avez besoin,<br />
              <span className="relative inline-block text-[#C59A3D]">
                au même endroit
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#DFC27D]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0 5 Q 50 10 100 3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </Reveal>
        </div>

        {/* 6 Circular Service Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
          <Reveal direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <Wifi className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                WiFi gratuit<br /><span className="text-[11px] font-normal text-[#536E7B]">dans tout l'hôtel</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                Service de ménage<br /><span className="text-[11px] font-normal text-[#536E7B]">quotidien</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                Réception<br /><span className="text-[11px] font-normal text-[#536E7B]">24h / 24</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={280}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                Parking sécurisé<br /><span className="text-[11px] font-normal text-[#536E7B]">gardé 24h/24</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={340}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                Location de véhicule<br /><span className="text-[11px] font-normal text-[#536E7B]">sur demande</span>
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <div className="bg-white rounded-2xl p-5 border border-[#DCE8ED] flex flex-col items-center space-y-3 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center border border-[#DCE8ED]">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#173C4D] leading-tight">
                Activités &amp; excursions<br /><span className="text-[11px] font-normal text-[#536E7B]">sur mesure</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION: SPLIT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card Left: Le Bar & Cocktails */}
          <Reveal direction="left" delay={150} className="lg:col-span-7">
            <div className="bg-[#173C4D] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-md flex flex-col sm:flex-row items-center gap-6 border border-[#256079]/50 h-full">
              {/* Photo of the bar */}
              <div className="w-full sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 shadow-md">
                <img
                  src="/nouvelles_photos/salle-restaurant_3.jpg"
                  alt="Comptoir du Bar du White Palace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text and Button */}
              <div className="space-y-3 z-10 flex-1">
                <div className="flex items-center gap-2 text-[#DFC27D]">
                  <Wine className="w-5 h-5" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Le Bar &amp; Lounge
                  </h3>
                </div>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  Après une journée de travail ou de découverte, détendez-vous autour d'un cocktail signature, d'un jus naturel frais ou d'une sélection de vins raffinés.
                </p>
                <div className="pt-1">
                  <button
                    onClick={onOpenMenuPdf}
                    className="group inline-flex items-center gap-2 border border-[#DFC27D] hover:bg-[#DFC27D] text-[#DFC27D] hover:text-[#173C4D] text-xs font-medium px-4 py-2 rounded-full transition-all cursor-pointer"
                  >
                    <span>Voir la carte des boissons</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card Right: Horaires d'ouverture */}
          <Reveal direction="right" delay={200} className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE8ED] shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#173C4D]">
                    Horaires d'ouverture
                  </h3>
                </div>

                {/* Schedule list */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-[#EDF4F7]">
                    <span className="font-medium text-[#173C4D]">Petit déjeuner</span>
                    <span className="text-[#536E7B] tabular-nums font-light">06h30 - 10h00</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#EDF4F7]">
                    <span className="font-medium text-[#173C4D]">Déjeuner</span>
                    <span className="text-[#536E7B] tabular-nums font-light">12h00 - 14h30</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-[#EDF4F7]">
                    <span className="font-medium text-[#173C4D]">Dîner</span>
                    <span className="text-[#536E7B] tabular-nums font-light">19h00 - 22h30</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="font-medium text-[#173C4D]">Bar &amp; Salon lounge</span>
                    <span className="text-[#536E7B] tabular-nums font-light">10h00 - 23h00</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenTableBooking}
                  className="w-full text-center bg-[#256079] hover:bg-[#1D4F64] text-white text-xs font-semibold py-2.5 rounded-full transition-colors cursor-pointer shadow-xs"
                >
                  Réserver votre table
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION: CTA BANNER */}
      <section className="w-full relative overflow-hidden h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px] xl:h-[290px] flex">
        {/* Left Side: Photo */}
        <div className="w-[52%] sm:w-[50%] lg:w-[48%] h-full relative shrink-0">
          <img
            src="/nouvelles_photos/salle-restaurant_1.jpg"
            alt="Table gastronomique au White Palace Hôtel"
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
                Une table,
                <br />
                <span className="relative inline-block mt-0.5 text-[#DFC27D]">
                  une histoire de saveurs...
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
              <p className="text-xs sm:text-sm text-white/80 font-light max-w-sm">
                Vivez une expérience gastronomique unique au White Palace Hôtel.
              </p>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={onOpenTableBooking}
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
