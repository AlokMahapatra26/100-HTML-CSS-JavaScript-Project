const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const AMPM  = document.querySelector('#ampm');




function showTime(){
    const hour_data = new Date().getHours();
    const minute_data = new Date().getMinutes();
    const second_data = new Date().getSeconds();
    const ampm = "AM";
    

    hour.innerText = hour_data;
    minute.innerText = minute_data;
    second.innerText = second_data;

    if(hour > 12){
        h = h -12;
        ampm = "PM"
    }

    AMPM.innerText = ampm;

}

setInterval(showTime , 1000)