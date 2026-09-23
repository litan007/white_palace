import React from 'react';
import { X, Download, Printer, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS, HOTEL_INFO } from '../data/hotelData';

interface MenuPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuPdfModal: React.FC<MenuPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const entrees = MENU_ITEMS.filter(m => m.category === 'entrees');
  const plats = MENU_ITEMS.filter(m => m.category === 'plats');
  const desserts = MENU_ITEMS.filter(m => m.category === 'desserts');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-[#FAFBFD] text-[#173C4D] border-2 border-[#256079]/30 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden my-auto relative p-8 sm:p-12">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#173C4D]/10 hover:bg-[#173C4D]/20 text-[#173C4D] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Action Header */}
        <div className="flex justify-between items-center pb-6 border-b border-[#DCE8ED] mb-8">
          <div className="flex items-center gap-2 text-[#173C4D]">
            <UtensilsCrossed className="w-5 h-5 text-[#256079]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#256079]">CARTE GASTRONOMIQUE COMPLÈTE</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-full bg-[#173C4D] text-[#DFC27D] text-xs flex items-center gap-1.5 hover:bg-[#112A36] transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer</span>
            </button>
            <button
              onClick={() => alert('Téléchargement du menu PDF en cours...')}
              className="px-3.5 py-1.5 rounded-full bg-[#256079] text-white text-xs flex items-center gap-1.5 hover:bg-[#1D4F64] transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#DFC27D]" />
              <span>PDF (3.2 Mo)</span>
            </button>
          </div>
        </div>

        {/* Menu Print Content */}
        <div className="text-center space-y-8 font-serif">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C59A3D] uppercase block mb-1 font-semibold">RESTAURANT ROOFTOP</span>
            <h2 className="text-3xl font-bold tracking-widest text-[#173C4D] uppercase">WHITE PALACE</h2>
            <p className="text-xs italic text-[#536E7B] mt-1 font-sans">
              Proposé par notre Chef &amp; mariant les trésors naturels de Madagascar
            </p>
          </div>

          {/* Entrées */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#C59A3D] border-b border-[#DCE8ED] pb-1 w-32 mx-auto">
              ENTRÉES
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {entrees.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#173C4D]">
                    <span>{item.title}</span>
                    <span className="text-[#256079] font-sans font-bold">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-[#536E7B] font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plats */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#C59A3D] border-b border-[#DCE8ED] pb-1 w-32 mx-auto">
              PLATS PRINCIPAUX
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {plats.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#173C4D]">
                    <span>{item.title}</span>
                    <span className="text-[#256079] font-sans font-bold">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-[#536E7B] font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#C59A3D] border-b border-[#DCE8ED] pb-1 w-32 mx-auto">
              DESSERTS &amp; DOUCEURS
            </h3>
            <div className="space-y-3 max-w-lg mx-auto">
              {desserts.map(item => (
                <div key={item.id} className="text-left font-sans">
                  <div className="flex justify-between font-serif font-bold text-sm text-[#173C4D]">
                    <span>{item.title}</span>
                    <span className="text-[#256079] font-sans font-bold">{item.price.toLocaleString('fr-MG')} Ar</span>
                  </div>
                  <p className="text-xs text-[#536E7B] font-light mt-0.5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-[#DCE8ED] text-xs font-sans text-[#536E7B] italic">
            Prix nets en Ariary, service et taxes inclus • Réservation : {HOTEL_INFO.phone}
          </div>
        </div>
      </div>
    </div>
  );
};
