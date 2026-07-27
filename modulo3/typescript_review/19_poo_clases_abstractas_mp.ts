// Concepto puro
abstract class TerapiaBase {
abstract duracionEstimada(): number;       // sin implementación — las subclases DEBEN implementarlo
abstract costoBase(): number;

  // Los métodos concretos SÍ tienen implementación
    resumenTerapia(): string {
        return (
            `Duración: ${this.duracionEstimada()} min | ` +
            `Costo Base: $${this.costoBase().toFixed(2)}`
        );
    }
}

class TerapiaIndividual extends TerapiaBase {
    constructor(private severidadPaciente: number) {
        super();
    }

    override duracionEstimada(): number {
        return this.severidadPaciente > 7 ? 60 : 45; // Más severidad, más duración
    }

    override costoBase(): number {
        return 50.00;
    }
}

class TerapiaGrupal extends TerapiaBase {
    constructor(private numeroParticipantes: number) {
        super();
    }

    override duracionEstimada(): number {
        return 90; // Terapia grupal siempre dura 90 min
    }

    override costoBase(): number {
        return 20.00 * this.numeroParticipantes;
    }
}

// const tBase = new TerapiaBase(); // Error: Cannot create an instance of an abstract class.

const individual = new TerapiaIndividual(8);
const grupal = new TerapiaGrupal(5);

console.log(individual.resumenTerapia()); // Duración: 60 min | Costo Base: $50.00
console.log(grupal.resumenTerapia());     // Duración: 90 min | Costo Base: $100.00