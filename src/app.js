import {dropDown, BigContainer, BootstrapContainer, AppHeading, column, row, button, containerHeading, dataTable, standardColumn, ForecastTable} from './component/container';
import {GetWeatherById, Weather, fetchTableData, fiveDaysWeather} from './service/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'



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


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

function GetNextFiveDays (){
    var today = new Date();
    today.setHours(12,0,0,0)
    var days = [];
    var newFormatedDays = []
    for (let i = 1; i < 5; i++) {
        var datestring = today.getUTCFullYear() + "-" + (today.getUTCMonth()+1) + "-" + (today.getUTCDate()+i)
        days.push(datestring)
    }

    days.forEach(element => {
        var newday = formatDate(element)
        newFormatedDays.push(newday)
    });


    return newFormatedDays
}

function FourDaysForecast(value){
    var container = document.getElementById("ForecastContainer");

    while (container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }

    fiveDaysWeather(value).then(sequence => {
        console.log(typeof(sequence[0].datetime) + " : " + sequence[0].datetime)
        var listOfDays = GetNextFiveDays();
        var chosenElement = []
        
        
        sequence.forEach(element => {
            if(listOfDays.includes(element.datetime)){
                chosenElement.push(element)
            }
        });
        console.log(chosenElement)
        var tableOfForecast = ForecastTable(chosenElement)
       
        container.appendChild(tableOfForecast)
       
       
    })

    
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
        FourDaysForecast(value);
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
    var rowTwo = row("Row2");
    var col = standardColumn("ForecastContainer");
    rowTwo.appendChild(col)

    rowOne.appendChild(_InteractionView)
    rowOne.appendChild(_CurrentWeatherView)
    appViewContainer.appendChild(appHeading)
    appViewContainer.appendChild(rowOne)
    appViewContainer.appendChild(rowTwo)
    bootstrapContainer.appendChild(appViewContainer)
   
    return bootstrapContainer
}

document.body.appendChild(SetupView())






