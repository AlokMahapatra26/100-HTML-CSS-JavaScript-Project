const btn = document.querySelector("#btn");
const box = document.querySelector("#password");
const copy = document.querySelector("#copyIcon");
const alert_container = document.querySelector(".alert_container");


btn.addEventListener('click' , ()=>{
    generatePassword();
})

copy.addEventListener("click" , ()=>{
    copyPassword()
})


function generatePassword(){
    const chars = "1234567890abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&()";
    
    var password = "";
    
    for(let i = 0 ; i < 8; i++){
        let random = Math.floor(Math.random()*70);
        password = password + chars[random];
    }

     box.value = password;
}


function copyPassword(){
    box.select()
    // box.setSelectRange(0,999);
    navigator.clipboard.writeText(box.value);
    alert_container.innerText = password.value + " " + "copied";
    alert_container.classList.remove("active");

    setTimeout(()=>{
        alert_container.classList.add("active")
    } ,2000)
}
