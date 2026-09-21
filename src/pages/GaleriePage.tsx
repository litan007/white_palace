import React, { useState } from 'react';
import { PageType, GalleryPhoto } from '../types';
import { GALLERY_ITEMS } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import {
  Camera,
  Image as ImageIcon,
  Building2,
  ArrowRight,
  X,
  ArrowLeft,
  ZoomIn,
} from 'lucide-react';

interface GaleriePageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: () => void;
}

export const GaleriePage: React.FC<GaleriePageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    'Tous',
    'Hôtel',
    'Chambres',
    'Restaurant',
    'Services',
    'Extérieur',
    'Événements',
  ];

  const filteredItems =
    activeCategory === 'Tous'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
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
                NOTRE GALERIE
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
                Découvrez en images l'univers White Palace
              </h1>

              <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-lg">
                Plongez dans l'ambiance unique de notre hôtel à travers notre galerie photo.
                Découvrez nos chambres élégantes, notre restaurant raffiné, nos espaces de détente et
                bien plus encore.
              </p>

              {/* 3 Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Photos haute qualité</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Découverte de nos espaces</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Un cadre unique à Antananarivo</span>
                </div>
              </div>
            </div>

            {/* Right Visual Arch Image with script note */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Galerie White Palace Hôtel"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 right-6 transform rotate-2">
                  <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl tracking-wide">
                    Plus qu'un hôtel, une expérience !
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY FILTER & GRID */}
      <section className="py-16 sm:py-20 bg-white relative">
        <BotanicalLeaf className="bottom-8 right-0 translate-x-1/3" flip={true} opacity={0.15} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Tabs bar and cursive note */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition ${
                      isActive
                        ? 'bg-[#1b3d36] text-white shadow-sm'
                        : 'bg-[#edf5f1] text-[#3d5a52] hover:bg-[#dfeee7]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="font-script text-2xl text-[#265348] shrink-0">
              "Des souvenirs à chaque instant"
            </div>
          </div>

          {/* 9 Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(photo)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl aspect-[4/3] bg-gray-100 cursor-pointer border border-[#dce8e2] transition-all duration-300"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm text-[#1b3d36] flex items-center justify-center shadow">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Left Camera Tag */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-medium flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{photo.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BANNER: VOTRE SÉJOUR EN IMAGES */}
      <section className="bg-[#142e28] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                VOTRE SÉJOUR EN IMAGES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Envie de vivre cette expérience ?
              </h2>

              <p className="text-sm text-emerald-100/90 max-w-xl leading-relaxed">
                Toutes ces photos ne sont qu'un aperçu de ce qui vous attend. Venez vivre l'expérience
                White Palace Hôtel, au cœur d'Antananarivo.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenReservation()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white text-white hover:bg-white hover:text-[#142e28] text-xs font-semibold tracking-wider uppercase transition shadow-sm active:scale-95"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
              <span className="font-script text-2xl sm:text-3xl text-emerald-200">
                "Le luxe du confort, la beauté de Madagascar"
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-semibold">{selectedPhoto.title}</h4>
              <span className="text-xs text-emerald-300 uppercase tracking-widest">{selectedPhoto.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
