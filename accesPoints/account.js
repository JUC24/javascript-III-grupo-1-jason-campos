import {appState}  from "../../config/singleton.js";
import { accountabs } from "../modules/account/accountTabs.js";

appState.loadState();

accountabs();

const backBtn = document.getElementById('accountBtn');
backBtn.classList.add('homeBtn')

backBtn.addEventListener('click', () => {
  appState.saveState();
  appState.loadState();
  window.location.href = 'index.html';
});