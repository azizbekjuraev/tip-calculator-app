`use strict`;
const numberOfPeople = document.querySelector(".split");
const bills = document.querySelector(".bill");
const tipButtons = document.querySelectorAll(".primary");
const totalTip = document.getElementById("total-tip");
const tipAmount = document.getElementById("tip-amount");
const resetButton = document.querySelector(".reset-btn");
const customTipButton = document.querySelector(".custom");

//Selecting tips
tipButtons.forEach((b) =>
  b.addEventListener("click", function () {
    let convertToNum = Number(b.id);
    let tipValue = (convertToNum / 100) * bills.value;
    totalTip.textContent = `$${tipValue}`;
    tipAmount.textContent = `$${tipValue / numberOfPeople.value}`;
    resetButton.disabled = false;
  })
);

//Reset to default
resetButton.addEventListener("click", function () {
  totalTip.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  bills.value = "";
  numberOfPeople.value = "";
});

//Custom tip
customTipButton.addEventListener("click", () => {
  let tipValueOfPrompt = prompt(`Write your % here! like(25, 30, 40)`);
  let tipValueOfPromptToNumber = Number(tipValueOfPrompt);
  let customTipValue = (tipValueOfPromptToNumber / 100) * bills.value;

  totalTip.textContent = `$${customTipValue}`;
  tipAmount.textContent = `$${customTipValue / numberOfPeople.value}`;
});
