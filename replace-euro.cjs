const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
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
  
  // Replace explicit variable prices with toLocaleString
  content = content.replace(/\{([a-zA-Z0-9_.]+)\.price\}€/g, '{$1.price.toLocaleString(\'fr-MG\')} Ar');
  
  // Replace generic €
  content = content.replace(/€/g, ' Ar');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Replaced € in', file);
  }
});
