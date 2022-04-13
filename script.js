let apiQuotes=[];

function changeQuote(quoteText){
    document.getElementById("quote").innerHTML=quoteText;
}

function changeAuthor(authorName){
    document.getElementById("author").innerHTML=authorName;
}

//aget Quotes from API
const getQuotes=async ()=>{
    const apiUrl="https://type.fit/api/quotes"; 
    const response= await fetch(apiUrl);

    const apiQuotes=await response.json();
    let randomNumber=Math.floor(Math.random()*apiQuotes.length);
    changeQuote(apiQuotes[randomNumber].text);
    changeAuthor(apiQuotes[randomNumber].author);
}


document.getElementById("new-quote").addEventListener("click",getQuotes);


// //On load
// getQuotes()
// .then(data=>{
//     // data.forEach((data)=>console.log(data.text));
//     console.log(data[0].text);
// });
