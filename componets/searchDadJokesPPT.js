function searchJokes(){
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
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
        headers: {
          Accept: 'application/json'
        }
      });
  
      const data = await response.json();
  
      jokesList.innerHTML = '';
  
      if (data.results.length) {
        data.results.forEach((joke) => {
          const p = document.createElement('p');
          p.setAttribute("class", "textContainer")
          p.textContent = joke.joke;
          jokesList.appendChild(p);
        });
      } else {
        const p = document.createElement('p');
        p.setAttribute("class", "textContainer")
        p.textContent = 'No jokes found';
        jokesList.appendChild(p);
      }
    } catch (error) {
      console.error(error);
    }
  });
}

searchJokes()

export{searchJokes}