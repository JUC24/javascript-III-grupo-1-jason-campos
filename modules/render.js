import {formatDate, formatLocation, formatPrice} from "./format.js"

function createEventCard(event) {
  const eventCard = document.createElement('div');
  eventCard.className = 'cart';

  const imageElementContainer = document.createElement('div')
  imageElementContainer.classList.add('cart__imgContainer');

  const eventImage = document.createElement('img');
  eventImage.classList.add('cart__imgContainer__img');
  eventImage.src = event.image;
  eventImage.alt = event.title;

  imageElementContainer.appendChild(eventImage);
  eventCard.appendChild(imageElementContainer);


  const eventTitle = document.createElement('h2');
  eventTitle.classList.add('cart__eventTitle');
  eventTitle.textContent = event.title;
  eventCard.appendChild(eventTitle);

  const eventDate = document.createElement('p');
  eventDate.classList.add('cart__dateTime');
  eventDate.textContent = formatDate(event.date);
  eventCard.appendChild(eventDate);

  const eventLocation = document.createElement('p');
  eventLocation.classList.add('cart__info');
  eventLocation.textContent = formatLocation(event.location);
  eventCard.appendChild(eventLocation);

  const eventPrice = document.createElement('p');
  eventPrice.classList.add('cart__info');
  eventPrice.textContent = formatPrice(event.price);
  eventCard.appendChild(eventPrice);

  return eventCard;
}

function renderEvents(events) {
  const eventGrid = document.getElementById('eventContainer');
  eventGrid.innerHTML = '';

  events.forEach(event => {
    const eventCard = createEventCard(event);
    eventGrid.appendChild(eventCard);
  });
}

export {renderEvents};
