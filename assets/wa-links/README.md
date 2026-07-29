# wa-links · CAPINI Psicología

Esta carpeta contiene los códigos QR de los enlaces `wa.link` de WhatsApp que se usan en los banners y posters de CAPINI Psicología.

> ⚠️ **Importante:** los wa.link de WhatsApp Business **caducan** y **tienen un mensaje predeterminado asociado** que el cliente recibe cuando abre el chat. Si se pierden, hay que regenerarlos desde WhatsApp Business Manager y **guardar aquí el QR** + URL.

---

## 📋 Inventario actual

| Archivo | wa.link | Uso en lonas | Mensaje predeterminado |
|---------|---------|---------------|-------------------------|
| `wa-link-rwejhb.png` | `https://wa.link/rwejhb` | Todas las lonas de la serie "Capini Psicología" (Respira, Siente, Disfruta/Vive, Llama/Llámanos) + poster depresión | ⚠️ Actualizar cuando se confirme |
| `wa-link-uxx5er.png` | `https://wa.link/uxx5er` | Banner Evaluación IQ (WISC/WAIS/WPPSI) | ⚠️ Actualizar cuando se confirme |

---

## 🔧 Cómo regenerar un wa.link

Si un QR caduca o se pierde el mensaje:

1. Ir a **WhatsApp Business Manager** → **Herramientas de la empresa** → **Enlaces cortos**
2. Generar nuevo enlace con el mensaje predeterminado correcto (ej. *"Hola, vengo del banner de CAPINI, quiero agendar una cita"*)
3. Crear QR en `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=<URL>`
4. Guardar PNG aquí con nombre descriptivo: `wa-link-<código>.png`
5. Actualizar la tabla de arriba

---

## 📐 Cómo usar el QR en una lona

### Opción A — QR dinámico (URL directa)

```html
<img src="https://api.qrserver.com/v1/create-qr-code/?size=520x520&data=https%3A//wa.link/<código>"
     alt="QR WhatsApp">
```

### Opción B — QR estático (PNG guardado)

```html
<img src="../../wa-links/wa-link-<código>.png"
     alt="QR WhatsApp CAPINI">
```

> 💡 **Recomendado:** usar QR dinámico para no depender de archivos en el repo. Usar QR estático solo si se quiere alta calidad de impresión garantizada (300 DPI del PNG guardado).

---

## 🗂️ Convenciones de nombres

- `wa-link-<código>.png` — archivo PNG del QR
- Mensaje asociado en este README en la tabla de inventario
- Si un wa.link se reemplaza, versionar: `wa-link-rwejhb-v1.png`, `wa-link-rwejhb-v2.png`

---

**Última actualización:** 28-jul-2026