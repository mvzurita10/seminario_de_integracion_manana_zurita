// Concepto puro
class ExpedienteClinico {
  readonly idPaciente: string;           // no cambia tras la creación
  public nombrePaciente: string;         // visible desde fuera
  private notasTerapeuticas: string[];   // solo accesible dentro de la clase
  protected tipoSeguro: string;          // accesible también en subclases

    constructor(id: string, nombre: string) {
        this.idPaciente = id;
        this.nombrePaciente = nombre;
        this.notasTerapeuticas = [];
        this.tipoSeguro = "Privado";
    }

  // Método público que expone las notas de forma controlada (copia)
    obtenerNotas(): string[] {
        return [...this.notasTerapeuticas];
    }

    agregarNota(nota: string): void {
        if (nota.trim() === "") throw new Error("La nota no puede estar vacía");
        this.notasTerapeuticas.push(nota);
    }
}

const expediente = new ExpedienteClinico("PAC-892", "Ana García");
console.log(expediente.nombrePaciente);       // Ana García
console.log(expediente.idPaciente);           // PAC-892
console.log(expediente.obtenerNotas());       // []
expediente.agregarNota("Sesión inicial: ansiedad moderada");
console.log(expediente.obtenerNotas());       // ["Sesión inicial: ansiedad moderada"]

// expediente.notasTerapeuticas = ["hackeado"];  // Error: 'notasTerapeuticas' is private
// expediente.idPaciente = "otro";               // Error: 'idPaciente' is readonly