var API_KEY = "d9f2a002188d486f8970807467a615d6";


function GetWeatherById(city){

    fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`)
    .then((response) => response.json())
    .then((jsonData) => {
    console.log(jsonData)
});

}




export default GetCityId()
