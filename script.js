/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { quote:'If you are going to be sad, you might as well be sad in Paris.',
    source: 'Blair Waldorf',
    citation: 'Gossip Girl'},
  { quote: 'The night is darkest right before the dawn. And I promise you, the dawn is coming.', 
    source: 'Harvey Dent',
    citation: 'The Dark Knight'},
  { quote: 'You always fear what you do not understand.',
    source: 'Carmine Falcone', 
    citation: 'The Dark Knight'},
  { quote: 'Why do we fall, sir? SO that we can learn to pick ourselves up.',
    source:'Alfred', 
    citation: 'Batman Begins'},
  { quote: 'You either die a hero or live long enough to see yourself become the villain.',
    source: 'Harvey Dent', 
    citation: 'The Dark Knight'},

];


/***
 * `getRandomQuote` function
***/


function getRandomQuote(){
  let random = Math.floor( Math.random() * quotes.length );
  return quotes(random); 
};


/***
 * `printQuote` function
***/

function printQuote (){
  let randomQuote = getRandomQuote();
  let html = '
   <p> class="quote" > ${randomQuote.quote} </p>
    <p> class="source" > ${randomQuote.source} > 
      if (${randomQuote.citation}) {
        <span class= "citation"> ${randomQuote.citation} </span>
      }
    
      if (${randomQuote.year}) {
        <span class="year"> ${randomQuote.year} </span>}
        
    </p> '
   
}

document.getElementById('quote-box').innerHTML = html; 


/***
 * click event listener for the print quote button${${}}
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);