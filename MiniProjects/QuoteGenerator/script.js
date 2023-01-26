const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

btn.addEventListener("click" , getQuote)


async function getQuote(){

    try{
        btn.innerText = "Loading";
        btn.disabled = true;
        quote.innerText = "Updating"
        author.innerText = "Updating"

        const apiURL = "https://api.quotable.io/random";
        const response = await fetch(apiURL);
        const data  =  await response.json();
        quote.innerText = data.content;
        author.innerText = data.author;

        btn.innerText = "get Quote";
        btn.disabled = false;
    }
    catch(error){
        quote.innerText = "Offline :( ";
        author.innerText = "..."
        btn.disabled = true;
    }
   
}


getQuote();