total_segundos = float(input("escreva: "))
horas = total_segundos // 3600
resto_segundos = total_segundos % 3600
minutos = resto_segundos // 60
segundos_finais = resto_segundos % 60

print(f" escreva {horas}h, {minutos}m, {segundos_finais}s")

