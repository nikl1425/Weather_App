import {dropDown, BigContainer, BootstrapContainer, AppHeading, column, row, button, containerHeading} from './component/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import logo from './asset/image/download.jpeg'

var WeatherContainer = {
    date: "Date of observation",
    country: "Country",
    city: "City name",
    temp: "Temperature",
    sunrise: "Suns up at",
    weatherLogo: function(){
        var logo = document.createElement("img");
        logo.src = "https://www.weatherbit.io/static/img/icons/c04d.png"
        return logo
    }
}


var cities = ['copenhagen', 'london', 'berlin']


function InteractionView(){
    var columnOne = column("column");
    var headingContainer = containerHeading("Choose a city", "ContainerHeader")
    var submit = button("Submit", "SubmitBtn");
    submit.id = "Submit"
    
    submit.onclick = function(){
        var dropdownValue = document.getElementById("DropDownButton");
        var value = dropdownValue.value
        console.log(value)
    }
    columnOne.appendChild(headingContainer)
    columnOne.appendChild(dropDown(cities, "SubmitBtn"))
    columnOne.appendChild(submit)
    return columnOne
}



function CurrentWeatherView(){
    var columnTwo = column("column");
    var headingContainer = containerHeading("Current Weather", "ContainerHeader")
    
    columnTwo.appendChild(headingContainer)
    return columnTwo
}

function SetupView() {
    var bootstrapContainer = BootstrapContainer();
    var appViewContainer = BigContainer();
    var _InteractionView = InteractionView()
    var _CurrentWeatherView = CurrentWeatherView()
    var appHeading = AppHeading("Weather Application")
    var rowOne = row("Row");
    rowOne.appendChild(_InteractionView)
    rowOne.appendChild(_CurrentWeatherView)
    appViewContainer.appendChild(appHeading)
    appViewContainer.appendChild(rowOne)
    bootstrapContainer.appendChild(appViewContainer)
   
    return bootstrapContainer
}

document.body.appendChild(SetupView())






