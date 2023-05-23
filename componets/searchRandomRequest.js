async function searchRandomJokes(searchTerm) {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, config);
  const data = await response.json();
  return data.results;
}

export {searchRandomJokes}