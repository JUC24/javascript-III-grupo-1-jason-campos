import {tabOptions} from "./categories.js"
import { renderSaveEvents } from "../modules/account/renderSaveEventes.js";

let instance;
let state = {
  favorites: [],
  interested: [],
  going: []
};

class AppState {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }

  getState(category) {
    if (state.hasOwnProperty(category)) {
      return [...state[category]];
    }
    return [];
  }

  addToFavorites(event) {
    if (!state.favorites.includes(event)) {
      state.favorites.push(event);
      this.saveState();
    }
  }
  

  addToInterested(event) {
    const indexGoing = state.going.indexOf(event);
    const indexInterested = state.interested.indexOf(event);
  
    if (indexGoing !== -1) {
      state.going.splice(indexGoing, 1);
    }
  
    if (indexInterested === -1) {
      state.interested.push(event);
    }
    
    this.saveState();
  }

  addToGoing(event) {
    const indexInterested = state.interested.indexOf(event);
    const indexGoing = state.going.indexOf(event);
  
    if (indexInterested !== -1) {
      state.interested.splice(indexInterested, 1);
    }
    if (indexGoing === -1) {
      state.going.push(event);
    }
    this.saveState();
  }

  removeEvent(event){
    if (state.favorites.includes(event)) {
      appState.removeFromFavorites(event);
    } else if (state.interested.includes(event)) {
      appState.removeFromInterested(event);
    } else if (state.going.includes(event)) {
      appState.removeFromGoing(event);
    }
    this.saveState()
  }

  removeFromFavorites(event) {
    const index = state.favorites.indexOf(event);
    if (index !== -1) {
      state.favorites.splice(index, 1);
      this.saveState();
    }
  }

  removeFromInterested(event) {
    const index = state.interested.indexOf(event);
    if (index !== -1) {
      state.interested.splice(index, 1);
      this.saveState();
    }
  }

  removeFromGoing(event) {
    const index = state.going.indexOf(event);
    if (index !== -1) {
      state.going.splice(index, 1);
      this.saveState();
    }
  }

  saveIconState(event, imgElement){
    const isFavorite = state.favorites.includes(event);

    if (isFavorite) {
      imgElement.src = '/svg/heart.svg';
      appState.removeFromFavorites(event);
    } else {
      imgElement.src = '/svg/heart-blue.svg';
      appState.addToFavorites(event);
    }
    this.saveState();
  }

  rederdefault() {
    function getDefaultCategory(options) {
      const favoriteEvents = getSavedEvents('favorites');
      const interestedEvents = getSavedEvents('interested');
      const goingEvents = getSavedEvents('going');

      function getSavedEvents(category) {
        return appState.getState(category);
      }
  
      if (favoriteEvents.length > 0) {
        return 'favorites';
      } else if (interestedEvents.length > 0) {
        return 'interested';
      } else if (goingEvents.length > 0) {
        return 'going';
      } else {
        return options[0].category;
      }
    }

    const defaultCategory = getDefaultCategory(tabOptions);
    renderSaveEvents(defaultCategory);

    this.saveState();
  }

  saveState() {
    localStorage.setItem('appState', JSON.stringify(state));
  }

  loadState() {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      state = JSON.parse(savedState);
    }
  }
}
const appState = new AppState();

export {appState, state} 
