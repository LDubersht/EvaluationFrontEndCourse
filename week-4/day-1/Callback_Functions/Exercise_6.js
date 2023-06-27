const commentOnWeather = temp =>  (temp > 25? "hot": "cold")
console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"