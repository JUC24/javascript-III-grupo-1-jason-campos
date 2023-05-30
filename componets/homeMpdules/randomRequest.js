async function getRandomRequest() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com/', config);
  const data = await response.json();
  return data.joke;
}


export {getRandomRequest}