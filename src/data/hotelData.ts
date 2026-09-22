import { Room, MenuItem, GalleryItem, FAQItem } from '../types';

const accueil1Img = '/nouvelles_photos/accueil_1.jpg';
const accueil2Img = '/nouvelles_photos/accueil_2.jpg';
const chambreFondImg = '/nouvelles_photos/chambre_de_fond.jpg';
const chambreLit1Img = '/nouvelles_photos/chambre_lit_1.jpg';
const chambreLit2Img = '/nouvelles_photos/chambre_lit_2.jpg';
const chambreLit3Img = '/nouvelles_photos/chambre_lit_3.jpg';
const chambreLit4Img = '/nouvelles_photos/chambre_lit_4.jpg';
const chambreLit5Img = '/nouvelles_photos/chambre_lit_5.jpg';
const chambreSalon1Img = '/nouvelles_photos/chambre_sallon_1.jpg';
const chambreSalon2Img = '/nouvelles_photos/chambre_sallon_2.jpg';
const chambreSalon3Img = '/nouvelles_photos/chambre_sallon_3.jpg';
const chambreSalon4Img = '/nouvelles_photos/chambre_sallon_4.jpg';
const coinDetente1Img = '/nouvelles_photos/coin_détente_1.jpg';
const coinDetente2Img = '/nouvelles_photos/coin_détente_2.jpg';
const equipeEmployeImg = '/nouvelles_photos/equipe_employé.jpg';
const facade1Img = '/nouvelles_photos/fascade_1.jpg';
const gateau1Img = '/nouvelles_photos/gateau_1.jpg';
const gateau2Img = '/nouvelles_photos/gateau_2.jpg';
const gateau3Img = '/nouvelles_photos/gateau_3.jpg';
const gateau4Img = '/nouvelles_photos/gateau_4.jpg';
const offre1Img = '/nouvelles_photos/offre_1.jpg';
const photoNature1Img = '/nouvelles_photos/photo_nature_1.jpg';
const photoNature2Img = '/nouvelles_photos/photo_nature_2.jpg';
const photoProprioImg = '/nouvelles_photos/photo_propiro_et_associé_1.jpg';
const photoProprio2Img = '/nouvelles_photos/photo_propiro_et_associé_2.jpg';
const remiseAttestationImg = '/nouvelles_photos/remise_attestation.jpg';
const salleRestaurant1Img = '/nouvelles_photos/salle-restaurant_1.jpg';
const salleRestaurant2Img = '/nouvelles_photos/salle-restaurant_2.jpg';
const salleRestaurant3Img = '/nouvelles_photos/salle-restaurant_3.jpg';
const salleMassageImg = '/nouvelles_photos/salle_massage.jpg';
const salleRecuperationSportImg = '/nouvelles_photos/salle_recuperation_sport.jpg';
const salleSportImg = '/nouvelles_photos/salle_sport.jpg';
const terrasse1Img = '/nouvelles_photos/terrasse_1.jpg';
const terrasse2Img = '/nouvelles_photos/terrasse_2.jpg';
const vueTanaImg = '/nouvelles_photos/vue_sur_tana.jpg';
const aPropos1Img = '/nouvelles_photos/à_propos_1.jpg';
const aPropos2Img = '/nouvelles_photos/à_propos_2.jpg';
const aPropos3Img = '/nouvelles_photos/à_propos_3.jpg';
const entreeSaladeImg = '/nouvelles_photos/entree_salade.jpg';
const platCarpaccioImg = '/nouvelles_photos/plat_carpaccio.jpg';
const platPoissonImg = '/nouvelles_photos/plat_poisson.jpg';
const boissonCocktailImg = '/nouvelles_photos/boisson_cocktail.jpg';

const vitrineVetiverImg = '/nouvelles_photos/vitrine_vetiver.jpg';

export const HERO_LODGE_IMAGE = accueil1Img;
export const LEMUR_IMAGE = equipeEmployeImg;
export const SUITE_LAGON_IMAGE = chambreLit1Img;
export const GOURMET_DINING_IMAGE = salleRestaurant1Img;
export const SPA_RELAX_IMAGE = salleMassageImg;
export const VILLA_NATURE_IMAGE = chambreSalon1Img;
export const SUITE_PRESTIGE_IMAGE = chambreSalon4Img;
export const HOTEL_EXTERIOR_IMAGE = vueTanaImg;
export const RESTAURANT_INTERIOR_IMAGE = salleRestaurant2Img;
export const PRESTIGE_LIVING_IMAGE = coinDetente1Img;
export const LEMUR_CLOSE_IMAGE = aPropos1Img;
export const ROOMS_HERO_IMAGE = chambreFondImg;

export const ROOMS: Room[] = [
  {
    id: 'chambre-luxe',
    title: 'CHAMBRE LUXE',
    subtitle: 'Confort absolu et élégance',
    category: 'suite',
    price: 250000,
    surface: 45,
    capacity: 2,
    view: 'Vue ville',
    shortDescription: 'Chambre de luxe spacieuse, idéale pour un séjour tout en élégance et sérénité.',
    fullDescription: 'Profitez d\'une chambre de luxe alliant raffinement et modernité, offrant une literie d\'exception et un espace salon. Conçue pour répondre aux attentes des voyageurs les plus exigeants avec des matériaux nobles.',
    images: [
      chambreLit1Img,
      chambreSalon1Img,
      chambreFondImg
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi par chambre gratuit',
      'Box TV',
      'Réception ouverte 24h/24',
      'Service de concierge gratuit',
      'Sécurité 24h/24'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'appartement',
    title: 'APPARTEMENT',
    subtitle: 'Votre espace privé en plein centre-ville',
    category: 'villa',
    price: 200000,
    surface: 60,
    capacity: 4,
    view: 'Vue panoramique',
    shortDescription: 'Appartement spacieux offrant toute l\'indépendance nécessaire pour vos séjours prolongés.',
    fullDescription: 'Un appartement élégant et entièrement aménagé, parfait pour les séjours en famille ou d\'affaires prolongés. Espace généreux avec salon indépendant, alliant le confort de l\'hôtel à l\'intimité d\'un chez-soi.',
    images: [
      chambreSalon4Img,
      chambreLit2Img,
      coinDetente2Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi par chambre gratuit',
      'Box TV',
      'Espace salon',
      'Réception ouverte 24h/24',
      'Sécurité 24h/24'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'chambre-cuisine',
    title: 'CHAMBRE AVEC CUISINE',
    subtitle: 'Autonomie et confort',
    category: 'suite',
    price: 200000,
    surface: 50,
    capacity: 2,
    view: 'Vue ville',
    shortDescription: 'Chambre double équipée d\'une kitchenette pour plus d\'indépendance.',
    fullDescription: 'La chambre idéale pour ceux qui aiment leur indépendance tout en bénéficiant des services de l\'hôtel. Elle comprend une cuisine fonctionnelle et un espace repas intimiste.',
    images: [
      chambreSalon2Img,
      chambreLit3Img,
      chambreFondImg
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi par chambre gratuit',
      'Kitchenette équipée',
      'Box TV',
      'Réception 24h/24',
      'Service de concierge gratuit'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'chambre-familiale',
    title: 'CHAMBRE FAMILIALE',
    subtitle: 'Espace et sérénité pour toute la famille',
    category: 'lodge',
    price: 175000,
    surface: 70,
    capacity: 4,
    view: 'Vue cour',
    shortDescription: 'Idéal pour les familles, un espace confortable et chaleureux au calme.',
    fullDescription: 'Passez des moments inoubliables en famille dans cette chambre spacieuse. Elle offre un grand espace de vie avec des lits confortables pour parents et enfants, dans un cadre sécurisé et très calme.',
    images: [
      chambreLit4Img,
      chambreSalon3Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi par chambre gratuit',
      'Box TV',
      'Réception ouverte 24h/24',
      'Sécurité 24h/24'
    ],
    rating: 4,
    featured: false
  },
  {
    id: 'chambre-handicape',
    title: 'CHAMBRE PMR',
    subtitle: 'Accessibilité et confort',
    category: 'lodge',
    price: 180000,
    surface: 40,
    capacity: 2,
    view: 'Vue ville',
    shortDescription: 'Chambre spécialement aménagée pour les personnes à mobilité réduite.',
    fullDescription: 'Cette chambre spacieuse est spécialement conçue et aménagée pour offrir un confort maximal et une accessibilité totale aux personnes à mobilité réduite. Salle d\'eau adaptée et aménagements spécifiques.',
    images: [
      chambreLit5Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi gratuit',
      'Aménagements PMR',
      'Box TV',
      'Réception 24h/24',
      'Sécurité 24h/24'
    ],
    rating: 5,
    featured: false
  },
  {
    id: 'chambre-double',
    title: 'CHAMBRE DOUBLE',
    subtitle: 'Idéal pour les couples',
    category: 'villa',
    price: 145000,
    surface: 35,
    capacity: 2,
    view: 'Vue cour',
    shortDescription: 'Chambre chaleureuse et lumineuse, idéale pour un séjour à deux.',
    fullDescription: 'Une chambre très confortable avec un grand lit double, offrant une décoration soignée et tout l\'équipement nécessaire pour un séjour agréable au cœur d\'Antananarivo.',
    images: [
      chambreLit2Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi gratuit',
      'Box TV',
      'Réception 24h/24',
      'Service de concierge gratuit',
      'Sécurité 24h/24'
    ],
    rating: 4,
    featured: false
  },
  {
    id: 'chambre-twin',
    title: 'CHAMBRE TWIN',
    subtitle: 'Pratique et confortable',
    category: 'lodge',
    price: 135000,
    surface: 30,
    capacity: 2,
    view: 'Vue ville',
    shortDescription: 'Chambre avec deux lits séparés, parfaite pour amis ou collègues.',
    fullDescription: 'Chambre lumineuse équipée de deux lits simples. Idéale pour les voyageurs d\'affaires ou les amis souhaitant partager une chambre tout en gardant leur propre espace.',
    images: [
      chambreLit3Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi gratuit',
      'Box TV',
      'Réception 24h/24',
      'Sécurité 24h/24'
    ],
    rating: 4,
    featured: false
  },
  {
    id: 'chambre-single',
    title: 'CHAMBRE SINGLE',
    subtitle: 'Le confort au meilleur prix',
    category: 'lodge',
    price: 135000,
    surface: 25,
    capacity: 1,
    view: 'Vue cour',
    shortDescription: 'Chambre cosy et fonctionnelle pour voyageur solo.',
    fullDescription: 'Une chambre douillette conçue pour les voyageurs en solo. Profitez d\'un confort optimal, du petit-déjeuner inclus et de notre service de conciergerie à un prix très attractif.',
    images: [
      chambreLit5Img
    ],
    amenities: [
      'Petit déjeuner inclus',
      'WiFi gratuit',
      'Box TV',
      'Réception 24h/24',
      'Sécurité 24h/24'
    ],
    rating: 4,
    featured: false
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'salade-chou',
    title: 'Salade de chou à l\'indienne',
    category: 'entrees',
    price: 5000,
    description: 'Salade fraîche et croquante de chou avec ses épices douces à l\'indienne.',
    image: entreeSaladeImg,
    tags: ['Frais', 'Végétarien'],
    recommended: false
  },
  {
    id: 'salade-tomate',
    title: 'Salade de Tomate mauricienne',
    category: 'entrees',
    price: 8000,
    description: 'Tomates fraîches marinées à la façon mauricienne, pleine de saveurs.',
    image: platPoissonImg,
    tags: ['Spécialité'],
    recommended: true
  },
  {
    id: 'carpaccio-zebu',
    title: 'Carpaccio de zébu',
    category: 'plats',
    price: 20000,
    description: 'Tranches fines de zébu sélectionné, marinées avec soin et accompagnées de crudités.',
    image: platCarpaccioImg,
    tags: ['Suggestion du Chef'],
    recommended: true
  },
  {
    id: 'mille-feuille-tomate',
    title: 'Mille feuille de Tomate au fromage',
    category: 'plats',
    price: 20000,
    description: 'Un délicieux mille feuille végétarien, couches de tomates fondantes et fromage affiné.',
    image: entreeSaladeImg,
    tags: ['Végétarien'],
    recommended: false
  },
  {
    id: 'poulet-carry',
    title: 'Cuisse de poulet sauce carry',
    category: 'plats',
    price: 25000,
    description: 'Cuisse de poulet mijotée dans une sauce carry onctueuse, accompagnée de son riz frit aux légumes croquants.',
    image: platCarpaccioImg,
    tags: ['Copieux', 'Épicé'],
    recommended: true
  },
  {
    id: 'merlan-poivres',
    title: 'Merlan sauce aux poivres',
    category: 'plats',
    price: 20000,
    description: 'Filet de merlan poêlé nappé d\'une sauce aux poivres de Madagascar, servi avec du riz blanc parfumé.',
    image: platPoissonImg,
    tags: ['Poisson'],
    recommended: true
  },
  {
    id: 'chou-farci',
    title: 'Chou farci sauce carry',
    category: 'plats',
    price: 10000,
    description: 'Chou savoureusement farci et accompagné de sa sauce carry parfumée.',
    image: entreeSaladeImg,
    tags: ['Tradition'],
    recommended: false
  },
  {
    id: 'legumes-poisson',
    title: 'Légumes sautés au poisson',
    category: 'plats',
    price: 15000,
    description: 'Sauté de légumes de saison et tendres morceaux de poisson, servi avec du riz jaune.',
    image: platCarpaccioImg,
    tags: ['Équilibré'],
    recommended: false
  },
  {
    id: 'carotte-halwa',
    title: 'Carotte Halwa indienne',
    category: 'desserts',
    price: 5000,
    description: 'Dessert traditionnel indien à base de carottes râpées, lait et épices douces.',
    image: gateau1Img,
    tags: ['Gourmand'],
    recommended: false
  },
  {
    id: 'gateau-opera',
    title: 'Gâteau opéra avec sauce choco',
    category: 'desserts',
    price: 10000,
    description: 'Grand classique de la pâtisserie, notre Gâteau Opéra est sublimé par une sauce chocolat intense.',
    image: gateau2Img,
    tags: ['Chef Pâtissier'],
    recommended: true
  },
  {
    id: 'chocolat-fondant',
    title: 'Chocolat au coeur fondant',
    category: 'desserts',
    price: 15000,
    description: 'Moelleux au chocolat et son coeur coulant, accompagné d\'une généreuse boule de glace au coco.',
    image: gateau3Img,
    tags: ['Chocolat', 'Signature'],
    recommended: true
  },
  {
    id: 'ananas-caramelise',
    title: 'Ananas caramélisé',
    category: 'desserts',
    price: 10000,
    description: 'Tranches d\'ananas rôties au caramel, servies avec une boule de glace à la vanille de Madagascar.',
    image: gateau4Img,
    tags: ['Frais'],
    recommended: true
  },
  {
    id: 'cocktail-maison',
    title: 'Cocktail Maison Tropical',
    category: 'boissons',
    price: 15000,
    description: 'Mélange rafraîchissant de fruits tropicaux de saison.',
    image: boissonCocktailImg,
    tags: ['Frais'],
    recommended: true
  },
  {
    id: 'thb',
    title: 'Bière THB',
    category: 'boissons',
    price: 6000,
    description: 'La célèbre bière blonde malgache, servie très fraîche.',
    image: boissonCocktailImg,
    tags: ['Locale'],
    recommended: false
  },
  {
    id: 'jus-naturel',
    title: 'Jus Naturel (Ananas, Corossol)',
    category: 'boissons',
    price: 8000,
    description: 'Jus de fruits frais pressés à la demande.',
    image: boissonCocktailImg,
    tags: ['Frais', 'Bio'],
    recommended: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Façade du White Palace',
    category: 'hotel',
    image: facade1Img,
    caption: 'Le bâtiment élégant de l\'hôtel situé en plein centre-ville.'
  },
  {
    id: 'g2',
    title: 'Réception et salon',
    category: 'hotel',
    image: accueil1Img,
    caption: 'Un accueil chaleureux dans un cadre raffiné et moderne.'
  },
  {
    id: 'g3',
    title: 'Vue panoramique depuis le Rooftop',
    category: 'hotel',
    image: vueTanaImg,
    caption: 'Une vue imprenable sur la ville depuis notre restaurant au 4ème étage.'
  },
  {
    id: 'g4',
    title: 'Chambre de luxe',
    category: 'hotel',
    image: chambreLit1Img,
    caption: 'Confort absolu, literie haut de gamme et espace soigné.'
  },
  {
    id: 'g5',
    title: 'Espace salon privatif',
    category: 'hotel',
    image: chambreSalon4Img,
    caption: 'Des appartements équipés de salons spacieux pour votre confort.'
  },
  {
    id: 'g6',
    title: 'Coin détente sur le Rooftop',
    category: 'hotel',
    image: terrasse1Img,
    caption: 'Profitez de la brise sur notre terrasse ensoleillée.'
  },
  {
    id: 'g7',
    title: 'Salle de restaurant élégante',
    category: 'restaurant',
    image: platCarpaccioImg,
    caption: 'Notre salle intérieure, lumineuse et accueillante.'
  },
  {
    id: 'g8',
    title: 'Gâteau Opéra par notre Pâtissier',
    category: 'restaurant',
    image: gateau2Img,
    caption: 'Pâtisserie fine confectionnée sur place par notre chef.'
  },
  {
    id: 'g9',
    title: 'Desserts personnalisés',
    category: 'restaurant',
    image: gateau3Img,
    caption: 'Pour vos anniversaires et événements familiaux, passez commande !'
  },
  {
    id: 'g10',
    title: 'Menu et suggestions du jour',
    category: 'restaurant',
    image: platPoissonImg,
    caption: 'Une carte variée pour satisfaire toutes vos envies gourmandes.'
  },
  {
    id: 'g11',
    title: 'Salon Paradis du Bien-Être',
    category: 'experiences',
    image: salleMassageImg,
    caption: 'L\'espace Spa dédié à votre relaxation.'
  },
  {
    id: 'g12',
    title: 'Salle de sport et remise en forme',
    category: 'experiences',
    image: salleSportImg,
    caption: 'Un espace fitness équipé à la disposition de notre clientèle.'
  },
  {
    id: 'g13',
    title: 'Récupération et soins',
    category: 'experiences',
    image: salleRecuperationSportImg,
    caption: 'Combinez activité sportive et massages thérapeutiques.'
  },
  {
    id: 'g14',
    title: 'La vitrine d\'artisanat local',
    category: 'hotel',
    image: vitrineVetiverImg,
    caption: 'Découvrez la vitrine VETIVER de Ts\'Art Fibre dans le hall.'
  },
  {
    id: 'g15',
    title: 'Notre Équipe dévouée',
    category: 'hotel',
    image: equipeEmployeImg,
    caption: 'Le staff du White Palace, toujours souriant et à votre service.'
  }
];

export const KEY_STATS = [
  { value: '64', label: 'CHAMBRES & SUITES' },
  { value: '4e', label: 'ÉTAGE ROOFTOP' },
  { value: '24/7', label: 'RÉCEPTION & SÉCURITÉ' },
  { value: '100%', label: 'CENTRE VILLE' }
];

export const HOTEL_INFO = {
  name: 'WHITE PALACE',
  tagline: 'HÔTEL & RESTAURANT TSARALALÀNA',
  motto: 'L\'élégance en plein centre-ville',
  submotto: 'Un lieu chaleureux, très calme avec un Restaurant en Rooftop et un espace fitness pour tous.',
  address: 'Rue de Liège Tsaralalàna, Antananarivo 101, Madagascar',
  phone: '+261 32 07 669 98',
  email: 'whitepalacetana@gmail.com',
  receptionHours: 'Réception ouverte 24h/24',
  coordinates: { lat: -18.9100, lng: 47.5256 }
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Comment effectuer une réservation ?',
    answer: 'Vous pouvez réserver directement en ligne sur notre site en cliquant sur le bouton "Réserver", par téléphone au +261 32 07 669 98, ou en nous écrivant à whitepalacetana@gmail.com. Une confirmation immédiate vous sera envoyée.'
  },
  {
    id: 'faq-2',
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les cartes bancaires internationales (Visa, MasterCard), les espèces (Ariary, Euros, Dollars au taux du jour) ainsi que le Mobile Money (Mvola, Orange Money, Airtel Money).'
  },
  {
    id: 'faq-3',
    question: 'L\'hôtel propose-t-il un service de transfert ?',
    answer: 'Oui, nous mettons à votre disposition une navette privée pour vos transferts entre l\'Aéroport International d\'Ivato et l\'hôtel (environ 15 minutes de trajet). Il suffit de nous communiquer vos détails de vol lors de la réservation.'
  },
  {
    id: 'faq-4',
    question: 'Y a-t-il une connexion Wi-Fi ?',
    answer: 'Une connexion Wi-Fi haut débit et sécurisée est disponible gratuitement et en illimité dans toutes les chambres ainsi que dans l\'ensemble des espaces communs de l\'établissement.'
  },
  {
    id: 'faq-5',
    question: 'Les animaux de compagnie sont-ils acceptés ?',
    answer: 'Les petits animaux de compagnie propres et bien éduqués sont acceptés sur demande préalable auprès de notre équipe lors de la réservation de votre chambre.'
  }
];
