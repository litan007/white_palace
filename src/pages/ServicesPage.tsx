import React, { useState } from 'react';
import { PageType } from '../types';
import { PRINCIPAL_SERVICES, OTHER_SERVICES } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import {
  Bell,
  ShieldCheck,
  Wifi,
  Flower2,
  ArrowRight,
  UtensilsCrossed,
  Shirt,
  Car,
  Key,
  Compass,
  Quote,
  CheckCircle2,
  X,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);
  const [conciergeSent, setConciergeSent] = useState(false);
  const [requestText, setRequestText] = useState('');

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConciergeSent(true);
  };

  const getOtherIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#1b3d36]" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-[#1b3d36]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#1b3d36]" />;
      case 'Key':
        return <Key className="w-5 h-5 text-[#1b3d36]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#1b3d36]" />;
      default:
        return <Bell className="w-5 h-5 text-[#1b3d36]" />;
    }
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
                NOS SERVICES
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
                Des services pensés pour votre confort
              </h1>

              <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-lg">
                Au White Palace Hôtel, chaque détail compte. Profitez de nos services haut de gamme
                pour un séjour sans souci, alliant détente, bien-être et assistance personnalisée.
              </p>

              {/* 4 Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Bell className="w-3.5 h-3.5" />
                  <span>Service 24h/24</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sécurité renforcée</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Wifi className="w-3.5 h-3.5" />
                  <span>WiFi gratuit dans tout l'hôtel</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Flower2 className="w-3.5 h-3.5" />
                  <span>Bien-être & Détente</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#principaux-services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
                >
                  <span>Découvrir tous nos services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Arch Image with script note */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Réception du White Palace Hôtel"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 right-6 transform rotate-2">
                  <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl tracking-wide">
                    Une équipe à votre écoute 24h/24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOS SERVICES PRINCIPAUX */}
      <section id="principaux-services" className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              NOS SERVICES PRINCIPAUX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
              L'essentiel pour un séjour réussi
            </h2>
            <p className="text-sm text-[#526f67] mt-2 leading-relaxed">
              Du WiFi à la conciergerie, en passant par la sécurité et le room service, nous mettons
              tout en œuvre pour rendre votre séjour agréable et sans contrainte.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PRINCIPAL_SERVICES.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#dce8e2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between space-y-2">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#142e27]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#526f67] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONCIERGERIE - UN SERVICE PERSONNALISÉ À CHAQUE INSTANT */}
      <section className="py-16 sm:py-20 bg-[#f8faf9] relative">
        <BotanicalLeaf className="top-8 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Conciergerie dark green block */}
            <div className="lg:col-span-6 bg-[#15332c] text-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                  CONCIERGERIE
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                  Un service personnalisé à chaque instant
                </h2>

                <p className="text-sm text-emerald-100/90 leading-relaxed max-w-lg">
                  Notre équipe de conciergerie est à votre entière disposition pour organiser vos
                  excursions, vos réservations de restaurants, vos transferts d'affaires ou tout autre
                  besoin particulier pendant votre passage à Madagascar.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setConciergeModalOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#15332c] hover:bg-emerald-50 text-xs font-semibold tracking-wider uppercase transition shadow"
                  >
                    <span>Contacter la conciergerie</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-emerald-800/60 flex items-center justify-between">
                <span className="font-script text-2xl text-emerald-300">
                  Votre satisfaction est notre priorité
                </span>
              </div>
            </div>

            {/* Right: Concierge Photo */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl aspect-[16/11] lg:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                alt="Concierge White Palace Hôtel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTRES SERVICES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              AUTRES SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
              Des petits plus qui font la différence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {OTHER_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-[#f8faf9] border border-[#dce8e2] shadow-sm hover:shadow-md transition flex flex-col items-start justify-between gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {getOtherIcon(srv.icon)}
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[#142e27]">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#526f67] mt-1.5 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THREE-COLUMN BANNER / FAQ HELPER */}
      <section className="py-12 sm:py-16 bg-[#f8faf9] border-t border-[#e0ece7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Card: Dark green question */}
            <div className="bg-[#15332c] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg h-full">
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold">Une question ?</h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed">
                  Notre équipe de conciergerie et d'accueil est là pour vous accompagner à tout instant.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-[#15332c] text-xs font-semibold tracking-wider uppercase transition shadow-sm"
                >
                  <span>Nous contacter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Middle Card: Cursive quote */}
            <div className="bg-white rounded-2xl p-8 border border-[#dbe8e1] flex flex-col items-center justify-center text-center shadow-lg h-full relative">
              <Quote className="w-8 h-8 text-[#2c5b50] opacity-40 mb-2" />
              <p className="font-script text-3xl sm:text-4xl text-[#183a32] leading-tight">
                Plus qu'un hôtel, une expérience !
              </p>
            </div>

            {/* Right Card: Towel Photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#dbe8e1] aspect-[4/3] h-full">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Serviette de luxe White Palace Hôtel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Contact Modal */}
      {conciergeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-[#d6e7df]">
            <button
              onClick={() => {
                setConciergeModalOpen(false);
                setConciergeSent(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            {conciergeSent ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#1b3d36] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#142e27]">
                  Demande transmise au concierge !
                </h4>
                <p className="text-xs text-[#526f67]">
                  Notre chef concierge prend en charge votre demande sans délai et vous répondra
                  dans les meilleurs délais.
                </p>
                <button
                  onClick={() => {
                    setConciergeModalOpen(false);
                    setConciergeSent(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#1b3d36] text-white text-xs font-semibold"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleConciergeSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-[#1b3d36]">
                  <Bell className="w-5 h-5" />
                  <h4 className="font-serif text-lg font-bold text-[#142e27]">
                    Demande à la conciergerie
                  </h4>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Votre Nom</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: M. Jean Dupont"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Numéro de téléphone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+261 34 00 000 00"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Votre demande</label>
                  <textarea
                    rows={3}
                    required
                    value={requestText}
                    onChange={(e) => setRequestText(e.target.value)}
                    placeholder="Transfert aéroport, table au restaurant, visite guidée..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#1b3d36] text-white text-xs font-semibold tracking-wider uppercase transition shadow"
                >
                  Transmettre au concierge
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
