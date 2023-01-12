const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minuts = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const EndTime = new Date("Jan 1 , 2024 00:00:00").getTime();






function updateTime(){
    const currentTime = new Date().getTime();
    const day_gap = (EndTime - currentTime) / 60 / 60  / 24 / 365;
    const hour_gap = (EndTime - currentTime) * 60 * 60;
    const minute_gap = (EndTime - currentTime) * 60;
    const second_gap = (EndTime - currentTime);

    days.innerHTML = day_gap;

}

setInterval(updateTime , 1000)