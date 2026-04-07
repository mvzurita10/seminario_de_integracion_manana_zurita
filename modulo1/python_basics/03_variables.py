# Enteros, cadena de caracteres , boolenao, none 

nombre= "Josue Merino" #string 
edad = 25              #int
altura= 1.65           #float
activo = True          #booleano
nulo = None            #NoneType

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

# Asignar valor  varias variables em uma linea 
a, b, c = 1, 10, 7

print(a)
print(b)
print(c)

#Asignar el mismo valor a multiples variables 

a=b=c= 2
print(a)
print(b)
print(c)

#Intercambiar valores 
x,y = 10,20
print(x,y)
x,y = y,x
print(x,y)

#Convenciones de nombres 
nombre_completo = "Josue Merino" #snake_case
nombreCompleto = "Josue Merino"  #NO USAR camelCase
MAX_REINTENTOS = 3               #MAYUSCULAS SOSTENIDAS para constantes
_variable_interna = "privada"    #para uso interno

#Manejo de Enteros
pequeño = 42
negativo = -5
grande = 123456789012
enorme = 10 ** 100  

print(pequeño)
print(negativo)
print(grande)
print(enorme)

#Bases Numéricas
binario = 0b1010 
octal = 0o17
hexadecimal = 0xFF
print(binario, octal, hexadecimal)

#Convertir de decimal a otras bases 
print(bin(255))
print(oct(255))
print(hex(255))  