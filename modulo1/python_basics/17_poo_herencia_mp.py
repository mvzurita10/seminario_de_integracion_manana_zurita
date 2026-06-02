
# herencia_therappy.py

class ActividadTherAppy:

    def __init__(self, nombre, categoria, duracion):
        self.nombre = nombre
        self.categoria = categoria
        self.duracion = duracion
        self._progreso = 0  # atributo protegido

    def avanzar(self, porcentaje):
        self._progreso = min(100, self._progreso + porcentaje)
        return self

    def retroceder(self, porcentaje):
        self._progreso = max(0, self._progreso - porcentaje)
        return self

    def __str__(self):
        return (
            f"{self.nombre} - {self.categoria} | "
            f"Progreso: {self._progreso}%"
        )


class Meditacion(ActividadTherAppy):

    def __init__(self, nombre, duracion, nivel="Intermedio"):
        super().__init__(nombre, "Meditación", duracion)
        self.nivel = nivel

    def iniciar_relajacion(self):
        return (
            f"{self.nombre}: "
            f"Iniciando sesión de relajación guiada"
        )

    def __str__(self):
        return (
            f"{super().__str__()} "
            f"({self.nivel})"
        )


class RespiracionGuiada(ActividadTherAppy):

    def __init__(self, nombre, duracion, ciclos):
        super().__init__(nombre, "Respiración", duracion)
        self.ciclos = ciclos

    def respirar(self):
        return (
            f"🌬️ {self.nombre}: "
            f"Realizando ejercicios de respiración"
        )

    def __str__(self):
        return (
            f"{super().__str__()} "
            f"({self.ciclos} ciclos)"
        )


class MeditacionPremium(Meditacion):

    def __init__(self, nombre, duracion, puntos_bienestar):
        super().__init__(nombre, duracion)
        self.__puntos_bienestar = puntos_bienestar
        self.__energia = 100

    def recargar_energia(self, porcentaje=100):
        self.__energia = min(
            100,
            self.__energia + porcentaje
        )
        return self

    @property
    def bienestar_generado(self):
        return (
            self.__puntos_bienestar *
            self.__energia / 100
        )

    def __str__(self):
        return (
            f"{super().__str__()} | "
            f"Energía: {self.__energia}% | "
            f"Bienestar: "
            f"{self.bienestar_generado:.0f} puntos"
        )


# Herencia

sesion_premium = MeditacionPremium(
    "Meditación Profunda",
    30,
    500
)

sesion_premium.avanzar(80)

print(sesion_premium)

print(
    isinstance(
        sesion_premium,
        MeditacionPremium
    )
)  # True

print(
    isinstance(
        sesion_premium,
        Meditacion
    )
)  # True

print(
    isinstance(
        sesion_premium,
        ActividadTherAppy
    )
)  # True

print(
    isinstance(
        sesion_premium,
        RespiracionGuiada
    )
)  # False

# MRO (Method Resolution Order)

print(MeditacionPremium.__mro__)