# Investigación: Octavas del Piano - v3.5

## Estado Actual (v3.5)

El piano tiene **4 octavas**: C2, C3, C4, C5
- 48 teclas totales (36 blancas + 12 negras)
- Rango de frecuencia: 65.41 Hz (Do2) a 987.77 Hz (Si5)
- Min-width del piano: 1700px
- Scroll horizontal necesario para ver todo

## Análisis de Octavas

### Rango actual vs ideal

| Config | Octavas | Notas | Frecuencia min | Frecuencia max | Ancho piano |
|--------|---------|-------|----------------|----------------|-------------|
| Actual | 4 | 48 | 65.41 Hz | 987.77 Hz | ~1700px |
| +1 arriba | 5 | 60 | 65.41 Hz | 1318.51 Hz | ~2100px |
| +1 abajo | 5 | 60 | 43.65 Hz | 783.99 Hz | ~2100px |
| +2 arriba | 6 | 72 | 32.70 Hz | 1318.51 Hz | ~2500px |

### Consideraciones UX Móvil

**Problemas con más octavas:**
- Scroll horizontal obligatorio en móvil (ya lo tienen con 4)
- Teclas más pequeñas = más difícil para niños de 5-6 años
- Más scrolling = menos intuitivo

**Beneficio de +1 octava arriba (C2-C6):**
- Permite melodías más agudas (tipo "Do Re Mi" que termina en notas altas)
- La canción "Do Re Mi" original termina en la octava 5 (Do5)
- Para niños, ampliar hacia arriba es más útil que hacia abajo

**Beneficio de +1 octava abajo (C1-C5):**
- Notas más graves para ejercicios de bajo
- Poco útil para principiantes

## Recomendación

**Viable: +1 octava arriba (C2-C6)**
- Impacto UX moderado (scroll un poco más)
- Beneficio pedagógico alto
- Simplifica: la canción "Do Re Mi" entra completa en 5 octavas

**No recomendado por ahora:**
- +2 octavas = piano muy largo, poco práctico en móvil
- 3 octavas sería el límite si se implementara

## Implementación v3.6 (siguiente)

Si se decide agregar una octava:
- Agregar Octave 6 (C6-B6)
- 12 notas adicionales
- Ajustar BLACK_KEYS array con posiciones para octava 6
- Ajustar whiteIdx para octava 5 y 6
- Min-width subiría a ~2100px

## Decisión del usuario

Pendiente: ¿agregar octava 6 arriba o mantener las 4 actuales?

---
*Investigación realizada: 2026-06-03*
*Versión analizada: v3.5*