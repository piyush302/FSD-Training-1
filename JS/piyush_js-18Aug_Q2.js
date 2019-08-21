// 2. Write a JavaScript program to converts a specified number to an array of digits. 

function array(n){
    var ar=[];
    while(n>1)
    {
        var a=parseInt(n)%10;
        n=parseInt(n)/10;
        console.log("a = "+a);
        ar.push(a);   
    }
    ar.reverse();
    console.log(ar);
}
array(123);
