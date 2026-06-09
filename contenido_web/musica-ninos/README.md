# 🎹 AprendiendoLuk - Piano para Niños

> **Proyecto CAPINI** - Centro de Atención Psicológica Integral y Neurodesarrollo Infantil
> 
> "Creciendo Juntos"

---

## 📖 Qué es

Aplicación web educativa para que niños aprendan piano de forma interactiva y divertida. Desarrollada para **Luk, 6 años**, como parte de las plataformas digitales de CAPINI.

**URL en vivo:** https://capinimx.github.io/capinimx/contenido_web/musica-ninos/index.html

---

## ✅ Estado Actual (v3.0-CAPINI)

### Diseño CAPINI Aplicado
El proyecto fue migrado al sistema de diseño oficial de CAPINI:

| Aspecto | Implementación |
|---------|---------------|
| **Paleta de colores** | Turquesa `#4DB6AC` + Rosa `#F48FB1` |
| **Tipografía** | Montserrat (títulos) + Nunito (body) |
| **Piano iluminado** | Teclas brillan en turquesa CAPINI |
| **Botones** | Efecto shine + gradiente CAPINI |
| **Cards** | Hover effects con overlay gradient |
| **Header/Footer** | Sticky + blur + branding CAPINI |
| **Animaciones** | SlideUp en transiciones |
| **Accesibilidad** | Focus states + reduced motion |

### Funcionalidades
- 🎹 **Piano interactivo** con teclado físico (A S D F G H J para blancas, W E T Y U para negras)
- 📚 **5 Lecciones** progresivas (Notas, Manos, DoReMi, Arcoíris, Melodías)
- 🎚️ **Selector de octava** (C3, C4, C5, C6)
- 🎵 **3 Modos de notación** (DoReMi, ABC, 123)
- ⭐ **Sistema de progreso** con localStorage
- 📱 **Responsive** para móvil y tablet

---

## 📁 Estructura

```
contenido_web/musica-ninos/
├── index.html              # Aplicación principal (v3.0-CAPINI)
├── index.html.v0-original  # Versión original (backup)
├── index.html.v1-html-fixed           # Fix estructura HTML
├── index.html.v2-variables-css        # Variables CSS CAPINI
├── index.html.v3-header-vars          # Header con variables
├── index.html.v4-hero-tabs            # Hero + tabs CAPINI
├── index.html.v5-footer-content       # Footer con variables
├── index.html.v6-cards                # Cards con hover effects
├── index.html.v7-lesson-btns          # Botones lesson con shine
├── index.html.v8-secondary-btns       # Botones secondary CAPINI
├── index.html.v9-piano-colors         # Piano en turquesa
├── index.html.v10-play-btn            # Play buttons con shine
├── index.html.v11-progress-feedback   # Progress bar + feedback
├── index.html.v12-piano-sections      # Piano sections con bordes
├── index.html.v13-animations          # Animaciones + focus states
├── index.html.v14-download-btn        # Botón descarga CAPINI
├── index.html.v15-final-responsive    # Responsive final
├── index.html.v16-number-fixed        # Fix modo número (1-7 blancas)
├── index.html.v17-octave-selector     # Selector de octava (C3-C6)
└── README.md               # Este archivo
```

---

## 🚀 Historial de Commits

| Commit | Descripción |
|--------|-------------|
| `2cce10e` | feat(piano): add octave selector (C3, C4, C5, C6) |
| `dfebb06` | feat(musica-ninos): apply CAPINI design system |
| `7fbd09a` | v3.0-Luk: base Alexander v3.0 + rename to AprendiendoLuk |
| `3372ca9` | v4.5: rename Alexander → Luk + APK filename fix |
| `5d38b71` | v4.4: fix number mode labels |
| `326c871` | v4.3: merge gh-pages into main |
| `4d8ae26` | v4.3: fix white key labels |
| `434d3a6` | v4.2: fix white key labels |

---

## 🎯 Roadmap / Qué se espera

### Próximas mejoras sugeridas
- [ ] **Más octavas visibles** - Mostrar 2 octavas en el piano al mismo tiempo
- [ ] **Grabación** - Permitir grabar y reproducir composiciones
- [ ] **Más canciones** - Agregar lecciones con canciones populares infantiles
- [ ] **Puntuación** - Sistema de estrellas por precisión en lecciones
- [ ] **Modo oscuro/claro** - Tema alternativo (aunque el dark es el oficial CAPINI)
- [ ] **Exportar audio** - Descargar grabaciones como archivo de audio
- [ ] **Múltiples instrumentos** - Cambiar entre piano, guitarra, etc.

### Pendientes técnicos
- [ ] Convertir CSS inline a archivo separado
- [ ] Modularizar JavaScript en archivos separados
- [ ] Agregar service worker para PWA
- [ ] Tests automatizados

---

## 🛠️ Desarrollo local

```bash
# Clonar repo
git clone https://github.com/CapiniMX/capinimx.git
cd capinimx/contenido_web/musica-ninos

# Servidor local
python3 -m http.server 8080

# Abrir en navegador
open http://localhost:8080/index.html
```

---

## 📞 Contacto CAPINI

- **Instagram:** [@CAPINImx](https://instagram.com/CAPINImx)
- **Facebook:** [@CAPINImx](https://facebook.com/CAPINImx)
- **WhatsApp:** 341-136-5236
- **Email:** capinimx@gmail.com
- **Web:** [capinimx.com](https://capinimx.com)

---

*Documento creado: Junio 2026*
*Diseño: Sistema CAPINI*
*Versión actual: v3.0-CAPINI*
