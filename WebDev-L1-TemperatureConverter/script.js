const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature(){

    let temp = parseFloat(temperature.value);

    if(isNaN(temp)){
        result.innerHTML = "⚠ Please enter a valid temperature.";
        return;
    }

    let from = fromUnit.value;
    let to = toUnit.value;

    // Absolute Zero Validation

    if(
        (from === "celsius" && temp < -273.15) ||
        (from === "fahrenheit" && temp < -459.67) ||
        (from === "kelvin" && temp < 0)
    ){
        result.innerHTML = "❌ Temperature below Absolute Zero!";
        return;
    }
    let celsius;
    // Convert everything to Celsius first
    if(from === "celsius"){
        celsius = temp;
    }
    else if(from === "fahrenheit"){
        celsius = (temp - 32) * 5/9;
    }
    else{
        celsius = temp - 273.15;

    }
    let converted;

    // Convert Celsius to selected unit

    if(to === "celsius"){
        converted = celsius;
    }
    else if(to === "fahrenheit"){
        converted = (celsius * 9/5) + 32;
    }
    else{
        converted = celsius + 273.15;
    }
     result.innerHTML = `
    <h3>Result:</h3>
    <h2>${converted.toFixed(2)}° ${
        to === "celsius" ? "C" :
        to === "fahrenheit" ? "F" : "K"
    }</h2>
    <p>✔ Converted Successfully</p>
    `;
    }