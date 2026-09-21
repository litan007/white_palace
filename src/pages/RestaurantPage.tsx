import React, { useState } from 'react';
import { PageType } from '../types';
import { CULINARY_OFFERS, RESTAURANT_HOURS } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import {
  Utensils,
  Leaf,
  Wine,
  ArrowRight,
  Clock,
  Music,
  Wind,
  SunMedium,
  Wifi,
  Sparkles,
  Shield,
  Car,
  Key,
  Compass,
  CheckCircle2,
  X,
} from 'lucide-react';

interface RestaurantPageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: () => void;
}

import { HeroWaveMask } from '../components/HeroWaveMask';

import { WaveDivider } from '../components/WaveDivider';

import { Reveal } from '../components/Reveal';

export const RestaurantPage: React.FC<RestaurantPageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [tableConfirmed, setTableConfirmed] = useState(false);
  const [tableName, setTableName] = useState('');
  const [tableTime, setTableTime] = useState('19:30');
  const [tableGuests, setTableGuests] = useState('2');

  const handleTableSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTableConfirmed(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[600px] lg:h-[700px] bg-white flex flex-col md:flex-row">
        {/* Mobile-only Image */}
        <div className="w-full h-64 md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Salle du restaurant White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Full Bleed Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Salle du restaurant White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Left Overlay Content with Wavy Edge */}
        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#f8faf9] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#f8faf9" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              RESTAURANT & BAR
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
              Une cuisine raffinée aux saveurs locales
            </h1>

            <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-md">
              Notre restaurant vous propose une cuisine variée, alliant saveurs locales et
              internationales, dans un cadre chaleureux et élégant.
            </p>

            {/* 3 Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Cuisine locale<br/>et internationale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Produits frais<br/>et de saison</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Wine className="w-4 h-4 text-[#1b3d36]" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Bar & Cocktails<br/>au bord de la piscine</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setMenuModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
              >
                <span>Découvrir notre carte</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Cursive text positioned absolute over the image on Desktop */}
        <Reveal direction="left" delay={500} className="hidden md:block absolute top-[20%] right-[10%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Une expérience gustative unique
          </span>
        </Reveal>
      </section>

      {/* 2. NOTRE OFFRE CULINAIRE */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content */}
            <Reveal direction="left" className="lg:col-span-3 flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                NOTRE OFFRE CULINAIRE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Une carte variée pour tous les goûts
              </h2>
              <p className="text-[13px] text-[#526f67] mt-4 leading-relaxed">
                Découvrez une sélection de plats préparés avec des produits frais et locaux, mettant
                en valeur les saveurs de Madagascar, ainsi que des incontournables de la cuisine
                internationale.
              </p>
              
              <div className="mt-8">
                <button
                  onClick={() => setMenuModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider transition shadow-md"
                >
                  <span>Voir la carte complète</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            {/* Right Cards */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {CULINARY_OFFERS.map((offer, idx) => (
                  <Reveal
                    key={offer.id}
                    delay={150 + idx * 80}
                    className="h-full"
                  >
                  <div
                    onClick={() => setMenuModalOpen(true)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer h-full"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100 p-2">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 pt-2 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-serif text-[15px] font-bold text-[#142e27] leading-tight">
                          {offer.title}
                        </h3>
                        <p className="text-[11px] text-[#526f67] mt-1 leading-relaxed line-clamp-2">
                          {offer.description}
                        </p>
                      </div>
                      
                      <div className="pt-3 flex justify-end">
                        <div className="w-6 h-6 rounded-full bg-[#1b3d36] text-white flex items-center justify-center group-hover:translate-x-1 transition">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NOTRE RESTAURANT - UN CADRE EXCEPTIONNEL (FULL BLEED GREEN) */}
      <section className="py-20 sm:py-28 bg-[#15332c] relative mt-16 mb-16">
        <WaveDivider position="top" fill="#15332c" />
        <WaveDivider position="bottom" fill="#15332c" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image (Arched Top-Right and Bottom-Right) */}
            <Reveal direction="left" className="lg:col-span-4 rounded-[3rem] rounded-l-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Plat gastronomique"
                className="w-full h-full object-cover"
              />
            </Reveal>

            {/* Middle Content */}
            <Reveal delay={200} className="lg:col-span-5 space-y-6 text-white px-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  NOTRE RESTAURANT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
                  Un cadre exceptionnel
                </h2>
              </div>

              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Profitez d'un cadre élégant et apaisant, entre intérieur raffiné et terrasse avec
                vue imprenable sur la mer. Que ce soit pour un dîner romantique, un repas en
                famille ou un moment convivial entre amis, notre restaurant vous accueille dans une
                atmosphère chaleureuse et raffinée.
              </p>

              {/* 3 Features */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <Reveal delay={250} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h4 className="font-medium text-[10px] text-emerald-100">Salle intérieure climatisée</h4>
                </Reveal>
                <Reveal delay={350} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center">
                    <SunMedium className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h4 className="font-medium text-[10px] text-emerald-100">Terrasse avec vue sur la mer</h4>
                </Reveal>
                <Reveal delay={450} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center">
                    <Music className="w-5 h-5 text-emerald-300" />
                  </div>
                  <h4 className="font-medium text-[10px] text-emerald-100">Ambiance musicale (soirées)</h4>
                </Reveal>
              </div>
            </Reveal>

            {/* Right Images & Cursive */}
            <Reveal direction="right" delay={150} className="lg:col-span-3 relative space-y-4">
              <div className="hidden lg:block absolute -top-12 -left-16 transform -rotate-6 z-20 whitespace-nowrap">
                <span className="font-script text-3xl text-emerald-200">
                  Une mer et ambiance chaleureuse
                </span>
              </div>
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
                  alt="Dîner aux chandelles au crépuscule"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant de nuit"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. NOS SERVICES STRIP (6 ICONS) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-10 gap-6">
            <Reveal className="max-w-xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                NOS SERVICES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Des services pensés pour votre confort
              </h2>
              <p className="text-sm text-[#526f67] mt-2">
                Profitez d'un large éventail de services pour rendre votre séjour encore plus agréable.
                Tout est mis en œuvre pour votre bien-être.
              </p>
            </Reveal>
            
            <Reveal direction="left" delay={200} className="hidden lg:block transform -rotate-6">
              <span className="font-script text-3xl text-[#183a32]">
Tout ce dont vous avez besoin,<br/>au même endroit
              </span>
             </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 border border-[#e0ece7] rounded-[2rem] p-6 bg-[#f8faf9] shadow-sm">
            <Reveal delay={0} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Wifi className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">WiFi gratuit<br/>dans tout l'hôtel</span>
            </Reveal>
            <Reveal delay={100} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">Service de ménage<br/>quotidien</span>
            </Reveal>
            <Reveal delay={200} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">Réception 24h/24</span>
            </Reveal>
            <Reveal delay={300} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Car className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">Parking sécurisé</span>
            </Reveal>
            <Reveal delay={400} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Key className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">Location de véhicule</span>
            </Reveal>
            <Reveal delay={500} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
                <Compass className="w-5 h-5 text-[#1b3d36]" />
              </div>
              <span className="text-[10px] font-medium text-[#142e27]">Activités & excursions</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. LE BAR & HORAIRES D'OUVERTURE */}
      <section className="py-16 bg-[#fbfdfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#f4f8f6] rounded-[2.5rem] border border-[#e5eeea] overflow-hidden">
            
            {/* Left: Bar Photo + Dark Overlay */}
            <Reveal direction="left" className="lg:col-span-7 relative flex items-center">
              {/* Background Photo */}
              <div className="absolute inset-0 w-full h-full">
                 <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80"
                  alt="Bar lounge cocktails"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dark Green Inner Box Overlay (Mockup style) */}
              <div className="relative z-10 w-[calc(100%-2rem)] sm:w-4/5 lg:w-[85%] bg-[#15332c] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl mx-4 sm:mx-6 my-6 lg:my-0 lg:ml-6 lg:mr-0 border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <Wine className="w-8 h-8 text-emerald-300" />
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold">
                      Le Bar<br/><span className="text-emerald-300 font-normal text-sm font-sans tracking-wide">Cocktails & Détente</span>
                    </h3>
                  </div>
                </div>

                <p className="text-[13px] text-emerald-100/90 leading-relaxed mb-6">
                  Après une journée bien remplie, détendez-vous autour d'un cocktail signature, d'un
                  jus frais pressé ou d'un verre de vin sélectionné, dans une ambiance lounge feutrée.
                </p>

                <button
                  onClick={() => setMenuModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500 text-white hover:bg-white hover:text-[#15332c] text-[11px] font-semibold tracking-wider transition"
                >
                  <span>Voir la carte des boissons</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </Reveal>

            {/* Right: Horaires */}
            <Reveal delay={150} className="lg:col-span-5 p-8 sm:p-10 lg:pl-4 flex flex-col justify-center bg-white/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#1b3d36] text-white flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#142e27]">
                  Horaires d'ouverture
                </h3>
              </div>

              <div className="space-y-4">
                {RESTAURANT_HOURS.map((slot, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 last:border-0">
                    <span className="font-semibold text-[13px] text-[#142e27] mb-1 sm:mb-0">{slot.meal}</span>
                    <span className="text-[13px] text-[#526f67]">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>



      {/* 6. BOTTOM BANNER */}
      <section className="bg-[#122923] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <Reveal direction="left" className="font-script text-2xl sm:text-3xl text-emerald-200">
              Une table, une histoire de saveurs...
            </Reveal>

            <Reveal delay={150} className="text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Réservez votre table
              </h3>
              <p className="text-xs text-emerald-100/80 mt-0.5">
                Vivez une expérience culinaire unique au White Palace Hôtel.
              </p>
              <button
                onClick={() => setTableModalOpen(true)}
                className="mt-3 px-7 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-[#122923] text-xs font-semibold tracking-wider uppercase transition inline-flex items-center gap-2"
              >
                <span>Réserver maintenant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>

            <Reveal direction="right" delay={300} className="font-script text-2xl sm:text-3xl text-emerald-200">
              Le luxe du confort au cœur de Madagascar
            </Reveal>
          </div>
        </div>
      </section>

      {/* Table Booking Modal */}
      {tableModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-[#d6e7df]">
            <button
              onClick={() => {
                setTableModalOpen(false);
                setTableConfirmed(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            {tableConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#1b3d36] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#142e27]">
                  Table réservée avec succès !
                </h4>
                <p className="text-xs text-[#526f67]">
                  Merci {tableName || 'cher convive'}, votre table pour {tableGuests} personne(s) à {tableTime} a été confirmée. Nous serons ravis de vous accueillir.
                </p>
                <button
                  onClick={() => {
                    setTableModalOpen(false);
                    setTableConfirmed(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#1b3d36] text-white text-xs font-semibold"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleTableSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#1b3d36]">
                  <Utensils className="w-5 h-5" />
                  <h4 className="font-serif text-lg font-bold text-[#142e27]">
                    Réservation de table - Restaurant Rooftop
                  </h4>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Votre Nom</label>
                  <input
                    type="text"
                    required
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Heure</label>
                    <input
                      type="time"
                      value={tableTime}
                      onChange={(e) => setTableTime(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Couverts</label>
                    <select
                      value={tableGuests}
                      onChange={(e) => setTableGuests(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36] bg-white"
                    >
                      <option value="1">1 Personne</option>
                      <option value="2">2 Personnes</option>
                      <option value="4">4 Personnes</option>
                      <option value="6+">6+ Personnes</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#1b3d36] text-white text-xs font-semibold tracking-wider uppercase transition shadow"
                >
                  Confirmer la table
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Menu Carte Modal */}
      {menuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto border border-[#d6e7df]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#4d6a62]">
                  CARTE & MENUS
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#142e27]">
                  Restaurant White Palace
                </h4>
              </div>
              <button
                onClick={() => setMenuModalOpen(false)}
                className="text-gray-400 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 pt-4 text-xs">
              <div>
                <h5 className="font-serif font-bold text-base text-[#1b3d36] mb-2">
                  Entrées & Fraîcheur
                </h5>
                <div className="space-y-2 divide-y divide-gray-100">
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Tartare de zébu fumé aux baies roses de Madagascar</strong>
                      <p className="text-gray-500">Condiment mangue verte et huile vanillée</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">28 000 Ar</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Carpaccio de thon rouge des côtes malgaches</strong>
                      <p className="text-gray-500">Agrumes locaux et combava frais</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">32 000 Ar</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-serif font-bold text-base text-[#1b3d36] mb-2">
                  Plats de Résistance
                </h5>
                <div className="space-y-2 divide-y divide-gray-100">
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Filet de zébu rôti au poivre sauvage Voatsiperifery</strong>
                      <p className="text-gray-500">Gratin de manioc fondant et légumes sautés</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">45 000 Ar</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Camarons géants grillés au beurre d'ail</strong>
                      <p className="text-gray-500">Riz rouge parfumé et rougail tomate combava</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">58 000 Ar</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Romazava royal aux brèdes et viandes choisies</strong>
                      <p className="text-gray-500">Plat national emblématique revisité avec raffinement</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">38 000 Ar</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-serif font-bold text-base text-[#1b3d36] mb-2">
                  Cocktails & Vins
                </h5>
                <div className="space-y-2 divide-y divide-gray-100">
                  <div className="pt-2 flex justify-between">
                    <div>
                      <strong>Cocktail Signature "White Palace Sunset"</strong>
                      <p className="text-gray-500">Rhum Dzama vieux, jus de litchi, vanille bourbon, citron vert</p>
                    </div>
                    <span className="font-bold text-[#1b3d36]">22 000 Ar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  setTableModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-[#1b3d36] text-white text-xs font-semibold uppercase tracking-wider"
              >
                Réserver une table maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
