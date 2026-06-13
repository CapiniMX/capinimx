#!/usr/bin/env node

/**
 * 🎨 Generador Automático de Imágenes - AprendiendoLuk
 * Genera 17 imágenes en Google Gemini automáticamente
 * Descarga en ~/Downloads/ con nombres correctos
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const DOWNLOADS_DIR = path.join(process.env.HOME, 'Downloads');
const WAIT_TIMEOUT = 120000; // 2 minutos por imagen

const IMAGES = [
  {
    name: 'screenshot_home.png',
    prompt: `Create a screenshot of a mobile app called "AprendiendoLuk" - a mental training game app.

The screen shows:
- A sticky header at top with "AprendiendoLuk" logo (brain emoji + text) in a turquoise-to-pink gradient, with three navigation tabs below: 🏠 Home | 🎮 Games | 📊 History
- Center of screen displays the app title "AprendiendoLuk" in large gradient text
- Subtitle: "Train your mind with 3 challenging games"
- Two stat boxes showing "0 Best Score" and "0 Sessions"
- A large rounded button "▶ Start Now" at bottom
- Dark theme background (#1a1a2e to #16213e gradient)
- Turquoise accent color (#4DB6AC) and pink accents (#F48FB1)
- Modern, clean UI with smooth rounded corners
- Montserrat font for titles, Nunito for body text
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'screenshot_games.png',
    prompt: `Create a screenshot of the "Games" tab in AprendiendoLuk app showing three game cards.

The screen displays:
- Same header as before with navigation tabs
- Three game cards stacked vertically, each with:
  Card 1: "🔢 Suma Rápida" - "Solve math operations in record time"
  Card 2: "🎨 Memoria Secuencial" - "Memorize and repeat color sequences"
  Card 3: "👁️ Velocidad Visual" - "Identify and tap correct elements"
- Each card has a turquoise border on hover with a subtle glow
- Cards have 20px rounded corners
- Dark background with subtle gradient
- Text in Montserrat bold for titles, Nunito for descriptions
- Card has interactive hover state visible
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'screenshot_suma_game.png',
    prompt: `Create a screenshot of the "Suma Rápida" game in AprendiendoLuk app mid-gameplay.

The screen shows:
- Header with "🔢 Suma Rápida" title on left
- Progress bar (timer bar) in gradient turquoise-pink, 70% filled
- Score display "245" on right in turquoise text
- Large math operation in center: "7 + 5" in 3em bold Montserrat font, turquoise color
- Four answer buttons in 2x2 grid below operation showing: 12 | 11 | 13 | 10
- Buttons are 70px minimum height, dark background with turquoise borders
- One button highlighted with turquoise glow (showing hover state)
- Dark theme background
- Clean, minimal design focused on the math problem
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'screenshot_memoria_game.png',
    prompt: `Create a screenshot of the "Memoria Secuencial" game in AprendiendoLuk app.

The screen shows:
- Header with "🎨 Memoria" title and score display
- Level counter: "Level 3 / 5" in large pink text (Montserrat)
- 3x3 grid of color buttons (circular, 80px each):
  Row 1: Red (#FF6B9D) | Turquoise (#4DB6AC) | Yellow (#FFD93D)
  Row 2: Blue (#3498db) | Green (#2ecc71) | Orange (#FF6B35)
  Row 3: Purple (#9b59b6) | Pink (#F48FB1) | Teal (#1abc9c)
- One button (turquoise, top-middle) is glowing and scaled up, showing it's being played
- Below: "Your turn..." text in secondary color
- Buttons have shadow and smooth rounded corners (16px radius)
- Dark background theme
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'screenshot_visual_game.png',
    prompt: `Create a screenshot of the "Velocidad Visual" game in AprendiendoLuk app mid-game.

The screen shows:
- Header with "👁️ Velocidad Visual" title
- Timer bar showing 50% time remaining (15/30 seconds)
- Score "180" in turquoise on right
- Target instruction at top: "Tap the EVEN numbers" in turquoise bold text
- Game arena: square box with dark background where floating items appear
- Floating items visible: numbers "7" (wrong) | "4" (correct) | "9" (wrong) | "2" (correct)
- Items are 60px squares with rounded corners, slightly glowing
- Below arena: Score display "✓ 8 | ✗ 2" showing correct vs incorrect
- Dynamic, energetic layout with items at various positions
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'screenshot_results.png',
    prompt: `Create a screenshot of the Results screen in AprendiendoLuk app after completing a session.

The screen shows:
- Large centered stars: "⭐⭐⭐" (3 stars) at top, 60px font
- Title: "¡Excelente!" in large gradient turquoise-pink text
- Large score: "1,250" in 52px Montserrat bold, turquoise color
- Breakdown box with dark background showing:
  "Suma Rápida: 450"
  "Memoria Secuencial: 380"
  "Velocidad Visual: 420"
- "Next →" button in turquoise gradient (26px rounded)
- "Go to Home" button outline style (turquoise border)
- Subtle confetti particle effects visible (optional)
- Mobile format, portrait orientation, 1080x1920px`
  },
  {
    name: 'mockup_iphone_home.png',
    prompt: `Create a professional mockup of an iPhone 14 Pro Max displaying the AprendiendoLuk app home screen.

Show:
- Realistic iPhone 14 device with True Depth camera notch
- Device showing the home screen with turquoise-pink gradient header
- Navigation tabs below header
- "AprendiendoLuk" title with brain logo
- "Start Now" button visible
- Dark theme background
- Realistic shadows and reflections on device
- 3D perspective view
- White background
- Desktop/web format, 2048x2560px`
  },
  {
    name: 'mockup_iphone_game.png',
    prompt: `Create a professional mockup of an iPhone 14 Pro Max displaying the AprendiendoLuk app showing the Suma Rápida game.

Show:
- Realistic iPhone 14 device
- Math operation "15 + 8" displayed on screen
- Four answer buttons visible
- Progress bar and score visible
- Dark theme with turquoise accents
- Realistic device shadows and depth
- 3D perspective view
- White background
- Desktop format, 2048x2560px`
  },
  {
    name: 'mockup_android_comparison.png',
    prompt: `Create a comparison mockup showing three Android smartphones displaying the AprendiendoLuk app simultaneously.

Show:
- Three different Android phones (Samsung Galaxy S24, Google Pixel 9, OnePlus 12) in a row
- Each phone displaying different screens:
  Left: Home screen with "Start Now" button
  Center: Games selection screen
  Right: Active game (Suma Rápida)
- Dark theme with turquoise-pink gradient accents
- All phones showing responsive design working correctly
- Realistic shadows and perspective
- 3D perspective view
- White/light background
- Wide format, 3840x1920px`
  },
  {
    name: 'graphic_difficulties.png',
    prompt: `Create a graphic showing three icons representing difficulty levels for AprendiendoLuk.

Show:
- Icon 1: "Easy" - A smiling face with one star, in turquoise color (#4DB6AC)
- Icon 2: "Medium" - A neutral face with two stars, in pink color (#F48FB1)
- Icon 3: "Hard" - A focused/intense face with three stars, in gradient turquoise-pink
- Icons are circular, 200px each, properly spaced
- Modern, minimalist style
- Dark background
- Professional design suitable for app UI
- Horizontal layout
- 2400x800px PNG`
  },
  {
    name: 'graphic_game_icons.png',
    prompt: `Create a graphic showing three icons representing the three games in AprendiendoLuk.

Show:
- Icon 1: "Suma Rápida" - Numbers/math symbol (3, +, 5) in turquoise (#4DB6AC)
- Icon 2: "Memoria Secuencial" - Colorful sequence circles or Simon-like pattern in pink (#F48FB1)
- Icon 3: "Velocidad Visual" - Eye symbol with floating elements in turquoise-pink gradient
- Icons are circular or rounded square, 200px each
- Modern, clean design
- Dark background with subtle glow
- Professional and playful style
- Horizontal layout, properly spaced
- 2400x800px PNG`
  },
  {
    name: 'banner_creciendo_juntos.png',
    prompt: `Create a professional banner with the text "Creciendo Juntos" (Growing Together) in the CAPINI brand style.

Show:
- Large, bold text "Creciendo Juntos" in Montserrat font (700-800 weight)
- Gradient background: turquoise (#4DB6AC) to pink (#F48FB1)
- Secondary color accents: light turquoise (#B2DFDB)
- Professional, modern design
- Suitable for branding and marketing materials
- Banner format
- 1920x400px PNG`
  },
  {
    name: 'graphic_platform_comparison.png',
    prompt: `Create an infographic comparing AprendiendoLuk across three platforms: Web, Android App, and Telegram Mini-App.

Show:
- Three columns, each representing a platform:
  Column 1: Web - Computer/desktop icon with browser window
  Column 2: Android - Phone icon with APK symbol
  Column 3: Telegram - Telegram paper plane logo with phone
- Under each: Features available on that platform
- Checkmarks for supported features
- Turquoise-pink color scheme throughout
- Dark background
- Professional infographic style
- Clear, readable icons and text
- 2400x1200px PNG`
  },
  {
    name: 'landing_page_desktop.png',
    prompt: `Create a professional landing page screenshot for AprendiendoLuk in desktop view.

Show:
- Header with logo "AprendiendoLuk" and navigation menu (Home, Games, Download, Contact)
- Hero section with:
  Large title: "Train Your Mind"
  Subtitle: "with AprendiendoLuk"
  Turquoise-pink gradient background
- Three feature boxes below showing the three games
- Download buttons for Web/iOS/Android
- Footer with company info, links, social media
- Dark theme (#1a1a2e background)
- Turquoise (#4DB6AC) and pink (#F48FB1) accents
- Professional, modern design
- Desktop landscape format, 1920x1080px PNG`
  },
  {
    name: 'infographic_how_it_works.png',
    prompt: `Create an infographic explaining how AprendiendoLuk works.

Show:
- Title: "Cómo Funciona AprendiendoLuk" at top
- Step-by-step flow (4 steps):
  Step 1: "Choose Game" - Icon of three game cards
  Step 2: "Select Difficulty" - Icon of difficulty levels
  Step 3: "Play & Compete" - Icon of gameplay/timer
  Step 4: "Get Results" - Icon of stars/score
- Arrows connecting each step
- Icons are colorful and modern
- Turquoise-pink color scheme
- Dark background
- Text descriptions under each step
- Professional infographic style
- 1920x1080px PNG`
  },
  {
    name: 'social_instagram_suma.png',
    prompt: `Create a social media post (Instagram) promoting the Suma Rápida game.

Show:
- Eye-catching design with the number "7 + 5 = ?" prominently displayed
- Turquoise-pink gradient background
- Text: "Can you solve it in 6 seconds? 🚀"
- AprendiendoLuk logo at bottom
- Challenge/gamification feel
- Vibrant, engaging colors
- Modern typography
- Square format, 1080x1080px PNG`
  },
  {
    name: 'social_carousel_3slides.png',
    prompt: `Create a 3-slide carousel image for Instagram showing AprendiendoLuk games.

Create one image showing all 3 slides together:
- Slide 1 (Left): "Suma Rápida" with math problem and "Speed Challenge" text
- Slide 2 (Center): "Memoria Secuencial" with colorful circles and "Memory Challenge" text
- Slide 3 (Right): "Velocidad Visual" with floating items and "Visual Challenge" text
- Each slide has turquoise-pink gradient background
- Clear "Slide 1/3", "Slide 2/3", "Slide 3/3" indicators
- AprendiendoLuk branding
- Text: "Train Your Mind" at bottom
- Wide format showing all 3 slides, 3240x1080px PNG`
  }
];

async function generateImages() {
  console.log('🚀 Iniciando generador de imágenes...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    acceptDownloads: true,
  });
  const page = await context.newPage();

  // Navegar a Gemini
  console.log('⏳ Abriendo Google Gemini...');
  await page.goto('https://gemini.google.com/app', { waitUntil: 'networkidle' });

  // Esperar a que el usuario inicie sesión si es necesario
  await page.waitForTimeout(3000);

  let generated = 0;
  let failed = 0;

  for (const image of IMAGES) {
    try {
      console.log(`\n📸 [${generated + failed + 1}/${IMAGES.length}] Generando: ${image.name}`);

      // Limpiar textarea si existe
      const textarea = await page.$('textarea, [contenteditable="true"]');
      if (textarea) {
        await textarea.click();
        await page.keyboard.press('Control+A');
        await page.keyboard.press('Backspace');
      }

      // Ingresar prompt
      console.log('   ✏️  Ingresando prompt...');
      await page.fill('textarea, [contenteditable="true"]', image.prompt, { timeout: 5000 });

      // Buscar y clickear botón de generar
      console.log('   🎨 Buscando botón de generación...');

      // Múltiples selectores posibles para el botón
      const generateButtons = await page.$$('button');
      let clicked = false;

      for (const btn of generateButtons) {
        const text = await btn.textContent();
        if (text.includes('Generate') || text.includes('Generar') || text.includes('Create')) {
          await btn.click();
          clicked = true;
          console.log('   ⚡ Botón clickeado');
          break;
        }
      }

      if (!clicked) {
        throw new Error('No se encontró botón de generación');
      }

      // Esperar generación
      console.log('   ⏳ Esperando generación (esto puede tomar 1-2 minutos)...');
      await page.waitForTimeout(WAIT_TIMEOUT);

      // Descargar imagen
      console.log('   📥 Descargando imagen...');

      // Buscar img tag con la imagen generada
      const images = await page.$$('img');
      if (images.length > 0) {
        // Última imagen generada
        const lastImg = images[images.length - 1];
        const src = await lastImg.getAttribute('src');

        if (src) {
          // Descargar desde src
          const response = await page.goto(src);
          const buffer = await response.body();
          const filePath = path.join(DOWNLOADS_DIR, image.name);
          fs.writeFileSync(filePath, buffer);
          console.log(`   ✅ Guardado en: ~/Downloads/${image.name}`);
          generated++;
        }
      }

      // Pausa antes de siguiente
      await page.waitForTimeout(2000);

    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
      failed++;
    }
  }

  await browser.close();

  // Resumen
  console.log('\n' + '='.repeat(60));
  console.log(`✅ Generación completada`);
  console.log(`   ${generated} imágenes generadas exitosamente`);
  console.log(`   ${failed} imágenes fallaron`);
  console.log(`\n📁 Todas las imágenes están en: ~/Downloads/`);
  console.log('\n📋 Próximos pasos:');
  console.log('   1. Organizar imágenes en carpetas:');
  console.log('      mv ~/Downloads/screenshot_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/screenshots/');
  console.log('      mv ~/Downloads/mockup_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/mockups/');
  console.log('      mv ~/Downloads/graphic_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/assets/');
  console.log('      mv ~/Downloads/banner_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/assets/');
  console.log('      mv ~/Downloads/landing_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/website/');
  console.log('      mv ~/Downloads/infographic_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/infographics/');
  console.log('      mv ~/Downloads/social_* ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk/images/social_media/');
  console.log('   2. Validar: node validate_assets.js');
  console.log('   3. Commit: git add images/ && git commit -m "feat(multimedia): Agregar 17 imágenes generadas con Gemini (v3.0 completo)"');
  console.log('='.repeat(60) + '\n');
}

generateImages().catch(console.error);
