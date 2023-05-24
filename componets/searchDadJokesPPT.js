import { searchRandomJokes } from "./searchRandomRequest.js";
searchRandomJokes ();

function generateJoke (){
  const form = document.querySelector('#search-form');
  const input = document.querySelector('#search-input');
  const jokesList = document.querySelector('#jokes-list');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const searchTerm = input.value;
    if (!searchTerm) {
      return;
    }
  
    try {
      const jokes = await searchRandomJokes(searchTerm);
  
      jokesList.innerHTML = '';
  
      if (jokes.length) {
        jokes.forEach((joke) => {
          const p = document.createElement('p');
          p.setAttribute('id', joke.id);
          p.setAttribute('class','textContainer');
          p.textContent = joke.joke;
          jokesList.appendChild(p);
        });
      } else {
        const p = document.createElement('p');
        p.setAttribute('class','textContainer');
        p.textContent = 'No jokes found';
        jokesList.appendChild(p);
      }
    } catch (error) {
      console.error(error);
    }
  });
}

export {searchRandomJokes, generateJoke}