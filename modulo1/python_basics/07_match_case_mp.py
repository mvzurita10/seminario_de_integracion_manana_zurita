print("TherAppy - Gestión de Actividades Emocionales")

actividad = input("Seleccione una actividad (respirar/meditar/relajarse): ")

match actividad:
    case "respirar":
        print("Iniciando ejercicio de respiración guiada")
    case "meditar":
        print("Iniciando sesión de meditación")
    case "relajarse":
        print("Activando música relajante")
    case _:
        print(f"La actividad '{actividad}' no está disponible")

print("Evaluación del Estado Emocional")

nivel_estres = 7

match nivel_estres:
    case n if n < 0:
        print(f"{n} es un valor no válido")
    case 0:
        print("Nivel de estrés inexistente")
    case n if n % 2 == 0:
        print(f"Nivel de estrés {n}: estado emocional estable")
    case n:
        print(f"Nivel de estrés {n}: se recomienda realizar ejercicios de relajación")