// Modularity of code 
// Mantainability of the code 
// Extendable 
// 1. on button w add event listener that it has been clicked 
let wInstrument = document.querySelector(".w");
let soundMap = {
    w: "./sounds/tom-1.mp3",
    a: "./sounds/tom-2.mp3",
    s: "./sounds/tom-3.mp3",
    d: "./sounds/tom-4.mp3",
    j: "./sounds/snare.mp3",
    k: "./sounds/crash.mp3",
    l: "./sounds/kick-bass.mp3"
};
function keyPress(keyPressed){
    // -> button list -> keypressed 
    let currentInstrument=document.querySelector("."+keyPressed)
    currentInstrument.classList.add("pressed");
    // how to i make sure that pressed is removed
    function removeClass() {
        currentInstrument.classList.remove("pressed");
    }
    setTimeout(removeClass, 100);
}
function  playSound(keyPressed){
    let sound = new Audio(soundMap[keyPressed]);
    sound.play();
}


wInstrument.addEventListener("click", function () {
    // alert("W was clicked");
    // animation -> pressed add and the remove
    keyPress();
    // play the sound
// 1. you have loaded the files 
   playSound();
})

document.addEventListener("keypress",function(e){
    let keyPressed=e.key;
    if(soundMap[keyPressed]!=undefined){
        console.log("music to play", soundMap[keyPressed] , "keypressed",keyPressed);
        keyPress(keyPressed);
        playSound(keyPressed);
    }else{
        console.log("Extra key",keyPressed)
    }

})

