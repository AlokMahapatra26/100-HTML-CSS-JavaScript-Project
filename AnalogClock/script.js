const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondsEl = document.querySelector('.second');




function getTime(){

    
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    const hour_degree = (hour  / 12 )*360;
    const minute_degree = (minute / 60)*360;
    const second_degree = (seconds /60)*360;

    hourEl.style.transform = `rotate(${hour_degree}deg)`;
    minuteEl.style.transform = `rotate(${minute_degree}deg)`;
    secondsEl.style.transform = `rotate(${second_degree}deg)`;


    

    console.log(hour , minute , seconds)
    
}



setInterval(getTime,1000)