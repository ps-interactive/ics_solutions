import requests

def current_weather():
    url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=67da29cb91129f1a68c1c06c1be92daa"
    r = requests.get(url)

    weather_json = r.json()
    print(weather_json)

    min = weather_json['main']['temp_min']
    max = weather_json['main']['temp_max']

    print("The circus' forecast is", min , "as the low and", max, "as the high")

