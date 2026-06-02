
# encapsulamiento_therappy.py

class PerfilEmocional:

    def __init__(self, usuario, bienestar_inicial=50):
        self.usuario = usuario
        self.__bienestar = bienestar_inicial
        self.__historial = []
        self.__activo = True

        self.__registrar(
            f"Perfil creado con nivel de bienestar {bienestar_inicial}"
        )

    # Properties (getters)

    @property
    def bienestar(self):
        return self.__bienestar

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)

    # Métodos públicos

    def registrar_actividad(self, puntos):

        if puntos <= 0:
            raise ValueError(
                "Los puntos de bienestar deben ser positivos"
            )

        self.__bienestar += puntos

        self.__registrar(
            f"Actividad completada: +{puntos} puntos"
        )

        return self

    def registrar_estres(self, puntos):

        if puntos <= 0:
            raise ValueError(
                "Los puntos de estrés deben ser positivos"
            )

        if puntos > self.__bienestar:
            raise ValueError(
                f"Bienestar insuficiente "
                f"(disponible: {self.__bienestar})"
            )

        self.__bienestar -= puntos

        self.__registrar(
            f"Nivel de estrés registrado: -{puntos} puntos"
        )

        return self

    def compartir_progreso(self, otro_usuario, puntos):

        self.registrar_estres(puntos)
        otro_usuario.registrar_actividad(puntos)

        self.__registrar(
            f"Apoyo emocional enviado a "
            f"{otro_usuario.usuario}: {puntos} puntos"
        )

        return self

    # Método privado

    def __registrar(self, evento):

        from datetime import datetime

        hora = datetime.now().strftime("%H:%M:%S")

        self.__historial.append(
            f"[{hora}] {evento}"
        )

    def __str__(self):
        return (
            f"PerfilEmocional("
            f"{self.usuario}: "
            f"{self.__bienestar} puntos)"
        )


# Uso

mikaela = PerfilEmocional(
    "Mikaela Zurita",
    100
)

josue = PerfilEmocional(
    "Josue Merino",
    50
)

mikaela.registrar_actividad(20).registrar_estres(10)

mikaela.compartir_progreso(
    josue,
    15
)

print(mikaela)
print(josue)

print(
    f"Bienestar de Mikaela: "
    f"{mikaela.bienestar}"
)

# mikaela.__bienestar = 999
# Error: acceso directo denegado

# mikaela.bienestar = 999
# Error: no existe setter

print("\nHistorial emocional:")

for entrada in mikaela.historial:
    print(f"  {entrada}")