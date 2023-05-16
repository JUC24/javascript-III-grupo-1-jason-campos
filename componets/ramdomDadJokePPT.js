async function getJoke(){
  document.getElementById('btn').addEventListener('click', getJoke);
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const fetchData = await fetch('https://icanhazdadjoke.com/', config);
  const jsonData = await fetchData.json();
  document.getElementById('joke').innerHTML = jsonData.joke
}

getJoke();

export{getJoke}