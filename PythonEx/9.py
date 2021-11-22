# unput
# while input > 0 =>
# list.append(num)
# if input shlili input < 0
# while [all]
# add all values together and divide it by its length

sum = []
sumAll = 0
num = 0
while True:
    num = int(input('enter grade: '))
    if num < 0:
        break
    sum.append(num)

i = 0
while i < len(sum):
    sumAll += sum[i]
    i += 1

sumAll = sumAll / len(sum)
print(sumAll)
