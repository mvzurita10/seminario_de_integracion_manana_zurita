
# abstraccion_therappy.py

from abc import ABC, abstractmethod

# Clase abstracta para actividades de bienestar emocional

class ActividadBienestar(ABC):

    def __init__(self, categoria="General"):
        self.categoria = categoria

    # Métodos abstractos

    @abstractmethod
    def duracion(self) -> float:
        pass

    @abstractmethod
    def beneficio(self) -> float:
        pass

    # Método concreto compartido

    def describir(self) -> str:
        return (
            f"{self.__class__.__name__} ({self.categoria}) - "
            f"Duración: {self.duracion():.0f} min, "
            f"Beneficio: {self.beneficio():.1f} puntos"
        )

# ActividadBienestar()  # Error: no se puede instanciar


class Meditacion(ActividadBienestar):

    def __init__(self, minutos, categoria="Relajación"):
        super().__init__(categoria)
        self.minutos = minutos

    def duracion(self):
        return self.minutos

    def beneficio(self):
        return self.minutos * 1.5


class RespiracionGuiada(ActividadBienestar):

    def __init__(self, minutos, categoria="Respiración"):
        super().__init__(categoria)
        self.minutos = minutos

    def duracion(self):
        return self.minutos

    def beneficio(self):
        return self.minutos * 1.2


class DiarioEmocional(ActividadBienestar):

    def __init__(self, minutos, categoria="Reflexión"):
        super().__init__(categoria)
        self.minutos = minutos

    def duracion(self):
        return self.minutos

    def beneficio(self):
        return self.minutos * 1.8


# Polimorfismo:
# El mismo código funciona para cualquier actividad

actividades = [
    Meditacion(20),
    RespiracionGuiada(15),
    DiarioEmocional(10)
]

for actividad in actividades:
    print(actividad.describir())

beneficio_total = sum(
    actividad.beneficio()
    for actividad in actividades
)

print(f"Beneficio total acumulado: {beneficio_total:.1f} puntos")