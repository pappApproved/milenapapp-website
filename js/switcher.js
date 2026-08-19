document.addEventListener('DOMContentLoaded', function() {
  const switchButtons = document.querySelectorAll('.cal-switch-btn');
  const calendars = document.querySelectorAll('.cal-wrapper');

  switchButtons.forEach(button => {
    button.addEventListener('click', function() {
      const calendarType = this.getAttribute('data-calendar');

      switchButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      calendars.forEach(cal => cal.classList.remove('active'));

      const targetCal = document.getElementById('cal-' + calendarType);
      if (targetCal) {
        targetCal.classList.add('active');
      }
    });
  });
});
