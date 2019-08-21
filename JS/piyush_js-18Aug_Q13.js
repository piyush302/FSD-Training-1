// 13. Write a JavaScript function to test whether the character at the provided (character) index is upper case or not
function capcheck(str,index){
    str1=str.toUpperCase();
    if(str[index]==str1[index]){
        console.log("uppercase");
    }
    else if(str[index]!=str1[index]){
        console.log("no upper case");
    }
    }
    capcheck("piYush lives in bng",2);