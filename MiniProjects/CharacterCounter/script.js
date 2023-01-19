const text_area = document.querySelector("#txtarea");
const character_count = document.querySelector("#ch");
const remaining_count = document.querySelector("#re");

function updateCounter(){
    character_count.innerText = text_area.value.length;
    remaining_count.innerText = 4000 - text_area.value.length;
}

console.log(text_area.value.length)

text_area.addEventListener("keyup" , ()=>{
    updateCounter()
})

