import {formatDate, formatLocation, formatPrice} from "./format.js"
import {appState}  from "../../config/singleton.js";
import { toggleInterested, toggleGoing} from "./addBtnFunction.js";

function createTemplateCard(event) {
  const eventCard = document.createElement('div');
  eventCard.className = 'cart';
  eventCard.classList.add('divCart')

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

  const interestedBtn = document.createElement('button')
  interestedBtn.classList.add('styleBtn')
  interestedBtn.classList.add('interestedBtn')
  interestedBtn.textContent = 'Interested';
  interestedBtn.addEventListener('click', () => {
    appState.addToInterested(event);
    toggleInterested(event);
  });
  eventCard.appendChild(interestedBtn)


  const goingBtn = document.createElement('button')
  goingBtn.classList.add('styleBtn')
  goingBtn.classList.add('goingBtn')
  goingBtn.textContent = 'Going!';
  goingBtn.addEventListener('click', () => {
    appState.addToGoing(event);
    toggleGoing(event);
  });
  eventCard.appendChild(goingBtn)

  const svg = document.createElement('img');
  svg.classList.add('cart__img__likeBtn');
  svg.src = '/svg/heart.svg';

  const likeBtn = document.createElement('button')
  likeBtn.classList.add('likeBtn')
  likeBtn.appendChild(svg)
  likeBtn.addEventListener('click', () => {
    appState.saveIconState(event, svg)
  });
  eventCard.appendChild(likeBtn)

  return eventCard;
}

function renderEvents(events) {
  const eventTemplate = document.getElementById('eventContainer');
  eventTemplate.innerHTML = '';

  events.forEach(event => {
    const eventCard = createTemplateCard(event);
    eventTemplate.appendChild(eventCard);
  });
}

export {renderEvents, createTemplateCard};
