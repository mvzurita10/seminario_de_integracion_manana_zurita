// Concepto puro
interface Exportable {
    exportarJSON(): string;
}

interface Auditable {
    esValidoParaAuditoria(): boolean;
}

class RegistroEmocionalDiario implements Exportable, Auditable {
    constructor(
        public idRegistro: string,
        public emociones: string[],
        public nivelAnsiedadPromedio: number
    ) {}

    exportarJSON(): string {
        return JSON.stringify({
            id: this.idRegistro,
            emociones: this.emociones,
            ansiedad: this.nivelAnsiedadPromedio
        });
    }

    esValidoParaAuditoria(): boolean {
        return this.emociones.length > 0 && this.nivelAnsiedadPromedio >= 0;
    }
}

const registro = new RegistroEmocionalDiario("REG-001", ["Calma", "Miedo"], 4.5);
console.log(registro.esValidoParaAuditoria());    // true
console.log(registro.exportarJSON());
// {"id":"REG-001","emociones":["Calma","Miedo"],"ansiedad":4.5}