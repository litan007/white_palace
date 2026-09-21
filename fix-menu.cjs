const fs = require('fs');

const file = './src/data/hotelData.ts';
let content = fs.readFileSync(file, 'utf8');

const drinksBlock = `  {
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
  }`;

// Remove it from where it is now (around line 268)
content = content.replace(",\n" + drinksBlock, "");

// Add it to the end of MENU_ITEMS
// Look for the end of MENU_ITEMS array, which is before "export const EXPERIENCES"
content = content.replace(
  "  }\n];\n\nexport const EXPERIENCES",
  "  },\n" + drinksBlock + "\n];\n\nexport const EXPERIENCES"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed hotelData.ts');
