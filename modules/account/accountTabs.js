import { tabOptions } from "../../config/categories.js";
import { renderSaveEvents} from "./renderSaveEventes.js";
import { appState } from "../../config/singleton.js";
import { renderCalendar } from "./renderCalendar.js";
import {hideCalendar,hideEventCard,hideNoEventsMessage} from "./hideFunctions.js";

function accountabs() {
  const tabsContainer = document.getElementById('tabsOption');

  tabOptions.forEach(option => {
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.dataset.category = option.category;
    tab.textContent = option.name;

    tabsContainer.appendChild(tab);

    tab.addEventListener('click', async () => {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active'));

      const category = await tab.dataset.category;

      if (category === 'calendar') {
        renderCalendar();
        hideNoEventsMessage();
        hideEventCard();
      } else {
        hideCalendar();
        renderSaveEvents(category);
      }

      tab.classList.add('active');
    });

    tabsContainer.appendChild(tab);
  });

  appState.rederdefault();
}

export {accountabs}