// ── Anotación explícita ───────────────────────────────────────────────────
// Tú le dices a TS cuál es el tipo.
//const duracionSesion: number = 45;
const terapeutaAsignado: string = "Dra. Gomez";
const terapiaGrupal: boolean = false;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TS lo deduce del valor inicial — el tipo es el mismo, pero sin escribirlo.
const duracionSesion2 = 45;             // TypeScript infiere: number
const terapeutaAsignado2 = "Dra. Gomez";// TypeScript infiere: string
const terapiaGrupal2 = false;           // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con el tipo incorrecto, TS da error en ambos casos:
// duracionSesion2 = "60 min";  // Error: Type 'string' is not assignable to type 'number'.

// ── Cuándo anotar explícitamente ─────────────────────────────────────────
// 1. Variables declaradas sin valor inicial:
let ritmoCardiaco: number;      // sin inicializar — necesita anotación
ritmoCardiaco = 75;

// 2. Cuando quieres un tipo más amplio que el valor inicial:
let estadoPaciente: number | string = 1;  // acepta número o string (ej. 1 para activo)
estadoPaciente = "En crisis";             // válido

// 3. Parámetros de funciones (TS no puede inferirlos):
function registrarEmocion(emocion: string, intensidad: number): string {
    return `Emoción registrada: ${emocion} — Intensidad: ${intensidad}/10`;
}