import React, { useState } from 'react';
import { HOTEL_INFO, PRESTIGE_LIVING_IMAGE } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, Navigation, ChevronDown } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-16 space-y-10">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={PRESTIGE_LIVING_IMAGE}
            alt="Contactez-nous - White Palace Hotel"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            À VOTRE ÉCOUTE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Contactez-nous
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Notre équipe conciergerie est à votre entière disposition pour concrétiser votre séjour d'exception.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('contact-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Nous écrire</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      <div id="contact-content-section" className="max-w-4xl mx-auto px-4 sm:px-8 pt-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Column */}
        <div className="md:col-span-5 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE6DE] shadow-sm">
          <h3 className="font-serif text-lg font-bold text-[#111827] border-b border-gray-100 pb-3">
            Informations pratiques
          </h3>

          <div className="space-y-5 text-xs text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#1E293B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Adresse</span>
                <p className="text-gray-500 font-light leading-relaxed">{HOTEL_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#1E293B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Téléphone</span>
                <p className="text-gray-500 font-light">{HOTEL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#1E293B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Email</span>
                <p className="text-gray-500 font-light">{HOTEL_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#1E293B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Horaires Réception</span>
                <p className="text-gray-500 font-light">{HOTEL_INFO.receptionHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE6DE] shadow-sm space-y-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#111827] border-b border-gray-100 pb-3">
                Envoyez-nous un message
              </h3>

              <div className="space-y-1">
                <label className="text-xs text-gray-700 block font-medium">Nom complet *</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#1E293B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-700 block font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="votre.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#1E293B]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-700 block font-medium">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+261 34 00 000 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#1E293B]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-700 block font-medium">Sujet *</label>
                <input
                  type="text"
                  required
                  placeholder="Demande de réservation, devis..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#1E293B]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-700 block font-medium">Votre message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Décrivez votre demande en détail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#1E293B]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-sm transition-all"
              >
                ENVOYER LE MESSAGE
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-8 animate-fade-in">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-[#1E293B]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#111827]">
                MESSAGE ENVOYÉ !
              </h4>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Merci {formData.fullName}. Notre équipe prend en charge votre demande et vous répondra sous 24h.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-6 py-2.5 rounded-xl uppercase font-semibold"
              >
                Envoyer un autre message
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

