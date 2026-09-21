import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle2, Bed, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/hotelData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId = 'double',
}) => {
  const [roomId, setRoomId] = useState(selectedRoomId);

  // Sync state when selectedRoomId changes
  React.useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);
  const [checkIn, setCheckIn] = useState('2026-10-15');
  const [checkOut, setCheckOut] = useState('2026-10-18');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[1];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));
  const nights = isNaN(diffTime) ? 1 : diffTime;
  const totalPrice = currentRoom.priceNum * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'WPH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#cbe0d7]">
        {/* Header */}
        <div className="bg-[#15332c] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-emerald-300 font-semibold">
              Réservation directe en ligne
            </span>
            <h3 className="font-serif text-xl font-bold">White Palace Hôtel</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#1b3d36] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#142e27]">
                Demande de réservation confirmée !
              </h4>
              <p className="text-sm text-[#4b665f] max-w-md mx-auto">
                Merci {fullName || 'cher client'}, votre réservation avec la référence{' '}
                <span className="font-bold text-[#142e27]">{bookingRef}</span> pour la{' '}
                <span className="font-semibold">{currentRoom.name}</span> a bien été enregistrée.
                Un email de confirmation vous a été adressé à {email || 'votre adresse'}.
              </p>
              <div className="p-4 bg-[#f2f7f4] rounded-xl text-left max-w-md mx-auto text-xs space-y-1.5 border border-[#d6e7df]">
                <div><strong>Séjour :</strong> du {checkIn} au {checkOut} ({nights} nuit{nights > 1 ? 's' : ''})</div>
                <div><strong>Voyageurs :</strong> {adults} adulte(s), {children} enfant(s)</div>
                <div><strong>Montant estimé :</strong> {totalPrice.toLocaleString('fr-FR')} Ar</div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 rounded-full bg-[#1b3d36] text-white font-semibold text-sm hover:bg-[#122a24] transition shadow"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#35534b] mb-2">
                  Choisir la catégorie de chambre
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ROOMS.map((room) => {
                    const isSelected = room.id === roomId;
                    return (
                      <button
                        type="button"
                        key={room.id}
                        onClick={() => setRoomId(room.id)}
                        className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#1b3d36] bg-[#edf6f2] ring-2 ring-[#1b3d36]/20'
                            : 'border-gray-200 hover:border-[#1b3d36]/40 bg-white'
                        }`}
                      >
                        <span className="font-medium text-xs text-[#132c25] truncate">
                          {room.name}
                        </span>
                        <span className="text-[11px] font-bold text-[#234e44] mt-1">
                          {room.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Room Details Preview */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#f5f9f7] border border-[#d8e8e1]">
                <img
                  src={currentRoom.image}
                  alt={currentRoom.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-[#142e27]">Chambre {currentRoom.name}</h5>
                    <span className="text-xs font-bold text-[#1b3d36]">{currentRoom.price} / nuit</span>
                  </div>
                  <p className="text-[11px] text-[#526f67] flex items-center gap-2 mt-0.5">
                    <Bed className="w-3.5 h-3.5" />
                    <span>{currentRoom.bed}</span>
                    <span>•</span>
                    <span>{currentRoom.capacity}</span>
                  </p>
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#35534b] mb-1">
                    Date d'arrivée
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#35534b] mb-1">
                    Date de départ
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Counters */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#35534b] mb-1">
                    Adultes
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36] bg-white"
                    >
                      <option value={1}>1 Adulte</option>
                      <option value={2}>2 Adultes</option>
                      <option value={3}>3 Adultes</option>
                      <option value={4}>4 Adultes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#35534b] mb-1">
                    Enfants
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36] bg-white"
                  >
                    <option value={0}>0 Enfant</option>
                    <option value={1}>1 Enfant</option>
                    <option value={2}>2 Enfants</option>
                    <option value={3}>3 Enfants</option>
                  </select>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+261 34 00 000 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Demandes particulières (navette aéroport, lit bébé...)
                  </label>
                  <input
                    type="text"
                    placeholder="Heure d'arrivée prévue, préférences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-4 rounded-xl bg-[#eef6f3] border border-[#cfe2d9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#4b6a62]">
                    Total ({nights} nuit{nights > 1 ? 's' : ''})
                  </span>
                  <div className="font-serif text-lg font-bold text-[#142e27]">
                    {totalPrice.toLocaleString('fr-FR')} Ar
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#1b3d36] hover:bg-[#112721] text-white font-semibold text-xs tracking-wider uppercase transition flex items-center gap-2 shadow"
                >
                  <span>Confirmer la réservation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
