//Mate.floor / Mate.ceil / Mate.random
const quotes = [
    {
        quote : "1st quote",
        author : "oa"
    },
    {
        quote : "2nd quote",
        author : "oa"
    },
    {
        quote : "3rd quote",
        author : "oa"
    },
    {
        quote : "4th quote",
        author : "oa"
    },
    {
        quote : "5th quote",
        author : "oa"
    },
    {
        quote : "6th quote",
        author : "oa"
    },
    {
        quote : "7th quote",
        author : "oa"   
    },
    {
        quote : "8th quote",
        author : "oa"
    },
    {
        quote : "9th quote",
        author : "oa"
    },
    {
        quote : "10th quote",
        author : "oa"
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;