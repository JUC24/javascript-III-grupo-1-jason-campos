import { getRandomRequest } from "./randomRequest.js";

getRandomRequest();

function renderJoke(joke) {
  document.getElementById('joke').innerHTML = joke;
}

function getJoke() {
  document.getElementById('btn').addEventListener('click', async () => {
    const joke = await getRandomRequest();
    renderJoke(joke);
  });
}

export{getRandomRequest,renderJoke, getJoke}