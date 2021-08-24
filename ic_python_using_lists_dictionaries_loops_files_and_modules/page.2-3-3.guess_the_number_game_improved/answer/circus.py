import random

num = random.randint(1, 10)

guess = int(input('Guess a number between 1 and 10'))

times = 1
while guess != num:
    guess = int(input('Guess again'))
    times = times + 1
    if(times == 3):
        break

if(guess == num):
    print('You win!')
else:
    print('You lose! The number was ', num)
