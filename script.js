// const quotes = [
//     "Push yourself, because no one else is going to do it for you",
//     "Dream it. Wish it. Do it.",
//     "Success doesn't just find you. You have to go out and get it.",
//     "Great things never come from comfort zones.",
//     "Don't stop when you're tired. Stop when you're done.",
//     "It always seems impossible until it's done."
// ];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

function getRandomColor() {
    const colors = ["#f6d6ad", "#c9e4de", "#d0a3bf", "#cce3de", "#f4bfbf"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Fetch quote
async function getQuote() {
    try {
        quoteElement.textContent = "Loading quote...";

        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();

        const quoteText = data.quote;
        const author = data.author;

        // Display the quote 
        quoteElement.textContent = `"${quoteText}" - ${author}`;
        document.body.style.backgroundColor = getRandomColor(); 
    } catch (error) {
        quoteElement.textContent = "Oops! Could not fetch a quote. Try again.";
        console.error(error);
    }
}

button.addEventListener("click", getQuote);


// Run when the page loads
getQuote();