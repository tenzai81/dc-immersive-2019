width = int(input('Width: '))
height = int(input('Height: '))
for x in range(height):
    if x in [0]:
        print('*' * (width))  
    elif  x in[(height-1)]:
        print ('*' * (width))
    else:
        print("*" + " "*(width-2) + "*")
