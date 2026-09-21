import React, { useState } from 'react';
import { PageType } from '../types';
import { HOTEL_INFO, FAQ_ITEMS } from '../data/hotelData';
import { BotanicalLeaf } from '../components/BotanicalLeaf';
import { Logo } from '../components/Logo';
import {
  PhoneCall,
  Headphones,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Building2,
  ParkingCircle,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenReservation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenReservation,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Demande d’information générale');
  const [message, setMessage] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
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
                NOUS CONTACTER
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#16332c] leading-tight">
                Une question ? Notre équipe est là pour vous répondre
              </h1>

              <p className="text-sm sm:text-base text-[#526f67] leading-relaxed max-w-lg">
                Que ce soit pour une réservation, une demande d'information ou une suggestion, n'hésitez
                pas à nous contacter. Nous serons ravis de vous accompagner et de rendre votre séjour
                inoubliable.
              </p>

              {/* 3 Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Réponse rapide sous 24h</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Une équipe disponible et à l'écoute</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e9f2ee] text-[#1b3d36] text-xs font-medium border border-[#d2e3dc]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Votre satisfaction est notre priorité</span>
                </div>
              </div>
            </div>

            {/* Right Visual Arch Image with script note */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Contact White Palace Hôtel"
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-6 right-6 transform rotate-2">
                  <span className="font-script text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl tracking-wide">
                    Nous serons ravis de vous accueillir !
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOS COORDONNÉES - OÙ NOUS TROUVER ? */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
              NOS COORDONNÉES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
              Où nous trouver ?
            </h2>
            <p className="text-sm text-[#526f67] mt-2">
              Notre hôtel est idéalement situé au cœur d'Antananarivo, facilement accessible et proche
              des principaux centres d'intérêt de la ville.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Contact Info List */}
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#edf6f2] text-[#1b3d36] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#142e27]">Adresse</h4>
                  <p className="text-xs text-[#526f67] mt-0.5">{HOTEL_INFO.address}</p>
                  <span className="text-[11px] text-gray-400">(à proximité du centre-ville)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#edf6f2] text-[#1b3d36] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#142e27]">Téléphone</h4>
                  <a
                    href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs text-[#526f67] hover:text-[#1b3d36] block mt-0.5 font-medium"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#edf6f2] text-[#1b3d36] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#142e27]">Email</h4>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-xs text-[#526f67] hover:text-[#1b3d36] block mt-0.5 font-medium"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#edf6f2] text-[#1b3d36] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#142e27]">Horaires de réception</h4>
                  <p className="text-xs text-[#526f67] mt-0.5">{HOTEL_INFO.receptionHours}</p>
                </div>
              </div>
            </div>

            {/* Center: Map Graphic Card */}
            <div className="rounded-2xl overflow-hidden border border-[#dce8e2] bg-[#edf4f0] p-6 flex flex-col items-center justify-between text-center relative aspect-[4/3] shadow-md">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#204940_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                Ambatobe • Ivandry • Antananarivo
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#cbe0d6] max-w-[220px]">
                <div className="w-8 h-8 rounded-full bg-[#1b3d36] text-white flex items-center justify-center mx-auto mb-1.5 shadow">
                  <Navigation className="w-4 h-4" />
                </div>
                <h5 className="font-serif font-bold text-xs text-[#16332c]">
                  White Palace Hôtel
                </h5>
                <p className="text-[10px] text-gray-500">Ambatobe, Tananarive</p>
              </div>

              <div className="relative z-10">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1b3d36] hover:bg-[#122b25] text-white text-[11px] font-semibold transition shadow"
                >
                  <span>Voir sur Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Accès Facile */}
            <div className="bg-[#f8faf9] rounded-2xl p-6 border border-[#dce8e2] space-y-4">
              <h4 className="font-serif text-base font-bold text-[#142e27]">Accès facile</h4>
              <div className="space-y-3.5 text-xs text-[#4b6a62]">
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#1b3d36] shrink-0" />
                  <span>À 15 min de l'Aéroport international d'Ivato</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#1b3d36] shrink-0" />
                  <span>À 10 min du centre-ville</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#1b3d36] shrink-0" />
                  <span>Proche des commerces et sites touristiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <ParkingCircle className="w-4 h-4 text-[#1b3d36] shrink-0" />
                  <span>Parking sécurisé sur place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENVOYEZ-NOUS UN MESSAGE - NOUS ÉCRIRE */}
      <section className="py-16 sm:py-20 bg-[#f8faf9] relative">
        <BotanicalLeaf className="top-8 right-0 translate-x-1/4" flip={true} opacity={0.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Bell photo + script */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  alt="Cloche de réception White Palace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
                  <span className="font-script text-white text-2xl sm:text-3xl leading-snug">
                    Un message et nous vous répondons au plus vite !
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#dce8e2] shadow-xl">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                  ENVOYEZ-NOUS UN MESSAGE
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#16332c] mt-1">
                  Nous écrire
                </h2>
                <p className="text-xs text-[#526f67] mt-1">
                  Remplissez le formulaire ci-dessous, nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {formSent ? (
                <div className="text-center py-10 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#1b3d36] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#142e27]">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-xs text-[#526f67]">
                    Merci {name}, votre demande concernant « {subject} » a bien été transmise à notre équipe.
                    Une réponse vous parviendra très rapidement par email ({email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#1b3d36] text-white text-xs font-semibold tracking-wider uppercase"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#35534b] mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#35534b] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@domaine.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#35534b] mb-1">
                      Objet de votre message *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b3d36] bg-white"
                    >
                      <option>Demande d’information générale</option>
                      <option>Réservation de chambre</option>
                      <option>Réservation restaurant / banquet</option>
                      <option>Service conciergerie & transfert</option>
                      <option>Partenariat d’entreprise</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#35534b] mb-1">
                      Votre message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b3d36]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#1b3d36] hover:bg-[#122b25] text-white text-xs font-semibold tracking-wider uppercase transition shadow active:scale-95"
                  >
                    <span>Envoyer le message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUESTIONS FRÉQUENTES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Accordion */}
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4d6a62]">
                QUESTIONS FRÉQUENTES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#16332c] mt-1">
                Vous avez une autre question ?
              </h2>
              <p className="text-sm text-[#526f67] mt-1 mb-8">
                Retrouvez ici les réponses aux questions les plus courantes.
              </p>

              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {FAQ_ITEMS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="py-4">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between text-left gap-4 group"
                      >
                        <span className="text-sm font-semibold text-[#16332c] group-hover:text-[#28574c] transition">
                          {faq.question}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-[#edf5f1] text-[#1b3d36] flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-xs text-[#526f67] leading-relaxed pr-8 animate-fadeIn">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Dark Green Callout Card */}
            <div className="lg:col-span-4 bg-[#142e27] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
              <div className="space-y-4">
                <Logo variant="light" className="justify-center" />
                <div className="pt-4 font-script text-3xl text-emerald-200 leading-tight">
                  À très bientôt au White Palace Hôtel !
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onOpenReservation()}
                  className="w-full py-3.5 rounded-full border border-white text-white hover:bg-white hover:text-[#142e27] text-xs font-semibold tracking-wider uppercase transition shadow"
                >
                  Réserver maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
