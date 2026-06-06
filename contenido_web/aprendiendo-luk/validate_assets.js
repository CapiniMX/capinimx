#!/usr/bin/env node

/**
 * Asset Validation Script for AprendiendoLuk v3.0
 *
 * Usage: node validate_assets.js
 *
 * Verifica que todos los audios e imágenes estén presentes y correctamente organizados
 */

const fs = require('fs');
const path = require('path');

const EXPECTED_AUDIOS = {
  'audio/tutoriales': [
    'tutorial_suma_rapida.mp3',
    'tutorial_memoria_secuencial.mp3',
    'tutorial_velocidad_visual.mp3'
  ],
  'audio/celebraciones': [
    'celebration_excellent.mp3',
    'celebration_level_complete.mp3',
    'celebration_session_win.mp3'
  ],
  'audio/motivacion': [
    'motivation_try_again.mp3',
    'motivation_keep_going.mp3',
    'motivation_session_low.mp3'
  ],
  'audio/instrucciones': [
    'intro_welcome.mp3',
    'difficulty_selection.mp3',
    'session_start.mp3'
  ]
};

const EXPECTED_IMAGES = {
  'images/screenshots': [
    'screenshot_home.png',
    'screenshot_games.png',
    'screenshot_suma_game.png',
    'screenshot_memoria_game.png',
    'screenshot_visual_game.png',
    'screenshot_results.png'
  ],
  'images/mockups': [
    'mockup_iphone_home.png',
    'mockup_iphone_game.png',
    'mockup_android_comparison.png'
  ],
  'images/assets': [
    'graphic_difficulties.png',
    'graphic_game_icons.png',
    'banner_creciendo_juntos.png',
    'graphic_platform_comparison.png'
  ],
  'images/website': [
    'landing_page_desktop.png'
  ],
  'images/infographics': [
    'infographic_how_it_works.png'
  ],
  'images/social_media': [
    'social_instagram_suma.png',
    'social_carousel_3slides.png'
  ]
};

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function checkFile(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return formatFileSize(stats.size);
  } catch {
    return 'N/A';
  }
}

async function validateAssets() {
  console.clear();

  log('╔══════════════════════════════════════════════════════════════╗', 'cyan');
  log('║     ✅ VALIDACIÓN DE ASSETS - AprendiendoLuk v3.0            ║', 'cyan');
  log('╚══════════════════════════════════════════════════════════════╝\n', 'cyan');

  const startTime = Date.now();

  let audioTotal = 0;
  let audioFound = 0;
  let audioMissing = [];

  let imageTotal = 0;
  let imageFound = 0;
  let imageMissing = [];

  let totalSize = 0;

  // Check audios
  log('🎤 AUDIOS:', 'bold');
  console.log('');

  for (const [folder, files] of Object.entries(EXPECTED_AUDIOS)) {
    log(`  📁 ${folder}`, 'blue');

    for (const file of files) {
      audioTotal++;
      const fullPath = path.join(folder, file);

      if (checkFile(fullPath)) {
        const size = getFileSize(fullPath);
        totalSize += fs.statSync(fullPath).size;
        log(`     ✓ ${file} (${size})`, 'green');
        audioFound++;
      } else {
        log(`     ✗ ${file} (FALTA)`, 'red');
        audioMissing.push(fullPath);
      }
    }
    console.log('');
  }

  // Check images
  log('🎨 IMÁGENES:', 'bold');
  console.log('');

  for (const [folder, files] of Object.entries(EXPECTED_IMAGES)) {
    log(`  📁 ${folder}`, 'blue');

    for (const file of files) {
      imageTotal++;
      const fullPath = path.join(folder, file);

      if (checkFile(fullPath)) {
        const size = getFileSize(fullPath);
        totalSize += fs.statSync(fullPath).size;
        log(`     ✓ ${file} (${size})`, 'green');
        imageFound++;
      } else {
        log(`     ✗ ${file} (FALTA)`, 'red');
        imageMissing.push(fullPath);
      }
    }
    console.log('');
  }

  // Summary
  log('╔══════════════════════════════════════════════════════════════╗\n', 'cyan');

  const audioPercentage = Math.round((audioFound / audioTotal) * 100);
  const imagePercentage = Math.round((imageFound / imageTotal) * 100);

  log(`  🎤 Audios:   ${audioFound}/${audioTotal} (${audioPercentage}%)`,
    audioFound === audioTotal ? 'green' : 'yellow');

  log(`  🎨 Imágenes: ${imageFound}/${imageTotal} (${imagePercentage}%)`,
    imageFound === imageTotal ? 'green' : 'yellow');

  log(`  📦 Total:    ${audioFound + imageFound}/${audioTotal + imageTotal} assets`,
    (audioFound + imageFound === audioTotal + imageTotal) ? 'green' : 'yellow');

  log(`  💾 Tamaño:   ${formatFileSize(totalSize)}\n`, 'blue');

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

  if (audioMissing.length === 0 && imageMissing.length === 0) {
    log('╔══════════════════════════════════════════════════════════════╗', 'green');
    log('║   🎉 ¡TODOS LOS ASSETS ESTÁN PRESENTES Y LISTOS PARA v3.0!   ║', 'green');
    log('╚══════════════════════════════════════════════════════════════╝', 'green');
    console.log('');
    log('✅ Estado: LISTO PARA INTEGRACIÓN', 'green');
    log(`⏱️  Validación completada en ${elapsed}s`, 'blue');
  } else {
    log('╔══════════════════════════════════════════════════════════════╗', 'yellow');
    log('║         ⚠️  FALTAN ALGUNOS ASSETS                             ║', 'yellow');
    log('╚══════════════════════════════════════════════════════════════╝', 'yellow');
    console.log('');

    if (audioMissing.length > 0) {
      log(`❌ Audios faltantes (${audioMissing.length}):`, 'yellow');
      audioMissing.forEach(f => log(`   - ${f}`, 'red'));
      console.log('');
    }

    if (imageMissing.length > 0) {
      log(`❌ Imágenes faltantes (${imageMissing.length}):`, 'yellow');
      imageMissing.forEach(f => log(`   - ${f}`, 'red'));
      console.log('');
    }

    log('📝 Acción requerida:', 'yellow');
    log('   1. Genera los assets faltantes en ElevenLabs o Minimax', 'yellow');
    log('   2. Descarga con los nombres exactos especificados', 'yellow');
    log('   3. Coloca en las carpetas correctas', 'yellow');
    log('   4. Ejecuta nuevamente este script', 'yellow');
    log(`\n⏱️  Validación completada en ${elapsed}s`, 'blue');
  }

  console.log('');
}

// Run validation
validateAssets().catch(error => {
  log(`❌ Error durante la validación: ${error.message}`, 'red');
  process.exit(1);
});
