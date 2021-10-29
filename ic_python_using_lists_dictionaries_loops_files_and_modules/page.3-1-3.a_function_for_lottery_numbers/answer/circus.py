import random

def lotto_numbers():
    # code in the function goes here
    lotto_nums = []
    for i in range(5):
        lotto_nums.append(random.randint(1, 53))

    return lotto_nums
