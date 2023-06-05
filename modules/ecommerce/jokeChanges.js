import Publisher from "../config/publisher.js";
import {getRandomRequest} from "../home/randomRequest.js"

const jokeContainer = document.getElementById('joke-container');
const chosedJoke = document.getElementById('chosedJoke');
const jokeBox = document.getElementById('jokeBox')
const generateBtn = document.getElementById('generateBtn');
let currentJoke = "";

const jokeChange = new Publisher();

function updateJokes(joke) {
  jokeContainer.textContent = joke;
  chosedJoke.textContent = joke;
  jokeBox.textContent = joke;
}

function generateAnotherJoke() {
  getRandomRequest().then(joke => {
    if (joke !== currentJoke) {
      jokeContainer.textContent = joke;
      chosedJoke.textContent = joke;
      jokeBox.textContent = joke;
      currentJoke = joke;
      jokeChange.publish(joke);
    } else {
      generateAnotherJoke();
    }
  });
}


function setUpjokes(){
  generateBtn.addEventListener('click', generateAnotherJoke);
  jokeChange.subscribe(updateJokes);
}

export {setUpjokes}