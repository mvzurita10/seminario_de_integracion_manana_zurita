// Concepto puro
class Paciente {
    nombre: string;
    edad: number;
    enTerapia: boolean;

    constructor(nombre: string, edad: number, enTerapia: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.enTerapia = enTerapia;
    }

  // Método: acción que puede realizar la instancia
    describir(): string {
        const estado = this.enTerapia ? "terapia activa" : "alta médica";
        return `Paciente: ${this.nombre} — ${this.edad} años (${estado})`;
    }
}

const paciente1 = new Paciente("María", 34, true);
const paciente2 = new Paciente("Carlos", 45, false);

console.log(paciente1.describir()); // Paciente: María — 34 años (terapia activa)
console.log(paciente2.describir()); // Paciente: Carlos — 45 años (alta médica)