
/****
 * How do i store this data -> server -> multiple users
 * How my user look like
 * key: value pairs where value can be any valid JS type 
 * */

let user = {
    firstName: "Jasbir",
    lastName: "Singh",
    campus: "Sushant University",
    email: "abc@gmail.com",
    age: 29,
    mobile: 123456789,
    hobbies: ["Reading", "sports", "music"],
    isAdult :true
};


// JS : string, numbers, boolean, undefined, null
// array , functions , objects







// print
console.log("obj",user);
console.log("````````````````````````");
// access a key  -. . operator
console.log("firstName",user.firstName);
console.log("age",user.age);
console.log("second hobby",user.hobbies[1])
console.log("````````````````````````");


// square bracket operator
let keyName ="mobile";
console.log("mobileNumber",user[keyName])

// iteration
for(let key in user){
    console.log("key:", key ,"|| value: ",user[key])
}
// adding/update a key or value
user.gender="Male";

let yos="yearofstudy";
user[yos]=1;
console.log("user", user);

// delete
delete user.campus;










