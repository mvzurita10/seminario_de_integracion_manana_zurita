print("Funciones en Python - TherAppy")

print("Función Básica")

def mostrar_bienvenida():
    print("Bienvenido a TherAppy")

mostrar_bienvenida()

print("Función con parámetros")

def saludar_usuario(nombre):
    print(f"Hola {nombre}, ¿cómo te sientes hoy?")

saludar_usuario("Josue")

saludar_usuario("Josue")
saludar_usuario("Mikaela")

print("Función que devuelve valor con return")

def calcular_bienestar(calma, felicidad):
    return calma + felicidad

print(calcular_bienestar(5, 6))

print("Función parámetros por posición")

def presentar_usuario(nombre, edad, emocion):
    print(f"{nombre}, {edad} años, emoción principal: {emocion}")

presentar_usuario("Josue", 25, "Calma")  # Por posición
presentar_usuario(emocion="Felicidad", nombre="Mikaela", edad=23)  # Por nombre

print("Función con parámetros por defecto")

def mensaje_motivacional(nombre, mensaje="Sigue adelante", emoji="😊"):
    print(f"{mensaje} {nombre} {emoji}")

mensaje_motivacional("Josue", "Excelente progreso", "🌟")
mensaje_motivacional("Mikaela", emoji="💙")
mensaje_motivacional("Valentina", "Hoy es un gran día")

print("Función con parámetros posicionales variables")

def registrar_emociones(*args):
    print(f"Emociones registradas: {args}")

print(registrar_emociones("Calma", "Felicidad", "Gratitud"))
print(registrar_emociones("Ansiedad", "Estrés", "Calma", "Esperanza"))
print(registrar_emociones("Motivación", "Confianza"))

print("Función con parámetros combinados con posicional")

def mostrar_actividades(titulo, *actividades):
    print(f"Actividades registradas en {titulo}:")
    print(titulo)

    for actividad in actividades:
        print(f"- {actividad}")

mostrar_actividades(
    "Ejercicios de Bienestar",
    "Meditación",
    "Respiración Guiada",
    "Diario Emocional",
    "Música Relajante"
)

print("Función con parámetros clave-valor variables")

def crear_perfil_usuario(**kwargs):
    print(f"Datos recibidos: {kwargs}")

    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_perfil_usuario(
    nombre="Ana",
    emocion="Calma",
    edad=26,
    ciudad="Quito"
)

print("Función combinación de todos los tipos")

def configurar_therappy(servidor, *modulos, modo_prueba=False, **opciones):
    print(f"Servidor: {servidor}")
    print(f"Módulos: {modulos}")
    print(f"Modo prueba: {modo_prueba}")
    print(f"Opciones adicionales: {opciones}")

configurar_therappy(
    "localhost",
    "Usuarios",
    "Emociones",
    "Meditaciones",
    modo_prueba=True,
    ssl=True,
    timeout=30
)

print("Devolver múltiples valores")

def estadisticas_estres(niveles):
    return min(niveles), max(niveles)

minimo, maximo = estadisticas_estres([3, 5, 7, 2, 8, 9])

print(f"Nivel mínimo de estrés: {minimo}")
print(f"Nivel máximo de estrés: {maximo}")

_, maximo = estadisticas_estres([12, 13, 16, 24, 100])

print(f"Solo nivel máximo de estrés: {maximo}")