
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1 to 6 random number
var randomImage1 = "images/" + "dice" + randomNumber1 + ".png";  // to have dynamic images path
console.log(randomNumber1);

var image1 = document.querySelector(".img1");
image1.setAttribute("src" , randomImage1);

// ========================== For Player Number 2 ============================

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomImage2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src" , randomImage2);

// =================== Cases ==========================

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").style.color = "red";
    document.querySelector("h1").innerHTML = "🔴 Player 1 Won!";
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").style.color = "Green";
    document.querySelector("h1").innerHTML = "🟢 Player 2 Won!";
}
else
{
    document.querySelector("h1").style.color = "purple";
    document.querySelector("h1").innerHTML = "🟢🔴 Match Draw !"
}
