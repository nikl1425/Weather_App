import {dropDown, BigContainer, BootstrapContainer, AppHeading, column, row, button, containerHeading, dataTable} from './component/container';
import {GetWeatherById, Weather, fetchTableData, fiveDaysWeather} from './service/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import logo from './asset/image/download.jpeg'


/*

HOW WE USE PROMISES IN ANOTHER FILE. CALL ANYSC FETCH AND PASTE IN ALL METHOD
 function UpdateTable(city){
    fetchTableData(city).then(loadedData => {

        var newTable = dataTable(loadedData.datetime, loadedData.datetime, loadedData.datetime)
        var tableContainer = document.getElementById("tableContainer");
        while (tableContainer.hasChildNodes()){
            tableContainer.removeChild(tableContainer.lastChild);
        }
        tableContainer.appendChild(newTable)
    })
    

}
*/



var cities = ['copenhagen', 'london', 'berlin']
var mytable = dataTable("dk", "dk", "22", "unknown")
window.onload = () => {
    fetchTableData("copenhagen").then(loadedData => {

        var newTable = dataTable(loadedData.country_code, loadedData.city_name, loadedData.datetime, loadedData.sunrise, loadedData.sunset, loadedData.temp, loadedData.weather.description, loadedData.weather.icon)
        var tableContainer = document.getElementById("tableContainer");
        while (tableContainer.hasChildNodes()){
            tableContainer.removeChild(tableContainer.lastChild);
        }
        tableContainer.appendChild(newTable)
    })
    
};

function myvar(){
    fiveDaysWeather("copenhagen").then(data => console.log(data))
}



dataTable()
function InteractionView(){
    var columnOne = column("column");
    var headingContainer = containerHeading("Choose a city", "ContainerHeader")
    var submit = button("Submit", "SubmitBtn");
    submit.id = "Submit"
    submit.onclick = function(){
        var dropdownValue = document.getElementById("DropDownButton");
        var value = dropdownValue.value
        UpdateTable(value)
        myvar();
    }
    columnOne.appendChild(headingContainer)
    columnOne.appendChild(dropDown(cities, "SubmitBtn"))
    columnOne.appendChild(submit)
    return columnOne
}

 async function UpdateTable(city){
    var loadedData = await Weather(city)
    var newTable = dataTable(loadedData.country_code, loadedData.city_name, loadedData.datetime, loadedData.sunrise, loadedData.sunset, loadedData.temp, loadedData.weather.description, loadedData.weather.icon)
    var tableContainer = document.getElementById("tableContainer");
    while (tableContainer.hasChildNodes()){
        tableContainer.removeChild(tableContainer.lastChild);
    }
    tableContainer.appendChild(newTable)

}

function CurrentWeatherView(){
    var columnTwo = column("column");
    var tableContainer = document.createElement("div");
    tableContainer.id = "tableContainer";
    var headingContainer = containerHeading("Current Weather", "ContainerHeader")
    
    // table to display data from api
    
    console.log(mytable)
   
    
    columnTwo.appendChild(headingContainer)
    tableContainer.appendChild(mytable);
    columnTwo.appendChild(tableContainer)
    

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






