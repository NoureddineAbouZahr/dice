function randomDice() {
    let x = Math.floor(Math.random() * 6) + 1;
    let y = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + x + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + y + ".png");
    if (x > y) {
        document.querySelector(".status").innerHTML = "&#128681; Player 1 Wins";

    }
    else if (x < y) {
        document.querySelector(".status").innerHTML = "&#128681; Player 2 Wins";

    }
    else {
        document.querySelector(".status").innerHTML = "Draw";
    }
}
randomDice();

