
// let str="hello i am a string";
// let str1='hello i am a string';
// console.log("str->",str);
// console.log("str1->",str1);

// // string concatination
// let myStr = 1 + " " + 2 + " " + 3 + true;
// console.log(myStr);

// // template literals
// let template =`It is also a string
//         it should have something
// `;
console.log("template", template);

/*******concatnating in template strings********/ 

// let varName = "Jasbir";
// let templateStr =`Hello My Name is : ${varName}`;
// console.log(templateStr);

/************methods*** */  
// let myStr="Hello";

// let trimmedStr=myStr.trim();

// // charAt
//  let outputChar=trimmedStr.charAt(2);
//  console.log("outputChar",outputChar);

// uppercase lowerCase ;
/********split and join *********/ 
// i + am + a + search + request

let query=" Find places near sushantLok";
console.log("q" ,query)
let trimmedQuery=query.trim();
console.log("q" ,trimmedQuery);
// it splits on the basis of an identifier -> array of string
 let wordsArr=trimmedQuery.split(" ");
 console.log("wordsArr",wordsArr);
//   join -> array of string 
let outcome=wordsArr.join("+");
console.log("outcome str", outcome);










