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

    


