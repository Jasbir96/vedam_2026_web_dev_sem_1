/**
 * myfn 
 * function with parameters
 * function with return
 * */

// // function declaration
function myFN(){
    // resuable code
console.log("I am a reusable block of code ");
}

console.log("Before function");
// function invocation
myFN()
console.log("after function");


function fnWithPara(var1,var2){
    console.log("var1",var1, "var2",var2);
}


console.log("Before");
fnWithPara(10,20);
console.log("After");
 

function fnWithReturnValue(myNum){

    let isEven=myNum%2==0;
    return isEven;
}

console.log("Before");
let rValue=fnWithReturnValue(5);
console.log("result",rValue);
console.log("After ");