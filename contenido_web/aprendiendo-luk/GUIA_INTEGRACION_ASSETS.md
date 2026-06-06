# AprendiendoLuk - Guía de Integración de Audios e Imágenes

## 📋 Resumen

Este documento guía la integración de los 13 archivos de audio (ElevenLabs) y 17 imágenes (Minimax) en la aplicación AprendiendoLuk v3.0.

---

## ✅ PRE-REQUISITOS

- ✓ Carpeta `/audio/` con 4 subcarpetas (tutoriales, celebraciones, motivacion, instrucciones)
- ✓ Carpeta `/images/` con 6 subcarpetas (screenshots, mockups, assets, website, infographics, social_media)
- ✓ AUDIO_SCRIPTS_ELEVENLABS.md (13 scripts listos)
- ✓ IMAGE_PROMPTS_MINIMAX.md (17 prompts listos)

**Estado actual:** ✅ Todas las carpetas están creadas y listas

---

## 🎤 FASE 1: GENERAR Y DESCARGAR AUDIOS

### Paso 1: Abrir ElevenLabs

1. Ve a [ElevenLabs](https://elevenlabs.io/)
2. Inicia sesión con tu token
3. Selecciona **Text-to-Speech**

### Paso 2: Generar cada audio

**Repite este proceso 13 veces (una vez por cada script):**

1. Abre `AUDIO_SCRIPTS_ELEVENLABS.md`
2. Copia un script completo
3. En ElevenLabs, pega en el campo de texto
4. Selecciona:
   - **Idioma:** Español
   - **Voz:** Lucia o Diego (voz joven)
   - **Velocidad:** 1.0
5. Haz clic en **Generate**
6. Espera ~1-3 minutos
7. Descarga el MP3
8. **Renombra** según el nombre del archivo especificado
9. **Guarda** en la carpeta correcta

### Paso 3: Estructura de archivos

Los audios deben estar en estas ubicaciones:

```
audio/tutoriales/
├── tutorial_suma_rapida.mp3
├── tutorial_memoria_secuencial.mp3
└── tutorial_velocidad_visual.mp3

audio/celebraciones/
├── celebration_excellent.mp3
├── celebration_level_complete.mp3
└── celebration_session_win.mp3

audio/motivacion/
├── motivation_try_again.mp3
├── motivation_keep_going.mp3
└── motivation_session_low.mp3

audio/instrucciones/
├── intro_welcome.mp3
├── difficulty_selection.mp3
└── session_start.mp3
```

**Total: 13 archivos MP3**

---

## 🎨 FASE 2: GENERAR Y DESCARGAR IMÁGENES

### Paso 1: Abrir Minimax

1. Ve a Minimax (con tu token)
2. Selecciona **Image Generation**

### Paso 2: Generar cada imagen

**Repite este proceso 17 veces (una vez por cada prompt):**

1. Abre `IMAGE_PROMPTS_MINIMAX.md`
2. Copia un prompt completo
3. En Minimax, pega en el campo de generación
4. Ajusta:
   - **Tamaño:** Como se especifique en el prompt
   - **Estilo:** Photorealistic o Illustrated (según prompt)
   - **Calidad:** Alta / 4K
5. Haz clic en **Generate**
6. Espera ~2-5 minutos
7. Descarga en PNG alta resolución
8. **Renombra** según el nombre del archivo especificado
9. **Guarda** en la carpeta correcta

### Paso 3: Estructura de archivos

Las imágenes deben estar en estas ubicaciones:

```
images/screenshots/
├── screenshot_home.png
├── screenshot_games.png
├── screenshot_suma_game.png
├── screenshot_memoria_game.png
├── screenshot_visual_game.png
└── screenshot_results.png

images/mockups/
├── mockup_iphone_home.png
├── mockup_iphone_game.png
└── mockup_android_comparison.png

images/assets/
├── graphic_difficulties.png
├── graphic_game_icons.png
├── banner_creciendo_juntos.png
└── graphic_platform_comparison.png

images/website/
└── landing_page_desktop.png

images/infographics/
└── infographic_how_it_works.png

images/social_media/
├── social_instagram_suma.png
└── social_carousel_3slides.png
```

**Total: 17 archivos PNG**

---

## 🔧 FASE 3: INTEGRACIÓN EN HTML

Una vez descargados y organizados todos los archivos (13 audios + 17 imágenes), ejecuta el script de validación:

```bash
node validate_assets.js
```

Si todos los archivos están en su lugar, el script confirmará. Si falta alguno, te indicará cuáles faltan.

### Integración de audios en index.html

Los audios ya están parcialmente listos para integración. Busca en `index.html`:

```javascript
// Sección: Audio initialization
const AUDIO_URLS = {
  tutorials: {
    suma: 'audio/tutoriales/tutorial_suma_rapida.mp3',
    memoria: 'audio/tutoriales/tutorial_memoria_secuencial.mp3',
    visual: 'audio/tutoriales/tutorial_velocidad_visual.mp3'
  },
  // ... resto ya configurado
};
```

Estos paths ya están correctos. Los audios se reproducirán automáticamente en:

- ✓ Al iniciar cada juego (tutorial)
- ✓ Al responder correctamente (celebraciones)
- ✓ Al cometer errores (motivación)
- ✓ Al completar sesión (resultado)

### Integración de imágenes

Busca en `index.html` las secciones comentadas:

```html
<!-- FUTURE: Agregar screenshots cuando estén listas -->
<!-- FUTURE: Galería de mockups -->
<!-- FUTURE: Assets visuales -->
```

Las imágenes se pueden integrar en:

1. **Home/Inicio** - Banner con `banner_creciendo_juntos.png`
2. **Galería de juegos** - Screenshots de cada juego
3. **Mockups** - Mostrar cómo se ve en iPhone/Android
4. **About/Información** - Infografía y comparativa

---

## 📊 VALIDACIÓN DE ASSETS

### Script: validate_assets.js

Se incluye un script que valida que todos los archivos estén presentes:

```bash
node validate_assets.js
```

Salida esperada:

```
✅ VALIDACIÓN DE ASSETS - AprendiendoLuk v3.0

📂 Estructura de carpetas: ✓
🎤 Audios (13/13): ✓
🎨 Imágenes (17/17): ✓

TOTAL: 30 assets listos para v3.0
```

---

## 📝 CHECKLIST DE DESCARGA

### Audios (13)
- [ ] tutorial_suma_rapida.mp3
- [ ] tutorial_memoria_secuencial.mp3
- [ ] tutorial_velocidad_visual.mp3
- [ ] celebration_excellent.mp3
- [ ] celebration_level_complete.mp3
- [ ] celebration_session_win.mp3
- [ ] motivation_try_again.mp3
- [ ] motivation_keep_going.mp3
- [ ] motivation_session_low.mp3
- [ ] intro_welcome.mp3
- [ ] difficulty_selection.mp3
- [ ] session_start.mp3

### Imágenes (17)
- [ ] screenshot_home.png
- [ ] screenshot_games.png
- [ ] screenshot_suma_game.png
- [ ] screenshot_memoria_game.png
- [ ] screenshot_visual_game.png
- [ ] screenshot_results.png
- [ ] mockup_iphone_home.png
- [ ] mockup_iphone_game.png
- [ ] mockup_android_comparison.png
- [ ] graphic_difficulties.png
- [ ] graphic_game_icons.png
- [ ] banner_creciendo_juntos.png
- [ ] graphic_platform_comparison.png
- [ ] landing_page_desktop.png
- [ ] infographic_how_it_works.png
- [ ] social_instagram_suma.png
- [ ] social_carousel_3slides.png

---

## ⏱️ CRONOGRAMA ESTIMADO

| Fase | Tiempo | Acción |
|------|--------|--------|
| **Día 1 - Mañana** | 1h | Generar 13 audios en ElevenLabs |
| **Día 1 - Tarde** | 1.5h | Generar 17 imágenes en Minimax |
| **Día 2** | 30min | Validar estructura, integrar en HTML |
| **Día 3** | 1h | Testing y v3.0 final |

**Total:** ~4 horas

---

## 🚀 PRÓXIMOS PASOS DESPUÉS DE v3.0

Una vez completada la integración (v3.0):

1. **APK Android** - Capacitor para compilar a APK
2. **Mini-app Telegram** - Versión para Telegram Bot
3. **Landing page** - Sitio promocional con imágenes
4. **Deploy a Google Play** - Publicación oficial

---

## 📞 SOPORTE Y TROUBLESHOOTING

### Los audios no se reproducen
- Verifica que los archivos estén en las carpetas correctas
- Ejecuta `validate_assets.js` para confirmar
- Revisa la consola del navegador (F12) para errores

### Las imágenes no cargan
- Verifica los paths en el HTML
- Revisa que los nombres de archivo sean exactos (mayúsculas/minúsculas)
- Ejecuta `validate_assets.js`

### Falta un archivo
- Revisa `AUDIO_SCRIPTS_ELEVENLABS.md` o `IMAGE_PROMPTS_MINIMAX.md`
- Regenera el archivo en ElevenLabs o Minimax
- Descarga con el nombre exacto especificado

---

**Creado:** 2026-06-06
**Versión:** 1.0
**Estado:** Listo para ejecutar fases 1 y 2
