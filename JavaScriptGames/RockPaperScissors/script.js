//getting our DOM element
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const reset = document.querySelector(".reset");

const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".user-choice");
const winningBox = document.querySelector(".winning-box");
const computerScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".user-score");



//Score variables
let computer_Score = 0;
let user_Score = 0;

computerScore.innerText = computer_Score ;
userScore.innerText = user_Score ;



//this variable stores the users data (rock , paper , scissor)
let user = "none"




//Event Listener for our four buttons
rock.addEventListener("click" , ()=>{
    user = "rock";
    computer() 
    
    
    
    
    
})

paper.addEventListener("click" , ()=>{
    user = "paper";
    computer() 
    
})

scissor.addEventListener("click" , ()=>{
    user = "scissor";
    computer() 
    
})


reset.addEventListener("click" , ()=>{
    location.reload()
})


//array of rock paper scissor for computer 
const arr = ["rock" , "paper" , "scissor"];


//Main Function of our Game
function computer(){
    let random = Math.floor(Math.random()*3)
    let cChoice = arr[random];
    computerChoice.innerText = cChoice;
    userChoice.innerText = user;
   
    setTimeout(innerFunc , 200)

    function innerFunc(){

        if(user == "rock"){
            if(cChoice == "rock"){
                winningBox.innerText = "DRAW";
                winningBox.style.backgroundColor = "yellow";
                winningBox.style.color = "black";
                
               
            }
            else if(cChoice == "paper"){
                winningBox.innerText = "Computer Win";
                // winningBox.style.backgroundColor = "red";
                winningBox.style.backgroundColor = "red";
                winningBox.style.color = "white";
                computer_Score++;
                computerScore.innerText = computer_Score;
                
                
                
            }
            else if(cChoice == "scissor"){
                winningBox.innerText = "User Win";
                winningBox.style.backgroundColor = "green";
                winningBox.style.color = "white";
                user_Score++;
                userScore.innerText = user_Score;
            }
        } 
        
        if(user == "paper"){
            if(cChoice == "rock"){
                winningBox.innerText = "User win";
                winningBox.style.backgroundColor = "green";
                winningBox.style.color = "white";
                user_Score++;
                userScore.innerText = user_Score;
            }
            else if(cChoice == "paper"){
                winningBox.innerText = "Draw";
                winningBox.style.backgroundColor = "yellow";
                winningBox.style.color = "black";
                
            }
            else if(cChoice == "scissor"){
                winningBox.innerText = "Computer Win";
                winningBox.style.backgroundColor = "red";
                winningBox.style.color = "white";
                computer_Score++;
                computerScore.innerText = computer_Score;
            }
        }
        
        
        if(user == "scissor"){
            if(cChoice == "rock"){
                winningBox.innerText = "Computer win";
                winningBox.style.backgroundColor = "red";
                winningBox.style.color = "white";
                computer_Score++;
                computerScore.innerText = computer_Score;
            }
            else if(cChoice == "paper"){
                winningBox.innerText = "User win";
                winningBox.style.backgroundColor = "green";
                winningBox.style.color = "white";
                user_Score++;
                userScore.innerText = user_Score;
            }
            else if(cChoice == "scissor"){
                winningBox.innerText = "DRAW";
                winningBox.style.backgroundColor = "yellow";
                winningBox.style.color = "black";
               
            }
    
        }


        if(computer_Score == 10){
            alert("computer win")
        }
        if(user_Score == 10){
            alert(" user win")
        }

        

    }
    

   
    
}


