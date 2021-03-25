import { Dropdown } from "bootstrap";

export const BootstrapContainer = () => {
    const bootstrapContainer = document.createElement("div");
    bootstrapContainer.className = "container-lg"
    return bootstrapContainer
}

export const BigContainer = () => {
    const container = document.createElement("div");
    container.className = "BigContainer";
    return container
}

export const AppHeading = (text) => {
    var header = document.createElement("h1");
    header.className = "AppHeading"
    header.innerHTML = `${text}`;
    return header
}

export const column = (nameOfClass) => {
    var _column = document.createElement("div");
    _column.className = `col-6 ${nameOfClass}`
    return _column
}

export const row = (nameOfClass) => {
    var _row = document.createElement("div");
    _row.className = `row ${nameOfClass}`;
    return _row
}

export const containerHeading = (text, nameOfClass) => {
    var _containerHeading = document.createElement("h2");
    _containerHeading.className = `${nameOfClass}`
    _containerHeading.innerHTML = `${text}`;
    return _containerHeading;

}

export const button = (text, nameOfClass) => {
    var _button = document.createElement("button");
    var innerButtonText = document.createElement("div");
    innerButtonText.className = "ButtonText"
    innerButtonText.innerHTML = `${text}`;
    _button.className = `btn btn-primary ${nameOfClass}`;
    _button.appendChild(innerButtonText)
    return _button
}

export const dropDown = (sequence, nameOfClass) => {
    var dropDownButton = document.createElement("select")
    dropDownButton.className = `btn btn-primary DropDown ${nameOfClass}`;
    dropDownButton.id = "DropDownButton"
    options: sequence.forEach(element => {
        var options = document.createElement("option");
        options.innerHTML = `${element}`;
        options.id = `${element}`;
        options.value = `${element}`;
        dropDownButton.appendChild(options)
    });
    return dropDownButton
}

// missing parameter =  , sunrise, temp, descrip, logo
export const dataTable = (country, city, date, sunrise, sundown, temp, descrip, logo) => {

    var _dataTable = document.createElement("table");
    _dataTable.className = "table";

    var _tableHead = document.createElement("thead")
    var _tableBody = document.createElement("tbody");

    var _firstRowColumn = document.createElement("th");
    _firstRowColumn.innerHTML = "Status:"
    _firstRowColumn.scope = "col";

    var _secondRowColumn = document.createElement("th");
    _secondRowColumn.innerHTML = "Actual State:"
    _secondRowColumn.scope = "col"

    var _trHead = document.createElement("tr");

    var _trList = []

    for (let i = 0; i < 8; i++) {
        var tr = document.createElement("tr");
        _trList.push(tr)        
    }

    // all of our td's in tr's
    var countryTd = document.createElement("td");
    var descripCountryTd = document.createElement("th");
    countryTd.innerHTML = country;
    descripCountryTd.innerHTML = "Country:";
    descripCountryTd.scope = "row";

    var cityTd = document.createElement("td");
    var descripCityTd = document.createElement("th");
    cityTd.innerHTML = city;
    descripCityTd.innerHTML = "City:";
    descripCityTd.scope = "row";

    var dateTd = document.createElement("td");
    var descripDateTd = document.createElement("th");
    dateTd.innerHTML = date;
    descripDateTd.innerHTML = "Date:";
    descripDateTd.scope = "row";

    // all of our td's in tr's
    var sunriseTd = document.createElement("td");
    var descripSunriseTd = document.createElement("th");
    sunriseTd.innerHTML = sunrise;
    descripSunriseTd.innerHTML = "Suns up at:";
    descripSunriseTd.scope = "row";

    var sundownTd = document.createElement("td");
    var descripSunDownTd = document.createElement("th");
    sundownTd.innerHTML = sundown;
    descripSunDownTd.innerHTML = "Sun sets at:";
    descripSunDownTd.scope = "row";

    var tempTd = document.createElement("td");
    var descripTempTd = document.createElement("th");
    tempTd.innerHTML = `${temp} celsius`;
    descripTempTd.innerHTML = "Temperature:";
    descripTempTd.scope = "row";

    var descTd = document.createElement("td");
    var descripDescTd = document.createElement("th");
    descTd.innerHTML = descrip;
    descripDescTd.innerHTML = "Description:";
    descripDescTd.scope = "row";



    //Weather logo td
    function WeatherLogo(code){
        var _logo = document.createElement("img");
        _logo.src = `https://www.weatherbit.io/static/img/icons/${code}.png`
       return _logo
    }

    var logoTd = document.createElement("td");
    var descripLogoTd = document.createElement("th");
    logoTd.appendChild( WeatherLogo(logo));
    descripLogoTd.innerHTML = "Weather:";
    descripLogoTd.scope = "row";
    
    // head of table
    _trHead.appendChild(_firstRowColumn);
    _trHead.appendChild(_secondRowColumn);
    _tableHead.appendChild(_trHead);

    // body of table
    _trList[0].appendChild(descripCountryTd);
    _trList[0].appendChild(countryTd);
    _tableBody.appendChild(_trList[0]);

    _trList[1].appendChild(descripCityTd);
    _trList[1].appendChild(cityTd);
    _tableBody.appendChild(_trList[1]);

    _trList[2].appendChild(descripDateTd);
    _trList[2].appendChild(dateTd);
    _tableBody.appendChild(_trList[2]);

    _trList[3].appendChild(descripSunriseTd);
    _trList[3].appendChild(sunriseTd);
    _tableBody.appendChild(_trList[3]);

    _trList[4].appendChild(descripSunDownTd);
    _trList[4].appendChild(sundownTd);
    _tableBody.appendChild(_trList[4]);

    _trList[5].appendChild(descripTempTd);
    _trList[5].appendChild(tempTd);
    _tableBody.appendChild(_trList[5]);

    _trList[6].appendChild(descripDescTd);
    _trList[6].appendChild(descTd);
    _tableBody.appendChild(_trList[6]);

    _trList[7].appendChild(descripLogoTd);
    _trList[7].appendChild(logoTd);
    _tableBody.appendChild(_trList[7]);



    _dataTable.appendChild(_tableHead)
    _dataTable.appendChild(_tableBody)
    _dataTable.id = "table"

    return _dataTable
}

    


