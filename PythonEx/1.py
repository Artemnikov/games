a = int(input('first number: '))
b = int(input('the jump: '))
c = int(input('how many numbers: '))
sum = []

i = 0
while i < c :
    sum.append(a)
    a = a + b
    i += 1
else : print('done')
print(sum)