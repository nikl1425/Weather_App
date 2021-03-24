var API_KEY = "d9f2a002188d486f8970807467a615d6";


export function GetWeatherById(city){
    var WeatherContainer = {
        date: "Date of observation",
        country: "Country",
        city: "City name",
        temp: "Temperature",
        sunrise: "Suns up at",
        description: "some weather",
        WeatherLogo: function(){
            var _logo = document.createElement("img");
            _logo.src = "https://www.weatherbit.io/static/img/icons/c04n.png"
           return _logo
        }()
    }
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`)
    .then((response) => response.json())
    .then((jsonData) => {
        var dataArray = jsonData.data[0];
        WeatherContainer.date = dataArray.datetime;
        WeatherContainer.city = dataArray.city_name;
        WeatherContainer.sunrise = dataArray.sunrise;
        WeatherContainer.country = dataArray.country_code;
        WeatherContainer.temp = dataArray.temp;
        WeatherContainer.description = dataArray.weather.description;
        WeatherContainer.WeatherLogo = GetLogo(dataArray.weather.icon)
     
        console.log(WeatherContainer)
        return WeatherContainer
});
    
}


function GetLogo(logoCode){
    var _logoCode = logoCode;
    var test = document.createElement("img");
    test.src = `https://www.weatherbit.io/static/img/icons/${_logoCode}.png`;
    return test
}