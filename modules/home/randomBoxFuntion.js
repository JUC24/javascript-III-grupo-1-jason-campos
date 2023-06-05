import { getRandomRequest } from "../home/randomRequest.js";

getRandomRequest();


async function renderJoke() {
  try {
    const joke = await getRandomRequest();
    const jokeElement = document.getElementById('jokeBox');
    const btn = document.getElementById('generateBtn');
    jokeElement.innerHTML = joke;
    btn.addEventListener('click', renderJoke);
    jokeElement.addEventListener('click', function() {
      window.location.href = 'jokeCommerce.html?joke=' + encodeURIComponent(joke);
    });
  } catch (error) {
    console.log('Error al obtener el chiste:', error);
  }
}

function setUpJokeBox(){
  renderJoke()
}

export{setUpJokeBox}