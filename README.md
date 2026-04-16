# CAT Informes — Reporte de Misiones

Web app para el reporte de misiones del Cuerpo de Agentes de Tránsito de la Ciudad Autónoma de Buenos Aires.

## Stack

- **Frontend:** HTML / CSS / JS (single file)
- **Backend:** Google Apps Script (API REST que guarda en Google Sheets)
- **Deploy:** GitHub Pages

## Estructura

```
index.html       ← Formulario web (se sirve con GitHub Pages)
apps-script.js   ← Código para Google Apps Script (deploy manual)
README.md
```

## Setup

### 1. Backend (Google Apps Script)

Seguí las instrucciones detalladas dentro de `apps-script.js`. En resumen:

1. Creá un Google Sheet con encabezados: `Fecha | Hora | Comuna | Nombre | Agentes | Ubicacion | Tarea | Novedad`
2. Abrí Apps Script desde el menú del Sheet
3. Pegá el contenido de `apps-script.js`
4. Deployá como Web App (acceso: "Cualquier persona")
5. Copiá la URL del deploy

### 2. Frontend

Editá `index.html` y reemplazá la variable `APPS_SCRIPT_URL` con la URL obtenida en el paso anterior.

### 3. GitHub Pages

El sitio se sirve desde la branch `main`. GitHub Pages toma `index.html` de la raíz automáticamente.

## Campos del formulario

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Comuna | Desplegable (1-15) | Si |
| Nombre | Texto libre | Si |
| Agentes | Texto libre | Si |
| Ubicacion | Texto libre | Si |
| Tipo de tarea | Desplegable | Si |
| Novedad | Textarea | No |

La fecha y hora se registran automaticamente en el servidor al recibir el reporte.
