// var p1 = prompt("Enter Player1 Name :");
// var p2 = prompt("Enter Player2 Name :");
var randomNumber1= Math.ceil(Math.random()*6);
var images1 ="images/dice"+randomNumber1+".png";
var randomNumber2= Math.ceil(Math.random()*6);
var images2 ="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",images1);
document.querySelector(".img2").setAttribute("src",images2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".result").innerHTML="Player 1 wins :)";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector(".result").innerHTML="Player 2 wins :)";
}
 else {
    document.querySelector(".result").innerHTML="It's a Draw :|";
}