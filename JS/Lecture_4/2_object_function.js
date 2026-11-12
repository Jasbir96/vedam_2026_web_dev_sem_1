
let cap = {
    firstName: "Steve",
    lastName: "Rogers",
    isAvenger: false,
    address: {
        country: "US",
        state: "New York",
        city: "Manhatten",
    },
    enemies:["Hydra","Iron Man","Thanos","Ultron"],
    greet :function (){
        console.log("cap say's Hi");
    }
}
// access nested objects
console.log("city", cap.address.city);
// access nested array value
console.log("last enemy", cap.enemies
    [cap.enemies.length-2]);

cap.greet();

