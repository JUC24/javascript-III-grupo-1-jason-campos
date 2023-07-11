function hideCalendar() {
  const calendarContainer = document.getElementById('calendar');
  calendarContainer.innerHTML = '';
}

function hideNoEventsMessage() {
  const message = document.querySelector('#saveEventsContainer p');
  if (message) {
    message.remove();
  }
}

function hideEventCard() {
  const cart= document.querySelector('.cart');
  if (cart) {
    cart.remove();
  }
}

export {hideCalendar, hideEventCard, hideNoEventsMessage}