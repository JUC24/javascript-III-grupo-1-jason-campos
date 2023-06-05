import { searchRandomRequest } from "../home/searchRequest.js";
searchRandomRequest ();

function renderJokes() {
  const input = document.querySelector('#search-input');
  const jokesList = document.querySelector('#jokes-list');

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search-form');
  
    if (form) {
        form.addEventListener('submit', async (event) => {
          event.preventDefault();
      
          const searchTerm = input.value;
          if (!searchTerm) {
            return;
          }
      
          try {
            const jokes = await searchRandomRequest(searchTerm);
      
            jokesList.innerHTML = '';
      
            if (jokes.length) {
              jokes.forEach((joke) => {
                const p = document.createElement('p');
                p.setAttribute('class', 'jokeBox');
                p.setAttribute('id', joke.id);
                p.textContent = joke.joke;
                p.addEventListener('click', () => {
                  window.location.href = `jokeCommerce.html?joke=${encodeURIComponent(joke.joke)}`;
                });
                jokesList.appendChild(p);
              });} else {
                const p = document.createElement('p');
                p.setAttribute('class', 'textContainer');
                p.textContent = 'No jokes found';
                jokesList.appendChild(p);
              }
          } catch (error) {
            console.error(error);
          }
        });
    }
  });
}

function setUpJokesBox(){
  renderJokes()
}

export {setUpJokesBox}