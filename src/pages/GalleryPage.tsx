import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';
import { Reveal } from '../components/Reveal';
import {
  Camera,
  Image as ImageIcon,
  Building2,
  ArrowRight,
  X,
  ArrowLeft,
  ZoomIn,
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
}

const CATEGORIES: { id: 'all' | GalleryItem['category']; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'hotel', label: 'Hôtel' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'experiences', label: 'Bien-être' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenRoomBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | GalleryItem['category']>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

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
    <div className="relative overflow-hidden bg-[#F8FAFC] pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24">
      {/* 1. HERO SECTION (100% FULL WIDTH with ORGANIC SVG PATH) */}
      <section className="w-full relative bg-[#EAF2F6] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Text & Features */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal direction="down" delay={100}>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C59A3D]">
                NOTRE GALERIE
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#173C4D] leading-[1.08] tracking-tight">
                Découvrez en images<br />
                l'univers White Palace
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="text-[13px] sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-[440px]">
                Plongez dans l'ambiance unique de notre hôtel à travers notre galerie : chambres d'exception, restaurant rooftop panoramique et espaces de bien-être.
              </p>
            </Reveal>

            {/* 3 Highlights */}
            <Reveal direction="up" delay={400}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Photos<br className="hidden sm:inline" /> haute qualité
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Découverte de<br className="hidden sm:inline" /> nos espaces
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Un cadre unique<br className="hidden sm:inline" /> à Antananarivo
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Button */}
            <Reveal direction="up" delay={500}>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('gallery-grid-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2.5 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Explorer les photos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#DFC27D]" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Organic S-curve blob clipped photo with exact SVG paths */}
          <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] xl:w-[58%] h-[360px] sm:h-[450px] lg:h-full z-10">
            {/* Cursive script in top right */}
            <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <span className="font-serif italic text-white text-2xl sm:text-3xl lg:text-4xl tracking-wide drop-shadow-md block font-normal -rotate-2 select-none">
                Moments d'exception,<br />
                <span className="relative inline-block text-[#DFC27D]">
                  capturés pour vous
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#DFC27D]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M 0 5 Q 50 10 100 3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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
                <clipPath id="galleryOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 646.628 -66 L 646.628 -64.184 C 630.307 28.101 614.873 77.785 596.277 145.423 C 578.698 209.365 533.464 276.376 557.905 356.284 L 721.901 356.623 L 1280 358 Z" />
                </clipPath>

                <clipPath id="galleryHeroBlobClip">
                  <path d="M 1280 358 L 1280 -66 L 572.702 -66 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 660.324 168.813 661.881 210.903 660.29 237.456 C 656.625 298.638 676.362 343.694 717.099 355.801 L 717.099 358 L 1280 358 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft blue overlay */}
              <g clipPath="url(#galleryOuterWaveClip)">
                <image
                  href="/nouvelles_photos/fascade_1.jpg"
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
              <g clipPath="url(#galleryHeroBlobClip)">
                <image
                  href="/nouvelles_photos/fascade_1.jpg"
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

      {/* 2. GALLERY FILTER & GRID */}
      <section id="gallery-grid-section" className="py-4 sm:py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <Reveal direction="left" delay={100} className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition cursor-pointer ${
                      isActive
                        ? 'bg-[#256079] text-white shadow-xs'
                        : 'bg-[#EBF3F6] text-[#536E7B] hover:bg-[#DCEAF0] hover:text-[#173C4D]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </Reveal>

            <Reveal delay={150} direction="right" className="font-['Caveat'] text-2xl text-[#C59A3D] shrink-0">
              "Des souvenirs inoubliables à chaque instant"
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((photo, idx) => (
              <Reveal key={photo.id} delay={100 + (idx % 3) * 100} direction="up" className="h-full">
                <div
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl aspect-[4/3] bg-gray-100 cursor-pointer border border-[#DCE8ED] hover:border-[#256079] transition-all duration-300"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-[#173C4D]/35 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-[#173C4D]/75 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-medium flex items-center gap-2 border border-white/20">
                    <Camera className="w-3.5 h-3.5 text-[#DFC27D]" />
                    <span>{photo.title}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BANNER: VOTRE SÉJOUR EN IMAGES */}
      <section className="bg-[#173C4D] text-white py-14 sm:py-20 relative overflow-hidden border-t border-[#256079]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Reveal direction="left" delay={100} className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DFC27D]">
                VOTRE SÉJOUR EN IMAGES
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                Envie de vivre cette expérience ?
              </h2>

              <p className="text-sm text-white/85 max-w-xl leading-relaxed">
                Toutes ces photos ne sont qu'un aperçu de ce qui vous attend. Venez vivre l'expérience
                White Palace Hôtel, au cœur d'Antananarivo.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#DFC27D] text-[#DFC27D] hover:bg-[#DFC27D] hover:text-[#173C4D] text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>

            <Reveal delay={200} direction="right" className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
              <span className="font-['Caveat'] text-2xl sm:text-3xl text-[#DFC27D]">
                "Le luxe du confort, en plein cœur de Tananarive"
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#112A36]/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10 cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10 cursor-pointer"
            aria-label="Photo précédente"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition z-10 cursor-pointer"
            aria-label="Photo suivante"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/15"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-semibold">{selectedPhoto.title}</h4>
              <p className="text-xs text-[#DFC27D] max-w-md mt-1">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
