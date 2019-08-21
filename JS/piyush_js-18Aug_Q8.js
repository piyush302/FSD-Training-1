// 8. Write a JavaScript function that finds the not repeating character in a passed in string.
function norepeat(str1){
var mySet = new Set();
for(i=0;i<str1.length;i++){
    mySet.add(str1[i]);
}
console.log(mySet);
        }


norepeat("ram is aboy");