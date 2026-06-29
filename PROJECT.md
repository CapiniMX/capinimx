# PROJECT.md — Estado Actual de CAPINI

**Última actualización:** 28-jun-2026

## 🎯 Qué es CAPINI

**CAPINI** = Centro de Atención y Prevención de Infancias

Apps educativas web + Android para niños. Stack: HTML + CSS + JS vanilla + Capacitor.

## 📦 Productos actuales

### 1. AprendiendoLuk (entrenamiento mental)
**Path:** `contenido_web/aprendiendo-luk/`
**Web:** https://capinimx.github.io/capinimx/contenido_web/aprendiendo-luk/
**Estado:** ✅ Funcional, 3 mini-juegos

Mini-juegos implementados:
- 🎯 **Memoria Secuencial** (recién agregado)
- ⚡ **Velocidad Visual** (recién agregado)
- 🧩 **Patrón / Secuencias** (por confirmar)

### 2. La Aventura Musical de Alexander
**Path:** `contenido_web/musica-ninos/`
**Web:** https://capinimx.github.io/capinimx/contenido_web/musica-ninos/piano-acordes.html
**Estado:** ✅ Piano + Chords + Scales + Ear Trainer

Funcionalidades:
- 🎹 Piano de **5 octavas** (C2-C6) — 60 notas
- 🎼 Acordes (triadas y séptimas) — recientes
- 🎶 Escalas (mayor, menor, pentatónica, etc.)
- 🎧 **Functional Ear Trainer** (método Alain Benbassat) — versión 3.5/3.6
  - ✅ Cadencia I-IV-V-I antes de cada nota
  - ✅ Reference melody de 3-4 notas
  - ✅ Level up después de 5 aciertos
  - ❌ **Resolución melódica** (pendiente: tocar Mi-Re-Do después de adivinar Mi)

### 3. Puntos Niños
**Path:** `contenido_web/puntos-ninos/`
**Estado:** 🟡 Beta, registro con estrellas

### 4. Web de marca CAPINI (público)
**Path:** `contenido_web/index.html`
**Web:** https://capinimx.github.io/capinimx/
**Estado:** ✅ v3.0 desplegado en GitHub Pages
- Hero con carousel de lonas
- Testimonios
- Blog
- Catálogo de programas (música, entrenamiento mental, gamificación)

## 🛠 Stack técnico

- **Frontend:** HTML + CSS + JS vanilla (sin frameworks)
- **Android:** Capacitor 8.4 (sincronizado con web)
- **Audio:** Web Audio API nativa (tonos generados, no archivos)
- **Imágenes:** MiniMax API (`image-01`) — script `generate_images_minimax.js`
- **Deploy:** GitHub Pages automático en push a `main`
- **Assets:** Turquesa `#4DB6AC` + Rosa `#F48FB1` + Montserrat/Nunito

## 🔴 Reglas duras

1. **NO build APK** sin que Cris lo pida explícitamente
2. **NO cambiar paleta de marca** sin consultar
3. **NO salir de 5 octavas** en el piano (C2-C6) sin documentar
4. Commits a `main` directo OK, pero con conventional commits

## 📋 Próximos pasos (orden de prioridad)

### Alta (esta semana)
- [ ] **Resolución melódica** en Functional Ear Trainer (Benbassat completo)
- [ ] Verificar alineación de teclas negras del piano (pixel-perfect)
- [ ] Test responsive del piano en móvil/tablet

### Media (próximas 2 semanas)
- [ ] Implementar **selector de octava** en piano (UX mejora, sugerido en docs)
- [ ] Agregar más mini-juegos a AprendiendoLuk
- [ ] Mejorar Puntos Niños (gamificación)

### Baja (cuando esté sólida la web)
- [ ] **Build APK Android** — solo cuando Cris diga
- [ ] Distribución vía @Capinibot
- [ ] Beta testing con usuarios reales

## 🐛 Issues / bugs conocidos

- Piano scroll horizontal en móvil puede ser confuso para niños
- Black keys alignment — reciente fix en commit `83e6c59` (rebuild via JS)
- Sin PWA installable aún

## 📊 Métricas

- Repo: github.com/CapiniMX/capinimx
- Stars: 0 (privado/público limitado)
- Última release: sin tags (no usa GitHub Releases)
- Commits recientes:
  - `83c7309` — pestaña Imprimir (3 escalas por hoja)
  - `83e6c59` — piano keys rebuild via JS
  - `6ee65b6` — chords/progressions/scales
  - `4311501` — Memoria Secuencial y Velocidad Visual

## 🔗 Decisiones arquitectónicas

- **Vanilla JS > React** — Cris prefiere simpleza y velocidad de carga para niños
- **Capacitor > Cordova** — mejor mantenimiento, build más rápido
- **GitHub Pages > hosting propio** — gratis, simple, deploy automático
- **Web Audio API > archivos .mp3** — piano es pequeño, no vale la pena assets
- **MiniMax para imágenes** — separado de CeluCenter para tracking de costos

## 👥 Equipo

Solo Cris. Sin colaboradores en el repo actualmente.

## 📅 Última actividad

- 26-jun: `83c7309` Imprimir escalas
- 22-jun: `83e6c59` Piano fix
- 22-jun: `6ee65b6` Chords page
- 21-jun: `4311501` Mini-juegos nuevos
- 19-jun: `c29cada` Scripts generación imágenes
- 18-jun: `43387a9` Lobby info oficial

## 📞 Cuando Cris vuelve a esto

Lee primero: PROJECT.md → TOOLS.md → docs/investigacion-* → index.html del producto que vas a tocar.