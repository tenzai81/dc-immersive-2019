list1 = [2, 3, 4, 5]
list2 = [1, 2, 3, 4]
list3= [a*b for a, b in zip(list1, list2)]
print(list3)