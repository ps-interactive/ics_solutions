import random


def guessing_game():
    num = random.randint(1, 10)

    guess = int(input('Guess a number between 1 and 10'))
    times = 1

    while guess != num:
        guess = int(input('Guess again'))
        times += 1
        if times == 3:
            break

    if guess == num:
        print('You win!')
    else:
        print('You lose! The number was', num)


def lotto_numbers():
    lotto_nums = []
    for i in range(5):
        lotto_nums.append(random.randint(1, 53))

    return lotto_nums


def main():
    answer = input(
        'Do you want to get lottery numbers (1) or play the game (2) or quit (Q)?')
    if(answer == '1'):
        numbers = lotto_numbers()
        print(numbers)
    elif(answer == '2'):
        guessing_game()
    else:
        print('Toodles!')


main()
