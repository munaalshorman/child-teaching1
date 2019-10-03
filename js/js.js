var name=prompt("WHAT IS YOUR NAME?")
alert("hello  "+name);
myFunction();
function myFunction() {
var age =prompt("Enter your age") ;
var result ;
if (age < 10)   {
    result = 'read from under 10 age';
}else if( age >=10 && age <= 15){
    result = 'read from above 10';
}else if (age>16) {
    result='read from reading section';  }
document .write( ' <h3>' +result + '</h3>');
console.log('hi');
var i;
var say ="hello"
for ( i=0 ; i<3 ; i++ ){
 document.write('<p>' + say + '</p>')  
}
var calculate=prompt ("5*7=");
while (calculate!= 35) {
    calculate = prompt ("Sorry incorrect awnswer");
 }
if (calculate == 35) {
alert ("this is true");
} 
confirm("Press a button!");
}
