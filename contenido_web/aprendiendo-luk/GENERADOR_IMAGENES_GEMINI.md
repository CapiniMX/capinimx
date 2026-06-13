# 🎨 Generador de Imágenes con Google Gemini

Genera automáticamente las **17 imágenes** de AprendiendoLuk usando Google Gemini.

---

## ⚡ Quick Start

```bash
# 1. Ejecutar generador interactivo
node generate_images_interactive.js

# 2. Después de descargar todas las imágenes
bash organize_images.sh

# 3. Validar que todo esté correcto
node validate_assets.js

# 4. Hacer commit
git add images/
git commit -m "feat(multimedia): Agregar 17 imágenes generadas con Gemini (v3.0 completo)"
```

---

## 📋 Requisitos

- ✅ Google Gemini account logueado
- ✅ Chrome o navegador compatible
- ✅ Node.js instalado
- ✅ Permisos para descargar en `~/Downloads/`

---

## 🎯 Paso a Paso

### Paso 1: Ejecutar el generador interactivo

```bash
node generate_images_interactive.js
```

Este script:
- ✅ Te guía a través de las 17 imágenes
- ✅ Copia cada prompt al clipboard automáticamente
- ✅ Abre Google Gemini
- ✅ Te da instrucciones claras para cada imagen

### Paso 2: Para cada imagen

1. **Ve a la ventana de Gemini** (se abre automáticamente)
2. **Pega el prompt** (Cmd+V o Ctrl+V)
3. **Click en "Generate"** o **"Create"**
4. **Espera** 1-2 minutos (Gemini genera la imagen)
5. **Descarga** la imagen
6. **Renombra** con el nombre exacto mostrado
7. **Guarda en** `~/Downloads/`

### Paso 3: Organizar imágenes

Después de descargar todas:

```bash
bash organize_images.sh
```

Este script:
- ✅ Crea la estructura de carpetas `/images/*`
- ✅ Mueve automáticamente cada imagen a su carpeta
- ✅ Valida que estén todas

### Paso 4: Validar assets

```bash
node validate_assets.js
```

Verifica que todos los 30 assets (12 audios + 17 imágenes) estén presentes.

---

## 📸 Las 17 Imágenes

### Screenshots (6 imágenes)
```
screenshot_home.png           - Pantalla principal
screenshot_games.png          - Tab de juegos
screenshot_suma_game.png      - Juego Suma Rápida
screenshot_memoria_game.png   - Juego Memoria Secuencial
screenshot_visual_game.png    - Juego Velocidad Visual
screenshot_results.png        - Pantalla de resultados
```

### Mockups (3 imágenes)
```
mockup_iphone_home.png        - iPhone con pantalla principal
mockup_iphone_game.png        - iPhone jugando Suma Rápida
mockup_android_comparison.png - 3 teléfonos Android
```

### Assets (4 imágenes)
```
graphic_difficulties.png       - Iconos de dificultad
graphic_game_icons.png        - Iconos de los 3 juegos
banner_creciendo_juntos.png   - Banner CAPINI
graphic_platform_comparison.png - Web vs APK vs Telegram
```

### Website (1 imagen)
```
landing_page_desktop.png      - Landing page
```

### Infografías (1 imagen)
```
infographic_how_it_works.png  - Cómo funciona
```

### Social Media (2 imágenes)
```
social_instagram_suma.png     - Post Instagram Suma Rápida
social_carousel_3slides.png   - Carousel Instagram (3 slides)
```

---

## 💾 Estructura de carpetas final

```
aprendiendo-luk/
├── index.html
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
└── audio/
    ├── tutoriales/
    ├── celebraciones/
    ├── motivacion/
    ├── instrucciones/
    └── dormir/
```

---

## ⚡ Opciones avanzadas

### Generar solo cierta categoría

Modifica `generate_images_interactive.js` para comentar categorías:

```javascript
// const byCategory = {};
// IMAGES.forEach(img => {
//   // if (img.category !== 'Screenshots') return; // Solo screenshots
//   if (!byCategory[img.category]) byCategory[img.category] = [];
//   byCategory[img.category].push(img);
// });
```

### Usar otro navegador

Edita `organize_images.sh`:

```bash
# Cambiar de Chrome a Firefox/Safari
open -a Firefox https://gemini.google.com/app
```

---

## 🆘 Troubleshooting

### "Prompt no se copia al clipboard"
- Usa `pbcopy` en macOS o `xclip` en Linux
- Cópialo manualmente del script output

### "Gemini no se abre"
- Verifica que tengas navegador predeterminado
- Ve manualmente a: https://gemini.google.com/app

### "Imágenes no se descargan"
- Verifica permisos en ~/Downloads/
- Renombra manualmente con el nombre exacto
- Copia a ~/Downloads/ manualmente

### "validate_assets.js no encuentra imágenes"
- Ejecuta primero: `bash organize_images.sh`
- Verifica que estén en `/images/*`

---

## 🚀 Siguiente paso

Después de completar:

```bash
git add images/
git commit -m "feat(multimedia): Agregar 17 imágenes generadas con Gemini (v3.0 completo)"
git push
```

---

**Tiempo total: ~30-45 minutos (1-2 min por imagen)**

¡Vamos! 🎨🚀
