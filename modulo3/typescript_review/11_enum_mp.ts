// Enum numérico (los valores son 0, 1, 2, … por defecto)
enum EmocionBasica {
    Alegria,   // 0
    Tristeza,  // 1
    Miedo,     // 2
    Ira,       // 3
}

const emocionActual: EmocionBasica = EmocionBasica.Alegria;
console.log(emocionActual);           // 0
console.log(EmocionBasica[0]);        // "Alegria" (mapeo inverso automático)

// Enum numérico con valor de inicio personalizado
enum NivelSeveridad {
    Leve = 1,
    Moderado = 2,
    Grave = 3,
}

// Enum de string (recomendado: los valores son legibles en logs y redes)
enum TipoUsuario {
    Paciente = "PACIENTE",
    Terapeuta = "TERAPEUTA",
    Admin = "ADMIN",
}

const miRol: TipoUsuario = TipoUsuario.Terapeuta;
console.log(miRol); // "TERAPEUTA"