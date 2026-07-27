#print("condicionales simples")
#edad=input("Incluye edad?")
#if (int(edad) >= 18):
#    print("Mayor de edad") 

#print("condicionales dos caminos")
#temperatura = input("Incluye temperatura?")
#if (int(temperatura) >= 38):
#    print("Temperatura alta")
#else:    
#    print("Temperatura normal")

#print("condicionales multiples")
#nota = input("Incluye nota?")
#if (int(nota) >= 90):
#    print("Excelente")
#elif (int(nota) >= 80):
#    print("Bueno")
#elif (int(nota) >= 70):
#    print("Aprobado")
#else:
#    print("Reprobado") 

#print("condicionales anidados")
#tiene_reserva=True
#dinero =25
#plato ="pizza"
#if(tiene_reserva):
#    if(dinero >= 20):
#        if(plato == "pizza"):
#            print("Tu pizza cuesta $20. Pedido confirmado")
#        else:
#            print("Plato disponible")
#    else:
#        print("No tienes suficiente dinero")
#else: 
#    print("No tienes reserva") 



print("Evaluación de empleados")
antiguedad = int(input("Ingrese años de antigüedad: "))
calificacion = float(input("Ingrese calificación: "))
salario = float(input("Ingrese salario: "))

if(antiguedad > 1):
    if(calificacion >= 8):
        if(salario < 1000):
            print("Recibe bono de $200")
        else:
            print("Recibe bono de $100")
    else:
        print("No recibe bono por baja calificación")
else:
    print("No cumple con la antigüedad mínima")