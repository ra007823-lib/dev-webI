valor = float(input("insira o valor do produto: "))
desconto = valor * 0.15
preco_final = valor - desconto

print(f"desconto: R${desconto:.2f}")
print(f"Total a pagar: R$ {preco_final}")
