import random


def lotto_numbers():
    lotto_nums = []
    for i in range(5):
        lotto_nums.append(random.randint(1, 53))

    return lotto_nums


numbers = lotto_numbers()
print(numbers)
