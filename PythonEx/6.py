import math

x = float(input('zela: '))
y = float(input('zela2: '))
z = float(input('zela3: '))
array = [x, y, z]


def checkTriangle () :
    
    for i in array:
        for j in range(len(array)):
            if( i == j ): print('we have shve shokaim')
            
    # if ( x == y or x == z): print(' we have shveshokaim ')
    # if ( y == z ): print(' we have shveshokaim ')
    
    # for i in array: 
    #     for j in array:
    #         sum = math.sqrt( i**2 + j**2 )
    #         sum2 = 
    
    sum = math.sqrt(x**2 + y**2)
    sum = format(sum, ".2f")
    sum2 = format(z,".2f")
    if ( sum == sum2 ):
        print('we have a shave zavit')
        if ( x == y or x == z): print(' we have shveshokaim ')
        if ( y == z ): print(' we have shveshokaim ')
    
    sum = math.sqrt(y**2 + z**2)
    sum = format(sum, ".2f")
    sum2 = format(x,".2f")
    if ( sum == sum2 ):
        print('we have a shave zavit')
        if ( x == y or x == z): print(' we have shveshokaim ')
        if ( y == z ): print(' we have shveshokaim ')

    sum = math.sqrt(z**2 + x**2)
    sum = format(sum, ".2f")
    sum2 = sum2 = format(y,".2f")
    if ( sum == sum2 ):
        print('we have a shave zavit')
        if ( x == y or x == z): print(' we have shveshokaim ')
        if ( y == z ): print(' we have shveshokaim ')
    
    if( x == y and x == z ):
        if( y == z ): print('we have shave zlaot')
    
    

for i in array:
    if( i > 0 ):
        print('we have a triangle')
        checkTriangle()
        break
    else: print('nope')
    
# if ( x > 0 and y > 0 ) :
#     if( z > 0 ) : 
#         print('we have a triangle')
#         checkTriangle()
#     else: print('nope')