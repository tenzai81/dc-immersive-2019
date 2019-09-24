numbers = [ 19, 2, 40, 100, 12, 33, 200, 36, 1, 82]
numbers.sort()
for number in numbers:
    if number % 3 == 0 : 
        print(f'{number}')
