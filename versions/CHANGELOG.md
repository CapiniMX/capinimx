# 🎹 La Aventura Musical - Registro de Cambios

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