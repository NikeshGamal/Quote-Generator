let apiQuotes=[];
const quoteContainer=document.getElementById("quote-container");
const quoteContent=document.getElementById("quote");
const authorContent=document.getElementById("author");
const twitterButton=document.getElementById("twitter");
const nextQuoteButton=document.getElementById("new-quote");


function changeQuote(quoteText){
    quoteContent.textContent=quoteText;
}

function changeAuthor(authorName){
   authorContent.textContent=authorName;
}

//new Quotes
function newQuote(apiQuotes){
    let quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];

         if(quote.text.length>65){
             quoteContainer.classList.add('long-quote');
             changeQuote(quote.text);
         }else{
            changeQuote(quote.text);
        }
   
        !quote.author?  changeAuthor("Unknown"):  changeAuthor(quote.author);
}

//get Quotes from API
const getQuotes=async ()=>{
     const apiUrl="https://type.fit/api/quotes"; 
    const response= await fetch(apiUrl);
    const apiQuotes=await response.json();
    newQuote(apiQuotes);
}

//Twweet Quote
function tweetQuote(){
    const tweetUrl=`https://twitter.com/intent/tweet?text=${quoteContent.textContent} - ${authorContent.textContent}`;
    window.open(tweetUrl,'_blank');
}
//IIFE
//to fill up the quote when the page loades
(getQuotes());

//Adding event listener
nextQuoteButton.addEventListener('click',getQuotes);
twitterButton.addEventListener('click',tweetQuote);