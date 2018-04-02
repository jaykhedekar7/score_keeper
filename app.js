var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var reset = document.querySelector("#reset");
var p1Disp = document.querySelector("#p1Display");
var p2Disp = document.querySelector("#p2Display");
var score = document.querySelector("#score");
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var gameOver = false;


// Makes all the changes for player 1 button
p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        p1Disp.textContent = p1Score;
        if (p1Score === winScore) {
            p1Disp.classList.add("winner");
            var image = document.getElementById("p1Img");
            image.src = "img/win.png";
            gameOver = true;
        }
    }
});


// Makes all the changes for player 2 button
p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        p2Disp.textContent = p2Score;
        if (p2Score === winScore) {
            p2Disp.classList.add("winner");
            var image = document.getElementById("p2Img");
            image.src = "img/win.png";
            gameOver = true;
        }
    }
});


// Resets to the initial stage
reset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Disp.textContent = Number(p1Score);
    p2Disp.textContent = Number(p2Score);
    p1Disp.classList.remove("winner");
    p2Disp.classList.remove("winner");
    p1Img.src = "img/1.png";
    p2Img.src = "img/2.png";
});