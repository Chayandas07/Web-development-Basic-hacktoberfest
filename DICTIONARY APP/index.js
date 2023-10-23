const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchbutton");
const errormsg = document.getElementById("errormsg");

btn.addEventListener("click", () => {
    let inpword = document.getElementById("searchinput").value;
    console.log(inpword);

    fetch(`${url}${inpword}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.title && data.title === "No Definitions Found") {
                // Word not found
                errormsg.style.display = "block";
                result.style.display = "none";
            } else {
                console.log(data);
                result.innerHTML = `
                    <div class="word">
                        <h3>${inpword}</h3>
                        <button class="play-button"><i class="fa-solid fa-volume-high fa-2xl"></i></button>
                    </div>
                    <div class="details">
                        <p>${data[0].meanings[0].partOfSpeech}</p>
                        <p>${data[0].phonetic}</p>
                    </div>
                    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
                    <p class="word-example">${data[0].meanings[0].definitions[0].example || " "}</p>`;
                sound.setAttribute("src", data[0].phonetics[1].audio || data[0].phonetics[0].audio);
                let playButton = result.querySelector(".play-button");
                playButton.addEventListener("click", playSound);
                result.style.display = "block";
                errormsg.style.display = "none";
            }
        })
        .catch(() => {
            errormsg.style.display = "block";
            result.style.display = "none";
        });
});

function playSound() {
    sound.play();
}
