# Cadenas, enteros, flotantes, booleanos y None

usuario = "Mikaela Zurita"          # string
nivel_estres = 25                   # int
indice_bienestar = 8.5              # float
sesion_activa = True                # booleano
emocion_no_registrada = None        # NoneType

print(type(usuario))
print(type(nivel_estres))
print(type(indice_bienestar))
print(type(sesion_activa))
print(type(emocion_no_registrada))

# Asignar valores a varias variables en una línea
felicidad, ansiedad, calma = 7, 4, 9

print(felicidad)
print(ansiedad)
print(calma)

# Asignar el mismo valor a múltiples variables
estres_manana = estres_tarde = estres_noche = 5

print(estres_manana)
print(estres_tarde)
print(estres_noche)

# Intercambiar niveles emocionales
estado_actual, estado_anterior = "Calma", "Ansiedad"

print(estado_actual, estado_anterior)

estado_actual, estado_anterior = estado_anterior, estado_actual

print(estado_actual, estado_anterior)

# Convenciones de nombres
nombre_usuario = "Mikaela Zurita"     # snake_case
nombreUsuario = "Mikaela Zurita"      # NO USAR camelCase
MAX_SESIONES_DIARIAS = 3              # Constante
_registro_interno = "Seguimiento"     # Uso interno

# Manejo de enteros
emociones_registradas = 42
estado_critico = -5
usuarios_registrados = 123456789
total_registros = 10 ** 10

print(emociones_registradas)
print(estado_critico)
print(usuarios_registrados)
print(total_registros)

# Bases numéricas
sesiones_binario = 0b1010
sesiones_octal = 0o17
sesiones_hexadecimal = 0xFF

print(sesiones_binario, sesiones_octal, sesiones_hexadecimal)

# Convertir cantidad de sesiones a otras bases
print(bin(255))
print(oct(255))
print(hex(255))