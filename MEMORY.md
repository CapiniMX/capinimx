# MEMORY.md — Conocimiento CAPINI

## Cuentas y accesos

| Recurso | Credencial / URL |
|---------|------------------|
| GitHub repo | https://github.com/CapiniMX/capinimx |
| GitHub user (Cris) | `piztian` (token en keyring) |
| GitHub Pages | https://capinimx.github.io/capinimx/ |
| Bot Telegram `@Capinibot` | Token `7205911204:AAFhMrsmIj9mOveFBaUNBm6P1TQIZpodMdE` |
| MiniMax API (Capini) | API key separada en `~/.openclaw/openclaw.json` como `MINIMAX_API_KEY_CAP` |
| Sesión OpenClaw `cap` | workspace = `~/clawd/repos/capinimx/` |

## URLs públicas activas

- **Lobby principal:** https://capinimx.github.io/capinimx/
- **AprendiendoLuk:** https://capinimx.github.io/capinimx/contenido_web/aprendiendo-luk/
- **Piano + chords + ear trainer:** https://capinimx.github.io/capinimx/contenido_web/musica-ninos/piano-acordes.html
- **Link corto piano:** https://tinyurl.com/2ymkbm6p

## Estructura del repo

```
capinimx/
├── android/                    ← Capacitor (NO build sin pedir)
├── contenido_web/
│   ├── aprendiendo-luk/        ← 3 mini-juegos
│   ├── musica-ninos/           ← Piano 5 oct + chords + ear trainer
│   ├── puntos-ninos/           ← Registro con estrellas
│   ├── assets/                 ← Imágenes, iconos
│   └── index.html              ← Lobby principal (v3.0)
├── docs/                       ← Investigaciones (octavas, ear trainer)
├── node_modules/               ← Capacitor
├── package.json                ← @capacitor/android
└── .gitignore                  ← DS_Store, logs, node_modules
```

## Productos y nombres

- **CAPINI** = marca general (Centro de Atención y Prevención de Infancias)
- **AprendiendoLuk** = mini-juegos entrenamiento mental
- **La Aventura Musical de Alexander** = piano + chords + ear trainer
- **Puntos Niños** = registro con estrellas

## Audiencias

- **Niños 4-12 años** (target principal)
- **Padres/madres** que compran la app o la descargan
- **Terapistas/educadores** que la usan en sesiones

## Paleta y tipografía (intocable)

```css
:root {
  --turquesa:    #4DB6AC;  /* primario */
  --rosa:        #F48FB1;  /* secundario */
  --negro:       #333333;
  --blanco:      #FFFFFF;
  --rosa-piel:   #FDDCCC;
  --turquesa-claro: #B2DFDB;
  --gris-claro:  #F5F5F5;
}
/* Fonts: Montserrat (headings) + Nunito (body) */
```

## Método Functional Ear Trainer (Alain Benbassat)

**Estado:** parcialmente implementado en v3.5/v3.6.

**Lo que YA existe:**
- Pestaña "🎧 Oído" con 3 niveles progresivos
- Cadencia I-IV-V-I antes de cada nota (establece tónica)
- Reference melody (3-4 notas del nivel antes de la nota a adivinar)
- Opciones de botones con colores por nota
- Level up automático después de 5 aciertos
- Muestra nota correcta con color al fallar

**Lo que FALTA:**
- **Resolución melódica** — después de adivinar (correcto o incorrecto), tocar melodía que resuelve la nota a la tónica
  - Ej: si nota era Mi → resolver Mi-Re-Do
  - Ej: si nota era Fa → resolver Fa-Mi-Re-Do

**Documento completo:** `docs/investigacion-functional-ear-trainer.md`

## Piano — Estado actual (v3.6)

- **Rango:** 5 octavas (C2-C6) — 60 notas totales
- **Ancho:** min-width 2100px (scroll horizontal en móvil)
- **Teclas blancas:** 28 (WhiteIdx 0-27)
- **Teclas negras:** 20 (5 octavas × 4)
- **Último fix:** commit `83e6c59` rebuild piano keys via JS for pixel-perfect

## Decisiones de arquitectura (no cambiar sin documentar)

- **Vanilla JS** > React/Vue (simplicidad, velocidad para niños)
- **Capacitor** > Cordova
- **GitHub Pages** > hosting propio
- **Web Audio API** > archivos MP3 (para piano)
- **MiniMax image-01** > DALL-E/Stable Diffusion (consistencia con marca)
- **API key separada** > usar la de CeluCenter

## Sesión OpenClaw `cap`

Esta sesión está dedicada exclusivamente a CAPINI. Si Cris pregunta algo de CeluCenter (tiendas, ventas, ERP), debe ir a la sesión `main` o usar `sessions_send` para cruzar info.

**Config del agent:**
- ID: `cap`
- Provider: `minimax-cap` (API key propia)
- Modelo: `MiniMax-M2.7`
- Workspace: `~/clawd/repos/capinimx/`

## Historia reciente

- **26-jun-2026:** commit `83c7309` agrega pestaña Imprimir
- **22-jun-2026:** commit `83e6c59` fix piano alignment pixel-perfect
- **21-jun-2026:** commit `4311501` agrega Memoria Secuencial y Velocidad Visual
- **19-jun-2026:** commit `c29cada` scripts de generación de imágenes
- **18-jun-2026:** commit `43387a9` actualiza info oficial de CAPINI en lobby
- **28-jun-2026:** se creó esta sesión dedicada con API key propia