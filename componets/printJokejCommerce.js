function print() {
  const joke = decodeURIComponent(getUrlParameter('joke'));
  const container = document.getElementById('joke-container');
  
  if (container !== null) {
    container.innerHTML = joke;
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}

export {print}