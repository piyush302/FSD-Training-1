// 9. Write a JavaScript function to merge two arrays and removes all duplicates elements.
function merge(str1,str2){
    arr1=[1,2,3,4,5,6,7];
    arr2=[4,5,6,7,8,9];
    var j=0;
    var k=0;
    var i=0;
    var mySet=new Set();
    for(i=0;i<(arr1.length+arr2.length);i++)
    {
        if(i<arr1.length){
            mySet.add(arr1[j]);
            j++;
        }
        else if(arr1.length<i<arr2.length){
            mySet.add(arr2[k]);
            k++;
        }
    }
    console.log(mySet);
}
merge();