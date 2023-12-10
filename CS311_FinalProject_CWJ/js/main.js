function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const conversionType = document.querySelector('input[name="conversionType"]:checked').value;

    let result;
    switch (conversionType) {
        case 'metersToFeet':
            result = inputValue * 3.28084;
            break;
        case 'feetToMeters':
            result = inputValue / 3.28084;
            break;
        case 'kilometersToMiles':
            result = inputValue * 0.621371;
            break;
        case 'milesToKilometers':
            result = inputValue / 0.621371;
            break;
        case 'celsiusToFahrenheit':
            result = (inputValue * 9/5) + 32;
            break;
        case 'fahrenheitToCelsius':
            result = (inputValue - 32) * 5/9;
            break;
        case 'kilogramToPounds':
            result = inputValue * 2.20462;
            break;
        case 'poundsToKilogram':
            result = inputValue / 2.20462;
            break;
        case 'gramsToOunces':
            result = inputValue * 0.03527396;
            break;
        case 'ouncesToGrams':
            result = inputValue / 0.03527396;
            break;
        default:
            result = 'Invalid conversion type';
            break;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)}`;
}
