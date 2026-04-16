// ============================================================
//  Google Apps Script — Backend para CAT Informes
//
//  INSTRUCCIONES DE DEPLOY:
//
//  1. Abrí Google Sheets y creá una hoja nueva (o usá una existente).
//     En la primera fila (encabezados) poné:
//     Fecha | Hora | Comuna | Nombre | Agentes | Ubicación | Tarea | Novedad
//
//  2. Desde el menú de Google Sheets andá a:
//     Extensiones → Apps Script
//
//  3. Borrá todo el contenido del editor y pegá este archivo completo.
//
//  4. Hacé clic en "Guardar" (ícono de diskette o Ctrl+S).
//
//  5. Deployar como Web App:
//     a. Clic en "Implementar" → "Nueva implementación"
//     b. Tipo: "Aplicación web"
//     c. Descripción: "CAT Informes API"
//     d. Ejecutar como: "Yo" (tu cuenta)
//     e. Quién tiene acceso: "Cualquier persona"
//     f. Clic en "Implementar"
//     g. Autorizá los permisos cuando te lo pida
//     h. Copiá la URL que te da (tiene formato:
//        https://script.google.com/macros/s/XXXXX.../exec)
//
//  6. Pegá esa URL en el index.html, en la variable APPS_SCRIPT_URL
//     (línea que dice: const APPS_SCRIPT_URL = '...')
//
//  IMPORTANTE: Cada vez que modifiques este script, tenés que crear
//  una NUEVA implementación para que los cambios se reflejen.
// ============================================================

/**
 * Maneja las peticiones POST del formulario web.
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('1-bJpZnM5WekAGdTunRPytSEoPTyiJGO1Tm3wqdlrxaU').getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Fecha y hora en zona horaria de Argentina
    var ahora = new Date();
    var fecha = Utilities.formatDate(ahora, 'America/Argentina/Buenos_Aires', 'dd/MM/yyyy');
    var hora  = Utilities.formatDate(ahora, 'America/Argentina/Buenos_Aires', 'HH:mm:ss');

    // Agregar fila al sheet
    sheet.appendRow([
      fecha,
      hora,
      data.comuna    || '',
      data.nombre    || '',
      data.agentes   || '',
      data.ubicacion || '',
      data.tarea     || '',
      data.novedad   || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Maneja peticiones GET (útil para verificar que el script está activo).
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'CAT Informes API activa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
