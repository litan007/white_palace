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
  
  // Fix broken bullets
  content = content.replace(/â Ar¢/g, '•');
  content = content.replace(/â€¢/g, '•');
  
  // Fix squared meter
  content = content.replace(/mÂ²/g, 'm²');
  
  // Fix broken Euros and format price
  content = content.replace(/\{([a-zA-Z0-9_.]+ \* nights)\}â‚¬/g, '{$1.toLocaleString(\'fr-MG\')} Ar');
  content = content.replace(/\{([a-zA-Z0-9_.]+)\}â‚¬/g, '{$1.toLocaleString(\'fr-MG\')} Ar');
  content = content.replace(/\+\{([a-zA-Z0-9_.]+)\}â‚¬/g, '+{$1.toLocaleString(\'fr-MG\')} Ar');
  content = content.replace(/â‚¬/g, ' Ar');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed garbage in', file);
  }
});
