/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The array below contains 5 objects that store the following properties: a quote, the source of the quoute, and the citation.
***/
const quotes = [
  { 
    quote:'If you are going to be sad, you might as well be sad in Paris.',
    source: 'Blair Waldorf',
    citation: 'Gossip Girl',
    year: '2007'
  },
  {
     quote: 'The night is darkest right before the dawn. And I promise you, the dawn is coming.', 
    source: 'Harvey Dent',
    citation: 'The Dark Knight',
    //year:
  },
  {
     quote: 'You always fear what you do not understand.',
    source: 'Carmine Falcone', 
    citation: 'The Dark Knight',
   // year:
  },
  { 
    quote: 'Why do we fall, sir? So that we can learn to pick ourselves up.',
    source:'Alfred', 
    citation: 'Batman Begins',
   // year:
  },
  {
     quote: 'You either die a hero or live long enough to see yourself become the villain.',
    source: 'Harvey Dent', 
    citation: 'The Dark Knight',
   //year:
  },

];


/*** 
 *`getRandomQuote` function 
 *  The `getRandomQuote` function that returns a randomly selected object from the array above.
 * * The random variable stores a math function that generates a random number ranging from 0 and the length of the quotes array.
 * 
***/


function getRandomQuote(){
  let random = Math.floor( Math.random() * quotes.length );
  return quotes[random]; 
};

getRandomQuote();


/***
 * The `printQuote` function displays the randomly selected object and its properties onto the webpage.
 * The html variable includes the quote and source properties. 
 * There are two if statements that will run through the code and determine whether to display the citation or year properties.
***/

function printQuote (){
  let randomQuote = getRandomQuote();
  let html = ``
    html += `<p class="quote">${randomQuote.quote} </p><p class="source">${randomQuote.source}`;
     if (randomQuote.citation) {
       html += `<span class= "citation"> ${randomQuote.citation} </span>`;
      }
    
      if (randomQuote.year) {
        html += `<span class="year"> ${randomQuote.year} </span>`;
      }
        
       ` </p> `;
       document.getElementById('quote-box').innerHTML = html; 
   
}

printQuote();



/***
 * click event listener for the print quote button${${}}
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);