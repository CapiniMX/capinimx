# AprendiendoLuk - Guía de Testing y Verificación

## Cómo Ejecutar las Versiones

### Opción 1: Abrir en navegador directamente

```bash
# v1.0 Original (backup)
open /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/index_v1.0.html

# v2.0 Mejorada (RECOMENDADA)
open /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/index_v2.0.html
```

### Opción 2: Servidor local

```bash
# En la carpeta del proyecto
cd /Users/cristianbarajas/clawd/repos/capinimx/contenido_web/aprendiendo-luk/

# Iniciar servidor Python 3
python3 -m http.server 8000

# O usar Node http-server
npx http-server

# Luego acceder a: http://localhost:8000/index_v2.0.html
```

---

## Checklist de Testing - v2.0

### 1. NAVEGACIÓN Y ESTRUCTURA

#### Home Tab
- [ ] Logo "AprendiendoLuk" visible con gradiente
- [ ] Estadísticas cargan correctamente (mejor score y sesiones)
- [ ] Botón "Empezar ahora" funciona
- [ ] Cards descriptivas visibles
- [ ] Colores CAPINI aplicados correctamente

```
Esperado: Header sticky, logo con gradiente turquesa-rosa,
stats con números grandes, botón redondeado 26px
```

#### Games Tab
- [ ] Tres cards de juegos visibles
- [ ] Cada card tiene título, emoji y descripción
- [ ] Click en card abre selector de dificultad
- [ ] Hover effects funcionan (elevación + sombra)

```
Esperado: Cards con border-radius 20px, hover levanta el elemento,
sombra CAPINI azul-turquesa
```

#### History Tab
- [ ] Mensaje "No hay sesiones" si está vacío
- [ ] Sesiones previas se muestran en orden inverso
- [ ] Muestra: fecha, dificultad, score, estrellas
- [ ] Máximo 5 sesiones visibles

```
Esperado: Cards del historial con tipografía clara,
badges de dificultad con colores CAPINI
```

#### Footer
- [ ] Logo CAPINI visible en footer
- [ ] Tagline "Creciendo Juntos" visible
- [ ] Footer siempre al final (no ocupa espacio de contenido)
- [ ] Border superior turquesa

```
Esperado: Footer limpio, logo en gradiente, fondo oscuro
```

#### Header
- [ ] Header es sticky (se queda arriba al scroll)
- [ ] Tabs de navegación visibles (Inicio, Juegos, Historial)
- [ ] Tab activo tiene underline turquesa
- [ ] Blur effect visible en background
- [ ] Logo en header visible

```
Esperado: Header permanece visible al scroll,
blur visible en fondo, navegación clara
```

---

### 2. SELECTOR DE DIFICULTAD

- [ ] Botón "Atrás" (←) funciona y cierra selector
- [ ] Tres botones de dificultad visibles (Fácil, Medio, Difícil)
- [ ] Botones tienen colores de borde distintivos
- [ ] Click en dificultad abre instrucciones del juego

```
Esperado: Overlay modal, botones redondeados 26px,
cada uno con color borde diferente (turquesa, rosa, naranja)
```

---

### 3. PANTALLA DE INSTRUCCIONES

- [ ] Título del juego con emoji
- [ ] Instrucciones claras y bien formateadas
- [ ] Botón "Empezar →" inicia el juego
- [ ] Botón "Atrás" (←) funciona

```
Esperado: Modal limpio, tipografía clara (Montserrat para título),
instrucciones con bullets bien legibles
```

---

### 4. JUEGO: SUMA RÁPIDA

#### Funcionamiento

- [ ] Operación matemática mostrada grande (3em)
- [ ] Cuatro botones de respuesta (2x2 grid)
- [ ] Timer cuenta hacia atrás (12s fácil, 10s medio, 8s difícil)
- [ ] Timer bar visual se ve
- [ ] Score se actualiza en tiempo real

```
Esperado: Operación en turquesa #4DB6AC grande,
respuestas en grid 2x2, timer bar rellena de izq a der
```

#### Respuestas

- [ ] Respuesta correcta resaltada en turquesa
- [ ] Respuesta incorrecta resaltada en rosa
- [ ] Todos los botones se deshabilitan tras responder
- [ ] Toast aparece con "+puntos" (verde) o "Incorrecto" (rojo)

```
Esperado: Feedback visual inmediato, sin poder clickear
otros botones, toast en esquina inferior
```

#### Progresión

- [ ] Después de 1.5s, nueva pregunta aparece
- [ ] 5 preguntas completadas = fin de suma
- [ ] Pantalla de resultado aparece

```
Esperado: Transición suave entre preguntas,
después de 5 va a siguiente juego
```

---

### 5. JUEGO: MEMORIA SECUENCIAL

#### Inicio

- [ ] "Nivel 1 / 5" visible
- [ ] Grid de 3x3 botones de colores
- [ ] "Observa..." mensaje visible
- [ ] Botones deshabilitados durante animación

```
Esperado: Grid 3x3 (o 2x2 en móvil), colores vibrantes,
mensaje centrado, botones sin interacción
```

#### Secuencia

- [ ] Primer color brilla (animación 500ms)
- [ ] 800ms delay entre colores
- [ ] Después de mostrar secuencia, "Tu turno..." aparece
- [ ] Botones habilitados para input

```
Esperado: Animación clara de brillo,
delay visual entre elementos, transición suave
```

#### Input del Jugador

- [ ] Clickear color que jugador ve efectivamente
- [ ] Si correcto, color resalta
- [ ] Si error, cambio a siguiente secuencia (se repite)
- [ ] "Intentos" disminuyen (3 intentos máximo)

```
Esperado: Input responsivo, visual feedback claro,
contador de intentos visible
```

#### Progresión

- [ ] Cada nivel correcto: nivel sube, 1 color se agrega
- [ ] Max 5 niveles
- [ ] Fin de juego cuando: nivel > 5 O intentos = 0

```
Esperado: Progresión clara, aumento de dificultad,
fin lógico del juego
```

---

### 6. JUEGO: VELOCIDAD VISUAL

#### Setup

- [ ] Target instruction visible (ej: "Toca los números PARES")
- [ ] Arena visible (cuadrado oscuro)
- [ ] "✓ 0 | ✗ 0" contador visible
- [ ] Timer bar en top (30s para todos)

```
Esperado: Arena despejada, target text en turquesa claro,
contador centrado en bottom
```

#### Items Generados

- [ ] Items aparecen aleatoriamente en arena
- [ ] Items desaparecen después de tiempo (1.5-3s según dificultad)
- [ ] Nuevos items generados mientras timer corre
- [ ] Máximo items simultáneos aumenta con dificultad

```
Esperado: Items aparecen y desaparecen fluidamente,
sin lag notable
```

#### Interacción

- [ ] Click/tap en item correcto: ✓ aumenta, puntos se suman
- [ ] Click/tap en item incorrecto: ✗ aumenta, puntos se restan
- [ ] Toast muestra "+5" (verde) o "-1" (rojo)
- [ ] Score nunca baja de 0

```
Esperado: Feedback inmediato, puntuación correcta,
sin poder "quedar negativo"
```

#### Fin

- [ ] Timer llega a 0s automáticamente
- [ ] Items desaparecen
- [ ] Pantalla de resultado aparece

```
Esperado: Transición suave a resultado,
último score mostrado
```

---

### 7. PANTALLA DE RESULTADO

#### Visual

- [ ] Estrellas mostradas (⭐ o ☆ según score)
- [ ] Título dinámico ("¡Excelente!", "¡Muy bien!", etc.)
- [ ] Score total en grande

```
Esperado: Estrellas claras, título inspirador,
número en turquesa grande
```

#### Breakdown de Puntuación

- [ ] Tres juegos listados (Suma, Memoria, Visual)
- [ ] Cada uno con su puntuación
- [ ] Total correcto (suma de los tres)

```
Esperado: Breakdown claro, totales correctos,
formato legible
```

#### Acciones

- [ ] Botón "Siguiente →" (si hay más juegos):
  - [ ] Lleva al siguiente juego
  - [ ] Reset score a 0

- [ ] Botón "Ir al inicio":
  - [ ] Vuelve a home tab
  - [ ] Session se cierra
  - [ ] Datos se guardan en localStorage

```
Esperado: Navegación clara, datos persistidos
```

---

### 8. PERSISTENCIA DE DATOS

#### localStorage

- [ ] Completar sesión completa
- [ ] Cerrar tab/navegador
- [ ] Reabrir URL
- [ ] Historial está ahí

```bash
# Verificar en DevTools Console
localStorage.getItem('aprendiendo-luk-state')
// Debe retornar objeto JSON con sesiones
```

#### Estadísticas

- [ ] Mejor puntuación se actualiza correctamente
- [ ] Contador de sesiones aumenta
- [ ] Datos persisten entre sesiones

```
Esperado: Home screen muestra último best score
y cantidad correcta de sesiones
```

---

### 9. RESPONSIVE DESIGN

#### Mobile (320px)

- [ ] Todo cabe en pantalla sin scroll horizontal
- [ ] Header adapta (puede haber wrap)
- [ ] Tabs siguen visibles
- [ ] Botones son tocables (tamaño >= 44px)
- [ ] Texto legible (no muy pequeño)

```
Esperado: Perfecto en iPhone 5/SE, sin desbordamiento
```

#### Mobile (480px)

- [ ] Cards full width con padding
- [ ] Operaciones en Suma Rápida: 2.5em (no 3em)
- [ ] Color grid: 2x2 (no 3x3)
- [ ] Buttons mantienen buen tamaño

```
Esperado: IPhone 8 se ve bien, juegos jugables
```

#### Tablet (768px)

- [ ] Layout adapta sin breaks
- [ ] No hay cambios radicales vs mobile
- [ ] Todo funciona igual

```
Esperado: iPad se ve razonable
```

#### Desktop (1024px+)

- [ ] Ningún cambio vs 768px (responsive completo en max-width)
- [ ] Se ve profesional
- [ ] Spacing coherente

```
Esperado: Versión final se ve polida
```

---

### 10. VISUAL & ESTÉTICA CAPINI

#### Colores

- [ ] Turquesa #4DB6AC usado en:
  - [ ] Borders (header, tabs, botones)
  - [ ] Operaciones matemáticas (Suma)
  - [ ] Respuestas correctas
  - [ ] Score displays
  - [ ] Logo header

- [ ] Rosa #F48FB1 usado en:
  - [ ] Respuestas incorrectas
  - [ ] Level counter (Memoria)
  - [ ] Acentos

- [ ] Turquesa claro #B2DFDB usado en:
  - [ ] Footer tagline
  - [ ] Target text (Visual)

```
Esperado: Colores consistentes con CAPINI, armoniosos
```

#### Tipografía

- [ ] Montserrat en:
  - [ ] Logo "AprendiendoLuk"
  - [ ] Títulos de juegos
  - [ ] Headers grandes
  - [ ] Números grandes (score)

- [ ] Nunito en:
  - [ ] Descripciones
  - [ ] Body text
  - [ ] Labels

```
Esperado: Claridad visual, jerarquía evidente
```

#### Border Radius

- [ ] Cards: 20px
- [ ] Botones principales: 26px
- [ ] Stats boxes: 20px
- [ ] Color buttons: 16px

```
Esperado: Estilo consistente redondeado, "CAPINI-like"
```

#### Efectos Hover

- [ ] Cards: Elevación + sombra azul
- [ ] Botones: Shine effect + shadow más grande
- [ ] Tabs: Background suave + border color change

```
Esperado: Feedback visual claro en interacciones
```

---

### 11. PERFORMANCE

#### Velocidad de Carga

- [ ] Página carga en < 1 segundo
- [ ] Sin lag visible al navegar tabs
- [ ] Animaciones smooth (no jank)

```bash
# Verificar en DevTools Network tab
# Target: < 500ms para documentos
```

#### Memory

- [ ] Sin memory leaks evidentes
- [ ] Completar 10 sesiones seguidas sin ralentización
- [ ] Console limpia (sin errores repetidos)

```
Esperado: DevTools Memory tab muestra uso estable
```

#### Confetti

- [ ] Animación visible y suave
- [ ] No causa lag notable
- [ ] Se desvanece correctamente

```
Esperado: Efecto celebratorio sin sacrificar FPS
```

---

### 12. TESTING EN DIFERENTES BROWSERS

#### Chrome/Chromium
- [ ] Todos los tests anteriores pasan
- [ ] Backdrop blur funciona
- [ ] Canvas confetti funciona

#### Firefox
- [ ] Todos los tests anteriores pasan
- [ ] Backdrop blur puede no funcionar (fallback a background)
- [ ] Canvas funciona

#### Safari (macOS)
- [ ] Todos los tests anteriores pasan
- [ ] -webkit prefixes en efecto
- [ ] Funciona en iPad/iPhone

#### Safari Mobile (iOS)
- [ ] Touch events funcionan correctamente
- [ ] Scroll suave
- [ ] No tiene problemas con viewport

---

## Testing Avanzado

### Test de Límite (Edge Cases)

#### Suma Rápida
```
1. Esperar a que timer llegue a 0 sin responder
   ✓ Esperado: Nueva pregunta o fin de juego

2. Responder muy rápido (antes de 1s)
   ✓ Esperado: Transición suave

3. Completar 100+ sesiones (para localStorage)
   ✓ Esperado: Solo últimas 5 guardadas
```

#### Memoria
```
1. Hacer 3 errores en mismo nivel
   ✓ Esperado: Fin de juego, sesión se termina

2. Completar todos 5 niveles
   ✓ Esperado: Mensaje de éxito, fin de juego

3. Completar nivel 5 perfecto
   ✓ Esperado: Max score, 3 estrellas
```

#### Visual Speed
```
1. No clickear ningún item en 30s
   ✓ Esperado: Score = 0, fin de juego

2. Clickear items incorrectos solamente
   ✓ Esperado: Score va negativo → 0, fin normal

3. Muchos items simultáneos (dificultad máxima)
   ✓ Esperado: Performance aceptable, sin crash
```

### Testing de Accesibilidad (Básico)

```
1. Navegar sin mouse (solo teclado)
   ✓ Esperado: Todos los botones focusables

2. Abrir DevTools Console
   ✓ Esperado: Sin errores rojos

3. Probar en pantalla muy pequeña (320px)
   ✓ Esperado: Totalmente usable
```

### Testing de Datos

```
1. Guardar sesión
2. Abrir DevTools Console
3. Ejecutar: localStorage.getItem('aprendiendo-luk-state')
✓ Esperado: JSON válido con estructura correcta

{
  "sessions": [...],
  "bestScore": 1250
}
```

---

## Checklist Rápido (5 minutos)

```
[ ] Abrir v2.0 en navegador
[ ] Ver Home con stats y header sticky
[ ] Click "Empezar ahora"
[ ] Seleccionar "Medio"
[ ] Ver instrucciones
[ ] Click "Empezar"
[ ] Jugar Suma Rápida (responder 5 preguntas)
[ ] Jugar Memoria Secuencial (completar 2-3 niveles)
[ ] Jugar Velocidad Visual (30 segundos)
[ ] Ver Resultado final con estrellas
[ ] Click "Ir al inicio"
[ ] Verificar sesión en Historial
[ ] Cerrar y reabrir navegador
[ ] Verificar datos persisten
[ ] Verificar estadísticas actualizadas

✅ Si todo funciona = OK
```

---

## Reporte de Bugs

Si encuentras problemas durante testing:

1. **Describe el bug**
   - ¿Qué hiciste?
   - ¿Qué pasó?
   - ¿Qué se esperaba?

2. **Proporciona contexto**
   - Browser y versión
   - Dispositivo y resolución
   - Pasos para reproducir

3. **Ejemplo**
   ```
   Bug: Cards no elevan en hover en iPhone 12
   Browser: Safari iOS 16
   Device: iPhone 12 (390x844)
   Reproducción:
   1. Abrir index_v2.0.html
   2. Tab "Juegos"
   3. Intentar hover en card (no es posible touch "hover")
   Esperado: Card debe elevarse al presionar
   Actual: Card no se mueve
   ```

---

## Conclusión

Si todos los tests pasan, **v2.0 está lista para producción**.

El archivo `index_v1.0.html` debe mantenerse como backup/referencia.

---

**Última actualización**: Junio 2024
**Versión**: 2.0
**Testing Status**: ✅ Listo para verificar
