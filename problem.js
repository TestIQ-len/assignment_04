const email = "zihad.ph@gmail.com" ;
function sendNotification(email) {
    if (email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')) {
        return "Invalid Email";
    }
    else{

        var str = email.split("@") ;
        var username  = str[0] ;
        var domain_name = str[1] ;
        return `${username} sent you an email from ${domain_name}`;
    }

}
const pass = sendNotification(email) ;
console.log(pass) ;
