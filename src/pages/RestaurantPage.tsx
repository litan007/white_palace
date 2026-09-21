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
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#f8faf9] overflow-hidden">
        <BotanicalLeaf className="top-4 left-0 -translate-x-1/4" opacity={0.22} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                RESTAURANT & BAR
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
                Une cuisine raffinée aux saveurs locales
              </h1>

              <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-lg">
                Notre restaurant vous propose une cuisine variée, alliant saveurs locales et
                internationales, dans un cadre chaleureux et élégant.
              </p>

              {/* 3 Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Cuisine locale et internationale</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>Produits frais et de saison</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Wine className="w-3.5 h-3.5" />
                  <span>Bar & Cocktails au bord de la piscine</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setMenuModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
                >
                  <span>Découvrir notre carte</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Arch Image with script note */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                  alt="Salle du restaurant White Palace Hôtel"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 right-6 transform rotate-2">
                  <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl tracking-wide">
                    Une expérience gustative unique
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOTRE OFFRE CULINAIRE */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                NOTRE OFFRE CULINAIRE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Une carte variée pour tous les goûts
              </h2>
              <p className="text-sm text-[#526f67] mt-1 max-w-2xl">
                Découvrez une sélection de plats préparés avec des produits frais et locaux, mettant
                en valeur les saveurs de Madagascar, ainsi que des incontournables de la cuisine
                internationale.
              </p>
            </div>

            <button
              onClick={() => setMenuModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow shrink-0 self-start sm:self-auto"
            >
              <span>Voir la carte complète</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULINARY_OFFERS.map((offer) => (
              <div
                key={offer.id}
                onClick={() => setMenuModalOpen(true)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#dce8e2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#142e27]">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-[#526f67] mt-1 line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-end">
                    <div className="w-7 h-7 rounded-full bg-[#1b3d36] text-white flex items-center justify-center group-hover:translate-x-1 transition">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NOTRE RESTAURANT - UN CADRE EXCEPTIONNEL */}
      <section className="py-16 sm:py-20 bg-[#f8faf9] relative">
        <BotanicalLeaf className="top-8 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                  NOTRE RESTAURANT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                  Un cadre exceptionnel
                </h2>
              </div>

              <p className="text-sm text-[#526f67] leading-relaxed">
                Profitez d'un cadre élégant et apaisant, entre intérieur raffiné et terrasse avec
                vue imprenable sur la ville d'Antananarivo. Que ce soit pour un dîner romantique, un repas en
                famille ou un moment convivial entre amis, notre restaurant vous accueille dans une
                atmosphère chaleureuse et raffinée.
              </p>

              {/* 3 Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#dce8e2] flex flex-col items-start gap-2 shadow-sm">
                  <Wind className="w-5 h-5 text-[#1b3d36]" />
                  <h4 className="font-semibold text-xs text-[#142e27]">
                    Salle intérieure climatisée
                  </h4>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#dce8e2] flex flex-col items-start gap-2 shadow-sm">
                  <SunMedium className="w-5 h-5 text-[#1b3d36]" />
                  <h4 className="font-semibold text-xs text-[#142e27]">
                    Terrasse avec vue sur la ville
                  </h4>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#dce8e2] flex flex-col items-start gap-2 shadow-sm">
                  <Music className="w-5 h-5 text-[#1b3d36]" />
                  <h4 className="font-semibold text-xs text-[#142e27]">
                    Ambiance musicale (soirées)
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                    alt="Plat gastronomique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
                      alt="Dîner aux chandelles au crépuscule"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 rounded-2xl bg-[#e9f2ee] border border-[#d0e4dc] flex items-center justify-center text-center">
                    <span className="font-script text-2xl text-[#1a3d35]">
                      Une ambiance chaleureuse & raffinée
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS SERVICES STRIP */}
      <section className="py-14 bg-white border-y border-[#e6eeea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              NOS SERVICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#16332c] mt-0.5">
              Des services pensés pour votre confort
            </h2>
            <div className="font-script text-xl text-[#366357] mt-1">
              Tout ce dont vous avez besoin, au même endroit
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Wifi className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">WiFi gratuit</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">Ménage quotidien</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Clock className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">Réception 24h/24</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Shield className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">Parking sécurisé</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Car className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">Location de véhicule</span>
            </div>
            <div className="p-4 rounded-xl bg-[#f8faf9] border border-[#e0ece7] flex flex-col items-center text-center gap-2">
              <Compass className="w-5 h-5 text-[#1b3d36]" />
              <span className="text-xs font-semibold text-[#142e27]">Activités & excursions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LE BAR & HORAIRES D'OUVERTURE (2-COLUMN CARDS) */}
      <section className="py-16 sm:py-20 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Le Bar (Dark Card) */}
            <div className="lg:col-span-7 bg-[#142e27] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300">
                  <Wine className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    LE BAR
                  </span>
                  <h3 className="font-serif text-3xl font-bold mt-1">
                    Cocktails & Détente
                  </h3>
                </div>

                <p className="text-sm text-emerald-100/90 leading-relaxed max-w-lg">
                  Après une journée bien remplie, détendez-vous autour d'un cocktail signature, d'un
                  jus frais pressé ou d'un verre de vin sélectionné, dans une ambiance lounge feutrée.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setMenuModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#142e27] hover:bg-emerald-50 text-xs font-semibold tracking-wider uppercase transition shadow"
                  >
                    <span>Voir la carte des boissons</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bar Photo */}
              <div className="mt-8 rounded-2xl overflow-hidden aspect-[16/8] shadow-md border border-white/10 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80"
                  alt="Bar lounge cocktails"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Horaires d'ouverture */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#dce8e2] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#edf5f1] text-[#1b3d36] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                      SERVICE RESTAURATION
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#142e27]">
                      Horaires d'ouverture
                    </h3>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {RESTAURANT_HOURS.map((slot, idx) => (
                    <div key={idx} className="py-4 flex items-center justify-between">
                      <span className="font-medium text-sm text-[#142e27]">{slot.meal}</span>
                      <span className="font-semibold text-sm text-[#1b3d36] bg-[#edf6f2] px-3 py-1 rounded-full">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => setTableModalOpen(true)}
                  className="w-full py-3.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white font-semibold text-xs tracking-wider uppercase transition shadow flex items-center justify-center gap-2"
                >
                  <span>Réserver une table</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="bg-[#122923] text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="font-script text-2xl sm:text-3xl text-emerald-200">
              Une table, une histoire de saveurs...
            </div>

            <div className="text-center">
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
            </div>

            <div className="font-script text-2xl sm:text-3xl text-emerald-200">
              Le luxe du confort au cœur de Madagascar
            </div>
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
