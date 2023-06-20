import {appState}  from "../../config/singleton.js";
import {tabs} from "../modules/home/tabs.js";

appState.loadState();

tabs();

const homeBtn = document.getElementById('homeBtn');
homeBtn.classList.add('homeBtn')

homeBtn.addEventListener('click', () => {
  appState.saveState();
  appState.loadState();
  window.location.href = 'account.html';
});

