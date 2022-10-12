class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Параметр id не передан');
    } else if (this.alarmCollection.find(call => call.id === id)) {
      return console.error('Звонок с таким id существует');
    }

    return this.alarmCollection.push({ time, callback, id });
  }

  removeClock(id) {
    let newAlarmCollection = this.alarmCollection.filter(call => call.id != id);

    if (this.alarmCollection.length == newAlarmCollection) {
      return false;
    }

    this.alarmCollection = newAlarmCollection;
    return true;
  }

  getCurrentFormattedTime() {
    return `${new Date().getHours()}:${new Date().getMinutes()}`;
  }

  start() {
    function checkClock(call) {
      if (this.getCurrentFormattedTime() === call.time) {
        call.callback();
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(call => checkClock(call));
      }, 1000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник ${clock.id} заведен на ${clock.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.length = 0;
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('00:00', () => console.log('Пора вставать'), 3);
  phoneAlarm.addClock('00:01', () => { console.log('Давай вставай уже! :('); phoneAlarm.removeClock(2) }, 2);
  phoneAlarm.addClock('00:02', () => console.log('Иди умываться'), 1);
  phoneAlarm.printAlarms();
  phoneAlarm.removeClock(1);
  phoneAlarm.removeClock(2);
  phoneAlarm.removeClock(3);
  phoneAlarm.printAlarms();
}

testCase();