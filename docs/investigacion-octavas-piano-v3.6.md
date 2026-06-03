# Investigación: Octavas del Piano - ESTADO FINAL v3.6

**Fecha:** 2026-06-03 (actualizado)  
**Proyecto:** La Aventura Musical de Alexander  
**Versión actual:** v3.6 (HEAD)

---

## Resumen Ejecutivo

**✅ IMPLEMENTADO:** 5 octavas piano (C2-C6) desde v3.6

---

## Estado Actual (v3.6)

### Rango de notas
- **5 octavas:** C2 → C6
- **60 notas totales** (12 × 5)
- **35 teclas blancas** (7 × 5)
- **25 teclas negras**
- **Frecuencia:** 65.41 Hz (Do2) a 1975.53 Hz (Si5)
- **Min-width piano:** 2100px
- Scroll horizontal necesario en móvil

### Detalle por octava
| Octava | Rango | Notas blancas | Frecuencia min | Frecuencia max |
|--------|-------|----------------|----------------|----------------|
| 2 (grave) | C2-B2 | Do, Re, Mi, Fa, Sol, La, Si | 65.41 Hz | 123.47 Hz |
| 3 | C3-B3 | Do, Re, Mi, Fa, Sol, La, Si | 130.81 Hz | 246.94 Hz |
| 4 (central) | C4-B4 | Do, Re, Mi, Fa, Sol, La, Si | 261.63 Hz | 493.88 Hz |
| 5 (aguda) | C5-B5 | Do, Re, Mi, Fa, Sol, La, Si | 523.25 Hz | 987.77 Hz |
| 6 (extensión alta) | C6-B6 | Do, Re, Mi, Fa, Sol, La, Si | 1046.50 Hz | 1975.53 Hz |

---

## Decisiones de Diseño

### Por qué 5 octavas (C2-C6)

1. **Pedagógico:** Las cadencias I-IV-V-I suenan mejor con octava grave Do2
2. **Canciones infantiles:** "Do Re Mi" de Sound of Music cabe completa en 5 octavas
3. **Twinkle Twinkle:** Necesita Do grave para la melodía completa
4. **Balance UX:** 5 octavas es el sweet spot entre rango y scroll horizontal

### Limitaciones aceptadas

- Piano ancho (~2100px) requiere scroll horizontal en móvil
- Teclas más pequeñas en 5 octavas vs 4 octavas
- Pero Alexander (6 años) puede tocar con scroll, no es blocker

---

## Arquitectura Técnica

### NOTES array
```javascript
// 5 octavas = 60 notas
// Octava 2: C2-B2 (grave)
// Octava 3: C3-B3
// Octava 4: C4-B4 (central)
// Octava 5: C5-B5
// Octava 6: C6-B6 (extensión alta)
```

### BLACK_KEYS array
```javascript
// 25 teclas negras (5 × 5)
// Octava 2: left offsets 134-384
// Octava 3: left offsets 384-634
// Octava 4: left offsets 734-984
// Octava 5: left offsets 1134-1384
// Octava 6: left offsets 1534-1784
```

### renderPiano()
- Itera sobre `NATURAL_NOTES` (todas las notas no-sharps)
- Posiciona teclas negras con `position: absolute` y `left` offsets

---

## Comparación Histórica

| Versión | Octavas | Rango | Teclas blancas | Piano width |
|---------|---------|-------|----------------|-------------|
| v3.0 | 2 | C3-C5 | 14 | ~700px |
| v3.2 | 3 | C3-B5 | 21 | ~1050px |
| v3.3/v3.4 | 4 | C2-C5 | 28 | ~1700px |
| v3.6 (actual) | 5 | C2-C6 | 35 | ~2100px |

---

## Conclusión

**✅ IMPLEMENTADO y FUNCIONAL**

5 octavas (C2-C6) es la configuración final del piano.足够 para canciones infantiles comunes.

**No se recomienda agregar más octavas** porque:
- 6 octavas = piano de ~2500px, muy largo para móvil
- El beneficio pedagógico marginal no justifica la complejidad UX
- Las canciones típicas para niños de 4-7 años no requieren más rango

---

*Documento actualizado: 2026-06-03*
*Versión analizada: v3.6 (HEAD)*