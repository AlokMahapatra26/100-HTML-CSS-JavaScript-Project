const counterEl = document.querySelector(".counter");
const frontEl = document.querySelector(".loading-bar-front");

let variable = 0;

    
    
    
    
    
    
   

    function load(){
        if(variable <= 99){
            variable = variable + 1;
        }
        counterEl.innerText = variable + "%";
        frontEl.style.width = `${variable*3}px`;
    }

    setInterval(load , 10)