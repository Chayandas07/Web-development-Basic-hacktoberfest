console.log("Welcome to Tic Tac Toe");

const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => (turn === "X" ? "0" : "X");

// Function to check for a win
const checkWin = () => {
  const boxtext = document.querySelectorAll('.boxtext');
  const wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  for (const e of wins) {
    const [a, b, c, d, e, f] = e;
    if (
      boxtext[a].innerText === boxtext[b].innerText &&
      boxtext[b].innerText === boxtext[c].innerText &&
      boxtext[a].innerText !== ""
    ) {
      document.querySelector('.info').innerText = `${boxtext[a].innerText} Won`;
      isgameover = true;
      document.querySelector('.imgbox img').style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${d}vw, ${e}vw) rotate(${f}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  }
};

// Game Logic
// music.play();
const boxes = document.querySelectorAll(".box");
boxes.forEach((element) => {
  const boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
document.getElementById('reset').addEventListener('click', () => {
  const boxtexts = document.querySelectorAll('.boxtext');
  boxtexts.forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.querySelector('.imgbox img').style.width = "0px";
});
