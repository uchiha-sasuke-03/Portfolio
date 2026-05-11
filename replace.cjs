const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  { from: /glass-card/g, to: 'neo-card' },
  { from: /text-text-primary/g, to: 'text-text-neo-dark' },
  { from: /text-text-secondary/g, to: 'text-text-neo' },
  { from: /text-text-tertiary/g, to: 'text-text-neo-light' },
  { from: /bg-surface-glass/g, to: 'neo-card' },
  { from: /bg-surface-glass-hover/g, to: 'bg-bg-neo' },
  { from: /border-border-glass/g, to: 'border-transparent' }
];

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      for (const {from, to} of replacements) {
        if (from.test(content)) {
          content = content.replace(from, to);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Processed ${file}`);
      }
    }
  }
}

processDir(dir);
console.log("Done");
