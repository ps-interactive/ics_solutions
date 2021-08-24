computer_choice = 'rock'
user_choice = input("Enter rock, paper, or python:\n")

if computer_choice == user_choice:
    print('TIE')
elif user_choice == 'rock' and computer_choice == 'python':
    print('WIN')
elif user_choice == 'paper' and computer_choice == 'rock':
    print('WIN')
elif user_choice == 'python' and computer_choice == 'paper':
    print('WIN')
else:
    print('You lose :( Computer wins :D')
