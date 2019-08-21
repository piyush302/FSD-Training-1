// 12. Write a JavaScript program to display the current day and time in the following format:
// Today : Monday. 
// Time is : 9 : 45 : 21 AM
var d=new Date();
var date=d.getDay();
date1=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today : "+date1[date]);
var hour=d.getHours();
var hour1=hour%12;
var min=d.getMinutes();
var sec=d.getSeconds();
var ampm=(hour<=12)?"AM":"PM"; 
console.log("Time is : "+hour1+" : "+min+" : "+sec+" : "+ampm);