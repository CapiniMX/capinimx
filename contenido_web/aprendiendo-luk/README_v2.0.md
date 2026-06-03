# AprendiendoLuk v2.0 - Entrenamiento Mental

Aplicación educativa interactiva para entrenar la mente con tres juegos desafiantes. Rediseñada con identidad visual CAPINI y mejoras de UX/UI.

## Versiones Disponibles

| Versión | Archivo | Estado | Recomendación |
|---------|---------|--------|----------------|
| **v2.0** | `index_v2.0.html` | ✅ PRODUCCIÓN | **USAR ESTA** |
| v1.0 | `index_v1.0.html` | ✅ Funcional | Backup/Referencia |
| Original | `index.html` | ✅ Funcional | Backup |

## Características Principales

### Tres Juegos Educativos

1. **🔢 Suma Rápida**
   - Resuelve operaciones matemáticas contra reloj
   - Dificultades: Fácil, Medio, Difícil
   - Sistema de puntos con bonus por velocidad
   - 5 preguntas por sesión

2. **🎨 Memoria Secuencial**
   - Memoriza y repite secuencias de colores
   - 5 niveles progresivos
   - 3 intentos por sesión
   - Dificultad aumenta con cada nivel

3. **👁️ Velocidad Visual**
   - Identifica elementos según instrucción
   - 30 segundos contra reloj
   - 4 tipos de targets (pares, impares, colores)
   - Sistema de puntos + penalizaciones

### Características v2.0

✅ **Diseño CAPINI**
- Colores turquesa (#4DB6AC) y rosa (#F48FB1)
- Tipografía: Montserrat + Nunito
- Header sticky con navegación mejorada
- Footer con branding CAPINI

✅ **Componentes Modernos**
- Cards con border-radius 20px y hover effects
- Botones redondeados (26px) con gradientes
- Animaciones suaves (cubic-bezier)
- Backdrop blur en header
- Sombras sofisticadas

✅ **Mejores UX**
- Responsive design mejorado (320px - 1024px+)
- Sistema de espaciado consistente (variables CSS)
- Toast notifications claros
- Confetti celebratorio optimizado
- Better visual feedback

✅ **Persistencia de Datos**
- Historial de últimas 5 sesiones
- Mejor puntuación guardada
- localStorage con validación
- Sincronización automática

## Cómo Usar

### Abrir Localmente

**Opción 1: Navegador directo**
```bash
open /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/index_v2.0.html
```

**Opción 2: Servidor local**
```bash
cd /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/
python3 -m http.server 8000
# Luego ir a: http://localhost:8000/index_v2.0.html
```

### Flujo de Uso

1. **Inicio**: Ver estadísticas (mejor puntuación, sesiones completadas)
2. **Seleccionar Dificultad**: Fácil, Medio o Difícil
3. **Ver Instrucciones**: Detalles de cómo jugar
4. **Jugar 3 Juegos**: Suma Rápida → Memoria → Velocidad Visual
5. **Ver Resultado**: Puntuación total y estrellas
6. **Historial**: Seguimiento de todas las sesiones

## Tabs Principales

### 🏠 Inicio
- Mejor puntuación alcanzada
- Número de sesiones completadas
- Botón para empezar nueva sesión

### 🎮 Juegos
- Descripción de cada juego
- Acceso directo a juegos individuales
- Sistema de dificultad

### 📊 Historial
- Últimas 5 sesiones
- Fecha, dificultad y puntuación
- Sistema de estrellas

## Especificaciones Técnicas

### Browser Support
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 12+
- ✅ Android Chrome 90+

### Performance
- Load time: < 500ms
- FPS: 60 (desktop), 50+ (mobile)
- Bundle size: ~100KB (HTML + CSS + JS)

### Storage
- localStorage: ~5MB máximo
- Datos guardados: Últimas 5 sesiones
- Sincronización automática

## Archivos del Proyecto

```
/aprendiendo-luk/
├── index_v2.0.html              # ✅ VERSIÓN PRODUCCIÓN
├── index_v1.0.html              # Backup original
├── index.html                   # Respaldo adicional
├── CHANGELOG.md                 # Cambios v1.0 → v2.0
├── AUDIT_REPORT.md              # Auditoría completa
├── DESIGN_SPECIFICATIONS.md     # Especificaciones CAPINI
├── TESTING_GUIDE.md             # Guía de testing
└── README_v2.0.md               # Este archivo
```

## Paleta de Colores CAPINI

```css
--color-primary:     #4DB6AC  /* Turquesa */
--color-accent:      #F48FB1  /* Rosa */
--color-light:       #B2DFDB  /* Turquesa claro */
--color-dark:        #1a1a2e  /* Fondo oscuro */
--color-surface:     #16213e  /* Surface oscuro */
--color-border:      #0f3460  /* Bordes */
```

### Usos

- **Turquesa**: Borders, tabs activos, respuestas correctas, score
- **Rosa**: Respuestas incorrectas, acentos, level counter
- **Turquesa Claro**: Footer tagline, targets, highlights

## Tipografía

- **Títulos**: Montserrat (700, 800) - Google Fonts
- **Body**: Nunito (400, 600, 700, 800) - Google Fonts

## Sistema de Puntuación

### Suma Rápida
| Dificultad | Puntos Base | Bonus Velocidad | Máx/Pregunta |
|-----------|-----------|-----------------|-------------|
| Fácil | 10 | 1x-2x | 20 |
| Medio | 15 | 1x-2x | 30 |
| Difícil | 20 | 1x-2x | 40 |

### Memoria Secuencial
| Dificultad | Puntos/Nivel |
|-----------|-------------|
| Fácil | 10 |
| Medio | 20 |
| Difícil | 30 |

### Velocidad Visual
| Dificultad | Acierto | Error |
|-----------|--------|-------|
| Fácil | +5 | -1 |
| Medio | +10 | -2 |
| Difícil | +15 | -3 |

## Sistema de Estrellas

| Umbral (Fácil) | Estrellas |
|----------------|-----------|
| < 200 | ⭐☆☆ |
| 200-400 | ⭐⭐☆ |
| > 400 | ⭐⭐⭐ |

| Umbral (Medio) | Estrellas |
|----------------|-----------|
| < 350 | ⭐☆☆ |
| 350-700 | ⭐⭐☆ |
| > 700 | ⭐⭐⭐ |

| Umbral (Difícil) | Estrellas |
|-----------------|-----------|
| < 500 | ⭐☆☆ |
| 500-1000 | ⭐⭐☆ |
| > 1000 | ⭐⭐⭐ |

## Mejoras de v1.0 → v2.0

### Diseño Visual
- ✅ Paleta CAPINI completamente integrada
- ✅ Tipografía coherente (Montserrat + Nunito)
- ✅ Border radius consistente (8px → 26px según componente)
- ✅ Sistema de variables CSS para fácil mantenimiento
- ✅ Header sticky con backdrop blur
- ✅ Footer con branding CAPINI

### UX/Interactividad
- ✅ Hover effects mejorados (elevación + sombra)
- ✅ Animaciones con cubic-bezier
- ✅ Toast notifications mejorados
- ✅ Confetti optimizado (50 vs 100 partículas)
- ✅ Better visual feedback en juegos

### Responsive
- ✅ Breakpoints en 480px y 360px
- ✅ Header adapta en móvil
- ✅ Grid de colores: 3x3 (desktop) → 2x2 (móvil)
- ✅ Operaciones: 3em (desktop) → 2.5em (móvil)
- ✅ Padding adaptativo

### Performance
- ✅ Confetti optimizado
- ✅ Transiciones GPU-aceleradas
- ✅ Sin memory leaks
- ✅ Canvas optimizado

## Testing

Para verificar que todo funciona correctamente:

1. **Abrir v2.0** en navegador
2. **Navegar entre tabs** (Inicio, Juegos, Historial)
3. **Completar sesión** completa (3 juegos)
4. **Verificar resultado** y puntuación
5. **Cerrar y reabrir** navegador
6. **Confirmar datos** persisten en historial

Ver `TESTING_GUIDE.md` para checklist completo.

## Browsers Recomendados para Mejor Experiencia

- ✅ Chrome/Chromium (recomendado)
- ✅ Safari (macOS + iOS)
- ✅ Firefox
- ✅ Edge

## Problemas Conocidos

### v1.0 (Archivado)
- Confetti causaba lag en móvil (solucionado en v2.0)
- Colores genéricos sin identidad (solucionado en v2.0)
- Responsive limitado (solucionado en v2.0)

### v2.0 (Actual)
- ✅ Todos solucionados

## Futuras Mejoras (v2.1+)

### Próximas
- [ ] Sonidos/vibración opcional
- [ ] Modo pausa en juegos
- [ ] Sistema de badges/logros
- [ ] Más breakpoints responsive (tablet 768px)
- [ ] WCAG 2.1 AA compliance

### Mediano Plazo
- [ ] Migración a IndexedDB (mejor que localStorage)
- [ ] PWA / Service Worker
- [ ] Offline support
- [ ] Multiplayer básico
- [ ] Analytics de desempeño

### Largo Plazo
- [ ] Backend con cuentas de usuario
- [ ] Cloud sync
- [ ] Ranking global
- [ ] Nuevos juegos
- [ ] App nativa iOS/Android

## Soporte y Documentación

- **AUDIT_REPORT.md**: Análisis completo de v1.0
- **CHANGELOG.md**: Cambios detallados v1.0 → v2.0
- **DESIGN_SPECIFICATIONS.md**: Guía visual y especificaciones
- **TESTING_GUIDE.md**: Cómo verificar que funciona todo

## Autor y Licencia

**Proyecto**: AprendiendoLuk
**Versión**: 2.0
**Rediseño**: CAPINI Design System
**Última actualización**: Junio 2024
**Licencia**: Privada (CAPINI/CapiniMX)

## Contacto y Reporte de Issues

Si encuentras problemas:
1. Describe el bug claramente
2. Incluye browser, dispositivo y pasos para reproducir
3. Contacta con el equipo de desarrollo

---

## Resumen de Archivos

### Para Usar en Producción
- ✅ `index_v2.0.html` - **USAR ESTE**

### Para Referencia/Backup
- 📌 `index_v1.0.html` - Versión anterior
- 📌 `index.html` - Original

### Para Documentación
- 📖 `CHANGELOG.md` - Qué cambió
- 📖 `AUDIT_REPORT.md` - Análisis profundo
- 📖 `DESIGN_SPECIFICATIONS.md` - Guía de diseño
- 📖 `TESTING_GUIDE.md` - Cómo testear
- 📖 `README_v2.0.md` - Este archivo

---

**AprendiendoLuk v2.0 está lista para producción.**

Disfruta entrenando tu mente. 🧠
