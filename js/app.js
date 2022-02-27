let min = 1,
max = 10,
guessesLeft = 3,
winningNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


const game = document.querySelector("#game"),
minNum = document.querySelector(".min-num"),
maxNum = document.querySelector(".max-num"),
guessBtn = document.querySelector("#guess-btn"),
guessInput = document.querySelector("#guess-input"),
message = document.querySelector(".message"),
messageBtn = document.querySelector(".messageBtn");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage("Нужно ввести число от ${min} до ${max}", "red");
        guessInput.value = "";
        guessBtn.addEventListener("click", () => window.location.reload());
    }
   
    if (guess === winningNum) {
        setMessage("Поздравляю! Вы угадали число: ${winningNum}!", "blue");
        btnMessage("Играть снова", "blue");
        guessInput.disabled = true;
        guessInput.style.border = "2px solid blue";
        guessInput.value = "";
        guessBtn.addEventListener("click", () => window.location.reload());
    }
    else if (guess != winningNum) {
        guessesLeft--;
        setMessage('Вы не угадали число. Осталось попыток: ${guessesLeft}', "red");
    }
    if (guessesLeft === 0) {
        setMessage('Вы не угадали загаданное число: ${winningNum}!', "red");
        btnMessage('Играть снова', "red");
        guessInput.disabled = true;
        guessInput.style.border = "2px solid red";
        guessInput.value = "";
        guessBtn.addEventListener("click", () => window.location.reload());
    }

       function setMessage(msg, color) {
           message.textContent = msg;
           message.style.color = color;

    }
    function btnMessage(txt, color) {
        guessBtn.innerText = txt;
        guessInput.style.border = color;
        guessBtn.style.color = color;
      }
});
