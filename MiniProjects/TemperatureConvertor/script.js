const celcius = document.querySelector("#c");
const fahrenheit = document.querySelector("#f");
const kelvin = document.querySelector("#k");

celcius.addEventListener("input", (e)=>{
    let celcius_temp = e.target.value;
    fahrenheit.value = celcius_temp*9/5+32;
    kelvin.value = 273 + +celcius_temp ;
})

fahrenheit.addEventListener("input", (e)=>{
    let fahrenheit_temp = e.target.value;
    celcius.value = (fahrenheit_temp - 32)/1.8;
    kelvin.value = (fahrenheit_temp -32) * 5/9 + 273.15;
    
})

kelvin.addEventListener("input", (e)=>{
    let kelvin_temp = e.target.value;
    celcius.value = kelvin_temp - 273.15;
    fahrenheit.value = (kelvin_temp - 273.15) * 9/5 + 32

    
})

