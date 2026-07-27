// Concepto puro
type GraficoAnimo = [number, number];                 // [dia, nivelEstres]
type RGBColor = [number, number, number];             // [rojo, verde, azul] para emociones
type RegistroEmocion = [string, number];              // [emocion, intensidad]

const puntoGrafico: GraficoAnimo = [5, 8];
const colorAnsiedad: RGBColor = [255, 50, 50];        // rojo intenso
const parEmocion: RegistroEmocion = ["angustia", 9];

// Desestructuración (la forma más cómoda de usar tuplas)
const [dia, nivelE] = puntoGrafico;
const [r, g, b] = colorAnsiedad;
const [emocionX, intensidadX] = parEmocion;

console.log(`Registro: día=${dia}, estrés=${nivelE}`);          // Registro: día=5, estrés=8
console.log(`Color: rgb(${r},${g},${b})`);                      // Color: rgb(255,50,50)

// Tuplas con nombre (TS 4.0+) — mejoran la legibilidad
type TurnoSesion = [horaInicio: number, horaFin: number];
const turnoTarde: TurnoSesion = [14, 20];                       // de 14:00 a 20:00