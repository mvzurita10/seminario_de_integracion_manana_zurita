// Concepto puro — dos sintaxis equivalentes
const nivelesEstres: number[] = [4, 7, 5, 8, 3];
const emocionesArray: Array<string> = ["alegría", "tristeza", "miedo"];   // forma genérica

// TypeScript infiere el tipo del array si lo inicializas
const ritmosCardiacos = [75, 80, 110]; // number[] inferido

// Métodos tipados: el compilador conoce el tipo del elemento
const aumentoEstres: number[] = nivelesEstres.map((n) => n + 1);          // [5, 8, 6, 9, 4]
const picosEstres: number[] = nivelesEstres.filter((n) => n > 6);           // [7, 8]
const totalEstres: number = nivelesEstres.reduce((acc, n) => acc + n, 0);   // 27

// Mutación (cambia el array original)
nivelesEstres.push(6);       // agrega al final
nivelesEstres.unshift(2);    // agrega al inicio
const ultimoRegistro = nivelesEstres.pop();   // elimina y devuelve el último
const primerRegistro = nivelesEstres.shift(); // elimina y devuelve el primero

// Búsqueda
const sintioAnsiedad: boolean = nivelesEstres.includes(8);       // true
const indiceEstres: number = nivelesEstres.indexOf(8);         // posición o -1
const primerPico: number | undefined = nivelesEstres.find((n) => n > 7); // 8