import React, { useState } from 'react';
import { 
  X, 
  UtensilsCrossed, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Printer
} from 'lucide-react';
import { TableBookingState } from '../types';

interface TableBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const [booking, setBooking] = useState<TableBookingState>({
    date: today,
    timeSlot: '19:30',
    guestsCount: 2,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: '',
    seatingArea: 'terrasse'
  });

  const timeSlots = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'TBL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-[#112A36] border border-[#256079]/50 rounded-3xl max-w-lg w-full text-white shadow-2xl overflow-hidden my-auto relative">
        
        {/* Header */}
        <div className="bg-[#173C4D] border-b border-[#256079]/40 px-6 py-5 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#DFC27D]/10 border border-[#DFC27D]/30 flex items-center justify-center text-[#DFC27D] shadow-inner">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                RÉSERVER UNE TABLE
              </h3>
              <p className="text-[11px] text-[#DFC27D] font-medium tracking-wider uppercase">
                Restaurant Rooftop White Palace
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center border border-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#DFC27D]" />
                    <span>Date du repas</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  />
                </div>

                {/* Service Hour */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#DFC27D]" />
                    <span>Heure de service</span>
                  </label>
                  <select
                    value={booking.timeSlot}
                    onChange={(e) => setBooking({ ...booking, timeSlot: e.target.value })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guests */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#DFC27D]" />
                    <span>Nombre de couverts</span>
                  </label>
                  <select
                    value={booking.guestsCount}
                    onChange={(e) => setBooking({ ...booking, guestsCount: Number(e.target.value) })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(num => (
                      <option key={num} value={num}>{num} Personne{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Seating preference */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#DFC27D]" />
                    <span>Emplacement</span>
                  </label>
                  <select
                    value={booking.seatingArea}
                    onChange={(e) => setBooking({ ...booking, seatingArea: e.target.value as any })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  >
                    <option value="terrasse">Terrasse panoramique</option>
                    <option value="vue-lac">Vue dégagée sur la ville</option>
                    <option value="interieur">Salle intérieure climatisée</option>
                  </select>
                </div>
              </div>

              {/* Guest details */}
              <div className="space-y-3.5 pt-3 border-t border-[#256079]/40">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest block">Nom complet *</label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Sophie Bernard"
                    value={booking.customerName}
                    onChange={(e) => setBooking({ ...booking, customerName: e.target.value })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest block">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sophie@example.com"
                      value={booking.customerEmail}
                      onChange={(e) => setBooking({ ...booking, customerEmail: e.target.value })}
                      className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest block">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+261 34 00 000 00"
                      value={booking.customerPhone}
                      onChange={(e) => setBooking({ ...booking, customerPhone: e.target.value })}
                      className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#DFC27D] uppercase tracking-widest block">Régime / Occasion spéciale</label>
                  <textarea
                    rows={2}
                    placeholder="Précisez toute préférence ou allergie..."
                    value={booking.specialRequests}
                    onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                    className="w-full bg-[#173C4D] border border-[#256079] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#DFC27D]"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#DFC27D] hover:bg-[#C59A3D] text-[#112A36] font-bold text-xs py-4 rounded-full tracking-widest uppercase shadow-xl hover:scale-[1.01] transition-all cursor-pointer"
                >
                  RÉSERVER MA TABLE
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-5 py-4 animate-fadeIn">
              <div className="w-20 h-20 bg-[#DFC27D]/20 border-2 border-[#DFC27D] rounded-full flex items-center justify-center mx-auto text-[#DFC27D] shadow-2xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#DFC27D] uppercase tracking-wider">
                TABLE RÉSERVÉE AVEC SUCCÈS !
              </h4>

              <div className="bg-[#173C4D] border border-[#DFC27D]/40 rounded-3xl p-6 text-left text-xs space-y-3 shadow-2xl">
                <div className="flex justify-between border-b border-[#256079]/40 pb-3">
                  <span className="text-[#DFC27D] uppercase tracking-widest font-semibold">CODE RÉSERVATION</span>
                  <span className="font-mono font-bold text-[#DFC27D] text-sm">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Nom:</span>
                  <span className="text-white font-medium">{booking.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Date &amp; Heure:</span>
                  <span className="text-white font-medium">{booking.date} à {booking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Couverts:</span>
                  <span className="text-[#DFC27D] font-medium">{booking.guestsCount} personne(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Emplacement:</span>
                  <span className="text-white font-medium uppercase">{booking.seatingArea}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-[#173C4D] hover:bg-[#256079] text-[#DFC27D] border border-[#256079] text-xs px-5 py-3 rounded-full flex items-center gap-2 font-semibold cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#DFC27D] hover:bg-[#C59A3D] text-[#112A36] text-xs px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-xl cursor-pointer"
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
