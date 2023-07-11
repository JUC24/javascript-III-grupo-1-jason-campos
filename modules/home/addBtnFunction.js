import {appState}  from "../../config/singleton.js";

function toggleInterested(event) {
  let interestedBtn = document.querySelector('.interestedBtn')
  let goingBtn = document.querySelector('.goingBtn')
  let eventCard = document.querySelector('.divCart')

  interestedBtn.style.display = 'none';
  goingBtn.style.width = '80%';

  const removeDiv = document.createElement('div');
  removeDiv.classList.add('removedDiv');

  const message = document.createElement('p');
  message.textContent = 'Event added to interested';

  const removedBtn = document.createElement('button');
  removedBtn.textContent = 'Remover';
  removedBtn.addEventListener('click', () => {
    appState.removeFromInterested(event)
    interestedBtn.style.display = 'block';
    goingBtn.style.width = null;
    goingBtn.classList.add('originalPosition')
    removeDiv.remove();
  });

  removeDiv.appendChild(message);
  removeDiv.appendChild(removedBtn);
  eventCard.appendChild(removeDiv);

  appState.saveState();
}

function toggleGoing(event) {
  let interestedBtn = document.querySelector('.interestedBtn')
  let goingBtn = document.querySelector('.goingBtn')
  let eventCard = document.querySelector('.divCart')

  goingBtn.style.display = 'none';
  interestedBtn.style.width = '80%';

  const removeDiv = document.createElement('div');
  removeDiv.classList.add('removedDiv');

  const message = document.createElement('p');
  message.textContent = 'Event added to Going !';

  const removedBtn = document.createElement('button');
  removedBtn.textContent = 'Remover';
  removedBtn.addEventListener('click', () => {
    appState.removeFromGoing(event)
    goingBtn.style.display = 'block';
    interestedBtn.style.width = null;
    interestedBtn.classList.add('originalPositionGoinBtn')
    removeDiv.remove();
  });

  removeDiv.appendChild(message);
  removeDiv.appendChild(removedBtn);
  eventCard.appendChild(removeDiv);

  appState.saveState();
}

export {toggleInterested, toggleGoing}