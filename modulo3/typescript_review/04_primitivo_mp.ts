// number — enteros y decimales, positivos y negativos
//const precioSesion: number = 50.00;
const duracionMinutos: number = 45;
const variacionAnimo: number = -1.5;
const colorEmocion: number = 0x3498db;  // azul para la calma

// string — texto, con comillas simples, dobles o backtick
const emailPaciente: string = "paciente@therappy.com";
const tipoTerapia: string = 'Cognitivo-Conductual';
const rutaDiario: string = `/api/v1/diario/entradas`;

// boolean — solo true o false
const enSesion: boolean = true;
const medicacionRequerida: boolean = false;
const riesgoAlto: boolean = false;

// ── Aritmética con number ─────────────────────────────────────────────────
const nivelEstresInicial = 8;
const reduccionEstres = 3;
//const nivelActual = nivelEstresInicial - reduccionEstres;  // 5
 
// ── Métodos de string ─────────────────────────────────────────────────────
const emocionCruda = "  TrisTeza  ";
console.log(emocionCruda.trim().toLowerCase()); // "tristeza"
console.log(emailPaciente.includes("therappy"));// true
console.log(emailPaciente.split("@")[0]);       // "paciente"

// ── Lógica con boolean ────────────────────────────────────────────────────
const puedeIniciarSesion: boolean = !enSesion && !riesgoAlto;
console.log(puedeIniciarSesion); // false