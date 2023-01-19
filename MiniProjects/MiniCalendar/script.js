const months = document.querySelector("#months");
const day = document.querySelector('#day');
const date = document.querySelector("#date");
const year = document.querySelector('#year');
console.log(months , day , date , year);

const getTime = new Date();

const mon = ['JAN', 'FEB' , 'MAR' , 'APR' , 'MAY' , 'JUNE' , 'JULY' , 'AUGUST' , 'SEPTEMBER' , 'OCTOBER' , 'NOVEMBER' , 'DECEMBER'];

const days = ['Sun' ,'Mon','Tue','Wed','Thu','Fri','Sat'];

months.innerText = mon[getTime.getMonth()];
day.innerText = days[getTime.getDay()];
date.innerText = getTime.getDate();
year.innerText = getTime.getFullYear();