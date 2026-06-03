# 🎹 La Aventura Musical - Registro de Cambios

---

## v2.3 — 03/Jun/2026
### Investigación: Octavas Extra en el Piano

**Análisis:**
- Piano actual: 1 octava (C4-B4, 7 teclas blancas + 5 negras)
- Añadida 2da octava (C5-E5): 3 teclas blancas adicionales (Do↑, Re↑, Mi↑) con sus sostenidos
- whiteIdx refactorizado: 0-6 para octava 4, 7-9 para octava 5
- Lógica de iluminación: búsqueda por eng name en lugar de posMap frágil

**Factibilidad:**
- ✅ 1 octava extra = 10 teclas blancas total → scroll horizontal necesario en móvil (ok)
- ✅ 2 octavas extras = 14 teclas blancas → piano muy angosto en móvil (evitar)
- ✅ Web Audio API maneja frecuencias sin cambios
- ⚠️ Lecciones existentes no usan notas de octava 5 (no hay conflicto)

**Cambios:**
- NOTES array: 17 notas (12 octava 4 + 5 octava 5)
- BLACK_KEYS: 7 teclas negras (5 octava 4 + 2 octava 5)
- displayName: `Do+` → `Do↑` para indicar octava alta
- Teclas de teclado adicionales: K L O P ; para octava 5
- v2.3 en título y badge

**Resultado:**
✅ Committed en `feature/piano-octaves`. Listo para PR.

---

## v2.2 — 02/Jun/2026
### Petición:
> "Las teclas negras de sostenido suenan idénticas a la tecla anterior, no tienen su sonido particular"

### Acción:
- Agregadas 5 notas negras: Do#, Re#, Fa#, Sol#, La# con frecuencias reales (277, 311, 370, 415, 466 Hz)
- Creada función flashKey/lightKey que distingue entre teclas blancas y negras
- Las teclas negras ahora suenan diferente a las naturales
- Teclas de teclado W E T Y U para las teclas negras

### Resultado:
✅ Subido a GitHub y guardado en `/versions/v2.2_sharps_fix.html`

---

## v2.1 — 02/Jun/2026
### Petición:
> "Me gustó lo de las lecciones pero necesito que se vean las teclas del piano que se tocan en la lección y no nada más las notas. También opción para que las notas salgan en su nombre con letras A-G o con números"

### Acción:
- Piano visible durante las lecciones (debajo de los controles)
- Teclas se iluminan conforme la lección avanza (lightKey funcional)
- 3 modos de nombre: DO RE MI / A B C D / 1 2 3 4
- Barra de selección de modo visible en lecciones y piano libre

### Resultado:
✅ Subido a GitHub. Luego se encontró bug: pantalla se ponía en negro al dar play. Se revertió a v1.0.

---

## v1.0 — 02/Jun/2026
### Petición:
> "Quiero una app para que mi hijo Alexander (7 años) aprenda música: piano, escalas, progresiones"

### Acción:
- App creada desde cero
- 5 lecciones: Las 7 Notas, Tus Manos en el Piano, Do Re Mi canción, Arcoíris Musical, Tu Primera Melodía
- Piano interactivo con 7 teclas blancas (solo naturales)
- Logros y progreso guardado en localStorage
- Demo songs con melodías pre-programadas

### Resultado:
✅ Subido a GitHub en CapiniMX/capinimx. Funcionó bien — era la versión estable antes de las mejoras.

---

## Notas técnicas

- Audio usa Web Audio API (AudioContext)
- Versiones guardadas en: `~/clawd/proyectos/musica-ninos/versions/`
- Repo en GitHub: `CapiniMX/capinimx/contenido_web/musica-ninos/`
- storage key para progreso: `music_v2_1`
- Nombre de Alexander hardcodeado en el título (futuro: hacerlo configurable)