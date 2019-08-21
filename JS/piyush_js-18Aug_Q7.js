// 7. Write a JavaScript function to count the occurrence of a substring in a string.
function countnumber(str1,str2){
    arr1=str1.split(" ");
    var no=0;
    for(i=0;i<arr1.length;i++){
        if(arr1[i]==str2){
           no++;
        }
    }
    console.log(no);
}
countnumber("ram ram is ram a ram boy ram","ram");