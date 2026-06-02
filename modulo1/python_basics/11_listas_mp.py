print("Listas en TherAppy")

print("Crear listas")

vacia = []
print(vacia)

niveles_estres = [1, 2, 3, 4, 5, 6, 7]
print(niveles_estres)

usuarios = ["Mikaela", "Josue", "Valentina", "Carlos", "Ana", "Pedro"]
print(usuarios)

registro_emocional = [1, "Calma", "Felicidad", True, None, 8.5]
print(registro_emocional)

sesiones_anidadas = [1, [5, 5, [6, 4, 4]], 5, 7]
print(sesiones_anidadas)

print("Acceso a los elementos de una lista")

print(usuarios[0])
print(usuarios[-1])
print(usuarios[1:3])
print(usuarios[::-1])

print("CRUD de una lista")

actividades = ["Meditación", "Respiración", "Diario Emocional"]

# Agregar
actividades.append("Música Relajante")
print(actividades)

actividades.insert(1, "Mindfulness")
print(actividades)

actividades.extend(["Yoga", "Visualización Positiva"])
print(actividades)

# Modificar
actividades[0] = "Meditación Guiada"
print(actividades)

# Eliminar elementos
actividades.remove("Respiración")
print(actividades)

eliminado = actividades.pop()
print(actividades)

eliminado = actividades.pop(0)
print(actividades)

del actividades[0]
print(actividades)

print("Buscar valores en los elementos de una lista")

print("Yoga" in actividades)
print(actividades.index("Yoga"))
print(actividades.count("Yoga"))

print("Ordenar una lista")

puntajes_bienestar = [3, 2, 6, 34, 9, 0, 1, 2]

print(puntajes_bienestar)

puntajes_bienestar.sort()
print(puntajes_bienestar)

puntajes_bienestar.sort(reverse=True)
print(puntajes_bienestar)

ordenada = sorted(puntajes_bienestar)

print(puntajes_bienestar)
print(ordenada)

# Lista funcional TherAppy

usuarios_therappy = [
    {"nombre": "Mikaela",   "bienestar": 95, "sesiones": 12, "grupo": "premium"},
    {"nombre": "Josue",     "bienestar": 70, "sesiones": 5,  "grupo": "basico"},
    {"nombre": "Valentina", "bienestar": 88, "sesiones": 8,  "grupo": "premium"},
    {"nombre": "Carlos",    "bienestar": 60, "sesiones": 3,  "grupo": "basico"},
    {"nombre": "Ana",       "bienestar": 98, "sesiones": 0,  "grupo": "premium"},
]

# map — transforma cada elemento

puntajes = list(map(lambda u: u["bienestar"], usuarios_therappy))
nombres = list(map(lambda u: u["nombre"].upper(), usuarios_therappy))

print(puntajes)
print(nombres)

# filter — filtra elementos

con_sesiones = list(filter(lambda u: u["sesiones"] > 0, usuarios_therappy))
premium = list(filter(lambda u: u["grupo"] == "premium", usuarios_therappy))

print([u["nombre"] for u in con_sesiones])

# sorted con key

por_bienestar = sorted(usuarios_therappy, key=lambda u: u["bienestar"])

mejor_bienestar = sorted(
    usuarios_therappy,
    key=lambda u: u["bienestar"],
    reverse=True
)[0]

print(
    f"Mejor bienestar: "
    f"{mejor_bienestar['nombre']} "
    f"({mejor_bienestar['bienestar']})"
)

# sum, min, max con key

total_bienestar = sum(
    u["bienestar"] * max(u["sesiones"], 1)
    for u in usuarios_therappy
)

menor_bienestar = min(
    usuarios_therappy,
    key=lambda u: u["bienestar"]
)

print(f"Total acumulado de bienestar: {total_bienestar}")

print(
    f"Menor bienestar: "
    f"{menor_bienestar['nombre']}"
)

# any y all

hay_sin_sesiones = any(
    u["sesiones"] == 0
    for u in usuarios_therappy
)

todos_premium = all(
    u["grupo"] == "premium"
    for u in usuarios_therappy
)

print(f"¿Hay usuarios sin sesiones? {hay_sin_sesiones}")
print(f"¿Todos son premium? {todos_premium}")