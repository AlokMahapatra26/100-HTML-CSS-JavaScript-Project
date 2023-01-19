const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minuts = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const EndTime = new Date("Jan 1 , 2024 00:00:00").getTime();






function updateTime(){
    const currentTime = new Date().getTime();
    const gap = EndTime - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day ) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    days.innerText = d;
    hours.innerText = h;
    minuts.innerText = m;
    seconds.innerText = s;

}

setInterval(updateTime , 1000)