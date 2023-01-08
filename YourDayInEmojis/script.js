 
 const user_name = prompt("enter your name");


 //element Variables
 const btn1 = document.getElementById('btn1');
 const btn2 = document.getElementById('btn2');
 const btn3 = document.getElementById('btn3');
 const btn4 = document.getElementById('btn4');
 const btn_master = document.getElementById('btn-master');
 const userName = document.getElementById('user-greeting');


const emojis = [];

 //function of getting emoji
 async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=a899f14d02a8ba1091d989f100f1f88c734f0605')

    data = await response.json();
    for(let i = 0; i < 1792; i++){

      if(i <= 90){
        emojis.push({
          emojiName:data[i].character,
          emojiCode:data[i].unicodeName,
      
    
     })
      }

  
    
    
    }
    
 }

 getEmoji();
 userName.innerText = `Hi ${user_name} Click on below button to know your fortune of tommorow , today if its morning`;


 function showEmoji(){
   const random = Math.floor(Math.random()*90);
   btn1.innerText = emojis[random].emojiName;
 }


 function showEmoji1(){
   const random = Math.floor(Math.random()*90);
   btn2.innerText = emojis[random].emojiName;
 }


 function showEmoji2(){
   const random = Math.floor(Math.random()*90);
   btn3.innerText = emojis[random].emojiName;
 }

 function showEmoji3(){
  const random = Math.floor(Math.random()*90);
  btn4.innerText = emojis[random].emojiName;
}


 
 btn_master.addEventListener('click' , ()=>{
   
      showEmoji();
      showEmoji1();
      showEmoji2();
      showEmoji3();


   
 })

 