import { Evaluate } from "./Evaluate.js"; //import class Evaluate in order to create objects
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let weatherIcon = document.querySelector(".icon");

//get elements from html
let myScoreButtons = document.querySelectorAll(".mySpan_button");
let myButton = document.getElementById("myButton"); // 
let getJokeFromHTML = document.getElementById("demo");

// as soon you press the button of "next joke" this function fetches a joke and 
// displays it (jokes are choosen randomly)
const generateJoke = async () => {
    let chosenJoke = "";
    const URLS = ["https://api.chucknorris.io/jokes/random",
                  "https://icanhazdadjoke.com"];
    let randomNumber = Math.floor(Math.random() * 2);              
    const jokeURL = await fetch(URLS[randomNumber], {
        headers: {
            Accept: "application/JSON"
        },
    });
    let currentJoke = await jokeURL.json();
    if(randomNumber === 0) {
        chosenJoke = currentJoke.value;
    }else {
        chosenJoke = currentJoke.joke;
    }
    document.getElementById("demo").innerHTML = chosenJoke;
}
myButton.addEventListener("click", generateJoke);


// ranking the jokes
const reportJokes = []; // an array where we store object of evaluation;

for (const btn of myScoreButtons) {
    btn.addEventListener("click", evaluate);
}

//this function creates object of the class Evaluate and stores it into the array of 
//reportJokes by calling its own method storeEvaluation()
function evaluate() {
    const joke = getJokeFromHTML.textContent;
    const scoreId = this.getAttribute("id");
    const score = Number(scoreId);
    const getDate = new Date();
    const date = getDate.toISOString();
    const evalObject = new Evaluate(joke, score, date);
    const saveData = evalObject.storeEvaluation(evalObject, reportJokes);
    console.log(reportJokes);
}


// This function fetches current weather from API and displays it
const displayWeather = async () => {
    let currentCity = "Barcelona";
    const myWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +    currentCity + 
                            "&units=metric&appid=afad0ab58733e6b8315ef0b44c488c92");
    let disWeather = await myWeather.json();
    weatherIcon.src = `http://openweathermap.org/img/wn/${disWeather.weather[0].icon}@2x.png`; 
    temp.innerHTML = disWeather.main.temp + "<span>&#8451;</span>";
    city.innerHTML = disWeather.name;
}
displayWeather();




