class Clock {
    constructor() {
      this.date = new Date(0, 0, 0, 0, 0, 0);
      this.intervalId = null;
    }
  
    start() {
      this.intervalId = setInterval(() => {
        this.date.setSeconds(this.date.getSeconds() + 1);
        console.log(this.date.getSeconds())
    }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.date = new Date(0, 0, 0, 0, 0, 0);
    }
  }
  
  let clock = new Clock();
  clock.start();
  console.log(clock.date.getSeconds()); // prints 1
  setTimeout(() => {
    clock.stop();
    console.log(clock.date.getSeconds()); // prints 0
  }, 5000);