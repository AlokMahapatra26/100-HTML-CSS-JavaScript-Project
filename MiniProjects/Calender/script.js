const month = document.getElementById("current_month");
const fullDate = document.getElementById("full_date");
const daysEl = document.getElementById('days');

const lastDay = new Date(new Date().getFullYear() , new Date().getMonth() + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear() , new Date().getMonth(), 1).getDay();
//months array
const month_array = ["january" , "february" , "March" , "April" , " May" , "June" , "July" , "August" , "September" , "October" , "Noverber" , "December"];

//getting date
const date = new Date();


month.innerText = month_array[date.getMonth()];
fullDate.innerText = date.toDateString();


let day = "";

for(let i = firstDay; i> 0; i--){
    day+= `<div class="empty"></div>`;
}

for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate()){
        day+= `<div class="today">${i}</div>`;
    }else{
        day+= `<div>${i}</div>`;
    }
    
}

daysEl.innerHTML =  day;

console.log(firstDay)