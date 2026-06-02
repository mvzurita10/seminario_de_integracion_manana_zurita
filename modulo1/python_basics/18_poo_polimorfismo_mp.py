
# polimorfismo_therappy.py

# POLIMORFISMO POR HERENCIA

class MensajeTherAppy:
    """Clase base."""

    def __init__(self, usuario, mensaje):
        self.usuario = usuario
        self.mensaje = mensaje

    def enviar(self):
        raise NotImplementedError(
            "Las subclases deben implementar enviar()"
        )

    def __str__(self):
        return (
            f"{self.__class__.__name__} → "
            f"{self.usuario}"
        )


class MensajeMotivacional(MensajeTherAppy):

    def enviar(self):
        return (
            f"💙 Mensaje para {self.usuario}: "
            f"{self.mensaje}"
        )


class RecordatorioMeditacion(MensajeTherAppy):

    def enviar(self):
        return (
            f"🧘 Recordatorio para {self.usuario}: "
            f"{self.mensaje}"
        )


class AlertaBienestar(MensajeTherAppy):

    def enviar(self):
        return (
            f"⚠️ Alerta para {self.usuario}: "
            f"{self.mensaje}"
        )


class NotificacionLogro(MensajeTherAppy):

    def enviar(self):
        return (
            f"🏆 Felicitaciones {self.usuario}: "
            f"{self.mensaje}"
        )


# Polimorfismo en acción

def enviar_mensajes(mensajes):

    for mensaje in mensajes:
        print(f"  {mensaje.enviar()}")


notificaciones = [
    MensajeMotivacional(
        "Mikaela",
        "Recuerda que cada pequeño avance cuenta."
    ),
    RecordatorioMeditacion(
        "Josue",
        "Es hora de realizar tu sesión de meditación."
    ),
    AlertaBienestar(
        "Valentina",
        "Tu nivel de estrés ha aumentado esta semana."
    ),
    NotificacionLogro(
        "Carlos",
        "Has completado 10 sesiones consecutivas."
    )
]

print("Enviando mensajes TherAppy:")

enviar_mensajes(notificaciones)

# POLIMORFISMO DUCK TYPING

class RegistroLocal:

    def leer(self):
        return "emociones guardadas localmente"

    def escribir(self, datos):
        print(
            f"Guardando localmente: "
            f"{datos[:30]}..."
        )


class RegistroNube:

    def leer(self):
        return "emociones almacenadas en la nube"

    def escribir(self, datos):
        print(
            f"Sincronizando nube: "
            f"{datos[:30]}..."
        )


class RegistroBD:

    def leer(self):
        return "emociones almacenadas en PostgreSQL"

    def escribir(self, datos):
        print(
            f"Insertando en base de datos: "
            f"{datos[:30]}..."
        )


# Funciona con cualquier objeto que tenga
# leer() y escribir()

def procesar_registro(registro):

    contenido = registro.leer()

    print(
        f"Procesando información: "
        f"{contenido}"
    )

    registro.escribir(
        f"resultado_{contenido}"
    )


for registro in [
    RegistroLocal(),
    RegistroNube(),
    RegistroBD()
]:
    procesar_registro(registro)