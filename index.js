


var randomNumber1 = Math.floor((Math.random() * 6) + 1); //# 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var randomSource = "./images/" + randomDiceImage;   // "./images/dice1.png - dice6.png"

var image = document.querySelector(".img1").setAttribute("src", randomSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomSource2 = "./images/" + randomDiceImage2;

var image2 = document.querySelector(".img2").setAttribute("src", randomSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}