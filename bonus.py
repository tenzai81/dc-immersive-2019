height = 8
width = 20
text = input("Text?: ")
for x in range(height):
    if x in [0]:
        print('*' * (width))  
        print(f'{text}')  
    elif  x in[(height-1)]:
        print ('*' * (width) )
    else:
        print("*" + " "*(width-2) + "*")
   
 