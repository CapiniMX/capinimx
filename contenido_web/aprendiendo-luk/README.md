# AprendiendoLuk - Entrenamiento Mental

Single HTML game application con 3 mini-juegos interactivos tipo Brain Age.

## 📁 Archivo
- **Ubicación**: `/contenido_web/aprendiendo-luk/index.html`
- **Tamaño**: ~50KB
- **Tecnología**: Vanilla JS + HTML/CSS (sin frameworks)

## 🎮 3 Mini-juegos

### 1. 🔢 Suma Rápida
Resuelve operaciones matemáticas contra el tiempo
- Dificultades: Fácil (+), Medio (+-), Difícil (+-×)
- Timer personalizado por dificultad (6-12s por pregunta)
- Puntos basados en velocidad + dificultad
- Grid 2×2 de respuestas (botones touch-friendly)

### 2. 🎨 Memoria Secuencial
Memoriza y repite secuencias de colores (Simon-like)
- Secuencias crecientes por nivel
- 6 colores disponibles (rojo, azul, verde, amarillo, morado, naranja)
- Intentos limitados por dificultad (1-3)
- Confetti cada 2 niveles completados

### 3. 👁️ Velocidad Visual
Identifica y toca elementos según instrucciones dinámicas
- Modos: números pares/impares, colores
- Items flotantes con tiempo de vida limitado
- 30 segundos de juego
- Sistema de puntos: aciertos + penalización por errores

## 🎯 Características principales

### Navegación
- 🏠 **Inicio**: Estadísticas y botón para comenzar
- 🎮 **Juegos**: Acceso directo a cada mini-juego con selección de dificultad
- 📊 **Historial**: Últimas 5 sesiones registradas

### Sistema de puntuación
- Scoring dinámico según dificultad (multiplicadores: 1x, 1.5x, 2x)
- Estrellas de sesión (⭐⭐⭐) basadas en umbral de puntos
- Mejor puntuación persistente

### Almacenamiento
- **Key localStorage**: `brainage_v1`
- Guarda: mejores puntos, sesiones completas (max 5)
- Datos: fecha, dificultad, puntos por juego, estrellas

### Interfaz
- Paleta CAPINI: Teal (#4DB6AC) + Pink (#F48FB1)
- Dark theme con Nunito font
- Responsive (mobile-friendly)
- Toast notificaciones (éxito/error/info)
- Efecto confetti en logros

## 🚀 Cómo usar

### Abrir en navegador
```bash
# Abre directamente - no necesita servidor
open /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/index.html
```

### Flujo de juego
1. Navega a **🎮 Juegos** o presiona **Empezar ahora** en Inicio
2. Selecciona un mini-juego
3. Elige dificultad (Fácil/Medio/Difícil)
4. Lee instrucciones (aparecen automáticamente)
5. Completa los 3 juegos en una sesión
6. Ve tu puntuación total y estrellas
7. Historial guardado automáticamente en localStorage

## 🔧 Verificación técnica

- ✅ Sin errores console JS (DevTools)
- ✅ localStorage accesible (brainage_v1)
- ✅ Responsive en móvil (Chrome DevTools device mode)
- ✅ Confetti sin overflow
- ✅ Touch areas mínimo 70px
- ✅ Navegación fluida entre secciones

## 🛣️ Roadmap futuro (comentarios en código)

```javascript
// FUTURE: Firebase Auth — registro/login para progreso en nube
// FUTURE: Modo premium — mini-juegos adicionales
// FUTURE: Rankings globales con Firestore
// FUTURE: Capacitor/Cordova → APK para Google Play
// FUTURE: Web Audio API — sonidos interactivos
```

## 📋 Estructura de código

### Estado Global (STATE)
- `session`: Active game queue, scores, difficulty
- `game`: Current game logic, timers, sequence data
- `storage`: Persisted sessions and best score
- `ui`: Navigation and modal management

### Fases de implementación completadas
1. ✅ Esqueleto navegable
2. ✅ Infraestructura compartida (audio, toast, confetti, storage)
3. ✅ Suma Rápida
4. ✅ Memoria Secuencial
5. ✅ Velocidad Visual
6. ✅ Sistema de sesión + pulido final

## 🎨 Paleta de colores
- Fondo primario: #1a1a2e
- Fondo secundario: #16213e
- Fondo terciario: #0f3460
- Accent Teal: #4DB6AC
- Accent Pink: #F48FB1
- Confetti: ['#4DB6AC', '#F48FB1', '#FDDCCC', '#B2DFDB', '#f39c12', '#FFF']

---
**Creado**: Junio 2026 | **Versión**: 1.0
