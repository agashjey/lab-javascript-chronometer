class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
    this.currentMS = 0;
    this.intervalIdMS =null;

  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if(callback){
        callback();
      }
      this.currentTime ++;
    }, 1000);    

}

  getMinutes() {
   let minute = Math.floor(this.currentTime/60);
   return minute; 
  }

  getSeconds() {
    let second = this.currentTime % 60;
    return second;
  }


  computeTwoDigitNumber(value) {
    if(value<10){
      return `0${value}`;
    }else{
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  reset() {
    this.currentTime=0;
    this.intervalId=null;
  }

  split() {
    const mm = this.computeTwoDigitNumber(this.getMinutes());
    const ss = this.computeTwoDigitNumber(this.getSeconds());
    const timeStamp =  `${mm}:${ss}`;
    return timeStamp;
  }
}

const chrono = new Chronometer();
chrono.split()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
