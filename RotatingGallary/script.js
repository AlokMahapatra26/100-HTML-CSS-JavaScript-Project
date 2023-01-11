const imgContainer = document.querySelector(".image-container");
const prev_btn = document.querySelector("#prev")
const next_btn = document.querySelector("#next")

let x = 0;
prev_btn.addEventListener('click' , ()=>{
    x +=45;
    updateGallary();

})

next_btn.addEventListener('click' , ()=>{
    x -=45;
    updateGallary();

})


function updateGallary(){
  imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

