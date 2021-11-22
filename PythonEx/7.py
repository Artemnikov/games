# enter two numbers
# enter operator
# by the operator . make a calculation

num1 = int(input('first number: '))
operator = input('operator: ')
num2 = int(input('sed number: '))
sum = 0

if operator == '+':
    sum = num1 + num2
if operator == '-':
    sum = num1 - num2
if operator == '*':
    sum = num1 * num2
if operator == '/':
    sum = num1 / num2
if operator == '%':
    sum = num1 % num2
print(sum)
