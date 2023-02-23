const bodyEl = document.querySelector("body");
const image = document.querySelector("#image")
let num = 0;
bodyEl.addEventListener("mousemove" , (event)=>{
    num+=1;
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
     spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    console.log(spanEl)
    setTimeout(()=>{
        spanEl.remove();
    }, 3000)

    
    happySad();
    
   

})

bodyEl.addEventListener("touchmove" , (event)=>{
    num+=1;
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
     spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    console.log(spanEl)
    setTimeout(()=>{
        spanEl.remove();
    }, 3000)

    
    happySad();
    
   

})


setInterval(sadder ,2000);
setInterval(happySad , 2000)
function sadder(){
    num-=30;
    
}



function happySad(){
    if(num < 50){
        image.src = "image/sad.jpg"
    }
    if(num > 50){
        image.src = "image/normal.jpg"
    }
    if(num > 100){
        image.src = "image/exite.jpg";
    }
    if(num > 150){
        image.src = "image/smile.jpg"
        
    }
}