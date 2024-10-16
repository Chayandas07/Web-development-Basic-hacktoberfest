let secretNum = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function() {
    const num = Number(document.querySelector(".guess").value);

    if (!num || num < 1 || num > 20) {
        document.querySelector(".message").textContent = "⛔ Invalid Number!";
    }

    else if (num == secretNum) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNum;
        highScore = Math.max(highScore, score);
        document.querySelector(".highscore").textContent = highScore;
    }

    else if (num < secretNum) {
        document.querySelector(".message").textContent = "📉 Too Low!";
        wrongAns();
    }

    else if (num > secretNum) {
        document.querySelector(".message").textContent = "📈 Too High!";
        wrongAns();
    }
    
    document.querySelector(".highscore").textContent = highScore;
});

const wrongAns = function() {
    if(score <= 1) {
        document.querySelector(".message").textContent = "👎 You Lost!";
        score = 0;
    }
    else score--;

    document.querySelector(".score").textContent = score;
}

document.querySelector(".again").addEventListener("click", function() {
    secretNum = Math.trunc((Math.random() * 20) + 1);
    score = 20;
    
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
});