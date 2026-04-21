print("Ciclo for")
frutas=["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

print("Recorrer palabras")
for letra in "manzana":
    print(letra)

print("Recorrer rango")
for i in range(1,6):
    print(i)

print("Recorrer rango configurar paso")
for i in range(1,10,2):
    print(i)

print("Enumerar lista")
for i, fruta in enumerate(frutas):
    print(i,fruta)

print("Dos listas a la vez")
nombres = ["Ana", "Luis"]
edades = [25, 30]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad) 

print("Control del ciclo")
print("break")
for i in range(5):
    if i == 3:
        break
    print(i)
print("continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("for anidado")
for i in range(3):
    for j in range(2):
        print(i,j)
print("lista compresion forma corta")
cuadrados = [x**2 for x in range(5)]
print(cuadrados)

#Repaso 
print("Ventas diarias de un vendedor")

ventas = [120, 80, 200, 50, 300]
total_ventas_validas = 0
bono_acumulado = 0

for venta in ventas:
    if venta > 100:
        total_ventas_validas += 1
        if venta > 250:
            bono_acumulado += 30
        else:
            bono_acumulado += 10

print(f"Total de ventas válidas: {total_ventas_validas}")
print(f"Total de bono acumulado: {bono_acumulado}")








#Reglas: solo cuentan ventas mayores a 100, si la venta es mayor a 250 tiene un bono de 30, si no un bono de 10, al final mostrar total de ventas y total de bonos acumulado 
#resuelve el enunciado utilizando un ciclo for y control de ciclo

