// 1. A program takes a random integer between 1 to 15, the user is then prompted to input a guess number.
// If the user input matches with guess number, the program will display a message "Right On!" 
// otherwise display a message "Unlucky :(". 
var rd=parseInt(Math.random()*15);
var no=prompt("enter any number between 1=15");
if(rd==no){
    alert("Lucky");
}
else{
    alert("Unlucky number is "+rd);

}