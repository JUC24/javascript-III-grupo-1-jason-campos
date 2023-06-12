function formatDate(dateString) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function formatLocation(location) {
  if (location && location.city && location.state && location.address) {
    return `${location.city} • ${location.state}, ${location.address}`;
  } else {
    return 'Ubicación no disponible';
  }
}

function formatPrice(price) {
  if (price === 0) {
    return 'Free';
  }
  return '$' + price.toFixed(2);
}

export {formatDate, formatLocation, formatPrice};