import React, { useState } from 'react';
import { 
  Trees, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Sparkles 
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0F1C] text-slate-100/80 border-t border-slate-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-md">
              <Trees className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="font-serif text-xl font-bold tracking-widest text-amber-100 uppercase">
                WHITE PALACE
              </div>
              <div className="text-[10px] tracking-widest uppercase text-amber-300/80 font-sans font-light">
                LUXURY HOTEL & RESTAURANT
              </div>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-200/70 font-light">
            Un hôtel & restaurant de luxe au cœur d'Andasibe, oÃ¹ la nature et l'élégance ne font qu'un. Immersion féérique parmi les forêts tropicales et les lémuriens d'exception.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900/40 border border-slate-700/50 flex items-center justify-center text-emerald-300 hover:text-amber-300 hover:border-amber-400/60 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900/40 border border-slate-700/50 flex items-center justify-center text-emerald-300 hover:text-amber-300 hover:border-amber-400/60 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-900/40 border border-slate-700/50 flex items-center justify-center text-emerald-300 hover:text-amber-300 hover:border-amber-400/60 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Liens Rapides */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-amber-200 border-b border-slate-800/60 pb-2">
            LIENS RAPIDES
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors">Accueil</button></li>
            <li><button onClick={() => handleNav('rooms')} className="hover:text-amber-300 transition-colors">Chambres & Suites</button></li>
            <li><button onClick={() => handleNav('restaurant')} className="hover:text-amber-300 transition-colors">Restaurant & Carte</button></li>
            <li><button onClick={() => handleNav('experiences')} className="hover:text-amber-300 transition-colors">Expériences & Activités</button></li>
            <li><button onClick={() => handleNav('offers')} className="hover:text-amber-300 transition-colors">Offres Spéciales</button></li>
            <li><button onClick={() => handleNav('blog')} className="hover:text-amber-300 transition-colors">Blog & Actualités</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors">À propos d'Andasibe</button></li>
            <li><button onClick={() => handleNav('gallery')} className="hover:text-amber-300 transition-colors">Galerie Photos</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">Contact & Accès</button></li>
          </ul>
        </div>

        {/* Column 3: Informations */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-amber-200 border-b border-slate-800/60 pb-2">
            INFORMATIONS
          </h4>
          <ul className="space-y-2 text-xs text-slate-200/70">
            <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-400" /> Meilleur tarif garanti</li>
            <li>Conditions générales de vente</li>
            <li>Politique de confidentialité</li>
            <li>Mentions légales</li>
            <li>Plan du domaine & Réserve</li>
            <li>Faq & Conseils de voyage</li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Map Location */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold tracking-widest uppercase text-amber-200 border-b border-slate-800/60 pb-2">
            NEWSLETTER
          </h4>
          <p className="text-xs text-slate-200/70">
            Inscrivez-vous pour recevoir nos offres exclusives et actualités.
          </p>

          {subscribed ? (
            <div className="bg-slate-900/60 border border-amber-400/40 rounded p-3 text-xs text-amber-200 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Merci ! Vous êtes inscrit à notre newsletter exclusive.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0F172A] border border-slate-800/80 text-xs px-3 py-2 rounded-lg text-white focus:outline-none focus:border-amber-400/60 flex-1 placeholder:text-slate-600/80"
              />
              <button
                type="submit"
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white p-2 rounded-lg transition-all"
                aria-label="S'abonner"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          {/* Madagascar Map with Pin */}
          <div className="pt-2 flex items-center justify-center">
            <div className="relative w-36 h-28 flex items-center justify-center bg-[#0F172A]/50 rounded-xl border border-slate-900/40 p-2">
              {/* Madagascar SVG silhouette */}
              <svg viewBox="0 0 100 180" className="w-16 h-24 fill-slate-800/40 stroke-slate-600/40 stroke-[1.5]">
                <path d="M 50,10 C 58,15 62,35 60,50 C 58,65 65,85 70,110 C 75,130 65,155 50,170 C 40,160 38,135 42,110 C 45,90 38,65 40,40 Z" />
              </svg>
              {/* Pin point on Andasibe (east central) */}
              <div className="absolute top-[38%] right-[22%] flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-black relative z-10" />
                <span className="text-[10px] font-bold text-amber-300 tracking-wider uppercase drop-shadow ml-1">Andasibe</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 pt-6 border-t border-slate-900/40 text-center text-xs text-emerald-300/50 font-light">
        Â© 2025 White Palace Luxury Hotel & Restaurant. Tous droits réservés.
      </div>
    </footer>
  );
};

