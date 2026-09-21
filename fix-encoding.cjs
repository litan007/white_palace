const fs = require('fs');
const path = require('path');

const map = {
  'Ã©': 'é',
  'Ã¨': 'è',
  'Ãª': 'ê',
  'Ã«': 'ë',
  'Ã Ar': 'À', // Was 'Ã€' -> 'Ã Ar'
  'Ã€': 'À',
  'Ã‰': 'É',
  'Ã¢': 'â',
  'Ã®': 'î',
  'Ã´': 'ô',
  'Ã»': 'û',
  'Ã§': 'ç',
  'â€™': "'",
  'â€œ': '"',
  'â€': '"',
  'Å“': 'œ',
  'Ã¯': 'ï',
  'Ã': 'à' // A0 is NBSP, usually it looks like just 'Ã' if NBSP is stripped, we'll try 'Ã '
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  for (let key in map) {
    if (key === 'Ã') {
      // Special case for 'à': UTF-8 'C3 A0'. A0 is NBSP.
      // So 'Ã' + NBSP.
      content = content.replace(new RegExp('Ã\\xA0', 'g'), 'à');
      content = content.replace(new RegExp('Ã ', 'g'), 'à');
    } else {
      content = content.split(key).join(map[key]);
    }
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
});
