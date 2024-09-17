const object = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false } ;

function calculateFinalScore(obj) {
     const test = obj.testScore ;
     const grade = obj.schoolGrade ;
     const result = test + grade ;
     //console.log(result) ;
     if(typeof obj !== 'object'){
       return "Invalid Input" ;
     }
     if(result >= 80 || obj.isFFamily === true){
        return true ;
     }
     else{
        return false ;
     }
    
}

const output =  calculateFinalScore(object);
console.log(output) ;
