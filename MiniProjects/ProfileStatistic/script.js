const countersElement = document.querySelectorAll(".counter");

countersElement.forEach((countersElement)=>{
    countersElement.innerText = "0";
    incrementCounter();
    function incrementCounter(){
        let currentNum = +countersElement.innerText;
        let dataCeil = countersElement.getAttribute("data-ceil");
        const increment = dataCeil/15;
        currentNum = Math.floor(currentNum + increment);
        countersElement.innerText = currentNum

        if(currentNum < dataCeil){
            setTimeout(incrementCounter, 50)
        }

    }
})
