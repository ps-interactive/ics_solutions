performances = {'Ventriloquism': '9:00am',
                'Snake Charmer': '12:00pm',
                'Amazing Acrobatics': '2:00pm',
                'Bearded Lady': '5:00pm'}
showtime = performances.get('Bearded Lady')
if(showtime == None):
    print("Performance doesn't exist")
else:
    print("The time of the Bearded Lady show is ", showtime)
