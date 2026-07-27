// Concepto puro
class Notificacion {
    tipo(): string { return "General"; }
    mostrarMensaje(): string { return "Tienes una nueva notificación."; }
}

class AlertaAnsiedad extends Notificacion {
    constructor(private nivel: number) { super(); }
    override tipo(): string { return "Alerta"; }
    override mostrarMensaje(): string { return `¡Cuidado! Tu nivel de ansiedad está en ${this.nivel}/10. Te recomendamos un ejercicio de respiración.`; }
}

class RecordatorioSesion extends Notificacion {
    constructor(private terapeuta: string, private hora: string) { super(); }
    override tipo(): string { return "Recordatorio"; }
    override mostrarMensaje(): string { return `Recuerda tu sesión con ${this.terapeuta} a las ${this.hora}.`; }
}

class MensajeMotivacional extends Notificacion {
    constructor(private mensaje: string) { super(); }
    override tipo(): string { return "Motivación"; }
    override mostrarMensaje(): string { return `🌟 "${this.mensaje}"`; }
}

// Array de tipo base — el polimorfismo en acción
const notificacionesPendientes: Notificacion[] = [
    new AlertaAnsiedad(8),
    new RecordatorioSesion("Dra. Gomez", "16:00"),
    new MensajeMotivacional("Cada paso cuenta en tu proceso."),
];

for (const n of notificacionesPendientes) {
  // TypeScript llama la versión correcta de mostrarMensaje() en cada iteración
    console.log(`[${n.tipo().toUpperCase()}]: ${n.mostrarMensaje()}`);
}
// [ALERTA]: ¡Cuidado! Tu nivel de ansiedad está en 8/10. Te recomendamos un ejercicio de respiración.
// [RECORDATORIO]: Recuerda tu sesión con Dra. Gomez a las 16:00.
// [MOTIVACIÓN]: 🌟 "Cada paso cuenta en tu proceso."