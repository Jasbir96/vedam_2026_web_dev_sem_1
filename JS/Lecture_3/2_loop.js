/****
 *  1   -> arr[0]
 *  1 2 -> arr[1]
 *  1 2 3 -> arr[2]
 *  1 2 3 4 
 * ****/ 


// inputs 
let num=prompt("Enter Number");

// fill the array
let arr=[];
for(let i=1;i<=num;i++){
    let str="";
    for(let j=1;j<=i;j++){
       str= str + j+" "; 
    }
    arr.push(str);
}
// print the array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}