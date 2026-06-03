# Investigación: Octavas del Piano

**Fecha:** 2026-06-03  
**Proyecto:** La Aventura Musical de Alexander  
**Versión analizada:** v3.2 (HEAD)

---

## Estado Actual

### Rango de notas actual
- **3 octavas:** C3 → B5 ( octave 3, 4, 5 )
- **36 notas totales** (12 × 3)
- **21 teclas blancas** (7 × 3)
- **15 teclas negras**
- **Frecuencia:** 130.81 Hz (Do3) → 987.77 Hz (Si5)
- **Min-width piano:** 1050px (funcional en scroll horizontal móvil)

### Código relevante (NOTES array)
```javascript
// 3 grupos de 12 notas cada uno (C3, C4, C5)
// whiteIdx: 0-20 para teclas blancas
// isSharp: true/false para differentiate negras
```

### Black keys definidos
- Grupo octava 3: C#3, D#3, F#3, G#3, A#3 → left offsets: 34, 84, 184, 234, 284
- Grupo octava 4: C#4, D#4, F#4, G#4, A#4 → left offsets: 384, 434, 534, 584, 634
- Grupo octava 5: C#5, D#5, F#5, G#5, A#5 → left offsets: 734, 784, 884, 934, 984

---

## Análisis: Agregar 4ta Octava

### Opción A: Agregar Octava Baja (C2)
**Pros:**
- Completa el piano hasta Do grave (C2 = 65.41 Hz)
- Más rango para melodías tipo "Twinkle Twinkle" (que empieza en Do)
- Útil para entrenar cadencias I-IV-V-I (Do-Fa-Sol-Do) con más notas graves
- Alexander puede experimentar con notas "grandes y profundas"

**Contras:**
- Frecuencias muy bajas (65-123 Hz) son difíciles de reproducir en parlantes pequeños de celular
- En móvil las notas graves suenan "borrosas" en pantallas pequeñas

### Opción B: Agregar Octava Alta (C6)
**Pros:**
- Más brillo para melodías avanzadas
- Rango agudo ayuda a desarrollar "discriminación de pitch"

**Contras:**
- C6 (1046.50 Hz) y B6 (1975 Hz) ya son bastante agudos
- 3 octavas cubre la mayoría de canciones infantiles (Do Re Mi, Twinkle, etc.)
- Las melodías детский típicamente no usan más de 1 octava y media de rango

### Opción C: No agregar (Mantener 3 octavas)
**Pros:**
- Ya es funcional y completo para el público objetivo (niños 4-7 años)
- Más octavas = piano más ancho = más scroll en móvil
- El scroll horizontal ya funciona bien

**Contras:**
- Limitado para estudiantes que progresan

---

## Decisión Recomendada

**Agregar 1 octava baja (C2)** por estas razones:

1. **Pedagógico:** Las cadencias (I-IV-V-I) suenan mejor con octava grave
2. **Sonoro:** Notas graves son más "presentes" y fáciles de identificar para niños
3. **UX aceptable:** 4 octavas = ~28 teclas blancas → ~1400px piano (aún funcional en scroll)
4. **Impacto mínimo:** No requiere cambio de lógica, solo extender arrays

---

---

## Estado: ✅ IMPLEMENTADO en v3.3/v3.4

La octava grave C2 fue agregada exitosamente:
- **Rango actual:** C2 → C5 (4 octavas, 28 teclas blancas)
- **Commit:** `21b8034 v3.3: +1 octava grave (C2) = 4 octavas piano`
- **Commit:** `24447be v3.4: 4 octavas piano (C2-C5) + fix octave-2 black keys rendering`
- **min-width piano:** actualizado a 1700px (funcional en scroll horizontal móvil)

### 1. NOTES array
Agregar 12 notas de Octava 2:
```
Do2 (65.41 Hz), Do#2, Re2, Re#2, Mi2, Fa2, Fa#2, Sol2, Sol#2, La2, La#2, Si2
whiteIdx: -7 a -1 (o nuevo offset)
octave: 2
key: vacío ('') - sin binding de teclado
```

### 2. BLACK_KEYS array
Agregar grupo octava 2:
```
C#2: left 134, D#2: left 184, F#2: left 284, G#2: left 334, A#2: left 384
```

### 3. renderPiano()
Adaptar whiteIdx de octave 2 (índices negativos handled differently)

### 4. Piano CSS width
Aumentar `min-width` de 1050px a ~1400px

---

## Impacto en Sistema

| Aspecto | Impacto |
|---------|---------|
| Audio (Web Audio API) | Ninguno - solo más notas en array |
| UI Móvil | Scroll horizontal ya existe, funcional |
| Lecciones | Compatibles - solo muestran notas existentes |
| Ear Training | Niveles 1-3 usan solo notas agudas (C4-C5), no afecta |
| APK | No requiere rebuild (web-first) |

---

---

*Investigación completada. Implementación activa en v3.4 (2026-06-03).*

Si el piano de 4 octavas queda muy ancho para el diseño, alternativas:
1. **Piano condensado:** Reducir width de teclas de 48px a 36px
2. **Piano scroll con indicador:** Visual hint de "hay más teclas a la izquierda/derecha"
3. **Piano expandible:** Botón "↔ Ampliar" que recarga piano con 4 octavas

---

*Conclusión: La inversión más valiosa es agregar C2 (octava grave), manteniendo scroll horizontal existente. Esto mejora la experiencia pedagógica sin rebuild de APK.*