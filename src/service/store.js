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
        }
    }
    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`)
    .then((response) => response.json())
    .then((jsonData) => {
        var dataArray = jsonData.data[0]
        WeatherContainer["date"] = dataArray.datetime,
        WeatherContainer.city = dataArray.city_name,
        WeatherContainer.sunrise = dataArray.sunrise,
        WeatherContainer.country === dataArray.country_code,
        WeatherContainer.temp = dataArray.temp,
        WeatherContainer.description = dataArray.weather.description,
        WeatherContainer.WeatherLogo = GetLogo(dataArray.weather.icon),
        console.log("SUCCESS!")
        //console.log(WeatherContainer)   
    });
    console.log(WeatherContainer)
    return WeatherContainer
}


export async function Weather(city){
    const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`)
    const blob = await response.json()
    const newData = await blob.data[0]
    return newData
}

export function fetchTableData(city) {
    return new Promise((resolve, reject)=>{
        return fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`)
        .then(result => result.json())
        .then(data => {
            
            resolve(data.data[0])
            })
    });

  }

  
export function fiveDaysWeather(city){
    var container = {};
    return fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${API_KEY}&hours=120`)
    .then(response => response.json())
    .then(resp => {
        container.weather = resp.data[0].solar_rad
        container.pod = resp.data[0].pod
        return container
    })
            
    
}




function GetLogo(logoCode){
    var _logoCode = logoCode;
    var test = document.createElement("img");
    test.src = `https://www.weatherbit.io/static/img/icons/${_logoCode}.png`;
    return test
}