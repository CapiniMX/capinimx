# TOOLS.md — Herramientas específicas de Capini

## Paleta oficial (NO CAMBIAR sin permiso)

```css
/* Colores primarios */
--turquesa:    #4DB6AC;   /* títulos, botones principales, acentos */
--rosa:        #F48FB1;   /* secundario, elementos cálidos */
--negro:       #333333;   /* texto principal */
--blanco:      #FFFFFF;   /* fondos */

/* Colores complementarios */
--rosa-piel:   #FDDCCC;   /* suave, decorativo */
--turquesa-claro: #B2DFDB; /* fondos alternativos */
--gris-claro:  #F5F5F5;   /* separadores, fondos suaves */
```

## Tipografía

- **Montserrat** (headings, títulos): `font-family: 'Montserrat', sans-serif;` pesos 400/600/700/800
- **Nunito** (cuerpo, párrafos): `font-family: 'Nunito', sans-serif;` pesos 400/600/700

Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
```

## URLs del proyecto

| Recurso | URL |
|---------|-----|
| Web lobby principal | https://capinimx.github.io/capinimx/ |
| AprendiendoLuk | https://capinimx.github.io/capinimx/contenido_web/aprendiendo-luk/ |
| Música niños (piano + chords + ear trainer) | https://capinimx.github.io/capinimx/contenido_web/musica-ninos/piano-acordes.html |
| Link corto piano | https://tinyurl.com/2ymkbm6p |
| Repo GitHub | https://github.com/CapiniMX/capinimx |
| APK distribución | vía @Capinibot en Telegram |

## Archivos importantes

| Archivo | Para qué |
|---------|----------|
| `contenido_web/aprendiendo-luk/index.html` | Mini-juegos (HTML monolítico) |
| `contenido_web/musica-ninos/piano-acordes.html` | Piano 5 octavas + chords + ear trainer |
| `contenido_web/musica-ninos/INVESTIGACION.md` | Estado del piano (octavas, layout) |
| `contenido_web/aprendiendo-luk/generate_images_minimax.js` | Generador de imágenes con MiniMax |
| `docs/investigacion-octavas-piano-v3.6.md` | Por qué 5 octavas (C2-C6) |
| `docs/investigacion-functional-ear-trainer.md` | Método Benbassat completo |

## Bot de Telegram (Capinibot)

- Token: `7205911204:AAFhMrsmIj9mOveFBaUNBm6P1TQIZpodMdE`
- Username: `@Capinibot`
- Uso: distribución de APK a usuarios finales
- Script: `~/clawd/bots/capinibot.py`
- Log: `~/clawd/logs/capinibot.log`

## API y modelos

- **Modelo actual:** `minimax-cap/MiniMax-M2.7` (proveedor separado, API key propia de Cris)
- **Generación de imágenes:** MiniMax (`image-01`)
- **Voz/TTS:** MiniMax speech-2.8-hd (si se ocupa para contenido educativo)
- **NO uses** la API key de CeluCenter (`minimax/MiniMax-M2.7`) — son keys separadas

## Cron activo

- **Cada 30 min:** agente busca octavas extra + valida método Functional Ear Trainer
- Solo activo si hay sesión persistente (en esta sesión `cap` se puede reactivar)

## Capacitor / Android

```bash
# NO ejecutar sin que Cris lo pida explícitamente
cd ~/clawd/repos/capinimx
npm install
npx cap sync android
cd android && ./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`

## Web Audio API (referencia rápida)

Para tonos puros del piano (no archivos):
```javascript
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.frequency.value = 261.63; // C4 (middle C)
osc.type = 'sine';
gain.gain.value = 0.3;
osc.connect(gain).connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 1.0);
```

Frecuencias base (equal temperament, A4=440Hz):
- C4 = 261.63 Hz (middle C)
- A4 = 440.00 Hz
- C2 = 65.41 Hz (octava más baja del piano actual)
- C6 = 1046.50 Hz (octava más alta)

## Generación de imágenes con MiniMax

El script `generate_images_minimax.js` está configurado. Para regenerar:
```bash
cd ~/clawd/repos/capinimx/contenido_web/aprendiendo-luk
MINIMAX_API_KEY="sk-..." node generate_images_minimax.js
```