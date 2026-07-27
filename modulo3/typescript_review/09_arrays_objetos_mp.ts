// Concepto puro
type SesionTerapia = {
    id: number;
    terapeuta: string;
    costo: number;
    disponible: boolean;
};

const agenda: SesionTerapia[] = [
    { id: 1, terapeuta: "Dr. Silva",  costo: 60,  disponible: true },
    { id: 2, terapeuta: "Dra. Gomez", costo: 80,  disponible: true },
    { id: 3, terapeuta: "Dr. Lopez",  costo: 50,  disponible: false },
];

// TypeScript sabe que cada "s" es de tipo SesionTerapia
const sesionesDisponibles: SesionTerapia[] = agenda.filter((s) => s.disponible);
const nombresTerapeutas: string[] = agenda.map((s) => s.terapeuta);
const sesionMasEconomica: SesionTerapia | undefined = agenda.reduce((min, s) =>
    s.costo < min.costo ? s : min
);

console.log(nombresTerapeutas);                  // ["Dr. Silva", "Dra. Gomez", "Dr. Lopez"]
console.log(sesionMasEconomica?.terapeuta);       // "Dr. Lopez"
console.log(sesionesDisponibles.length);          // 2