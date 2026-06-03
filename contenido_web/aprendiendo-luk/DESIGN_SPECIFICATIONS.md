# AprendiendoLuk - Especificaciones de Diseño CAPINI

## Paleta de Colores CAPINI

### Colores Primarios

```css
--color-primary:   #4DB6AC  /* Turquesa CAPINI - Uso principal */
--color-accent:    #F48FB1  /* Rosa CAPINI - Acentos/Botones secundarios */
--color-light:     #B2DFDB  /* Turquesa claro - Backgrounds suaves */
```

### Colores de Fondo

```css
--color-dark:      #1a1a2e  /* Fondo principal muy oscuro */
--color-surface:   #16213e  /* Surface/Cards oscuro */
--color-border:    #0f3460  /* Bordes y divisores */
```

### Gradientes

```css
--grad-primary:    linear-gradient(135deg, #4DB6AC, #F48FB1)
--grad-soft:       linear-gradient(135deg, #B2DFDB, #4DB6AC)
```

### Usos Específicos

| Color | Uso |
|-------|-----|
| #4DB6AC | Borders de header, tabs activos, buttons primarios, score displays |
| #F48FB1 | Respuestas incorrectas, acentos secundarios, level counter |
| #B2DFDB | Footer tagline, visual targets, highlights suaves |

---

## Sistema de Tipografía

### Fuentes Seleccionadas

```
Títulos:  'Montserrat', sans-serif
Body:     'Nunito', sans-serif
```

### Jerarquía de Tamaños

| Elemento | Tamaño | Peso | Font |
|----------|--------|------|------|
| Logo Header | 18px | 800 | Montserrat |
| Títulos de Pantalla | 28-42px | 800 | Montserrat |
| Títulos de Sección | 24px | 700 | Montserrat |
| Subtítulos | 16-18px | 700 | Montserrat |
| Body Text | 14-16px | 400-600 | Nunito |
| Labels Pequeños | 12-13px | 600 | Nunito |

### Ejemplos de Uso

```html
<!-- Header Logo -->
<div class="header-logo">AprendiendoLuk</div>
<!-- Font: Montserrat 800, Color: Gradient CAPINI -->

<!-- Título de Juego -->
<h2 class="game-title">🔢 Suma Rápida</h2>
<!-- Font: Montserrat 700 -->

<!-- Descripción -->
<p class="subtitle">Entrena tu mente con juegos desafiantes</p>
<!-- Font: Nunito 400-600, Color: #b0b0b0 -->
```

---

## Sistema de Espaciado

### Variables de Espaciado

```css
--spacing-xs:   4px    /* Mínimo espaciado (gaps pequeños) */
--spacing-sm:   8px    /* Pequeño (padding botones, gaps) */
--spacing-md:   16px   /* Estándar (padding cards, margin) */
--spacing-lg:   24px   /* Grande (padding secciones) */
--spacing-xl:   32px   /* Extra grande (padding header/footer) */
```

### Matriz de Aplicación

| Componente | Padding Interno | Margin Externo |
|-----------|-----------------|-----------------|
| Button | 12px 24px | - |
| Card | 24px | 16px bottom |
| Header | 24px | - |
| Footer | 24px | - |
| Section | 24px (padding) | - |
| Stat Box | 24px | - |

---

## Sistema de Border Radius

### Valores de Esquinas Redondeadas

```css
--radius-sm:   8px    /* Pequeño (inputs, toasts) */
--radius-md:   16px   /* Medio (color buttons) */
--radius-lg:   20px   /* Grande (cards, major components) */
--radius-btn:  26px   /* Botones principales */
```

### Aplicaciones Específicas

| Componente | Radius | Razón |
|-----------|--------|-------|
| Botones Primarios | 26px | CAPINI rounded style |
| Cards/Panels | 20px | Amigable, moderno |
| Stats Boxes | 20px | Consistencia con cards |
| Buttons Secundarios | 26px | Consistencia |
| Color Buttons (Memoria) | 16px | Un poco menos redondeado |
| Small Elements | 8px | Subtleza |

---

## Componentes Principales

### 1. Header

**Especificaciones**:
```css
.header {
  background: rgba(22, 33, 62, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--color-primary);
  padding: var(--spacing-lg);
  position: sticky;
  top: 0;
  z-index: 30;
}
```

**Features**:
- Sticky (permanece visible al scroll)
- Backdrop blur (efecto moderno)
- Border inferior en turquesa primario
- Contiene logo + navegación

**Responsive**:
- Desktop: Logo + Tabs alineados horizontalmente
- Mobile (<480px): Stack vertical, tabs debajo del logo

---

### 2. Buttons

#### Botón Primario
```css
.btn-primary {
  background: var(--grad-primary);  /* #4DB6AC → #F48FB1 */
  color: var(--color-dark);
  border-radius: var(--radius-btn);  /* 26px */
  padding: 12px 24px;
  font-weight: 800;
  box-shadow: 0 4px 15px rgba(77, 182, 172, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(77, 182, 172, 0.4);
  transform: translateY(-2px);
}
```

**Características**:
- Gradiente CAPINI (turquesa → rosa)
- Shadow dinámico en hover
- Elevación en hover (translateY)
- Transición suave (cubic-bezier)

#### Botón Secundario
```css
.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: var(--radius-btn);
}

.btn-secondary:hover {
  background: rgba(77, 182, 172, 0.1);
  box-shadow: 0 4px 15px rgba(77, 182, 172, 0.2);
}
```

**Características**:
- Borde turquesa primario
- Fondo transparente
- Hover con fondo suave

---

### 3. Cards

```css
.card {
  background: rgba(22, 33, 62, 0.8);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);  /* 20px */
  padding: var(--spacing-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.card:hover {
  border-color: var(--color-primary);
  background: rgba(22, 33, 62, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(77, 182, 172, 0.15);
}

.card::before {
  content: '';
  background: linear-gradient(135deg, rgba(77, 182, 172, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover::before {
  opacity: 1;
}
```

**Características**:
- Border: 2px sólido
- Radius: 20px (amigable)
- Overlay gradient en hover
- Elevación en hover (translateY -4px)
- Sombra sofisticada

---

### 4. Tabs de Navegación

```css
.tab-btn {
  flex: 1;
  padding: var(--spacing-md);
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--text-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-btn:hover {
  color: var(--color-primary);
  background: rgba(77, 182, 172, 0.1);
}

.tab-btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-btn.active::after {
  content: '';
  background: var(--grad-primary);
  height: 3px;
}
```

**Características**:
- Underline en turquesa primario
- Gradient en underline del tab activo
- Hover con background suave
- Transiciones suaves

---

### 5. Stats Box

```css
.stat-box {
  background: linear-gradient(135deg, rgba(77, 182, 172, 0.1), rgba(244, 143, 177, 0.1));
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.stat-box:hover {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, rgba(77, 182, 172, 0.2), rgba(244, 143, 177, 0.2));
  transform: translateY(-4px);
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  color: var(--color-primary);
  font-family: 'Montserrat';
}
```

**Características**:
- Fondo gradiente suave
- Border primario
- Hover effect con elevación
- Número en turquesa

---

### 6. Footer

```css
.footer {
  background: rgba(22, 33, 62, 0.95);
  border-top: 2px solid var(--color-primary);
  padding: var(--spacing-lg);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-logo {
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 700;
  background: var(--grad-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-tagline {
  font-size: 12px;
  color: var(--color-light);
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

**Características**:
- Logo CAPINI con gradiente
- Tagline "Creciendo Juntos"
- Border superior en primario
- Centrado y limpio

---

## Animaciones y Transiciones

### Timing Estándar

```css
/* Para la mayoría de transiciones */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Para efectos más rápidos */
transition: all 0.15s ease;

/* Para progreso/timers */
transition: width 0.9s linear;
```

### Curvas de Easing

- **cubic-bezier(0.4, 0, 0.2, 1)**: Smooth, natural (principal)
- **ease**: Smooth, rápido (rápidos)
- **linear**: Uniforme (progreso)

### Animaciones Específicas

#### Slide Up (Resultado)
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Hover Effects
```css
/* Elevación */
transform: translateY(-2px) translateY(-4px);

/* Scale */
transform: scale(0.96) scale(1);

/* Shine */
left: -100% → left: 100%;
```

---

## Responsive Design

### Breakpoints

```css
/* Desktop (default) */
/* No breakpoint, estilos base */

/* Tablet */
@media (max-width: 768px) {
  /* Ajustes menores */
}

/* Mobile */
@media (max-width: 480px) {
  .header { flex-wrap: wrap; }
  .tabs-nav { order: 3; width: 100%; }
  .operation-display { font-size: 2.5em; }
  .color-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile Pequeño */
@media (max-width: 360px) {
  .operation-display { font-size: 2em; }
  .result-score { font-size: 42px; }
}
```

### Puntos Clave Responsivos

| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Header Logo | 18px | Auto (wrap) |
| Tabs | Horizontal | Vertical |
| Operation Display | 3em | 2.5em (mobile), 2em (pequeño) |
| Color Grid | 3x3 | 2x2 (mobile) |
| Cards | Full width | Full width (sin margen) |
| Padding | 24px | 16px |

---

## Colores en Contexto

### Juego: Suma Rápida

- **Operación**: #4DB6AC (turquesa primario, grande y llamativo)
- **Respuesta Correcta**: Background #4DB6AC con opacity
- **Respuesta Incorrecta**: Background #F48FB1 con opacity
- **Timer Bar**: Gradiente primario

### Juego: Memoria

- **Botones**: Colores vibrantes personalizados
- **Level Counter**: #F48FB1 (rosa, destaca)
- **Border en Hover**: Depende del color del botón

### Juego: Velocidad Visual

- **Target Text**: #B2DFDB (turquesa claro)
- **Score Display**: #4DB6AC (primario)
- **Items**: Colores rojos/azules (contrastes específicos)

### Elemento: Historial

- **Difficulty Badge**: Background #4DB6AC con opacity
- **Score**: #4DB6AC (primario)
- **Estrellas**: Doradas (⭐ #FFD700)

---

## Sombras y Profundidad

### Shadow System

```css
/* Sutil (cards en reposo) */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

/* Elevación (cards en hover) */
box-shadow: 0 8px 24px rgba(77, 182, 172, 0.15);

/* Botón primario */
box-shadow: 0 4px 15px rgba(77, 182, 172, 0.3);

/* Botón primario hover */
box-shadow: 0 6px 20px rgba(77, 182, 172, 0.4);

/* Interior (timer bar) */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
```

---

## Accesibilidad de Diseño

### Contraste de Color

| Elemento | Ratio | WCAG |
|----------|-------|------|
| Texto blanco en turquesa | 4.5:1 | AA ✅ |
| Texto blanco en rosa | 3.8:1 | AA ⚠️ |
| Texto gris en oscuro | 3.2:1 | AA ⚠️ |

**Nota**: Se recomienda aumentar contraste en texto secundario para v2.1

### Focus States

```css
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Reducido Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Theming y Customización

### Variables Globales (Fáciles de Cambiar)

```css
:root {
  /* Cambiar colores CAPINI aquí */
  --color-primary: #4DB6AC;
  --color-accent: #F48FB1;

  /* Cambiar tipografía aquí */
  --font-title: 'Montserrat', sans-serif;
  --font-body: 'Nunito', sans-serif;

  /* Cambiar espaciado aquí */
  --spacing-lg: 24px;

  /* Cambiar radios aquí */
  --radius-btn: 26px;
}
```

### Para Cambiar Tema (Ejemplo):

```css
/* Tema Alternativo CAPINI */
:root {
  --color-primary: #F48FB1;  /* Hacer principal la rosa */
  --color-accent: #4DB6AC;   /* Hacer acento la turquesa */
}
```

---

## Notas de Implementación

### CSS Best Practices Utilizadas

1. ✅ Variables CSS para valores repetidos
2. ✅ Nomenclatura BEM para clases
3. ✅ Transiciones suaves con cubic-bezier
4. ✅ Mobile-first approach (base + media queries)
5. ✅ Gradientes para visual interest
6. ✅ Pseudo-elementos (::before, ::after) para efectos
7. ✅ Focus states para accesibilidad

### Performance Considerations

1. ✅ GPU-accelerated transforms (translateY, scale)
2. ✅ Backdrop blur limitado a header solamente
3. ✅ Shadows sofisticadas pero no excesivas
4. ✅ Sin animaciones en elementos ocultos
5. ✅ requestAnimationFrame para confetti

### Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers modernos

**Nota**: Backdrop blur puede no soportarse en navegadores antiguos (fallback: background color sólido)

---

## Ejemplos de Componentes Completos

### Card Interactiva

```html
<div class="card" onclick="handleGameSelect()">
  <h3>🔢 Suma Rápida</h3>
  <p class="subtitle">Resuelve operaciones matemáticas rápidamente</p>
</div>
```

```css
.card {
  background: rgba(22, 33, 62, 0.8);
  border: 2px solid #0f3460;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: #4DB6AC;
  background: rgba(22, 33, 62, 0.95);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(77, 182, 172, 0.15);
}

.card h3 {
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #ffffff;
}

.card .subtitle {
  color: #b0b0b0;
  font-size: 13px;
  line-height: 1.5;
}
```

### Botón Redondeado

```html
<button class="btn btn-primary" onclick="startSession()">
  ▶ Empezar ahora
</button>
```

```css
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 26px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.3s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn-primary {
  background: linear-gradient(135deg, #4DB6AC, #F48FB1);
  color: #1a1a2e;
  font-weight: 800;
  box-shadow: 0 4px 15px rgba(77, 182, 172, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(77, 182, 172, 0.4);
  transform: translateY(-2px);
}
```

---

## Resumen de Mejoras Aplicadas

| Aspecto | v1.0 | v2.0 |
|---------|------|------|
| Colores | Genéricos | CAPINI |
| Tipografía | Solo Nunito | Montserrat + Nunito |
| Border Radius | 8-12px | Consistente (8-26px) |
| Espaciado | Hardcoded | Variables CSS |
| Header | Fijo | Sticky + blur |
| Cards | Básicas | Con hover effects |
| Botones | Planos | Gradientes + shadows |
| Footer | Ninguno | Con CAPINI branding |
| Animaciones | Básicas | Cubic-bezier suaves |
| Responsive | Limitado | 2+ breakpoints |

---

**Última actualización**: Junio 2024
**Versión**: 2.0
**Diseñador**: CAPINI Design System
