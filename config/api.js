async function categoryRequest(category){
  const url = `https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`;
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(`Error fetching events for category ${category}:`, error);
  }
  localStorage.setItem(category, JSON.stringify(datosDeLaCategoria));
  
  return datosDeLaCategoria;
}

export {categoryRequest};