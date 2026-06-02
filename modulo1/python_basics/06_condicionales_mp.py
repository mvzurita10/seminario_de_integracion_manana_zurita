print("Evaluación de Bienestar Emocional - TherAppy")

dias_registrados = int(input("Ingrese la cantidad de días usando TherAppy: "))
indice_bienestar = float(input("Ingrese su índice de bienestar (0-10): "))
nivel_estres = float(input("Ingrese su nivel de estrés actual: "))

if dias_registrados > 1:
    if indice_bienestar >= 8:
        if nivel_estres < 5:
            print("¡Excelente progreso emocional! Desbloquea una sesión premium.")
        else:
            print("Buen progreso emocional. Continúa realizando tus ejercicios de relajación.")
    else:
        print("Se recomienda realizar más actividades de bienestar emocional.")
else:
    print("Aún no hay suficientes registros para generar una evaluación.")