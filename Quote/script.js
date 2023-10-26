//get quote from api

const quotecontainer = document.getElementById("quote-container");
const quotetext = document.getElementById("quote");
const authortext = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-button");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// show loading
function loading() {
  loader.hidden = false;
  quotecontainer.hidden = true;
}

async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    if (data.quoteAuthor === "") {
      authortext.innerText = "Unknown";
    } else {
      authortext.innerText = data.quoteAuthor;
    }
    authortext.innerText = data.quoteAuthor;
    quotetext.innerText = data.quoteText;
  } catch (error) {
    console.log("whoops, no quote", error);
  }
}

// tweet quote
function tweetQuote() {
  const quote = quotetext.innerText;
  const author = authortext.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuote();
