x = [15, 15, 5, 60, 9, 12, 14, 16, 20, 35, 45, 53, 62, 89, 120, 100]
for x1 in x :
    if x1 % 3 == 0 and   x1 % 5 == 0:
        print('Fizzbuzz')  
    elif x1 % 3 == 0:
        print("Fizz")
    elif x1 % 5 == 0:
        print('Buzz')    
    else:
        print(x1)