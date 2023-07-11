const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function getMonthName(month) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[month];
}

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function showPreviousMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
}

function showNextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar();
}

function updateCalendar() {
  const calendarContainer = document.getElementById('daysContainer')
  calendarContainer.innerHTML = '';

  monthYearTitle.textContent = getMonthName(currentMonth) + ' ' + currentYear;

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    calendarContainer.appendChild(dayElement);
  }
}

export {currentMonth,currentYear,getMonthName, getDaysInMonth,showNextMonth,showPreviousMonth}