// Union de literales: más simple, cero código JS generado
type EstadoCita = "programada" | "en_curso" | "completada" | "cancelada";
type NivelUrgencia = "baja" | "media" | "alta";

function registrarCita(idPaciente: number, estado: EstadoCita): void {
    console.log(`Cita del paciente #${idPaciente}: ${estado}`);
}

registrarCita(1, "en_curso"); // ok
// registrarCita(2, "reprogramada"); // Error de compilación: no es un EstadoCita válido