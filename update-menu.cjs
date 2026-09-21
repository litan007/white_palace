const fs = require('fs');
const path = require('path');

// 1. Update hotelData.ts
let hotelDataPath = './src/data/hotelData.ts';
let hotelDataContent = fs.readFileSync(hotelDataPath, 'utf8');

// Insert new image constants at the end of the image imports block
const newImages = `const entreeSaladeImg = '/nouvelles_photos/entree_salade.jpg';
const platCarpaccioImg = '/nouvelles_photos/plat_carpaccio.jpg';
const platPoissonImg = '/nouvelles_photos/plat_poisson.jpg';
const boissonCocktailImg = '/nouvelles_photos/boisson_cocktail.jpg';
`;
hotelDataContent = hotelDataContent.replace(
  "const aPropos3Img = '/nouvelles_photos/à_propos_3.jpg';",
  "const aPropos3Img = '/nouvelles_photos/à_propos_3.jpg';\n" + newImages
);

// Replace images for entrees and plats
hotelDataContent = hotelDataContent.replace(/image: salleRestaurant2Img/g, "image: entreeSaladeImg"); // For salades/chou
hotelDataContent = hotelDataContent.replace(/image: salleRestaurant3Img/g, "image: platPoissonImg"); // For merlan
hotelDataContent = hotelDataContent.replace(/image: salleRestaurant1Img/g, "image: platCarpaccioImg"); // For carpaccio/poulet

// Add new drinks to MENU_ITEMS
const drinks = `  {
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
`;

// Insert drinks at the end of MENU_ITEMS
hotelDataContent = hotelDataContent.replace(
  "  }\n];",
  "  },\n" + drinks + "];"
);

fs.writeFileSync(hotelDataPath, hotelDataContent, 'utf8');
console.log('Updated hotelData.ts');

// 2. Update RestaurantView.tsx
let restaurantViewPath = './src/views/RestaurantView.tsx';
let restaurantViewContent = fs.readFileSync(restaurantViewPath, 'utf8');

restaurantViewContent = restaurantViewContent.replace(
  "if (activeTab === 'desserts') return item.category === 'desserts';",
  "if (activeTab === 'desserts') return item.category === 'desserts';\n    if (activeTab === 'boissons') return item.category === 'boissons';"
);

restaurantViewContent = restaurantViewContent.replace(
  "{ id: 'desserts', label: 'DESSERTS' },",
  "{ id: 'desserts', label: 'DESSERTS' },\n            { id: 'boissons', label: 'BOISSONS' },"
);

fs.writeFileSync(restaurantViewPath, restaurantViewContent, 'utf8');
console.log('Updated RestaurantView.tsx');

