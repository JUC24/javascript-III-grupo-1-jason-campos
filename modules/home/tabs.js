import {cacheProxy} from "../../config/cache.js";
import {renderEvents} from "./renderEvents.js";
import { tabCategories } from "../../config/categories.js";

function tabs() {
  const tabsContainer = document.getElementById('tabsCategory');
  
  tabCategories.forEach(category => {
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.dataset.category = category.category;
    tab.textContent = category.name;
    
    tab.addEventListener('click', async () => {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active'));
      
      const events = await cacheProxy[category.category];
      renderEvents(events);
      
      tab.classList.add('active');
    });
    
    tabsContainer.appendChild(tab);
  });;

  tabsContainer.children[0].click();
}

export {tabs};