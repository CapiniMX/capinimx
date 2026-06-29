# Skills del agent `cap`

Esta sesión tiene 3 skills instaladas localmente en `~/clawd/repos/capinimx/.agents/skills/`:

| Skill | Para qué | Cuándo usarla |
|-------|----------|---------------|
| **vanilla-web** | HTML/CSS/JS vanilla, ES modules, sin frameworks | Construir/modificar páginas web, widgets, refactors |
| **web-design** | UI production-grade: layout, tipografía, color, animaciones, a11y, responsive | Decisiones de diseño visual, revisar calidad |
| **ai-music** | Generación de música/audio con RunComfy | Crear contenido musical educativo, jingles, etc. |

## Skills globales también disponibles

Estas están en `~/.openclaw/workspace/.agents/skills/` (disponibles desde main también):
- `find-skills` — descubrir/instalar skills nuevas
- `analyzing-data` — consultas SQL/análisis de datos
- `erp-stx-analyst` — STX (solo CeluCenter)

## Si necesitas una skill que no está

Pídele al agent `cap` que use `find-skills` para buscar:
```
npx skills find [query]
```

O instala directo:
```
npx skills add <owner/repo@skill>
```

## Mantenimiento

Las skills se actualizan con:
```
npx skills update
```