# input 2 numbers
# while n1 > 0

n1 = int(input('first number: '))
n2 = int(input('second number: '))
sum = 0

while n1 > 0:
    n1 -= n2
    if n1 < 0:
        break
    sum += 1

print(sum)
print(abs(n1))
