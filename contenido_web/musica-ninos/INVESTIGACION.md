# Investigación: Octavas del Piano

## Estado Actual

**Rango:** 1 octava (C4-B4), 7 teclas blancas + 5 negras = 12 notas
**Ancho piano:** min-width 600px
**Teclas blancas:** 48px c/u + 2px margin = 350px por octava
**Teclas negras:** posicionadas con `left` absoluto hardcodeado

## Análisis: ¿Cuántas octavas agregar?

### Opción A: +1 octava (2 octavas total)
- **Feasible:** Sí, implementación simple
- **Ancho total:** ~700px (scroll horizontal necesario en móvil)
- **Beneficio:** Permite melodías más variadas, manos separadas
- **UX Móvil:** Scroll horizontal con botones de navegación

### Opción B: +2 octavas (3 octavas total)  
- **Feasible:** Técnicamente sí, pero piano muy largo (~1050px)
- **Beneficio extra:** Más rango melódico
- **UX Móvil:** Más scroll, podría ser confuso para niños

### Opción C: Toggle de octavas (botones ← →)
- **Feasible:** Sí, mantiene UX limpia
- **Visualización:** Solo 7 teclas visibles a la vez
- **Ideal para:** Pantallas pequeñas, niños

## Recomendación: Implementar Opción A + C combinadas

- Renderizar 2 octavas (C3-B4)
- Contenedor scroll horizontal
- Botones de navegación lateral
- En desktop se ven ambas octavas, en móvil scroll

## Implementación Planificada (v3.1)

1. Expandir NOTES[] para incluir 2da octava (C3-B3)
2. Actualizar BLACK_KEYS[] con posiciones para octava inferior
3. Hacer piano scrollable con min-width 900px
4. Ajustar renderPiano() para soportar offset de octava
5. Agregar botones de navegación ← → para cambiar octava visible

---

# Investigación: Functional Ear Trainer (Alain Benbassat)

## Resumen del Método

### Filosofía
Enseña reconocimiento **funcional** de notas (qué papel juegan en la tonalidad), no intervalos aislados. Como entender palabras en contexto vs. sonidos sueltos.

### Pasos Core
1. **Cadencia inicial:** I-IV-V-I para establecer la tónica (Do)
2. **Nota aleatoria:** Se toca una nota random de la escala
3. **Identificar grado:** El usuario debe decir si es Do, Re, Mi, Fa, Sol, La, Ti
4. **Resolución:** Después de adivinar, se toca una melodía que resuelve a la tónica

### Progresión de Niveles
- **Nivel 1:** 4 notas (Do, Re, Mi, Sol) en C major
- **Nivel 2:** 5 notas (agrega La)
- **Nivel 3:** 7 notas (escala completa)
- **Nivel 4:** Notas cromáticas
- **Nivel 5:** Otras tonalidades mayores/menores

### Mínimo Viable para "Oído" Tab

**Sin rebuild grande,我们可以 agregar:**

1. **Nueva pestaña "🎧 Oído"** en el piano
2. **Cadencia automática** (I-IV-V-I con Web Audio)
3. **4 botones:** Do, Re, Mi, Sol (nivel 1 del método)
4. **Lógica simple:**
   - Tocar cadencia
   - Tocar 1 nota random
   - Usuario selecciona una de 4 opciones
   - Feedbackvisual + audio
5. **Progresión:** después de 5 aciertos, agregar La (5 notas)

### Por qué funciona para niños
- Solo 4 opciones al inicio (no abrumador)
- Cadencia hace el contexto claro
- Patrón Do-Re-Mi es intuitivo
- 10 minutos diarios recomendados

## Referencias
- https://www.functionalear.com (método original)
- Alain Benbassat - "Why We Hear What We Hear" (teoría)