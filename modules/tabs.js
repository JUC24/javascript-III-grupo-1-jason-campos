import cacheProxy from "./cache.js";
import {renderEvents} from "./render.js";

function tabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', async () => {
      tabs.forEach(tab => tab.classList.remove('active'));

      const category = tab.dataset.category;
      const events = await cacheProxy[category];
      renderEvents(events);
      tab.classList.add('active');
    });
  });

  tabs[0].click();
}

export {tabs};

