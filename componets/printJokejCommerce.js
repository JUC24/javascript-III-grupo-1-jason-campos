function print() {
  const joke = decodeURIComponent(getUrlParameter('joke'));
  const container = document.getElementById('joke-container');
  const text = document.getElementById('chosedJoke')
  
  if (container !== null) {
    container.innerHTML = joke;
  }

  if (text !== null) {
    text.innerHTML = joke;
  }
  
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}

function printListJokes(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const joke = urlParams.get('joke');

  const jokeContainer = document.querySelector('#joke-container');
  const text = document.getElementById('chosedJoke')
  if (jokeContainer) {
    jokeContainer.textContent = joke;
  }

  if (text) {
    text.textContent = joke;
  }
}

export {print}
export {printListJokes}