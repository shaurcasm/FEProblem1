import timeManagement from '../../utilities/timeManagement.js';

// Valuable code. Validating Datalist input.
// When the value of the input changes...
export default function inputValidation(event, currentList, select, changeFunction, distance) {
    var optionFound = false,
        input = event.target,
        datalist = input.list;
    
    // Determine whether an option exists with the current value of the input.
    for (let j = 0; j < datalist.options.length; j++) {
        let optionValue = datalist.options[j].value;
        if(input.value.toUpperCase() === optionValue.toUpperCase()) {
            optionFound = true;
            select(optionValue);
            let vehicleSpeed = currentList.filter(vehicle => vehicle.name === optionValue)[0].speed;
            let change = vehicleSpeed ? timeManagement(distance, vehicleSpeed) : optionValue;
            changeFunction(change);
            break;
        }
    }
    // Use the setCustomValidity function of the validation API
    // to provide a user feedback if the value does not exist in the datalist.
    optionFound ? 
        input.setCustomValidity('') :
        input.setCustomValidity('Please select a valid Input');
    input.reportValidity();
}