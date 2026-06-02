print("Ciclo for")

emociones = ["Felicidad", "Calma", "Gratitud"]

for emocion in emociones:
    print(emocion)

print("Recorrer palabra")
for letra in "TherAppy":
    print(letra)

print("Recorrer rango")
for dia in range(1, 6):
    print(f"Día {dia}")

print("Recorrer rango configurando paso")
for dia in range(1, 10, 2):
    print(f"Día {dia}")

print("Enumerar lista")
for i, emocion in enumerate(emociones):
    print(i, emocion)

print("Dos listas a la vez")
usuarios = ["Mikaela", "Josue"]
niveles_bienestar = [8, 9]

for usuario, bienestar in zip(usuarios, niveles_bienestar):
    print(usuario, bienestar)

print("Control del ciclo")

print("break")
for sesion in range(5):
    if sesion == 3:
        break
    print(f"Sesión {sesion}")

print("continue")
for sesion in range(5):
    if sesion == 2:
        continue
    print(f"Sesión {sesion}")

print("for anidado")
for semana in range(3):
    for dia in range(2):
        print(semana, dia)

print("Lista por comprensión")
puntajes_bienestar = [x**2 for x in range(5)]
print(puntajes_bienestar)

# Repaso
print("Seguimiento emocional de usuarios en TherAppy")

niveles_estres = [3, 8, 6, 2, 9]

registros_validos = 0
puntos_bienestar = 0

for nivel in niveles_estres:

    if nivel > 5:
        registros_validos += 1

        if nivel > 7:
            puntos_bienestar += 30
        else:
            puntos_bienestar += 10

print(f"Total de registros que requieren atención: {registros_validos}")
print(f"Puntos de seguimiento emocional acumulados: {puntos_bienestar}")