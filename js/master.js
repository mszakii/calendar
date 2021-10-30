// date 
const date = new Date().toString();
const day = date.slice(8,10);
const month = date.slice(4,7);
// elements
document.querySelector(".day").innerHTML = day;
document.querySelector(".month").innerHTML = month;
// quotes
let quotesList = {
  quotes: [
    // one
    {quote:"Brave is going were no man has gone before."},
    {quote:"Life isn’t about getting and having, it’s about giving and being."},
    {quote:"You miss 100% of the shots you don’t take."},
    {quote:"What we are know is drop. and we are not know is ocean."},
    {quote:"We become what we think about."},
    {quote:"Eighty percent of success is showing up."},
    {quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."},
    {quote:"Either you run the day, or the day runs you."},
    {quote:"The best revenge is massive success."},
    {quote:"Everything you’ve ever wanted is on the other side of fear."},
    // one
    {quote:"Brave is going were no man has gone before."},
    {quote:"Life isn’t about getting and having, it’s about giving and being."},
    {quote:"You miss 100% of the shots you don’t take."},
    {quote:"What we are know is drop. and we are not know is ocean."},
    {quote:"We become what we think about."},
    {quote:"Eighty percent of success is showing up."},
    {quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."},
    {quote:"Either you run the day, or the day runs you."},
    {quote:"The best revenge is massive success."},
    {quote:"Everything you’ve ever wanted is on the other side of fear."},
    // one
    {quote:"Brave is going were no man has gone before."},
    {quote:"Life isn’t about getting and having, it’s about giving and being."},
    {quote:"You miss 100% of the shots you don’t take."},
    {quote:"What we are know is drop. and we are not know is ocean."},
    {quote:"We become what we think about."},
    {quote:"Eighty percent of success is showing up."},
    {quote:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."},
    {quote:"Either you run the day, or the day runs you."},
    {quote:"The best revenge is massive success."},
    {quote:"Everything you’ve ever wanted is on the other side of fear."},
    // if 31
    {quote:"Start where you are. Use what you have.  Do what you can."},
  ],
};

document.querySelector('.quote').innerHTML = quotesList.quotes[+day - 1].quote;