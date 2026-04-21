print("Funciones en Python")
print("Funcion Basica")
def saludar():
    print("Hola desde la UTE")
saludar()

print("Funcion con parametros")
def saludar_con_nombre(nombre):
    print(f"Hola {nombre}, Que tal?")
saludar_con_nombre("Josue")

saludar_con_nombre("Josue")
saludar_con_nombre("Mikaela")

print("Funcion que devuelve valor con return")
def sumar(a, b):
    return a + b
print(sumar(5, 6))

print("Funcion parametros por posicion")
def presentar(nombre, edad, ciudad):
    print(f"{nombre}, {edad}, {ciudad}")

presentar("Josue", 25, "Quito") #Por posicion
presentar(ciudad="Ambato",nombre="Mikaela", edad=23) #Por nombre 

print("Funcion con parametros por defecto")
def saludo_con_parametros_por_defecto(nombre, saludo="Hola", puntuacion="!"):
    print(f"{saludo} {nombre} {puntuacion}")

saludo_con_parametros_por_defecto("Josue", "Buenos dias", "...")
saludo_con_parametros_por_defecto("Mikaela", puntuacion="...")
saludo_con_parametros_por_defecto("Valentina","Buenas tardes")

print("Funcion con parametros posicionales")
def sumar_todos(**args):
    print(f"Argumentos recibidos: {args}")

print(sumar_todos(1,2,3))
print(sumar_todos(1,2,3,4,5,6,7))
print(sumar_todos(10,20,22)) 

print("Funcion con parametros combinados con posicional")
def mostrar_info(titulo, *datos):
    print(f"Argumentos recibidos {titulo} {datos}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
mostrar_info("Frutas", "Naranja", "Piña", "Melon", "Manzana") 

print("Funcion con parametros clave valor variables")
def crear_perfil(**kwargs):
    print(f"Argumentos recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_perfil(nombre="Ana", apellido="Lopez", edad=26, ciudad="Quito")

print("funcion parametros combinacion de todos los tipos")
def configurar(hots, *puertos, debuf=False, **opciones):
    print(f"Host: {hots}")
    print(f"Puertos: {puertos}")
    print(f"Debug: {debuf}")
    print(f"Opciones adicionales: {opciones}")
configurar("localhost", 80, 443,8080, debuf=True, ssl=True, timeout=30, ssl=True)

print("Devolver multiples valores" )
def minmax(numeros):
    return min(numeros), max(numeros)
minimo, maximo = minmax([3,5,7,2,8,9])
print(f"Minimo: {minimo}, Maximo: {maximo}")
_, maximo = minmax([12,13,16,24,100])
print(f"Solo Maximo: {maximo}")


