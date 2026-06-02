
# primera-clase-therappy.py

class UsuarioTherAppy:

    # Atributo de clase — compartido por todos los usuarios
    aplicacion = "TherAppy"

    # Constructor
    def __init__(self, nombre, nivel_bienestar):
        self.nombre = nombre
        self.nivel_bienestar = nivel_bienestar

    # Método de instancia
    def saludar(self):
        return (
            f"Hola, soy {self.nombre} "
            f"y mi nivel de bienestar es {self.nivel_bienestar}."
        )

    def mejorar_bienestar(self):
        self.nivel_bienestar += 1

        print(
            f"¡Excelente trabajo, {self.nombre}! "
            f"Tu nivel de bienestar ahora es {self.nivel_bienestar}."
        )

    # Representación legible
    def __str__(self):
        return (
            f"UsuarioTherAppy("
            f"{self.nombre}, "
            f"{self.nivel_bienestar})"
        )

    # Representación para depuración
    def __repr__(self):
        return (
            f"UsuarioTherAppy("
            f"nombre={self.nombre!r}, "
            f"nivel_bienestar={self.nivel_bienestar!r})"
        )


# Crear instancias (objetos)

mikaela = UsuarioTherAppy("Mikaela Zurita", 8)
josue = UsuarioTherAppy("Josue Merino", 7)

print(mikaela.saludar())
print(josue.saludar())

mikaela.mejorar_bienestar()

print(str(mikaela))
print(repr(mikaela))

print(UsuarioTherAppy.aplicacion)