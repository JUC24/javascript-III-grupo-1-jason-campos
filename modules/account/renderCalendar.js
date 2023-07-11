import {currentMonth,currentYear,getMonthName, getDaysInMonth,showNextMonth,showPreviousMonth} from './calendarFunctions.js';

function renderCalendar() {
  const calContainer = document.getElementById('calendar');

  const existingTitle = document.getElementById('monthYearTitle');
  const existingPrevButton = document.getElementById('prevButton');
  const existingNextButton = document.getElementById('nextButton');
  const existingCalendarContainer = document.getElementById('calendarContainer');

  if (existingTitle && existingPrevButton && existingNextButton && existingCalendarContainer) {
    return;
  }

  const monthYearTitle = document.createElement('h2');
  monthYearTitle.id = 'monthYearTitle';
  calContainer.appendChild(monthYearTitle);

  const prevButton = document.createElement('button');
  prevButton.id = 'prevButton';
  prevButton.textContent = 'Previous Month';
  prevButton.addEventListener('click', showPreviousMonth);
  calContainer.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.id = 'nextButton';
  nextButton.textContent = 'Next Month';
  nextButton.addEventListener('click', showNextMonth);
  calContainer.appendChild(nextButton);

  const calendarContainer = document.createElement('div');
  calendarContainer.id = 'daysContainer';
  calendarContainer.classList = 'daysContainer'
  calContainer.appendChild(calendarContainer);



  monthYearTitle.textContent = getMonthName(currentMonth) + ' ' + currentYear;

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    calendarContainer.appendChild(dayElement);
  }
}

export {renderCalendar};