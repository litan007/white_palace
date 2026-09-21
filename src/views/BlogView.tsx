import React, { useState } from 'react';
import { BLOG_POSTS, BLOG_HERO_IMAGE } from '../data/hotelData';
import { BlogPost } from '../types';
import { 
  ChevronDown, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  X, 
  ArrowRight, 
  Share2, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface BlogViewProps {
  onOpenRoomBooking: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onOpenRoomBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-[#F8FAFC] text-[#111827] min-h-screen pb-20 space-y-12">
      
      {/* Full Screen Header Banner */}
      <section className="relative h-screen min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={BLOG_HERO_IMAGE}
            alt="Blog & Actualités White Palace"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-5 pt-12 text-white">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase block">
            JOURNAL & RÉCITS D'EXPÉDITION
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-wide text-white">
            Le Blog de White Palace
          </h1>
          <p className="text-sm sm:text-lg text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Histoires passionnantes de la faune sauvage, secrets de notre cuisine et coulisses de notre engagement vert.
          </p>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 animate-bounce cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('blog-content-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90 font-medium group-hover:text-amber-300 transition-colors">Explorer le journal</span>
          <ChevronDown className="w-5 h-5 text-amber-200 group-hover:text-amber-300 transition-colors" />
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <div id="blog-content-section" className="max-w-6xl mx-auto px-4 sm:px-8 pt-4 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#EAE6DE] shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'TOUT' },
              { id: 'faune-flore', label: 'FAUNE & FLORE' },
              { id: 'gastronomie', label: 'GASTRONOMIE' },
              { id: 'conseils', label: 'CONSEILS VOYAGE' },
              { id: 'conservation', label: 'CONSERVATION' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                  selectedCategory === tab.id
                    ? 'bg-[#1E293B] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-gray-600 hover:bg-slate-50 hover:text-[#1E293B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] text-xs pl-9 pr-4 py-2.5 rounded-full border border-[#EAE6DE] focus:outline-none focus:border-[#1E293B] text-[#111827]"
            />
          </div>

        </div>
      </div>

      {/* FEATURED POST (Shown if no search query & 'all' category) */}
      {selectedCategory === 'all' && !searchQuery && featuredPost && (
        <section className="max-w-6xl mx-auto px-4 sm:px-8">
          <div 
            onClick={() => setActiveArticle(featuredPost)}
            className="group cursor-pointer bg-white rounded-3xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
          >
            <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] lg:aspect-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-amber-400 text-[#050A14] font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>À LA UNE</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-800 font-medium">
                  <span className="bg-slate-50 text-[#1E293B] px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-[10px]">
                    {featuredPost.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] group-hover:text-amber-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE6DE] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <User className="w-3.5 h-3.5 text-amber-600" />
                  <span>{featuredPost.author}</span>
                </div>
                
                <span className="text-xs font-semibold text-[#1E293B] group-hover:text-amber-600 flex items-center gap-1">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B]">
            {filteredPosts.length > 0 ? 'Tous nos articles' : 'Aucun article trouvé'}
          </h3>
          <span className="text-xs text-gray-500">
            {filteredPosts.length} publication{filteredPosts.length > 1 ? 's' : ''}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#EAE6DE] space-y-3">
            <BookOpen className="w-10 h-10 text-gray-300 mx-auto" />
            <p className="text-sm text-gray-600 font-medium">
              Aucun résultat ne correspond à votre recherche "{searchQuery}".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs text-[#1E293B] underline font-semibold hover:text-amber-600"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActiveArticle(post)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#EAE6DE] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#050A14]/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-amber-400/30">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-600" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#111827] group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-500 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#EAE6DE]/60 mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="bg-slate-50 text-[#1E293B] text-[10px] px-2 py-0.5 rounded-md font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-[#1E293B] group-hover:text-amber-600 flex items-center gap-1 shrink-0">
                    Lire
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* FULL ARTICLE MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-[#F8FAFC] text-[#111827] w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto border border-slate-900/30">
            
            {/* Modal Header Bar */}
            <div className="bg-[#050A14] text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs text-amber-300 uppercase tracking-widest font-semibold">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Le Journal de White Palace</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="text-xs text-slate-200 hover:text-white flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Lien copié !</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Partager</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="w-8 h-8 rounded-full bg-slate-900/60 hover:bg-slate-800 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              
              {/* Article Hero */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-800 font-medium">
                  <span className="bg-[#1E293B] text-amber-300 px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-[10px]">
                    {activeArticle.category.replace('-', ' ')}
                  </span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#1E293B] leading-tight">
                  {activeArticle.title}
                </h1>

                <div className="flex items-center gap-3 pt-2 text-xs text-gray-600 border-b border-[#EAE6DE] pb-4">
                  <div className="w-8 h-8 rounded-full bg-[#1E293B] text-amber-300 font-bold flex items-center justify-center text-xs">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827]">{activeArticle.author}</p>
                    <p className="text-[10px] text-gray-500">Rédacteur pour White Palace Hotel</p>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-5 text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index} className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-[#1E293B] first-letter:mr-1">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-[#EAE6DE]">
                <Tag className="w-3.5 h-3.5 text-amber-600" />
                {activeArticle.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-50 text-[#1E293B] text-xs px-3 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Call to action inside modal */}
              <div className="bg-[#050A14] text-white rounded-2xl p-6 sm:p-8 space-y-4 text-center border border-slate-800">
                <h4 className="font-serif text-xl text-amber-300 font-bold">
                  Envie de vivre cette expérience en direct ?
                </h4>
                <p className="text-xs sm:text-sm text-slate-100 font-light max-w-md mx-auto">
                  Réservez dès maintenant votre séjour au cœur de la forêt d'Andasibe et laissez-nous organiser vos visites guidées.
                </p>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenRoomBooking();
                  }}
                  className="bg-amber-400 hover:bg-amber-300 text-[#050A14] font-bold text-xs px-8 py-3.5 rounded-full uppercase tracking-wider shadow-lg transition-all"
                >
                  RÉSERVER UN SÉJOUR
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

