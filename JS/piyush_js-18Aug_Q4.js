// 4. Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.
function cap(str){
    var arr=str.split(" ");
    var arr2=[];
   // console.log(arr[0].charAt(0));
    for(var i=0;i<arr.length;i++)
    {
        arr2.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
//     console.log(arr);
    x = arr2.join(" ");
    console.log(x);
}
cap("ram is sam");