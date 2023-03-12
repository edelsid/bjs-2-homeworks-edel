class AlarmClock {
   constructor () {
      this.alarmCollection = [];
      this.intervalId = null;
   }

   addClock(time, callback){
      if (time === null || callback === undefined) {
         throw new Error ("Отсутствуют обязательные аргументы");
      }
      let times = this.alarmCollection.map(el => el.time);
      if (times.includes(time) === true) {
         console.warn ("Уже присутствует звонок на это же время");
      }
      this.alarmCollection.push({callback, time: time, canCall: true});
   }

   removeClock(time){
      this.alarmCollection = this.alarmCollection.filter(el => el.time !== time);
   }

   getCurrentFormattedTime(){
      let currentDate = new Date();
      let currentMinute = currentDate.getMinutes();
      if (currentMinute < 10) {
         currentMinute = String("0" + currentMinute);
      }
      return String(currentDate.getHours() + ":" + currentMinute);
   }

   start(){
      if (this.intervalId === null || this.intervalId === undefined) {
         this.intervalId = setInterval(() => {
            this.alarmCollection.forEach (el => {
               if (el.time === this.getCurrentFormattedTime() && el.canCall === true) {
                  el.canCall = false;
                  el.callback();
               }
            }), 1000})
      } 
   }

   stop(){
      this.intervalId = null;
      clearInterval(this.intervalId);
   }

   resetAllCalls(){
      this.alarmCollection.forEach(el => el.canCall = true);
   }

   clearAlarms(){
      this.stop();
      this.alarmCollection = [];
   }

}


