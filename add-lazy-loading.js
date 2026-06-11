
const fs = require('fs');
const path = require('path');

// Directory containing components
const componentsDir = path.join(__dirname, 'app', 'Components');

// Process all files in components directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (['.jsx', '.tsx', '.js', '.ts'].includes(path.extname(file))) {
      processFile(filePath);
    }
  }
}

function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Match img tags and add loading="lazy" if not present
  // Improved regex to handle newlines and various formats
  content = content.replace(/<img([^>]*?)>/g, (match, attrs) => {
    // Check if loading attribute already exists (case-insensitive)
    if (/loading\s*=/i.test(attrs)) {
      return match;
    }
    
    // Insert loading="lazy" before the closing > or />
    if (match.endsWith('/>')) {
      return `<img${attrs} loading="lazy" />`;
    } else {
      return `<img${attrs} loading="lazy">`;
    }
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
}

// Start processing
processDirectory(componentsDir);
console.log('Done!');
