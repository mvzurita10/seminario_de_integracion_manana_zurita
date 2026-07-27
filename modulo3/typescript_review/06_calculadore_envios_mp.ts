// Sistema de cotización de sesiones para TherAppy.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type TipoSesion = "individual" | "pareja" | "familiar";

interface Sesion {
    paciente: string;
    duracionHoras: number;
    ingresosPaciente: number; // para cálculo de subsidio
    tipo: TipoSesion;
}

const TARIFAS_BASE: Record<TipoSesion, number> = {
    individual:      50.00,  // $ por hora
    pareja:          80.00,
    familiar:       120.00,
};

const SUBSIDIO_PCT = 0.10;  // 10% de descuento si aplica

function cotizarSesion(sesion: Sesion): string {
    const tarifaHora = TARIFAS_BASE[sesion.tipo];
    const costoBase = tarifaHora * sesion.duracionHoras;
    const descuento = sesion.ingresosPaciente < 1000 ? costoBase * SUBSIDIO_PCT : 0;
    const total = costoBase - descuento;

    return `
    🧘 Cotización de Sesión
    Paciente    : ${sesion.paciente}
    Duración    : ${sesion.duracionHoras} hrs
    Modalidad   : ${sesion.tipo}
    Costo Base  : $${costoBase.toFixed(2)}
    Descuento   : $${descuento.toFixed(2)}
    ─────────────────────────
    TOTAL       : $${total.toFixed(2)}
    `.trim();
}

const sesion1: Sesion = {
    paciente: "Juan Perez",
    duracionHoras: 1.5,
    ingresosPaciente: 800,
    tipo: "individual",
};

const sesion2: Sesion = {
    paciente: "Familia Gomez",
    duracionHoras: 2.0,
    ingresosPaciente: 2500,
    tipo: "familiar",
};

console.log(cotizarSesion(sesion1));
console.log("---");
console.log(cotizarSesion(sesion2));

// TS detecta si usas un tipo inválido:
// const sesion3: Sesion = { ..., tipo: "grupal" };
// Type '"grupal"' is not assignable to type 'TipoSesion'.