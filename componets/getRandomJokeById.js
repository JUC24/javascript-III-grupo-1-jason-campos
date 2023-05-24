async function getRandomRequestById() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com/j/<joke_id>', config);
  const data = await response.json();
  return data.joke;
}

export{getRandomRequestById}