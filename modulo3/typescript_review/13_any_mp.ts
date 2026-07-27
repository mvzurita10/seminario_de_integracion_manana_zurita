// ─── any ───────────────────────────────────────────────────────────────────
// Desactiva el chequeo de tipos. Es el "apagado de emergencia" de TypeScript.
// Evítalo salvo al migrar código JavaScript o al trabajar con librerías sin tipos.
let datosRelojInteligente: any = "durmiendo";
datosRelojInteligente = 85;       // ok, any acepta cualquier valor (ritmo cardíaco)
datosRelojInteligente = true;     // ok
datosRelojInteligente.medirPulsoFalso(); // NO da error en compilación, pero falla en runtime

// ─── unknown ───────────────────────────────────────────────────────────────
// Como any, acepta cualquier valor. Pero NO puedes usarlo sin comprobar el tipo.
// Es la versión SEGURA de any para datos de fuentes externas (APIs, JSON, input).
let respuestaApiEmociones: unknown = "tristeza_detectada";
respuestaApiEmociones = 120;                 // ok, acepta cualquier valor

// console.log(respuestaApiEmociones.toUpperCase()); // Error: Object is of type 'unknown'
if (typeof respuestaApiEmociones === "string") {
  console.log(respuestaApiEmociones.toUpperCase()); // ok: TypeScript sabe que es string aquí
}

// ─── never ─────────────────────────────────────────────────────────────────
// Representa algo que NUNCA ocurre: una función que siempre lanza, o
// una rama de código inalcanzable. Útil para verificar exhaustividad.
function lanzarCrisis(msg: string): never {
  throw new Error(`Alerta TherAppy: ${msg}`); // nunca devuelve un valor
}

function verificarEmocionInesperada(valor: never): never {
    throw new Error(`Emoción no manejada en el sistema: ${String(valor)}`);
}