import React, { useState } from 'react';
import { ROOMS } from '../data/hotelData';
import { Reveal } from '../components/Reveal';
import { 
  Users, 
  Maximize2, 
  Eye, 
  Wifi, 
  Sparkles, 
  Check, 
  Star, 
  Coffee, 
} from 'lucide-react';

interface RoomDetailPageProps {
  roomId: string;
  onNavigate: (view: string) => void;
  onOpenRoomBooking: (roomId: string) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({
  roomId,
  onNavigate,
  onOpenRoomBooking
}) => {
  const room = ROOMS.find(r => r.id === roomId) || ROOMS[0];
  const [selectedImg, setSelectedImg] = useState(room.images[0]);

  return (
    <div className="bg-[#F8FAFC] text-[#173C4D] min-h-screen pt-20 sm:pt-24 pb-16 space-y-6">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-transparent py-4 px-4 sm:px-8 text-xs text-[#536E7B]">
        <div className="max-w-6xl mx-auto flex items-center gap-2 font-light">
          <button onClick={() => onNavigate('home')} className="hover:text-[#256079] transition-colors cursor-pointer">Accueil</button>
          <span>&gt;</span>
          <button onClick={() => onNavigate('rooms')} className="hover:text-[#256079] transition-colors cursor-pointer">Chambres</button>
          <span>&gt;</span>
          <span className="text-[#173C4D] font-semibold">{room.title}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        
        {/* Title Header */}
        <Reveal direction="down" delay={100}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DCE8ED] pb-4">
            <div>
              <h1 className="font-serif text-3xl font-bold tracking-wide text-[#173C4D] uppercase">
                {room.title}
              </h1>
              <span className="text-xs text-[#256079] font-medium block pt-0.5">À partir de {room.price.toLocaleString('fr-MG')} Ar / nuit</span>
            </div>

            <div className="flex text-[#DFC27D] gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DFC27D] text-[#DFC27D]" />)}
            </div>
          </div>
        </Reveal>

        {/* Gallery Section */}
        <Reveal direction="up" delay={200} className="space-y-3">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-[#DCE8ED] shadow-sm">
            <img
              src={selectedImg || room.images[0]}
              alt={room.title}
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3">
            {room.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(img)}
                className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedImg === img ? 'border-[#256079] shadow-sm ring-1 ring-[#256079]' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Key Features Badges Strip */}
        <Reveal direction="up" delay={300}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 bg-white p-4 rounded-2xl border border-[#DCE8ED] text-xs text-center shadow-xs">
            <div className="p-1 flex flex-col items-center gap-1">
              <Users className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">{room.capacity} personnes</span>
            </div>
            <div className="p-1 flex flex-col items-center gap-1">
              <Maximize2 className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">{room.surface} m²</span>
            </div>
            <div className="p-1 flex flex-col items-center gap-1">
              <Eye className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">{room.view}</span>
            </div>
            <div className="p-1 flex flex-col items-center gap-1">
              <Sparkles className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">Balcon privé</span>
            </div>
            <div className="p-1 flex flex-col items-center gap-1">
              <Coffee className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">Salle de bain</span>
            </div>
            <div className="p-1 flex flex-col items-center gap-1">
              <Wifi className="w-4 h-4 text-[#256079]" />
              <span className="font-medium text-[#173C4D]">Wi-Fi haut débit</span>
            </div>
          </div>
        </Reveal>

        {/* Details Content & Booking Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* À propos */}
            <Reveal direction="up" delay={350}>
              <div className="space-y-2 bg-white p-6 rounded-2xl border border-[#DCE8ED] shadow-xs">
                <h3 className="font-serif text-lg font-bold text-[#173C4D]">
                  À propos de la chambre
                </h3>
                <p className="text-xs sm:text-sm text-[#536E7B] font-light leading-relaxed">
                  {room.fullDescription}
                </p>
              </div>
            </Reveal>

            {/* Équipements & Services */}
            <Reveal direction="up" delay={400}>
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#DCE8ED] shadow-xs">
                <h3 className="font-serif text-lg font-bold text-[#173C4D]">
                  Équipements &amp; services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {room.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#173C4D]">
                      <Check className="w-3.5 h-3.5 text-[#256079]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sticky Booking Widget Sidebar */}
          <div className="lg:col-span-4 sticky top-28">
            <Reveal direction="up" delay={450}>
              <div className="bg-white border border-[#DCE8ED] rounded-2xl p-6 space-y-5 shadow-sm text-[#173C4D]">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#173C4D] tracking-wider uppercase">
                    VÉRIFIER LA DISPONIBILITÉ
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[10px] text-[#536E7B] font-bold uppercase block">ARRIVÉE</label>
                      <input
                        type="text"
                        defaultValue="25 Mai 2026"
                        className="w-full bg-transparent border-b border-[#DCE8ED] py-1 text-xs font-medium text-[#173C4D]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-[#536E7B] font-bold uppercase block">DÉPART</label>
                      <input
                        type="text"
                        defaultValue="28 Mai 2026"
                        className="w-full bg-transparent border-b border-[#DCE8ED] py-1 text-xs font-medium text-[#173C4D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="space-y-1">
                      <label className="text-[10px] text-[#536E7B] font-bold uppercase block">ADULTES</label>
                      <select defaultValue="2" className="w-full bg-transparent border-b border-[#DCE8ED] py-1 text-xs font-medium text-[#173C4D]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-[#536E7B] font-bold uppercase block">ENFANTS</label>
                      <select defaultValue="0" className="w-full bg-transparent border-b border-[#DCE8ED] py-1 text-xs font-medium text-[#173C4D]">
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenRoomBooking(room.id)}
                  className="w-full bg-[#256079] hover:bg-[#1D4F64] text-white font-semibold text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-md transition-all text-center block cursor-pointer"
                >
                  RÉSERVER CETTE CHAMBRE
                </button>
              </div>
            </Reveal>
          </div>

        </div>

      </div>

    </div>
  );
};
