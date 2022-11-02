const quote__text = document.getElementById('quote__text');
const quote__author = document.getElementById('quote__author');
const newQuote = document.getElementById('newQuote');
const tweetMe = document.getElementById('quote__tweet');
let quoteApiText = "";
let quotesData = " ";
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let randNum = Math.floor((Math.random() * 10));
    quotesData = quoteApiText[randNum];
    // console.log(quotesData);
    quote__text.innerHTML = `${quotesData.text}`;
    (quotesData.author == null) ? (quote__author.innerHTML = "unknown") : (quote__author.innerHTML = `${quotesData.author}`);
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";  // unchangeable data
    try {
        let quoteApi = await fetch(api);
        quoteApiText = await quoteApi.json();
        getNewQuotes();
        // console.log(data.json()); if body is readable in console then use .json()
        // console.log(quoteApiText[10].text);
        // console.log(quoteApiTe xt[10].author);
    } catch (error) { }
}
tweetMe.addEventListener("click", tweetNow);
newQuote.addEventListener("click", getNewQuotes);// without parentheses in getNewQuotes to call automatic in callback func
getQuotes();