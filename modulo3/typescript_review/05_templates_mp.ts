// Concepto puro — template literals (backtick ``)
const paciente: string = "Carlos";
const diagnostico: string = "Ansiedad Leve";
const sesionesCompletadas: number = 5;

// Interpola cualquier expresión con ${ }
const bienvenidaTerapeuta: string = `Hola, ${paciente}. Diagnóstico: ${diagnostico}. Sesiones completadas: ${sesionesCompletadas}.`;
console.log(bienvenidaTerapeuta);
// Hola, Carlos. Diagnóstico: Ansiedad Leve. Sesiones completadas: 5.

// Expresiones dentro de ${ }
const progresoActual: number = 60;
const metaProgreso: number = 100;
const avance: string = `Progreso actual: ${((progresoActual / metaProgreso) * 100).toFixed(0)}% hacia la meta.`;
console.log(avance);
// Progreso actual: 60% hacia la meta.

// Multi-línea — sin concatenación ni \n
const reporteEmocional: string = `
=== Reporte Emocional TherAppy ===
Paciente   : Carlos
Estado     : Estable
Tendencia  : Positiva
`;
console.log(reporteEmocional);