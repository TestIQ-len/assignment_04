const str = 'suman' ;

function checkDigitsInName(name) {

  if(typeof(name) !== 'string'){

    return " Invalid Input " ; 
  }
      for(var i = 0 ; i<= name.length ; i++) {
           if(/\d/.test(name[i])){
             return true ;
           }
         }
           return false ;
      }



const value = checkDigitsInName(str) ;
console.log(value) ;
