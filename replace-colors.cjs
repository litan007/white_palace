const fs = require('fs');
const path = require('path');

const colorMap = {
  '#081e1a': '#0A0F1C',
  '#041915': '#050A14',
  '#072E27': '#111827',
  '#004D40': '#1E293B',
  '#00382E': '#0F172A',
  '#07241E': '#0F172A',
  '#07251E': '#0F172A',
  '#051F1A': '#0F172A',
  '#0e2a25': '#0F172A',
  '#1c2c26': '#111827',
  '#071916': '#0A0F1C',
  '#031310': '#050A14',
  'emerald-950': 'slate-950',
  'emerald-900': 'slate-900',
  'emerald-800': 'slate-800',
  'emerald-700': 'slate-700',
  'emerald-600': 'slate-600',
  'emerald-100': 'slate-100',
  'emerald-50': 'slate-50',
  'emerald-200': 'slate-200',
  '#FAF7F2': '#F8FAFC' // Lighten the beige slightly to a crisp cool white/gray to match Slate
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
  
  for (let key in colorMap) {
    // Case-insensitive replace for hex codes
    let regex = new RegExp(key, 'gi');
    content = content.replace(regex, colorMap[key]);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed colors in', file);
  }
});
