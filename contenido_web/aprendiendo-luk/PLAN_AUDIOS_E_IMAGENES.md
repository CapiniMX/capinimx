# AprendiendoLuk - Plan de Audios e Imágenes

## 🎯 OBJETIVO FINAL

Crear una experiencia multimedia completa de AprendiendoLuk:
- ✅ App Web funcional (v2.0 con CAPINI design)
- 🎤 Audios educativos y motivacionales (ElevenLabs)
- 🎨 Imágenes, mockups y assets visuales (Minimax)
- 📱 APK Android lista
- 🤖 Mini-app Telegram

---

## 📊 RESUMEN DE TRABAJO

| Elemento | Cantidad | Herramienta | Status |
|----------|----------|-------------|--------|
| **Scripts de Audio** | 13 | ElevenLabs | 📝 Guiones listos |
| **Imágenes** | 17 | Minimax | 📝 Prompts listos |
| **Total assets multimedia** | 30 | Ambas | En preparación |

---

## 🎤 FASE 1: AUDIOS CON ELEVENLABS

### Archivo de referencia:
📄 `AUDIO_SCRIPTS_ELEVENLABS.md` - 13 scripts listos

### Categorías de audio (13 archivos):

**TUTORIALES (3):**
1. `tutorial_suma_rapida.mp3`
2. `tutorial_memoria_secuencial.mp3`
3. `tutorial_velocidad_visual.mp3`

**CELEBRACIONES (3):**
4. `celebration_excellent.mp3`
5. `celebration_level_complete.mp3`
6. `celebration_session_win.mp3`

**MOTIVACIÓN (3):**
7. `motivation_try_again.mp3`
8. `motivation_keep_going.mp3`
9. `motivation_session_low.mp3`

**INSTRUCCIONES (4):**
10. `intro_welcome.mp3`
11. `difficulty_selection.mp3`
12. `session_start.mp3`
13. + 1 bonus (bienvenida específica por dificultad)

### Proceso:
```
1. Abre AUDIO_SCRIPTS_ELEVENLABS.md
2. Copia script #1 (Tutorial Suma)
3. Abre ElevenLabs
4. Pega en Text-to-Speech
5. Selecciona:
   ✓ Idioma: Español
   ✓ Voz: Lucia o Diego (joven/clara)
   ✓ Velocidad: 1.0
6. Genera
7. Descarga MP3
8. Guarda: /audio/tutoriales/tutorial_suma_rapida.mp3
9. Repite para todos los 13 scripts
```

### Carpeta destino:
```
contenido_web/aprendiendo-luk/audio/
├── tutoriales/
├── celebraciones/
├── motivacion/
└── instrucciones/
```

### Tiempo estimado:
- ⏱️ ~3-5 minutos por audio (generación + descarga)
- ⏱️ Total: ~50 minutos para los 13 audios

---

## 🎨 FASE 2: IMÁGENES CON MINIMAX

### Archivo de referencia:
📄 `IMAGE_PROMPTS_MINIMAX.md` - 17 prompts listos

### Categorías de imágenes (17 archivos):

**SCREENSHOTS (6):**
1. `screenshot_home.png` - Pantalla de inicio
2. `screenshot_games.png` - Selección de juegos
3. `screenshot_suma_game.png` - Suma Rápida en acción
4. `screenshot_memoria_game.png` - Memoria con colores
5. `screenshot_visual_game.png` - Velocidad Visual
6. `screenshot_results.png` - Resultados de sesión

**MOCKUPS (3):**
7. `mockup_iphone_home.png` - iPhone mostrando home
8. `mockup_iphone_game.png` - iPhone mostrando juego
9. `mockup_android_comparison.png` - 3 Android phones

**ASSETS (4):**
10. `graphic_difficulties.png` - Iconos de dificultades
11. `graphic_game_icons.png` - Iconos de juegos
12. `banner_creciendo_juntos.png` - Banner CAPINI
13. `graphic_platform_comparison.png` - Comparativa plataformas

**WEBSITE (1):**
14. `landing_page_desktop.png` - Landing page completa

**INFOGRAFÍA (1):**
15. `infographic_how_it_works.png` - Cómo funcionan los juegos

**SOCIAL MEDIA (2):**
16. `social_instagram_suma.png` - Post Instagram Suma
17. `social_carousel_3slides.png` - Carrusel 3 slides

### Proceso:
```
1. Abre IMAGE_PROMPTS_MINIMAX.md
2. Copia prompt #1 (Screenshot Home)
3. Abre Minimax
4. Pega prompt en Image Generation
5. Ajusta:
   ✓ Tamaño: Como se especifique (1920x1080, etc.)
   ✓ Estilo: Photorealistic o Illustrated
   ✓ Calidad: Alta / 4K
6. Genera (2-5 minutos)
7. Descarga PNG alta resolución
8. Guarda: /images/screenshots/screenshot_home.png
9. Repite para los 17 prompts
```

### Carpeta destino:
```
contenido_web/aprendiendo-luk/images/
├── screenshots/
├── mockups/
├── assets/
├── website/
├── infographics/
└── social_media/
```

### Tiempo estimado:
- ⏱️ ~3-7 minutos por imagen (generación + descarga)
- ⏱️ Total: ~70 minutos para los 17 prompts

---

## 📅 CRONOGRAMA RECOMENDADO

### DÍA 1 (HOY):
**Mañana:**
- ✅ Leer `AUDIO_SCRIPTS_ELEVENLABS.md`
- ✅ Leer `IMAGE_PROMPTS_MINIMAX.md`
- ✅ Preparar estructura de carpetas

**Tarde:**
- 🎤 Generar primeros 5 audios (tutoriales + 2 celebraciones)
- 🎨 Generar primeras 3 imágenes (screenshots principales)

### DÍA 2:
- 🎤 Generar audios restantes (8 audios)
- 🎨 Generar imágenes restantes (14 imágenes)

### DÍA 3:
- ✅ Organizar todos los archivos en carpetas
- ✅ Integrar audios en HTML
- ✅ Crear galería de imágenes
- ✅ Testing

---

## 🔧 INTEGRACIÓN EN HTML (CÓDIGO)

### Añadir audios al HTML:

```html
<!-- En index.html, antes de </body> -->

<!-- Script para controlar audios -->
<script>
  const AUDIO_URLS = {
    tutorials: {
      suma: '/contenido_web/aprendiendo-luk/audio/tutoriales/tutorial_suma_rapida.mp3',
      memoria: '/contenido_web/aprendiendo-luk/audio/tutoriales/tutorial_memoria_secuencial.mp3',
      visual: '/contenido_web/aprendiendo-luk/audio/tutoriales/tutorial_velocidad_visual.mp3'
    },
    celebrations: {
      excellent: '/contenido_web/aprendiendo-luk/audio/celebraciones/celebration_excellent.mp3',
      levelComplete: '/contenido_web/aprendiendo-luk/audio/celebraciones/celebration_level_complete.mp3',
      sessionWin: '/contenido_web/aprendiendo-luk/audio/celebraciones/celebration_session_win.mp3'
    },
    motivation: {
      tryAgain: '/contenido_web/aprendiendo-luk/audio/motivacion/motivation_try_again.mp3',
      keepGoing: '/contenido_web/aprendiendo-luk/audio/motivacion/motivation_keep_going.mp3',
      sessionLow: '/contenido_web/aprendiendo-luk/audio/motivacion/motivation_session_low.mp3'
    }
  };

  function playAudio(category, name) {
    const audioUrl = AUDIO_URLS[category][name];
    const audio = new Audio(audioUrl);
    audio.play();
  }

  // Ejemplo: playAudio('tutorials', 'suma');
</script>
```

### Usar en eventos:

```javascript
// Al mostrar instrucciones
showInstructions(gameType) {
  document.getElementById('instructions-screen').classList.add('active');
  playAudio('tutorials', gameType); // suma, memoria, o visual
}

// Al responder correctamente
checkSumaAnswer(answer) {
  if (isCorrect) {
    STATE.game.score += points;
    playAudio('celebrations', 'excellent');
  }
}

// Al completar sesión
STATE.ui.showSessionResult() {
  // ...
  playAudio('celebrations', 'sessionWin');
}
```

---

## 📸 INTEGRACIÓN DE IMÁGENES

### Mostrar screenshots en documentación:

```markdown
## Screenshots de la App

### Home Screen
![Home Screen](images/screenshots/screenshot_home.png)

### Games Available
![Games Screen](images/screenshots/screenshot_games.png)

### During Gameplay
![Suma Game](images/screenshots/screenshot_suma_game.png)
```

### Crear galería HTML:

```html
<div class="gallery">
  <h2>Visual Preview</h2>
  <div class="gallery-grid">
    <img src="images/screenshots/screenshot_home.png" alt="Home">
    <img src="images/screenshots/screenshot_games.png" alt="Games">
    <img src="images/screenshots/screenshot_suma_game.png" alt="Suma">
    <!-- ... más imágenes -->
  </div>
</div>
```

---

## 📁 ESTRUCTURA FINAL

```
contenido_web/aprendiendo-luk/
├── index.html (v2.0 con código de audios integrado)
├── index_v2.0.html (respaldo)
├── index_v1.0.html (respaldo original)
├── audio/
│   ├── tutoriales/
│   │   ├── tutorial_suma_rapida.mp3
│   │   ├── tutorial_memoria_secuencial.mp3
│   │   └── tutorial_velocidad_visual.mp3
│   ├── celebraciones/
│   │   ├── celebration_excellent.mp3
│   │   ├── celebration_level_complete.mp3
│   │   └── celebration_session_win.mp3
│   ├── motivacion/
│   │   ├── motivation_try_again.mp3
│   │   ├── motivation_keep_going.mp3
│   │   └── motivation_session_low.mp3
│   └── instrucciones/
│       ├── intro_welcome.mp3
│       ├── difficulty_selection.mp3
│       └── session_start.mp3
├── images/
│   ├── screenshots/
│   │   ├── screenshot_home.png
│   │   ├── screenshot_games.png
│   │   ├── screenshot_suma_game.png
│   │   ├── screenshot_memoria_game.png
│   │   ├── screenshot_visual_game.png
│   │   └── screenshot_results.png
│   ├── mockups/
│   │   ├── mockup_iphone_home.png
│   │   ├── mockup_iphone_game.png
│   │   └── mockup_android_comparison.png
│   ├── assets/
│   │   ├── graphic_difficulties.png
│   │   ├── graphic_game_icons.png
│   │   ├── banner_creciendo_juntos.png
│   │   └── graphic_platform_comparison.png
│   ├── website/
│   │   └── landing_page_desktop.png
│   ├── infographics/
│   │   └── infographic_how_it_works.png
│   └── social_media/
│       ├── social_instagram_suma.png
│       └── social_carousel_3slides.png
├── AUDIO_SCRIPTS_ELEVENLABS.md
├── IMAGE_PROMPTS_MINIMAX.md
├── PLAN_AUDIOS_E_IMAGENES.md
└── [otros archivos de documentación]
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### ANTES DE GENERAR:
- [ ] Crear carpetas `/audio/` y `/images/` con subcarpetas
- [ ] Leer completamente `AUDIO_SCRIPTS_ELEVENLABS.md`
- [ ] Leer completamente `IMAGE_PROMPTS_MINIMAX.md`
- [ ] Verificar tokens de ElevenLabs y Minimax

### GENERANDO AUDIOS (13):
- [ ] 3 Tutoriales
- [ ] 3 Celebraciones
- [ ] 3 Motivación
- [ ] 4 Instrucciones

### GENERANDO IMÁGENES (17):
- [ ] 6 Screenshots
- [ ] 3 Mockups
- [ ] 4 Assets gráficos
- [ ] 1 Landing page
- [ ] 1 Infografía
- [ ] 2 Social media assets

### INTEGRANDO EN CÓDIGO:
- [ ] Añadir referencias de audios en HTML
- [ ] Crear funciones playAudio()
- [ ] Vincular audios a eventos del juego
- [ ] Crear galería de imágenes
- [ ] Testing en navegador

### FINALIZANDO:
- [ ] Verificar todas las carpetas creadas
- [ ] Verificar todos los audios funcionan
- [ ] Verificar todas las imágenes cargan
- [ ] Hacer commit con v3.0 (Audio + Imágenes)

---

## 🚀 PRÓXIMOS PASOS DESPUÉS

**Una vez completados audios e imágenes:**

1. ✅ v3.0 con audio e imágenes
2. 📦 APK Android (Capacitor)
3. 🤖 Mini-app Telegram
4. 🌐 Landing page
5. 📱 Publicar en Google Play

---

## 📊 ESTADÍSTICAS FINALES

| Métrica | Cantidad |
|---------|----------|
| Scripts de audio | 13 |
| Archivos de audio | 13 |
| Prompts de imagen | 17 |
| Imágenes generadas | 17 |
| Total assets multimedia | 30 |
| Tiempo estimado (ambos) | ~2 horas |
| Tamaño aproximado | ~500 MB (audios) + 300 MB (imágenes) |

---

**Creado:** 2026-06-06
**Versión:** 1.0
**Estado:** Guiones y prompts listos para generar
**Próximo paso:** Ejecutar en ElevenLabs y Minimax

¡VAMOS A HACERLO! 🚀
