function suraj1() {
var randomNumber1 = Math.floor(Math.random() * 6);

var randomImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var output1 = randomImages[randomNumber1];
document.getElementById("img1").setAttribute("src",output1);

// for second dice
var randomNumber2 = Math.floor(Math.random() * 6);

var randomImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var output2 = randomImages[randomNumber2];
document.getElementById("img2").setAttribute("src",output2);

if(output1 > output2){
    document.querySelector("h1").innerHTML = "🚩Player1 wins";
}else if(output2 > output1){
    document.querySelector("h1").innerHTML = "Player2 wins🚩";
}else{
    document.querySelector("h1").textContent = "DRAW";
}
}

function reset(){
    document.querySelector("h1").textContent = "click to play";
    document.getElementById("img1").src = "images/dice6.png";
    document.getElementById("img2").src = "images/dice6.png";
}