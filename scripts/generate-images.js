const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { JSDOM } = require('jsdom');
const CONFIG = require('../cookbook.config');
const pngToIco = require('png-to-ico');
// Add opentype.js for text-to-path conversion
let opentype;
try {
  opentype = require('opentype.js');
} catch (error) {
  console.warn('opentype.js not installed. Text-to-path conversion will be disabled.');
}

// Function to detect if a character is an emoji
function isEmoji(character) {
  // This regex pattern aims to match emoji characters
  // It covers most common emoji patterns including skin tone modifiers
  const emojiPattern = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F191}-\u{1F251}\u{1F004}\u{1F0CF}\u{1F170}-\u{1F171}\u{1F17E}-\u{1F17F}\u{1F18E}\u{3030}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{3297}\u{3299}\u{303D}\u{00A9}\u{00AE}\u{2122}\u{23F3}\u{24C2}\u{23E9}-\u{23EF}\u{25AA}-\u{25AB}\u{25FB}-\u{25FE}\u{2B00}-\u{2BFF}\u{2600}-\u{26FF}]/u;
  return emojiPattern.test(character);
}

// Create directories if they don't exist
const publicDir = path.join(__dirname, '../public');
const iconsDir = path.join(publicDir, 'favicons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Function to convert text to SVG path
function textToPath(character) {
  if (!opentype) {
    return null; // Return null if opentype.js is not available
  }
  
  try {
    const fontFilePath = path.join(__dirname, '../public/fonts/Bagnard.otf');
    const font = opentype.loadSync(fontFilePath);
    
    // Create a path from the character
    const fontPath = font.getPath(character, 0, 0, 70);
    
    // Get the bounding box for centering
    const bbox = fontPath.getBoundingBox();
    
    return {
      path: fontPath.toSVG(),
      bbox: bbox
    };
  } catch (error) {
    console.warn('Error converting text to path:', error.message);
    return null;
  }
}

// SVG content from the Logo component
function generateSVG() {
  const character = CONFIG.logoCharacter || Array.from(CONFIG.siteTitle)[0] || '';
  const coverColor = CONFIG.themeColor;
  
  // Check if the character is an emoji
  const isEmojiCharacter = isEmoji(character);
  
  // Only try to convert text to path if it's not an emoji
  let characterPath = null;
  let centerOffsetX = 0;
  let centerOffsetY = 0;
  
  if (!isEmojiCharacter) {
    // Try to convert text to path
    const characterData = textToPath(character);
    
    if (characterData) {
      characterPath = characterData.path;
      // Calculate center offsets to position the character at origin (0,0)
      // before the transform is applied
      const bbox = characterData.bbox;
      centerOffsetX = -(bbox.x1 + bbox.x2) / 2;
      centerOffsetY = -(bbox.y1 + bbox.y2) / 2;
    }
  }
  
  // Base transformation for the character
  const transformMatrix = "0.85, 0.45, -1, 0.55, 102, 48";
  
  // SVG with either text element or path element
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.23 134.95">
    <defs>
      <style>
        .cover { fill: ${coverColor}; }
        .pages { fill: #ffffff; }
        .edges { fill: #000000; }
        .logo-text {
          font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Android Emoji', 'EmojiSymbols', sans-serif;
          font-weight: normal;
          fill: #000000;
        }
      </style>
    </defs>
    <g>
      <path class="pages" d="M100.82,99.33L20.68,60.1c-3.5-1.71-7.58.83-7.58,4.73v9.23c0,2.32,1.32,4.44,3.41,5.46l84.31,41.27c1.69.83,3.66.83,5.35,0l84.32-41.28c.16-.08.33-.14.49-.21v-21.5l-84.81,41.52c-1.69.83-3.66.83-5.35,0Z"/>
      <path class="edges" d="M195.83,79.51c-1.53-.75-3.28-.81-4.85-.21-.17.06-.33.13-.49.21l-84.32,41.28c-1.69.83-3.66.83-5.35,0L16.51,79.52c-2.08-1.02-3.41-3.14-3.41-5.46v-9.23c0-3.89,4.08-6.44,7.58-4.73l80.13,39.23c1.69.83,3.66.83,5.35,0l84.81-41.52,4.85-2.38c4.54-2.22,4.54-8.7,0-10.92L106.16.62c-1.69-.83-3.66-.83-5.35,0L3.41,48.31c-2.08,1.02-3.41,3.14-3.41,5.46v27.42c0,2.32,1.32,4.44,3.41,5.46l97.41,47.69c1.69.83,3.66.83,5.35,0l89.66-43.89c4.54-2.22,4.54-8.7,0-10.92Z"/>
    </g>
    <path class="cover" d="M101.18,85.65L32.47,51.41c-2.31-1.15-2.31-4.44,0-5.59L101.42,11.57c1.47-.73,3.21-.73,4.68,0l68.71,34.24c2.31,1.15,2.31,4.44,0,5.59l-68.95,34.25c-1.47.73-3.21.73-4.68,0Z"/>
    ${characterPath ? 
      `<g>
        <!-- Apply matrix transformation after centering the character -->
        <g transform="matrix(${transformMatrix})">
          <!-- First center the character at origin -->
          <g transform="translate(${centerOffsetX}, ${centerOffsetY})">
            ${characterPath}
          </g>
        </g>
      </g>` : 
      `<text 
        class="logo-text" 
        x="66%" 
        y="40%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-size="70"
        transform="matrix(0.85, 0.45, -1, 0.55, 19, -26)"
      >
        ${character}
      </text>`
    }
  </svg>
  `;
  
  return svgContent;
}

// Sizes for different purposes
const sizes = [
  { width: 16, height: 16, name: 'favicon-16x16' },
  { width: 32, height: 32, name: 'favicon-32x32' },
  { width: 48, height: 48, name: 'favicon-48x48' },
  { width: 192, height: 192, name: 'icon-192x192' },
  { width: 512, height: 512, name: 'icon-512x512' },
  { width: 1200, height: 630, name: 'og-image' },
];

async function generateImages() {
  // Generate the SVG content
  const svgString = generateSVG();
  
  // Save the original SVG
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgString);
  
  // Convert to Buffer for Sharp
  const svgBuffer = Buffer.from(svgString);
  
  // Generate PNG images at different sizes
  const pngPaths = [];
  for (const size of sizes) {
    const outputPath = path.join(iconsDir, `${size.name}.png`);
    
    // Set background based on image type
    let background = { r: 255, g: 255, b: 255, alpha: 0 }; // Default transparent background
    
    // Use solid white background for icon and og-image files
    if (size.name === 'icon-192x192' || size.name === 'icon-512x512' || size.name === 'og-image') {
      background = { r: 255, g: 255, b: 255, alpha: 1 }; // Solid white background
      
      // For these images, create a solid white background and composite the SVG on top
      const whiteBackground = await sharp({
        create: {
          width: size.width,
          height: size.height,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
      }).png().toBuffer();
      
      await sharp(whiteBackground)
        .composite([
          {
            input: await sharp(svgBuffer)
              .resize({
                width: size.width,
                height: size.height,
                fit: 'contain',
                background: { r: 255, g: 255, b: 255, alpha: 0 }
              })
              .toBuffer(),
            gravity: 'center'
          }
        ])
        .png()
        .toFile(outputPath);
    } else {
      // For favicon images, keep the transparent background
      await sharp(svgBuffer)
        .resize({
          width: size.width,
          height: size.height,
          fit: 'contain',
          background: background
        })
        .png()
        .toFile(outputPath);
    }
    
    console.log(`Generated ${size.name}.png (${size.width}x${size.height})`);
    
    // Save paths of favicon-sized images for ico generation
    if (size.width <= 48) {
      pngPaths.push(outputPath);
    }
  }
  
  // Generate multi-size favicon.ico
  try {
    const icoBuffer = await pngToIco(pngPaths);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    fs.writeFileSync(path.join(publicDir, 'favicons/favicon.ico'), icoBuffer);
    console.log('Generated favicon.ico with multiple sizes');
  } catch (error) {
    console.error('Error generating favicon.ico:', error);
    // Fallback to single-size favicon
    await sharp(svgBuffer)
      .resize({
        width: 32,
        height: 32,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('Generated fallback favicon.ico (32x32)');
  }
  
  console.log('All images generated successfully!');
}

generateImages().catch(console.error); 