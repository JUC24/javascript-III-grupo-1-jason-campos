import { getRandomRequest } from "./randomRequest.js";

getRandomRequest();


function renderJoke(joke) {
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = joke;
  jokeElement.addEventListener('click', function() {
    window.location.href = 'jCommerce.html?joke=' + encodeURIComponent(joke);
  });
}


function getJoke() {
  document.getElementById('btn').addEventListener('click', async () => {
    const joke = await getRandomRequest();
    renderJoke(joke);
  });
}

export{getRandomRequest,renderJoke, getJoke}