//Mate.floor / Mate.ceil / Mate.random
const quotes = [
    {
        title : "Now or never🙏",
        quote : "Sometimes there is no next time, no timeouts and no second chances. Sometimes its now or never."
    },
    {
        title : "Right choice",
        quote : "Choose what chooses you. Choose those who choose you."
    },
    {
        title : "Everthing will work out🤗",
        quote : "Life is like a puzzle. The pieces oh the puzzle are the possibilities that cone along hte way. Fold your puzzle so that the picture turns out to ne correct."
    },
    {
        title : "Perfect time⏰",
        quote : "If you want to accomplish something,, do it now. the perfect time will never come because the perfect time is today and now."
    },
    {
        title : "Choice.",
        quote : "Society is a fact. The environment is a choice. Coose comfort and aonfidence. And also a great choice."
    },
    {
        title : "Path🏞",
        quote : "If you want to find a new path, then get off the old road right now."
    },
    {
        title : "Actions",  
        quote : "To get what you don't have, you need to do what you haven't done before."
    },
    {
        title : "Choice✅",
        quote : "Your past is an experience. Your present is a process. Your future is a choice. Make the right choices to make your ecperience process rewarding."
    },
    {
        title : "Movement is life👉",
        quote : "it doesn't matter in what area of our life. There must always be movement. In a career, in health, in love and prosperity."
    },
    {
        title : "Get started⚡",
        quote : "Don't be afraid to start over. In this case, you do not start everything from scratch, you start from experience."
    }
];
const title = document.querySelector("#quote p:first-child");
const quote = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

title.innerText = todaysQuote.title;
quote.innerText = `"${todaysQuote.quote}"`;