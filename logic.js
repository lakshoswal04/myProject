let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
const attemptData = document.getElementById("Attempt");
const userinp = document.getElementById("inp");
const subBtn = document.getElementById("submit");
const resBtn = document.getElementById("resBtn");
const message = document.getElementById("msg");
const hint = document.getElementById("hint");
const difficultySelect = document.getElementById("difficulty");
const rangeText = document.getElementById("range");

function setRange() {
   const maxRange = parseInt(difficultySelect.value);
   cnum = Math.floor(Math.random() * maxRange) + 1;
   rangeText.innerText = (`1 to ${maxRange}`);
   restart();
}

difficultySelect.addEventListener('change', setRange);

function generateHint() {
   const lowerRange = cnum - 10 < 1 ? 1 : cnum - 10;
   const upperRange = cnum + 10 > parseInt(difficultySelect.value) ? parseInt(difficultySelect.value) : cnum + 10;
   hint.innerHTML =(` Number is between ${lowerRange} and ${upperRange}`);
}

function check() {
   const usernum = parseInt(userinp.value);
   if (cnum === usernum) {
      message.innerHTML = "🎉 Congratulations! You guessed it!";
      message.style.color = "green";
      document.body.style.backgroundColor = "#2ecc71";
      resBtn.style.display = "block";
      hint.innerHTML = "";
   } else if (cnum < usernum) {
      message.innerHTML = "📉 Too high! Try again.";
      message.style.color = "red";
   } else {
      message.innerHTML = "📈 Too low! Try again.";
      message.style.color = "orange";
   }
   attempt++;
   attemptData.innerHTML = attempt;
   generateHint();

   // Reset input and feedback message
   setTimeout(() => {
      userinp.value = "";
      document.body.style.background = "";
   }, 1500);
}

function restart() {
   cnum = Math.floor(Math.random() * parseInt(difficultySelect.value)) + 1;
   attempt = 0;
   attemptData.innerHTML = attempt;
   message.innerHTML = "";
   hint.innerHTML = "";
   userinp.value = "";
   resBtn.style.display = "none";
   document.body.style.background = "";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);