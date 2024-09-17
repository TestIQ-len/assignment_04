const a = "[6,2]" ;
const b  = 4;
function  waitingTime(waitingTimes , serialNumber) {
   let sum = 0 ;
   if (Array.isArray(waitingTimes) || waitingTimes.every(item => typeof item === 'number') || typeof serialNumber === 'number' || serialNumber <= waitingTimes.length) {
    for(const num of waitingTimes ){
        sum = sum + num ;
    
       }
       console.log(sum) ;
       const count = waitingTimes.length ;
       console.log(count) ;
       const avg = Math.round(sum/count) ;
       console.log(avg) ;
       const people = Math.abs(count - serialNumber) ;
       console.log(people) ;
       const position = people - 1 ;
       const hertime = avg * position ;
       return hertime ;
   }
   else if(!Array.isArray(waitingTimes) || !waitingTimes.every(item => typeof item === 'number') || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
    return "Invalid Input" ;
   }
  
}
const time = waitingTime(a , b) ;
console.log(time) ;
