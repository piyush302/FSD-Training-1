// 3. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function rev(str){
var arr=str.split("");
arr.sort();
console.log(arr);
}
rev("piyush")