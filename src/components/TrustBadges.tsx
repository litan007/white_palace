import { ShieldCheck, RefreshCw, Coffee, Lock } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Meilleur tarif garanti',
      desc: 'Réservez directement en ligne pour bénéficier du meilleur prix garanti'
    },
    {
      icon: RefreshCw,
      title: 'Annulation flexible',
      desc: 'Annulation sans frais jusqu\'à 48h avant votre arrivée'
    },
    {
      icon: Coffee,
      title: 'Petit-déjeuner inclus',
      desc: 'Buffet gourmand et produits frais préparés quotidiennement'
    },
    {
      icon: Lock,
      title: 'Paiement sécurisé',
      desc: 'Transactions 100% sécurisées avec confirmation immédiate'
    }
  ];

  return (
    <div className="bg-[#173C4D] border-y border-[#256079]/50 py-10 px-4 sm:px-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {badges.map((b, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-[#112A36]/60 p-5 rounded-2xl border border-[#256079]/40 backdrop-blur-sm hover:border-[#DFC27D]/50 transition-colors">
            <div className="p-3 rounded-xl bg-[#256079]/40 text-[#DFC27D] border border-[#DFC27D]/30 shrink-0">
              <b.icon className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#DFC27D]">
                {b.title}
              </h4>
              <p className="text-[11px] text-white/80 font-light leading-snug">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
