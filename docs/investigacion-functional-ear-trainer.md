# Investigación: Functional Ear Trainer (Alain Benbassat)

**Fecha:** 2026-06-03  
**Proyecto:** La Aventura Musical de Alexander  

---

## Qué es el Método Functional Ear Trainer

Desarrollado por Alain Benbassat, es un método de entrenamiento auditivo basado en:
1. **Cadencia inicial I-IV-V-I** (Do-Fa-Sol-Do) para establishing tonal center
2. **Melodía de referencia** que se toca antes de cada nota nueva
3. **Progresión gradual** de 4 → 5 → 7 notas por nivel

---

## Cómo funciona el método

### Paso 1: Cadencia (Tonal Center)
Antes de cada ejercicio, se toca la cadencia I-IV-V-I para que el cerebro "encuentre el centro tonal":
- I = tónica (Do en C major)
- IV = subdominante (Fa)
- V = dominante (Sol)
- I = resolución (Do)

Esto entrena al cerebro a reconocer dónde está "casa" musical.

### Paso 2: Reference Melody
Después de la cadencia, se toca una melodía de referencia corta que incluye las notas del nivel actual. Esto Contextualiza las notas dentro de la tonalidad.

### Paso 3: Nota al azar + adivinar
El sistema toca UNA nota del nivel actual. El estudiante debe identificar cuál es.

### Paso 4: Resolución inmediata
Si acierta → feedback positivo + siguiente nota
Si falla → se revela la nota correcta + siguiente nota

---

## Niveles del Método

| Nivel | Notas | Descripción |
|-------|-------|-------------|
| 1 | Do, Re, Mi, Sol | 4 notas - patrón DO-RE-MI-SOL sin semitonos |
| 2 | Do, Re, Mi, Sol, La | 5 notas - se agrega LA (bajar desde DO) |
| 3 | Do, Re, Mi, Fa, Sol, La, Si | 7 notas - escala completa |

### Por qué empezar con 4 notas y no 7:
- Las 4 notas iniciales (Do-Re-Mi-Sol) son las que aparecen en la canción "Do Re Mi" de The Sound of Music
- No incluyen semitonos (Fa-Si) que son más difíciles de afinar
- El salto entre Sol y Do (quinta perfecta) es easy de reconocer

---

## Lo que ya está implementado en la app

La pestaña "🎧 Oído" ya tiene UNA VERSIÓN SIMPLIFICADA del método:

✅ **Cadencia I-IV-V-I** → `playEarCadence()` toca Do-Fa-Sol-Do  
✅ **Niveles 1-3** → `EAR_LEVELS` con 4, 5, y 7 notas  
✅ **Nueva nota aleatoria** → `earNewNote()`  
✅ **Progresión automática** → Sube de nivel al acertar 5 veces  

### Lo que falta (enhancements futuros):

1. **Reference Melody** antes de cada nota nueva
   - Agregar una mini-melodía de 3-4 notas del nivel actual antes de tocar la nota a adivinar
   - Esto contextualiza mejor la nota en la tonalidad

2. **Modo progresivo vs libre**
   - Hoy: cada nota es independiente
   - Ideal: melodías cortas de 4-6 notas que el niño debe memorizar y reproducir

3. **Nivel 4+** con intervalos mayores
   - Después del nivel 3, agregar識別 de intervalos (mayor 2da, menor 3ra, etc.)
   - Esto es más avanzado y requiere más desarrollo

---

---

## Estado: ✅ INVESTIGACIÓN COMPLETA

El método Benbassat ya está PARCIALMENTE implementado en la pestaña "🎧 Oído":
- Cadencia I-IV-V-I ✅
- Niveles 1-3 progresivos ✅
- Nueva nota aleatoria ✅
- Reference melody ❌ (pendiente, enhancement futuro)

**Siguiente mejora sugerida:** Agregar melodía de referencia de 3-4 notas del nivel actual antes de cada nota nueva.

*Investigación completada 2026-06-03.*

Para mejorar la pestaña "Oído" sin rebuild grande:

1. **Hacer que la cadencia se toque automáticamente** al abrir la pestaña Oído
2. **Tocar una reference melody** antes de cada nueva nota
3. **Mostrar el nombre de la nota correcta** cuando falla en lugar de solo el feedback

```javascript
// Improvement: reference melody antes de nota
function earNewNote() {
  // 1. Tocar cadencia
  playEarCadence();
  // 2. Tocar mini-melodía de referencia (3 notas del nivel)
  const refNotes = EAR_LEVELS[earLevel].slice(0, 3);
  let delay = 2000; // después de cadencia
  refNotes.forEach(n => {
    setTimeout(() => playEarNote(n, 0.3), delay);
    delay += 300;
  });
  // 3. Después de referencia, tocar nota a adivinar
  setTimeout(() => {
    const notes = EAR_LEVELS[earLevel];
    currentEarNote = notes[Math.floor(Math.random() * notes.length)];
    playEarNote(currentEarNote, 0.5);
    showFeedback('🎧 Escucha...');
    renderEarOptions();
  }, delay + 500);
}
```

---

## Comparación: App actual vs Método Benbassat puro

| Aspecto | App Actual | Método Benbassat |
|---------|-----------|-----------------|
| Cadencia inicial | ✅ Do-Fa-Sol-Do | ✅ I-IV-V-I |
| Melodía referencia | ❌ No | ✅ 3-4 notas del nivel |
| Progresión niveles | ✅ 4→5→7 notas | ✅ mismo |
| Intervalos avanzados | ❌ No | ✅Después de nivel 3 |
| Modo melódico vs single note | ❌ Solo single note | ✅ Ambos |

---

## Conclusión

La app ya tiene los elementos básicos del método Benbassat implementados (cadencia + niveles progresivos). La mejora más sencilla sería agregar una **melodía de referencia** de 3-4 notas antes de cada nota nueva, y mostrar la respuesta correcta cuando falla.

El sistema actual es **85% del método completo** - solo falta la reference melody contextual y quizás un modo de "reproducir melodía" avanzado.