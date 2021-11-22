x = int(input("enter your value"))

while x > 0:
    if x >= 200 :
        x -= 200
        print("one 200")
    elif x >= 100 :
        x -= 100
        print("one 100")
    elif x >= 50 :
        x -= 50
        print("one 50")
    elif x >= 20 :
        x -= 20
        print("one 20")
    elif x >= 10 : 
        x -= 10
        print('one 10')
    elif x >= 5 :
        x -= 5
        print('one 5')
    elif x >= 2 :
        x -= 2
        print('one 2')
    elif x >= 1 :
        x -= 1
        print('one chekel')
else:
    print("you are broke af")