// https://talaikis.com/api/quotes/random/

let UIquote = document.querySelector('blockquote');
let UIauthor = document.querySelector('cite');

function getRandomQuote() {
    fetch('https://talaikis.com/api/quotes/random/').then(res => res.json())
    .then(quote => {
        UIquote.textContent = quote.quote;
        UIauthor.textContent = quote.author;
    })
    .catch(err => console.log(err));
}

getRandomQuote();

/** The Async/Await way */
// async function getRandomQuote() {
//     const response = await fetch('https://talaikis.com/api/quotes/random/');

//     const quote = await response.json();

//     return quote;
// }

// getRandomQuote().then(quote => {
//     UIquote.textContent = quote.quote;
//     UIauthor.textContent = quote.author;
// });