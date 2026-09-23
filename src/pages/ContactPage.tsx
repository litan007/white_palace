import React, { useState } from 'react';
import { HOTEL_INFO, FAQ_ITEMS, RESTAURANT_INTERIOR_IMAGE } from '../data/hotelData';
import { Reveal } from '../components/Reveal';
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
  onNavigate: (view: string) => void;
  onOpenRoomBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenRoomBooking }) => {
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
    <div className="relative overflow-hidden bg-[#F8FAFC] text-[#173C4D] pt-20 sm:pt-24 space-y-16 sm:space-y-20 lg:space-y-24">
      {/* 1. HERO SECTION (100% FULL WIDTH with ORGANIC SVG PATH) */}
      <section className="w-full relative bg-[#EAF2F6] overflow-hidden">
        <div className="w-full relative min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col lg:flex-row items-stretch">
          
          {/* Left Column: Text & Badges */}
          <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] px-8 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-10 sm:py-14 lg:py-16 xl:py-20 flex flex-col justify-center space-y-5 lg:space-y-6">
            <Reveal direction="down" delay={100}>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C59A3D]">
                NOUS CONTACTER
              </span>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#173C4D] leading-[1.08] tracking-tight">
                Une question ? Notre équipe<br />
                est là pour vous répondre
              </h1>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="text-[13px] sm:text-sm text-[#536E7B] font-light leading-relaxed max-w-[440px]">
                Que ce soit pour une réservation de chambre, une table en rooftop ou toute autre information, n'hésitez pas à nous contacter. Nous serons ravis de vous accompagner.
              </p>
            </Reveal>

            {/* 3 Pillars */}
            <Reveal direction="up" delay={400}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 max-w-[460px]">
                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Réponse rapide<br className="hidden sm:inline" /> sous 24h
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Équipe disponible<br className="hidden sm:inline" /> et à l'écoute
                  </span>
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#256079] flex items-center justify-center shadow-2xs border border-[#DCE8ED]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#173C4D] font-medium leading-tight">
                    Votre satisfaction<br className="hidden sm:inline" /> garantie
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Button */}
            <Reveal direction="up" delay={500}>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact-form-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2.5 bg-[#256079] hover:bg-[#1D4F64] text-white text-[13px] sm:text-sm font-medium px-6 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span>Envoyer un message</span>
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
                À votre écoute,<br />
                <span className="relative inline-block text-[#DFC27D]">
                  24h/24 &amp; 7j/7
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
                <clipPath id="contactOuterWaveClip">
                  <path d="M 1280 358 L 1280 -66 L 646.628 -66 L 646.628 -64.184 C 630.307 28.101 614.873 77.785 596.277 145.423 C 578.698 209.365 533.464 276.376 557.905 356.284 L 721.901 356.623 L 1280 358 Z" />
                </clipPath>

                <clipPath id="contactHeroBlobClip">
                  <path d="M 1280 358 L 1280 -66 L 572.702 -66 L 572.702 -62.691 C 572.702 -36.164 641.066 83.009 650.304 137.695 C 660.324 168.813 661.881 210.903 660.29 237.456 C 656.625 298.638 676.362 343.694 717.099 355.801 L 717.099 358 L 1280 358 Z" />
                </clipPath>
              </defs>

              {/* 1. Continuation of the photo on the outer wave with soft blue overlay */}
              <g clipPath="url(#contactOuterWaveClip)">
                <image
                  href="/nouvelles_photos/accueil_1.jpg"
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
              <g clipPath="url(#contactHeroBlobClip)">
                <image
                  href="/nouvelles_photos/accueil_1.jpg"
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

      {/* 2. NOS COORDONNÉES */}
      <section className="py-4 sm:py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="left" delay={100} className="max-w-2xl mb-12">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C59A3D]">
              NOS COORDONNÉES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173C4D] mt-1">
              Où nous trouver ?
            </h2>
            <p className="text-sm text-[#536E7B] mt-2">
              Notre hôtel est idéalement situé au cœur d'Antananarivo, facilement accessible et proche
              des principaux centres d'affaires et d'intérêt de la ville.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Contact Info List */}
            <Reveal direction="left" delay={150} className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#173C4D]">Adresse</h4>
                  <p className="text-xs text-[#536E7B] mt-0.5">{HOTEL_INFO.address}</p>
                  <span className="text-[11px] text-gray-400">(à proximité immédiate du centre)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#173C4D]">Téléphone</h4>
                  <a
                    href={`tel:${HOTEL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-xs text-[#256079] hover:text-[#173C4D] block mt-0.5 font-medium transition-colors"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#173C4D]">Email</h4>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-xs text-[#256079] hover:text-[#173C4D] block mt-0.5 font-medium transition-colors"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#173C4D]">Horaires de réception</h4>
                  <p className="text-xs text-[#536E7B] mt-0.5">{HOTEL_INFO.receptionHours}</p>
                </div>
              </div>
            </Reveal>

            {/* Center: Map Graphic Card */}
            <Reveal delay={250} direction="up" className="rounded-2xl overflow-hidden border border-[#DCE8ED] bg-[#F2F7F9] p-6 flex flex-col items-center justify-between text-center relative aspect-[4/3] shadow-xs">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#256079_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 text-[11px] font-mono text-[#536E7B] uppercase tracking-wider">
                Ambatoroka • Antananarivo
              </div>

              <div className="relative z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#DCE8ED] max-w-[220px]">
                <div className="w-8 h-8 rounded-full bg-[#256079] text-white flex items-center justify-center mx-auto mb-1.5 shadow">
                  <Navigation className="w-4 h-4 text-[#DFC27D]" />
                </div>
                <h5 className="font-serif font-bold text-xs text-[#173C4D]">
                  White Palace Hôtel
                </h5>
                <p className="text-[10px] text-gray-500">Lot VB 12, Ambatoroka</p>
              </div>

              <div className="relative z-10">
                <a
                  href="https://maps.google.com/?q=Lot+VB+12+Ambatoroka+Antananarivo"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#256079] hover:bg-[#1D4F64] text-white text-[11px] font-semibold transition shadow-xs cursor-pointer"
                >
                  <span>Voir sur Google Maps</span>
                  <ArrowRight className="w-3 h-3 text-[#DFC27D]" />
                </a>
              </div>
            </Reveal>

            {/* Right: Accès Facile */}
            <Reveal delay={350} direction="right" className="bg-white rounded-2xl p-6 border border-[#DCE8ED] shadow-xs space-y-4">
              <h4 className="font-serif text-base font-bold text-[#173C4D]">Accès facile</h4>
              <div className="space-y-3.5 text-xs text-[#536E7B]">
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#256079] shrink-0" />
                  <span>À 15 min de l'Aéroport international d'Ivato</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#256079] shrink-0" />
                  <span>À 10 min du centre-ville historique</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#256079] shrink-0" />
                  <span>Proche des commerces et ministères</span>
                </div>
                <div className="flex items-center gap-3">
                  <ParkingCircle className="w-4 h-4 text-[#256079] shrink-0" />
                  <span>Parking privé sécurisé 24h/24</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. ENVOYEZ-NOUS UN MESSAGE */}
      <section id="contact-form-section" className="py-4 sm:py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Photo + script */}
            <Reveal direction="left" delay={150} className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative border border-[#DCE8ED]">
                <img
                  src={RESTAURANT_INTERIOR_IMAGE}
                  alt="Réception White Palace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112A36]/85 via-[#173C4D]/30 to-transparent flex items-end p-6">
                  <span className="font-['Caveat'] text-[#DFC27D] text-2xl sm:text-3xl leading-snug">
                    Un message et nous vous répondons avec plaisir dans les plus brefs délais !
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: Contact Form */}
            <Reveal delay={250} direction="right" className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE8ED] shadow-sm">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C59A3D]">
                  ENVOYEZ-NOUS UN MESSAGE
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#173C4D] mt-1">
                  Nous écrire
                </h2>
                <p className="text-xs text-[#536E7B] mt-1">
                  Remplissez le formulaire ci-dessous, notre équipe de conciergerie vous répondra avec soin.
                </p>
              </div>

              {formSent ? (
                <div className="text-center py-10 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#256079] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#173C4D]">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-xs text-[#536E7B]">
                    Merci {name}, votre demande concernant « {subject} » a bien été transmise à notre équipe.
                    Une réponse personnalisée vous parviendra très rapidement par email ({email}).
                  </p>
                  <button
                    onClick={() => {
                      setFormSent(false);
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#256079] hover:bg-[#1D4F64] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#173C4D] mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#DCE8ED] bg-[#F8FAFC] focus:outline-none focus:border-[#256079] focus:ring-1 focus:ring-[#256079]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#173C4D] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@domaine.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#DCE8ED] bg-[#F8FAFC] focus:outline-none focus:border-[#256079] focus:ring-1 focus:ring-[#256079]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173C4D] mb-1">
                      Objet de votre message *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#DCE8ED] bg-[#F8FAFC] focus:outline-none focus:border-[#256079] focus:ring-1 focus:ring-[#256079]"
                    >
                      <option>Demande d’information générale</option>
                      <option>Réservation de chambre</option>
                      <option>Réservation restaurant / banquet</option>
                      <option>Service conciergerie &amp; transfert</option>
                      <option>Partenariat d'entreprise</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#173C4D] mb-1">
                      Votre message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Comment pouvons-nous vous aider ?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#DCE8ED] bg-[#F8FAFC] focus:outline-none focus:border-[#256079] focus:ring-1 focus:ring-[#256079]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#256079] hover:bg-[#1D4F64] text-white text-xs font-semibold tracking-wider uppercase transition shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>Envoyer le message</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DFC27D]" />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. QUESTIONS FRÉQUENTES */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Accordion */}
            <Reveal direction="left" delay={150} className="lg:col-span-8">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C59A3D]">
                QUESTIONS FRÉQUENTES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#173C4D] mt-1">
                Vous avez une autre question ?
              </h2>
              <p className="text-sm text-[#536E7B] mt-1 mb-8">
                Retrouvez ici les réponses aux questions les plus couramment posées par nos hôtes.
              </p>

              <div className="divide-y divide-[#DCE8ED] border-y border-[#DCE8ED]">
                {FAQ_ITEMS.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="py-4">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer"
                      >
                        <span className="text-sm font-semibold text-[#173C4D] group-hover:text-[#256079] transition-colors">
                          {faq.question}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-[#EBF3F6] text-[#256079] flex items-center justify-center shrink-0 border border-[#DCE8ED]">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-3 text-xs text-[#536E7B] leading-relaxed pr-8 animate-fadeIn">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Right: Dark Blue Callout Card */}
            <Reveal delay={250} direction="right" className="lg:col-span-4 bg-[#173C4D] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between text-center relative overflow-hidden border border-[#256079]/50">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="text-[#DFC27D]">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                      <path
                        d="M24 4L28 14H38L30 20L33 30L24 24L15 30L18 20L10 14H20L24 4Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 36C12 36 17 32 24 32C31 32 36 36 36 36"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15 42C15 42 19 39 24 39C29 39 33 42 33 42"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-serif text-base font-bold tracking-[0.15em] uppercase leading-tight text-white">
                      WHITE PALACE
                    </div>
                    <div className="font-serif italic text-[11px] text-[#DFC27D] leading-none tracking-wider">
                      Hôtel
                    </div>
                  </div>
                </div>
                <div className="pt-4 font-['Caveat'] text-3xl text-[#DFC27D] leading-tight">
                  À très bientôt au White Palace Hôtel !
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onOpenRoomBooking()}
                  className="w-full py-3.5 rounded-full border border-[#DFC27D] text-[#DFC27D] hover:bg-[#DFC27D] hover:text-[#173C4D] text-xs font-semibold tracking-wider uppercase transition shadow-xs cursor-pointer"
                >
                  Réserver maintenant
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
