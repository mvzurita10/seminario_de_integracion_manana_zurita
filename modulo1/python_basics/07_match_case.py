print("match-case")
comando = input("Comando proceso iniciar/parar/reiniciar: ")
match comando:
    case "iniciar":
        print("Sistema iniciado")
    case "parar":
        print("Deteniendose")
    case "reiniciar":
        print("Reiniciando sistema")
    case _:
        print(f"Comando '{comando}' no reconocido")


print("Match condiciones")
numero = 7
match numero:
    case n if n<0:
        print(f"{n} es negativo")
    case 0: 
        print("Es cero")
    case n if n%2==0:
        print(f"{n} es par")
    case n:       
        print(f"{n} es positivo e impar") 
