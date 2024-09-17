const a = 5000;
const b = 2000 ;

function calculateTax(income, expenses) {
    if(income >= 0  && expenses >= 0 && income >= expenses){
        const difference = income - expenses ;
        const tax = difference * 0.20 ;
        return tax ;
    }
    else if(income < 0 || expenses < 0 ) {
        return   "Invalid Input" ;
    }
}

const total = calculateTax(a,b) ;
console.log(total) ;
