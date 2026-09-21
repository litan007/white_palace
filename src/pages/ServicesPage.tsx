import React, { useState } from 'react';
import { PageType } from '../types';
import { PRINCIPAL_SERVICES, OTHER_SERVICES } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { HeroWaveMask } from '../components/HeroWaveMask';
import { Reveal } from '../components/Reveal';
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
      {/* 1. HERO SECTION - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[600px] lg:h-[700px] bg-white flex flex-col md:flex-row">
        {/* Mobile-only Image (shows at top on small screens) */}
        <div className="w-full h-64 md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
            alt="Réception du White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Full Bleed Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
            alt="Réception du White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Left Overlay Content with Wavy Edge */}
        <div className="relative w-full md:w-[50%] lg:w-[45%] h-full bg-[#f8faf9] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-12 py-12 md:py-0 z-10">
          <HeroWaveMask fill="#f8faf9" />
          <BotanicalLeaf className="top-4 left-0 -translate-x-1/4 -z-10" opacity={0.22} />

          <Reveal className="space-y-6 relative z-10" delay={200}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              NOS SERVICES
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
              Des services pensés pour votre confort
            </h1>

            <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-md">
              Au White Palace Hôtel, chaque détail compte. Profitez de nos services haut de gamme
              pour un séjour sans souci, alliant détente, bien-être et assistance personnalisée.
            </p>

            {/* 4 Feature Circles (mockup style) */}
            <div className="flex gap-4 sm:gap-8 pt-2 overflow-x-auto pb-4 hide-scrollbar">
              <Reveal delay={0} className="flex flex-col items-center gap-2 text-center min-w-[70px]">
                <div className="w-12 h-12 rounded-full border border-[#dce8e2] bg-white flex items-center justify-center text-[#1b3d36] shadow-sm">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Service<br/>24h/24</span>
              </Reveal>
              <Reveal delay={100} className="flex flex-col items-center gap-2 text-center min-w-[70px]">
                <div className="w-12 h-12 rounded-full border border-[#dce8e2] bg-white flex items-center justify-center text-[#1b3d36] shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Sécurité<br/>renforcée</span>
              </Reveal>
              <Reveal delay={200} className="flex flex-col items-center gap-2 text-center min-w-[70px]">
                <div className="w-12 h-12 rounded-full border border-[#dce8e2] bg-white flex items-center justify-center text-[#1b3d36] shadow-sm">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">WiFi gratuit<br/>dans tout l'hôtel</span>
              </Reveal>
              <Reveal delay={300} className="flex flex-col items-center gap-2 text-center min-w-[70px]">
                <div className="w-12 h-12 rounded-full border border-[#dce8e2] bg-white flex items-center justify-center text-[#1b3d36] shadow-sm">
                  <Flower2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium text-[#4d6a62] leading-tight">Bien-être<br/>& détente</span>
              </Reveal>
            </div>

            <div className="pt-2">
              <a
                href="#principaux-services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1b3d36] hover:bg-[#122a24] text-white text-xs font-semibold tracking-wider uppercase transition shadow-md active:scale-95"
              >
                <span>Découvrir tous nos services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cursive text positioned absolute over the image on Desktop */}
        <Reveal direction="left" delay={400} className="hidden md:block absolute top-[25%] right-[15%] transform -rotate-6 z-20 pointer-events-none">
          <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-4xl tracking-wide">
            Une équipe à votre écoute 24h/24
          </span>
        </Reveal>
      </section>

      {/* 2. NOS SERVICES PRINCIPAUX */}
      <section id="principaux-services" className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-12">
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
          </Reveal>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PRINCIPAL_SERVICES.map((item, idx) => {
              // Map icons based on title for the mockup look
              let Icon = Wifi;
              if (item.title.includes('conciergerie')) Icon = Bell;
              else if (item.title.includes('Sécurité')) Icon = ShieldCheck;
              else if (item.title.includes('Navettes')) Icon = Car;
              else if (item.title.includes('Bien-être')) Icon = Flower2;
              
              return (
                <Reveal
                  key={item.id}
                  delay={100 * idx}
                  className="h-full"
                >
                <div
                  className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="p-6 pb-4 flex flex-col flex-1 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#f4f8f6] flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5 text-[#1b3d36]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#142e27] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#526f67] mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mt-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    />
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CONCIERGERIE - FULL BLEED */}
      <section className="relative w-full h-auto md:h-[450px] lg:h-[500px] flex flex-col md:flex-row overflow-hidden mt-10">
        {/* Mobile-only Image */}
        <div className="w-full h-64 md:hidden relative">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
            alt="Concierge White Palace Hôtel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Full Bleed Background Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
            alt="Concierge White Palace Hôtel"
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* Left Dark Green Overlay Content with Wavy Edge */}
        <div className="relative w-full md:w-[60%] lg:w-[55%] h-full bg-[#15332c] flex flex-col justify-center px-6 sm:px-10 lg:pl-16 lg:pr-20 py-16 md:py-0 z-10 text-white">
          <HeroWaveMask fill="#15332c" />

          <Reveal className="space-y-6 relative z-10" delay={150}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              CONCIERGERIE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-lg">
              Un service personnalisé à chaque instant
            </h2>

            <p className="text-sm text-emerald-100/90 leading-relaxed max-w-md">
              Notre équipe de conciergerie est à votre entière disposition pour organiser vos
              excursions, vos réservations de restaurants, vos transferts d'affaires ou tout autre
              besoin particulier.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setConciergeModalOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-emerald-500 text-white hover:bg-white hover:text-[#15332c] hover:border-white text-xs font-semibold tracking-wider uppercase transition active:scale-95"
              >
                <span>Contacter la conciergerie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          {/* Cursive text overlapping the edge */}
          <Reveal direction="right" delay={300} className="hidden md:block absolute bottom-[20%] right-[-15%] transform -rotate-12 z-20 pointer-events-none">
            <span className="font-script text-emerald-200/90 drop-shadow-md text-3xl lg:text-4xl whitespace-nowrap">
              Votre satisfaction est notre priorité
            </span>
          </Reveal>
        </div>
      </section>

      {/* 4. AUTRES SERVICES */}
      <section className="py-16 sm:py-20 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              AUTRES SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
              Des petits plus qui font la différence
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_SERVICES.map((srv, idx) => (
              <Reveal
                key={srv.id}
                delay={150 + idx * 100}
                className="h-full"
              >
              <div
                className="p-6 rounded-[2rem] bg-white border border-[#e5eeea] shadow-sm hover:shadow-md transition flex flex-col items-center text-center gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-full border border-gray-100 shadow-sm flex items-center justify-center">
                  {getOtherIcon(srv.icon)}
                </div>

                <div>
                  <h3 className="font-serif text-[15px] font-bold text-[#142e27]">
                    {srv.title}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-emerald-100 mx-auto mt-2 mb-2"></div>
                  <p className="text-[11px] text-[#526f67] leading-relaxed px-2">
                    {srv.description}
                  </p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>

          {/* 5. THREE-COLUMN BANNER / FAQ HELPER */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Card: Dark green question */}
            <Reveal direction="left" className="md:col-span-5 bg-[#15332c] text-white rounded-[2rem] p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="font-serif text-xl sm:text-2xl font-bold">Une question ?<br/>Notre équipe est là pour vous aider !</h4>
              </div>
              <div className="pt-6 text-center md:text-left">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-500 text-white hover:bg-white hover:text-[#15332c] text-xs font-semibold tracking-wider transition"
                >
                  <span>Nous contacter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            {/* Middle Card: Cursive quote */}
            <Reveal delay={150} className="md:col-span-4 bg-[#f1f6f4] rounded-[2rem] p-8 border border-white/50 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <BotanicalLeaf className="bottom-0 right-0" opacity={0.3} />
              <Quote className="absolute top-6 left-6 w-8 h-8 text-[#98bcac] opacity-50" />
              <p className="font-script text-3xl sm:text-4xl text-[#183a32] leading-tight z-10 transform -rotate-2 mt-4">
                Plus qu'un hôtel,<br/>une expérience !
              </p>
            </Reveal>

            {/* Right Card: Towel Photo */}
            <Reveal direction="right" delay={300} className="md:col-span-3 rounded-[2rem] overflow-hidden shadow-sm aspect-[4/3] md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Serviette de luxe White Palace Hôtel"
                className="w-full h-full object-cover"
              />
            </Reveal>
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
