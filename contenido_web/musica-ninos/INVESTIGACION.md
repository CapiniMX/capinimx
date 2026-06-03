# Investigación: Octavas del Piano

## Estado Actual (v3.6)

**Rango:** 5 octavas (C2-C6) — 60 notas totales
**Ancho piano:** min-width 2100px
**Teclas blancas:** 48px c/u + 2px margin
**Scroll horizontal** necesario en móvil

### Distribución de octavas
- Octava 2 (C2-B2): 12 notas — inferior extendida
- Octava 3 (C3-B3): 12 notas — baja
- Octava 4 (C4-B4): 12 notas — central (middle C)
- Octava 5 (C5-B5): 12 notas — alta
- Octava 6 (C6-B6): 12 notas — superior extendida

### Teclas blancas en piano: 28 (4 octavas naturales contadas doble + extras)
- WhiteIdx: 0-27 para las 28 teclas blancas

### Teclas negras: 20 (5 octavas × 5 teclas negras)
- BLACK_KEYS[] hardcodeados con `left` en px para cada posición

## Análisis UI/UX

### Problema identificado
- Piano muy largo (2100px) — difícil navegación en móvil
- Sin botones de navegación entre octavas
- Todas las octavas visibles simultáneamente (sobrecarga visual para niños)

### Soluciones evaluadas
1. **Botones ← →** para cambiar octava visible (mostrar ~1 octava a la vez)
2. **Piano scrollable** con snap horizontal
3. **Selector de octava** (desplegable)

### Recomendación
Para la versión actual, mantener piano completo (2100px) con scroll horizontal nativo.
Para versión futura: implementar botones de navegación con scroll animado.

---

# Investigación: Functional Ear Trainer (Alain Benbassat)

## Estado Implementado (v3.5/v3.6)

### Lo que YA existe
- Pestaña "🎧 Oído" con 3 niveles progresivos
- Cadencia I-IV-V-I antes de cada nota (establece tónica)
- Reference melody (3-4 notas del nivel antes de la nota a adivinar)
- Opciones de botones con colores por nota
- Level up automático después de 5 aciertos
- Muestra nota correcta con color al fallar

### Lo que FALTA (parte del método Benbassat)
- **Resolución melódica**: después de adivinar (correcto o incorrecto),
  tocar una melodía corta que resuelve la nota a la tónica
- Ejemplo: si la nota era Mi → resolver Mi-Re-Do
- Ejemplo: si la nota era Fa → resolver Fa-Mi-Re-Do

## Método Completo de Benbassat

### Paso 1: Cadencia (I-IV-V-I)
Establece la tónica (Do) firmly. Plays Do-Fa-Sol-Do.

### Paso 2: Reference Melody (3-4 notas)
Toca un fragmento melódico conocido del nivel actual.
Esto pone la tónica en "memoria" auditivamente.

### Paso 3: Nota a adivinar
Se toca una nota random del nivel.

### Paso 4: Resolución (LO QUE FALTA)
Después de la respuesta del usuario, se toca la resolución melódica:
- Nota → dirección hacia Do → llegan a Do

**Resoluciones estándar:**
| Nota | Resolución a Do |
|------|-----------------|
| Mi (3) | Mi → Re → Do |
| Fa (4) | Fa → Mi → Re → Do |
| Sol (5) | Sol → Fa → Mi → Re → Do |
| La (6) | La → Sol → Fa → Mi → Re → Do |
| Ti (7) | Ti → Do (directo) |

**Regla general:** la resolución desciende por semitonos hasta llegar a Do.

### Progresión de Niveles Implementada
- Nivel 1: 4 notas (Do, Re, Mi, Sol)
- Nivel 2: 5 notas (+La)
- Nivel 3: 7 notas (escala completa Do-Si)

### Mínimo Viable: Resolución Melódica

Para agregar la resolución, se necesita:
1. Función `playResolution(noteName)` que construya la secuencia de resolución
2. Llamar esta función después de `checkEarAnswer()` en ambos casos (correcto/incorrecto)
3. Secuencias predefinidas para cada nota

## Referencias
- https://www.functionalear.com (método original)
- Alain Benbassat - teaching functional ear training
- Serhii Korchan's implementation (Bemol app)