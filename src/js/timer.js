class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timer = document.getElementById(selector);
    this.days = this.timer.querySelector('span[data-value="days"]');
    this.hours = this.timer.querySelector('span[data-value="hours"]');
    this.mins = this.timer.querySelector('span[data-value="mins"]');
    this.secs = this.timer.querySelector('span[data-value="secs"]');
  }


  start() {
    this.timerIntervalUpdate();
    setInterval(() => {
      this.timerIntervalUpdate();
    }, 500);
  }


  timerIntervalUpdate() {
    let time = this.targetDate - Date.now();
    const { days, hours, mins, secs } = this.getTimeEl(time);

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }


  getTimeEl(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}


const valentineCountdown = new CountdownTimer({
  selector: 'timer-1',
  targetDate: new Date('Feb 14, 2021'),
});
valentineCountdown.start();
