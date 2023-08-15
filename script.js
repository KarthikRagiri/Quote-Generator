const api_url = "https://api.quotable.io/random";
const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    Quote.innerHTML = data.content;
    Author.innerHTML = data.author;
}

getQuote(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML + "---by" + Author.innerHTML, "Text Window", "width: 500px");
}