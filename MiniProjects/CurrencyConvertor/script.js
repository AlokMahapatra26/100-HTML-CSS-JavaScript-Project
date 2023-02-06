const currencyFirst = document.querySelector("#cf");
const currencySecond = document.querySelector("#cs")
const valueFirst = document.querySelector("#value-first");
const valueSecond = document.querySelector("#value-second");
const exchangeRate = document.querySelector("#exchange-rate");

updateRate();

function updateRate(){
   fetch(`https://v6.exchangerate-api.com/v6/96dd3130a1435b9411b94b60/latest/${currencyFirst.value}`).then((res)=>res.json()).then((data)=>{
    const rate = data.conversion_rates[currencySecond.value]
    exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate + " " + currencySecond.value}`;
    valueSecond.value = (valueFirst.value * rate).toFixed(2);
})
}

currencyFirst.addEventListener("change" , updateRate);
currencySecond.addEventListener("change" , updateRate);
valueFirst.addEventListener("input",updateRate);
