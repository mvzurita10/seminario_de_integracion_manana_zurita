// const — valor que NO cambia (preferida por defecto)
const MAX_NIVEL_ESTRES: number = 10;
const NOMBRE_APP: string = "TherAppy";
const MODO_MEDITACION: boolean = true;

// let — valor que SÍ puede cambiar
let nivelAnsiedad: number = 5;
let estadoAnimo: string = "calmado";
let sesionActiva: boolean = false;

nivelAnsiedad--;                    // 4
estadoAnimo = "feliz";              // ok
sesionActiva = true;                // ok

// MAX_NIVEL_ESTRES = 11;  // ← Error: Cannot assign to 'MAX_NIVEL_ESTRES' because it is a constant.

export {};