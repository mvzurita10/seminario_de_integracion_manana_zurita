// Concepto puro
class UsuarioTherappy {
    constructor(public nombre: string) {}

    saludar(): string {
        return `${this.nombre} se ha conectado al sistema.`;
    }
}

class Terapeuta extends UsuarioTherappy {
    constructor(nombre: string, public especialidad: string) {
        super(nombre); // llama al constructor del padre
    }

  // override sobrescribe el método del padre
    override saludar(): string {
        return `${this.nombre}, Especialista en ${this.especialidad}, ha iniciado sesión.`;
    }

    agendarCita(paciente: string): string {
        return `Cita agendada para ${paciente} con el/la terapeuta ${this.nombre}.`;
    }
}

const u = new UsuarioTherappy("Visitante");
const t = new Terapeuta("Dra. Gomez", "Terapia Cognitivo-Conductual");

console.log(u.saludar());               // Visitante se ha conectado al sistema.
console.log(t.saludar());               // Dra. Gomez, Especialista en Terapia Cognitivo-Conductual, ha iniciado sesión.
console.log(t.agendarCita("Carlos"));   // Cita agendada para Carlos con el/la terapeuta Dra. Gomez.
console.log(t.especialidad);            // Terapia Cognitivo-Conductual