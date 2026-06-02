
# Crear tuplas

vacia = ()

nivel_estres = (5,)  # La coma es obligatoria para una tupla de un elemento

estado_emocional = ("Calma", "Felicidad")

color_therappy = (52, 152, 219)  # RGB del tema de la app

usuario = ("Mikaela", 23, "Quito")

# Tupla sin paréntesis — empaquetado implícito

registro = "Ansiedad", "Moderada"

print(type(registro))  # <class 'tuple'>

# Acceso a elementos

print(usuario[0])      # Mikaela
print(usuario[-1])     # Quito
print(usuario[1:])     # (23, 'Quito')

# Las tuplas son INMUTABLES

# usuario[0] = "Josue"  # TypeError

# Desempaquetado (unpacking)

nombre, edad, ciudad = usuario

print(nombre, edad, ciudad)

# Desempaquetado con *

emocion_principal, *emociones_secundarias = (
    "Calma",
    "Felicidad",
    "Gratitud",
    "Confianza",
    "Motivación"
)

print(emocion_principal)
print(emociones_secundarias)

*emociones_previas, emocion_actual = (
    "Estrés",
    "Ansiedad",
    "Calma",
    "Confianza",
    "Felicidad"
)

print(emociones_previas)
print(emocion_actual)

# Tuplas como retorno de funciones

def evaluar_bienestar(nivel_bienestar, nivel_estres):

    if nivel_estres > 10:
        return None, "Nivel de estrés fuera de rango"

    resultado = nivel_bienestar - nivel_estres

    return resultado, None

resultado, error = evaluar_bienestar(10, 3)

if error:
    print(f"Error: {error}")
else:
    print(f"Resultado de bienestar: {resultado}")

# Tuplas como claves de diccionario

estados = {
    ("bajo", "bajo"): "Equilibrio emocional",
    ("alto", "bajo"): "Motivación alta",
    ("alto", "alto"): "Posible sobrecarga emocional"
}

print(estados[("bajo", "bajo")])

# Cuándo usar tuple vs list

# tuple → datos que no cambian:
# usuario, configuraciones emocionales, colores de TherAppy

# list → datos que cambian:
# registros diarios, actividades, usuarios conectados