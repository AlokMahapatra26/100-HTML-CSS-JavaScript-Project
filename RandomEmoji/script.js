 
 //element Variables
 const btn = document.getElementById('btn');
 const emojiName = document.getElementById('emoji-name');


const emojis = [];

 //function of getting emoji
 async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=71106a2e88008256d6f5ce5e7468e2688ee19c87')

    data = await response.json();
    for(let i = 0; i < 1792; i++){
        emojis.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        });
    }
    
 }

 getEmoji();

 btn.addEventListener('click',()=>{
   
    const random = Math.floor(Math.random()*1792);
    btn.innerText = emojis[random].emojiName;
    emojiName.innerText = emojis[random].emojiCode;
    
 })
 