//Variables 
var i;
var sound;
var buttonClicked
var buttons = document.querySelectorAll("button");
// Check Which Key was pressed
function checkKey(keyPressed){

    switch(keyPressed){
        case "w":
            sound= new Audio('./wtf.mp3');
            sound.play();
            break;
        case "a":
            sound= new Audio('./goat.mp3');
            sound.play();
            break;
        case "s":
            sound= new Audio('./heaven.mp3');
            sound.play();
            break;    
        case "d":
            sound= new Audio('./easy-way.mp3');
            sound.play();
            break;
        case "j":
            sound= new Audio('./come-on.mp3');
            sound.play();
            break;
        case "k":
            sound= new Audio('./stay-focused.mp3');
            sound.play();
            break;  
        case "l":
            sound= new Audio('./wait.mp3');
            sound.play();
            break; 
        default: console.log(this.innerText);  
    }
}
// Adding eventListeners + Checking Clicks
function colorSwitch(currentButton){
    currentButton.style.color="yellow";
    setTimeout(function(){
        currentButton.style.color="#DA0463";
    },150);
}
for (i=0;i<7;i++){
    buttons[i] = buttons[i].addEventListener("click", function(){
        colorSwitch(this);
        buttonClicked = this.innerText;
        buttonAnimation(buttonClicked);
        checkKey(buttonClicked);

    });
}
//Key Pressed functinality
document.addEventListener("keydown", function (event){
    checkKey(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }),150;
}