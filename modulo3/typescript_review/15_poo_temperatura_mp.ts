class EscalaAnsiedad {
    valorEscala1a10: number = 0;
    valorPorcentaje: number = 0;

    constructor(escala: number, porcentaje: number) {
        this.valorEscala1a10 = escala;
        this.valorPorcentaje = porcentaje ?? 0;
    }

    aPorcentaje(): number {
        return this.valorEscala1a10 * 10; // ej: 5 -> 50%
    }

    aEscala1a10(): number {
        this.valorEscala1a10 = this.valorPorcentaje / 10;
        return this.valorEscala1a10;
    }

    aDescripcion(): string {
        if (this.valorEscala1a10 >= 8) return "Severo";
        if (this.valorEscala1a10 >= 4) return "Moderado";
        return "Leve";
    }

    describir(): string {
        return (
            `Nivel ${this.valorEscala1a10}/10 = ` +
            `${this.aPorcentaje()}% de intensidad = ` +
            `Riesgo ${this.aDescripcion()}`
        );
    }
}

const crisis = new EscalaAnsiedad(9, 0);
const calma = new EscalaAnsiedad(2, 0);
const convertirDesdePorcentaje = new EscalaAnsiedad(0, 60);

console.log(crisis.describir());     // Nivel 9/10 = 90% de intensidad = Riesgo Severo
console.log(calma.describir());      // Nivel 2/10 = 20% de intensidad = Riesgo Leve

console.log(convertirDesdePorcentaje.aEscala1a10()); // 6