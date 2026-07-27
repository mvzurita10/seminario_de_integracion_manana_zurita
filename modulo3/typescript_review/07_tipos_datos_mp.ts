// Concepto puro
const pacienteApp: string = "TherAppy";
const lema: string = 'Tu mente en equilibrio';
const motivacion: string = `Hoy será un ${"gran"} día`; // template literal

//const nombrePaciente: string = "Laura";
const nivelAnsiedad: number = 7;

// Interpolación: embebe expresiones dentro de ${}
//const saludo: string = `Hola, ${nombrePaciente}. Tu nivel de ansiedad es ${nivelAnsiedad}.`;
const alerta: string = `Nivel ${nivelAnsiedad >= 8 ? "crítico" : "manejable"} de ansiedad.`;

// Multilínea sin caracteres de escape
const registroDiario: string = `
    Me siento abrumado
    Necesito respirar
    Voy a meditar
`.trim();

// Métodos comunes (tipados, el editor autocompleta)
console.log("  feliz  ".trim());         // "feliz"
console.log("calma".toUpperCase());      // "CALMA"
console.log("2024-06-15".split("-"));    // ["2024", "06", "15"]
console.log("emoción: tristeza".includes("tristeza")); // true
console.log("diario.txt".endsWith(".txt"));            // true

export {};