import {formatDate, formatLocation, formatPrice} from "../home/format.js";
import {appState} from "../../config/singleton.js";

function createTemplateCard(event) {
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

  const message = document.createElement('p');
  message.classList.add('message');
  message.textContent = 'Not going Anymore ?';
  eventCard.appendChild(message);

  const remove = document.createElement('button')
  remove.classList.add('removeBtn')
  remove.textContent = 'remove';
  remove.addEventListener('click', () => {
    appState.removeEvent(event);
    eventCard.remove();
  });
  eventCard.appendChild(remove)

  return eventCard;
}

function renderSaveEvents(category) {
  const eventTemplate = document.getElementById('saveEventsContainer');
  eventTemplate.innerHTML = '';

  function getSavedEvents(category) {
    return appState.getState(category);
  }

  const events = getSavedEvents(category)

  if (events.length === 0 ) {
    const message = document.createElement('p');
    message.textContent = 'There are no events in this list.';
    eventTemplate.appendChild(message);
  } else {
    events.forEach(event => {
      const eventCard = createTemplateCard(event);
      eventTemplate.appendChild(eventCard);
    });
  }
}

export {renderSaveEvents};