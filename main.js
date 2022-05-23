let x = 0;
let y = 0;
function randomDice() {
    setTimeout(() => {
        x = Math.floor(Math.random() * 6) + 1;
        y = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".img1").setAttribute("src", "./images/dice" + x + ".png");
        document.querySelector(".img2").setAttribute("src", "./images/dice" + y + ".png");


    }, 1000);
    if (x > y) {
        document.querySelector(".status").innerHTML = "Player 1 Wins"

    }
    else if (x < y) {
        document.querySelector(".status").innerHTML = "Player 2 Wins"

    }
    else {
        document.querySelector(".status").innerHTML = "Draw"
    }


}
randomDice();

