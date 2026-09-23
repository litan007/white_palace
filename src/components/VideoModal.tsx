import React, { useState } from 'react';
import { X, Play, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';
import { HERO_LODGE_IMAGE, LEMUR_IMAGE, SUITE_LAGON_IMAGE, GOURMET_DINING_IMAGE } from '../data/hotelData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: '1. Façade & Accueil', duration: '0:45', image: '/nouvelles_photos/fascade_1.jpg' },
    { title: '2. Chambres & Suites de Luxe', duration: '1:12', image: '/nouvelles_photos/chambre_de_fond.jpg' },
    { title: '3. Restaurant Rooftop & Vue', duration: '1:30', image: '/nouvelles_photos/terrasse_1.jpg' },
    { title: '4. Espace Fitness & Détente', duration: '1:05', image: '/nouvelles_photos/salle_sport.jpg' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#112A36] border border-[#256079]/50 rounded-2xl max-w-4xl w-full text-white shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#173C4D] px-6 py-3.5 border-b border-[#256079]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#DFC27D]" />
            <span className="font-serif text-sm font-bold tracking-widest uppercase text-white">
              IMMERSION VIDÉO • WHITE PALACE HÔTEL
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player Canvas */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src={chapters[activeChapter].image}
            alt="Virtual tour frame"
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 filter brightness-90' : 'brightness-75'}`}
            referrerPolicy="no-referrer"
          />

          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-[#256079]/40 backdrop-blur border border-[#DFC27D]/40 rounded-full text-[10px] uppercase tracking-widest text-[#DFC27D] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>4K ULTRA HD • EXPÉRIENCE WHITE PALACE</span>
              </span>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#DFC27D]" /> : <Volume2 className="w-4 h-4 text-[#DFC27D]" />}
              </button>
            </div>

            {/* Center Play/Pause button */}
            <div className="self-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#256079]/50 hover:bg-[#256079]/80 border-2 border-[#DFC27D] text-[#DFC27D] flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-sm cursor-pointer"
              >
                {isPlaying ? <span className="w-4 h-4 bg-[#DFC27D] rounded-xs" /> : <Play className="w-7 h-7 ml-1 text-[#DFC27D] fill-[#DFC27D]" />}
              </button>
            </div>

            {/* Bottom player controls */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-white">
                <span className="font-semibold">{chapters[activeChapter].title}</span>
                <span className="text-[10px] text-[#DFC27D]">{chapters[activeChapter].duration}</span>
              </div>
              <div className="w-full bg-black/60 rounded-full h-1 overflow-hidden border border-white/20">
                <div className={`h-full bg-gradient-to-r from-[#256079] to-[#DFC27D] ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-4 bg-[#112A36] border-t border-[#256079]/40 grid grid-cols-2 md:grid-cols-4 gap-3">
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveChapter(idx);
                setIsPlaying(true);
              }}
              className={`p-2 rounded-xl border text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                activeChapter === idx
                  ? 'bg-[#173C4D] border-[#DFC27D] text-white ring-1 ring-[#DFC27D]/40'
                  : 'bg-[#112A36]/60 border-[#256079]/30 text-white/70 hover:bg-[#173C4D]/60'
              }`}
            >
              <img
                src={chap.image}
                alt={chap.title}
                className="w-10 h-8 object-cover rounded-lg border border-white/20 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="truncate">
                <span className="block font-medium truncate text-[11px]">{chap.title}</span>
                <span className="text-[9px] text-[#DFC27D]">{chap.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
