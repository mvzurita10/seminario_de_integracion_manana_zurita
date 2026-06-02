sesion = 1

while sesion <= 5:
    print(f"Sesión de bienestar: {sesion}")
    sesion += 1

print("Control de ciclo")

print("continue")
dia = 1

while dia <= 5:
    dia += 1

    if dia == 3:
        continue

    print(f"Día de seguimiento: {dia}")

print("break")
dia = 1

while dia <= 5:
    dia += 1

    if dia == 3:
        break

    print(f"Día de seguimiento: {dia}")

nivel_estres = int(input("Ingrese su nivel de estrés (0 para salir): "))

while nivel_estres != 0:
    print("Nivel de estrés registrado:", nivel_estres)

    nivel_estres = int(input("Ingrese su nivel de estrés (0 para salir): "))

sesion = 1

while sesion <= 5:
    print(f"Sesión completada: {sesion}")
    sesion += 1

else:
    print("Todas las sesiones de TherAppy han finalizado")

sesion = 1