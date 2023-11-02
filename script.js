function celsiusChange() {
    var celsius = document.getElementById("celsius_input");
    var fahrenheit = document.getElementById("fahrenheit_input");
    var kelvin = document.getElementById("kelvin_input");
    fahrenheit.value = (celsius.value * 9/5) + 32;
    kelvin.value = celsius.value + 273.15;
}

function fahrenheitChange() {
    var celsius = document.getElementById("celsius_input");
    var fahrenheit = document.getElementById("fahrenheit_input");
    var kelvin = document.getElementById("kelvin_input");
    celsius.value = (fahrenheit.value - 32) * 5/9;;
    kelvin.value = celsius.value + 273.15;
}

function kelvinChange() {
    var celsius = document.getElementById("celsius_input");
    var fahrenheit = document.getElementById("fahrenheit_input");
    var kelvin = document.getElementById("kelvin_input");
    celsius.value = kelvin.value - 273.15;
    fahrenheit.value = celsius.value * (9/5) + 32;
}

function clearAll()
{
    var celsius = document.getElementById("celsius_input");
    var fahrenheit = document.getElementById("fahrenheit_input");
    var kelvin = document.getElementById("kelvin_input");
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value ="";
}