
# diccionarios_therappy.py

# Crear diccionarios

vacio = {}

usuario = {
    "nombre": "Mikaela",
    "edad": 23,
    "emocion": "Calma"
}

configuracion = dict(
    servidor="localhost",
    puerto=5432,
    modo_prueba=True
)

# Acceso

print(usuario["nombre"])                 # Mikaela
print(usuario.get("correo"))             # None
print(usuario.get("correo", "No registrado"))

# Modificar

usuario["correo"] = "mikaela@therappy.com"
usuario["edad"] = 24

del usuario["emocion"]

valor = usuario.pop("correo")

print(usuario)

# Verificar existencia

print("nombre" in usuario)               # True
print("emocion" in usuario)              # False

# Métodos esenciales

print(usuario.keys())
print(usuario.values())
print(usuario.items())

# Iterar

for clave, valor in usuario.items():
    print(f"{clave}: {valor}")

# update — fusionar diccionarios

usuario.update({
    "emocion": "Felicidad",
    "nivel_estres": 3
})

print(usuario)

# Fusionar con |

progreso = {
    "sesiones": 12,
    "activo": True
}

perfil_completo = usuario | progreso

print(perfil_completo)

# Diccionarios anidados

therappy = {
    "nombre": "TherAppy",
    "usuarios": {
        1: {
            "nombre": "Mikaela",
            "emocion": "Calma"
        },
        2: {
            "nombre": "Josue",
            "emocion": "Ansiedad"
        }
    },
    "actividades": [
        "Meditación",
        "Respiración Guiada",
        "Diario Emocional"
    ]
}

print(therappy["usuarios"][1]["nombre"])

therappy["usuarios"][3] = {
    "nombre": "Valentina",
    "emocion": "Felicidad"
}

# setdefault — añadir solo si no existe

usuario.setdefault("pais", "Ecuador")
usuario.setdefault("nombre", "Otro Usuario")

print(usuario)

# Mostrar estructura final

print("\nPerfil de usuario TherAppy")
print(usuario)

print("\nInformación completa de la aplicación")
print(therappy)