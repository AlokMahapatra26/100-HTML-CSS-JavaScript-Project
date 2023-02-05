//getting element in variable
const score = document.querySelector("#score");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const answer = document.querySelector("#answer");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const time = document.querySelector("#time");
const level = document.querySelector("#options");

//our variables
let random1;
let random2;
let score_num = 0;
let time_num = 120;

//running rand function to generate random question first
function rand(){
    random1 = Math.ceil(Math.random()*100);
    random2 = Math.ceil(Math.random()*100);
    num1.innerText = random1;
    num2.innerText = random2;
}
rand();





function start(){
  setInterval(timer, 1000)
}

function timer(){
    time.innerText = time_num;
    time_num--;
    if(time_num == 0){
        alert(score_num)
       location.reload();
    }
    
}

btn.addEventListener("click" , start)

answer.addEventListener("keypress" , (e)=>{
    if(e.key === "Enter"){
        game();
    }
})

function game(){
    let user_answer = answer.value;
   if((random1 + random2) == user_answer){
    score_num += 200;
    score.innerText =  score_num;
    answer.value = "";
    rand();
   }else{
    answer.value = "";
    score_num -= 300;
    score.innerText = score_num;
   }


}

