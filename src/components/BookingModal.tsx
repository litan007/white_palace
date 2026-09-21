import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Users, 
  CreditCard, 
  Bed, 
  Sparkles, 
  Printer, 
  ChevronRight, 
  ArrowLeft,
  Check,
  Building,
  ShieldCheck
} from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room, BookingState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId = 'suite-lagon',
  initialCheckIn = '2025-05-25',
  initialCheckOut = '2025-05-28',
  initialAdults = 2,
  initialChildren = 0
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [booking, setBooking] = useState<BookingState>({
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    guestsAdults: initialAdults,
    guestsChildren: initialChildren,
    roomId: preselectedRoomId,
    selectedExtras: ['transfert-airport', 'welcome-champagne'],
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: '',
    promoCode: ''
  });

  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  const selectedRoom = ROOMS.find(r => r.id === booking.roomId) || ROOMS[0];

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(booking.checkIn);
    const end = new Date(booking.checkOut);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();

  const availableExtras = [
    { id: 'transfert-airport', label: 'Transfert Privé VIP (Aéroport Ivato / Andasibe)', price: 120 },
    { id: 'welcome-champagne', label: 'Bouteille de Champagne & Amuse-bouches à l\'arrivée', price: 85 },
    { id: 'guide-lemurs', label: 'Guide Naturaliste Privé d\'Observation Lémuriens (3h)', price: 25 },
    { id: 'spa-duo', label: 'Massage Duo Signature au Spa (60 min)', price: 80 },
    { id: 'romantic-dinner', label: 'Dîner Romantique au Flambeau sur la terrasse', price: 90 }
  ];

  const extrasTotal = availableExtras
    .filter(e => booking.selectedExtras.includes(e.id))
    .reduce((sum, e) => sum + e.price, 0);

  const roomTotal = selectedRoom.price * nights;
  const grandTotal = roomTotal + extrasTotal;

  const handleToggleExtra = (id: string) => {
    setBooking(prev => ({
      ...prev,
      selectedExtras: prev.selectedExtras.includes(id)
        ? prev.selectedExtras.filter(e => e !== id)
        : [...prev.selectedExtras, id]
    }));
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'AND-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedRef(randomRef);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#050A14] border border-slate-800/80 rounded-3xl max-w-3xl w-full text-white shadow-2xl overflow-hidden my-auto relative">
        
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-slate-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="bg-[#0F172A] border-b border-slate-900/80 px-6 py-5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-inner">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                RÉSERVATION D'EXCEPTION
              </h3>
              <p className="text-[11px] text-amber-300/90 font-medium tracking-wider uppercase">
                White Palace Luxury Hotel & Restaurant
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-900 text-gray-300 hover:text-white transition-all flex items-center justify-center border border-slate-800/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Bar */}
        {step < 4 && (
          <div className="bg-[#050A14] border-b border-slate-900/60 px-6 py-3 flex justify-between items-center text-xs">
            <div className={`flex items-center gap-2 transition-colors ${step >= 1 ? 'text-amber-300 font-semibold' : 'text-gray-500'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-amber-400 text-[#050A14]' : 'bg-slate-950 text-gray-500 border border-slate-800'}`}>1</span>
              <span>Chambre & Dates</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-800" />
            <div className={`flex items-center gap-2 transition-colors ${step >= 2 ? 'text-amber-300 font-semibold' : 'text-gray-500'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-amber-400 text-[#050A14]' : 'bg-slate-950 text-gray-500 border border-slate-800'}`}>2</span>
              <span>Extras & Soins</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-800" />
            <div className={`flex items-center gap-2 transition-colors ${step >= 3 ? 'text-amber-300 font-semibold' : 'text-gray-500'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-amber-400 text-[#050A14]' : 'bg-slate-950 text-gray-500 border border-slate-800'}`}>3</span>
              <span>Coordonnées</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6 relative z-10">
          {/* STEP 1: Room & Dates */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Sélectionnez vos dates & votre hébergement</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
                <div>
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block mb-1">Arrivée</label>
                  <input
                    type="date"
                    value={booking.checkIn}
                    onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block mb-1">Départ</label>
                  <input
                    type="date"
                    value={booking.checkOut}
                    onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block mb-1">Adultes</label>
                  <select
                    value={booking.guestsAdults}
                    onChange={(e) => setBooking({ ...booking, guestsAdults: Number(e.target.value) })}
                    className="w-full bg-[#0F172A] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Adulte{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block mb-1">Enfants</label>
                  <select
                    value={booking.guestsChildren}
                    onChange={(e) => setBooking({ ...booking, guestsChildren: Number(e.target.value) })}
                    className="w-full bg-[#0F172A] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n} Enfant{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>

              {/* Room Selection Grid */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-white uppercase tracking-wider block">
                  Choix de la Chambre / Suite ({nights} nuit{nights > 1 ? 's' : ''})
                </label>
                <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                  {ROOMS.map((room) => {
                    const isSelected = booking.roomId === room.id;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setBooking({ ...booking, roomId: room.id })}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-slate-900/60 border-amber-400 ring-2 ring-amber-400/30 shadow-lg'
                            : 'bg-slate-950/30 border-slate-800/50 hover:bg-slate-900/30 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={room.images[0]}
                            alt={room.title}
                            className="w-20 h-14 object-cover rounded-xl border border-slate-700/50"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h5 className="font-serif text-base font-bold text-amber-100">{room.title}</h5>
                            <p className="text-[11px] text-slate-200/80 mt-0.5">{room.surface} m² • {room.capacity} personnes • {room.view}</p>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-base font-serif font-bold text-amber-300">{room.price * nights.toLocaleString('fr-MG')} Ar</div>
                          <div className="text-[10px] text-emerald-300/70">{room.price.toLocaleString('fr-MG')} Ar / nuit</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-900/80">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-3.5 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>CONTINUER</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Extras */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Personnalisez votre séjour avec nos prestations exclusives</span>
              </div>

              <div className="space-y-3">
                {availableExtras.map((extra) => {
                  const isChecked = booking.selectedExtras.includes(extra.id);
                  return (
                    <div
                      key={extra.id}
                      onClick={() => handleToggleExtra(extra.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-slate-900/60 border-amber-400/80 shadow-md'
                          : 'bg-slate-950/30 border-slate-800/40 hover:bg-slate-900/30'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-amber-400 border-amber-300 text-[#050A14]' : 'border-slate-700 bg-slate-950'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium text-slate-50">{extra.label}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-300">+{extra.price.toLocaleString('fr-MG')} Ar</span>
                    </div>
                  );
                })}
              </div>

              {/* Price Summary Strip */}
              <div className="bg-[#0F172A] p-5 rounded-2xl border border-slate-800/80 flex justify-between items-center text-xs shadow-inner">
                <div>
                  <span className="text-emerald-300/80 text-[11px] block uppercase font-medium">Récapitulatif provisoire</span>
                  <span className="font-semibold text-white mt-0.5 block">{selectedRoom.title} ({nights} nuits) + {booking.selectedExtras.length} option(s)</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-amber-300">{grandTotal.toLocaleString('fr-MG')} Ar</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-900/80">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-xs px-6 py-3.5 rounded-full flex items-center gap-2 uppercase tracking-wider font-semibold border border-slate-700/50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-3.5 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>CONTINUER</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Customer Form */}
          {step === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-300 uppercase">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Informations du client principal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Nom complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Jean Dupont"
                    value={booking.customerName}
                    onChange={(e) => setBooking({ ...booking, customerName: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="ex. jean.dupont@email.com"
                    value={booking.customerEmail}
                    onChange={(e) => setBooking({ ...booking, customerEmail: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="ex. +33 6 12 34 56 78"
                    value={booking.customerPhone}
                    onChange={(e) => setBooking({ ...booking, customerPhone: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Code promo (optionnel)</label>
                  <input
                    type="text"
                    placeholder="WHITEPALACE2025"
                    value={booking.promoCode}
                    onChange={(e) => setBooking({ ...booking, promoCode: e.target.value })}
                    className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-amber-300/80 uppercase tracking-widest block">Demandes particulières / Horaires d'arrivée</label>
                <textarea
                  rows={2}
                  placeholder="Informer la réception de vos préférences (allergies, régime alimentaire, surprise, vol)..."
                  value={booking.specialRequests}
                  onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                  className="w-full bg-[#0F172A] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Total Card */}
              <div className="bg-[#0F172A] border border-amber-400/40 p-5 rounded-2xl flex justify-between items-center shadow-lg">
                <div>
                  <span className="text-xs text-amber-300 block uppercase font-bold tracking-wider">TOTAL À RÉGLER SUR PLACE OU PAR VIREMENT</span>
                  <span className="text-[11px] text-slate-200/70 mt-0.5 block">Annulation gratuite jusqu'à 48h avant l'arrivée</span>
                </div>
                <div className="text-3xl font-serif font-bold text-amber-300">
                  {grandTotal.toLocaleString('fr-MG')} Ar
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-slate-900/80">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-xs px-6 py-3.5 rounded-full flex items-center gap-2 uppercase tracking-wider font-semibold border border-slate-700/50"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Retour</span>
                </button>
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-3.5 rounded-full tracking-widest uppercase shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>CONFIRMER MA RÉSERVATION</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Voucher */}
          {step === 4 && confirmedRef && (
            <div className="space-y-6 text-center animate-fade-in py-4">
              <div className="w-20 h-20 bg-amber-400/20 border-2 border-amber-400 rounded-full flex items-center justify-center mx-auto text-amber-300 shadow-2xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-amber-300 uppercase tracking-wider">
                  RÉSERVATION CONFIRMÉE !
                </h4>
                <p className="text-xs text-slate-100/80 mt-1">
                  Un email de confirmation a été envoyé à <strong className="text-amber-200">{booking.customerEmail || 'votre adresse email'}</strong>.
                </p>
              </div>

              {/* Voucher Box */}
              <div className="bg-[#0F172A] border border-amber-400/40 rounded-3xl p-6 sm:p-8 max-w-md mx-auto text-left space-y-4 shadow-2xl relative">
                <div className="border-b border-slate-800/80 pb-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-emerald-400 uppercase tracking-widest block font-semibold">RÉFÉRENCE DOSSIER</span>
                    <span className="font-mono text-lg font-bold text-amber-300 tracking-wider">{confirmedRef}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-200 text-[10px] border border-slate-700 font-bold uppercase tracking-wider">
                    CONFIRMÉ
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-200/70">Client:</span>
                    <span className="font-medium text-white">{booking.customerName || 'M./Mme'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-200/70">Hébergement:</span>
                    <span className="font-medium text-amber-200">{selectedRoom.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-200/70">Séjour:</span>
                    <span className="font-medium text-white">{booking.checkIn} au {booking.checkOut} ({nights} nuits)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-200/70">Occupants:</span>
                    <span className="font-medium text-white">{booking.guestsAdults} Adulte(s), {booking.guestsChildren} Enfant(s)</span>
                  </div>
                  {booking.selectedExtras.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-200/70">Extras:</span>
                      <span className="font-medium text-amber-300">{booking.selectedExtras.length} option(s) retenue(s)</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t border-slate-800/60 text-base">
                    <span className="font-serif font-semibold text-amber-200">Montant Total:</span>
                    <span className="font-serif font-bold text-amber-300">{grandTotal.toLocaleString('fr-MG')} Ar</span>
                  </div>
                </div>

                <div className="pt-3 text-[10px] text-center text-emerald-300/60 italic border-t border-slate-800/40">
                  {HOTEL_INFO.name} • {HOTEL_INFO.phone} • {HOTEL_INFO.address}
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-slate-900/80 hover:bg-slate-800 text-amber-200 border border-slate-700 text-xs px-5 py-3 rounded-full flex items-center gap-2 font-semibold"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer le reçu</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] text-xs px-8 py-3 rounded-full font-bold tracking-wider uppercase shadow-xl"
                >
                  FERMER
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

