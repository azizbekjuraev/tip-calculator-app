`use strict`;
const numberOfPeople = document.querySelector(".split");
const bills = document.querySelector(".bill");
const tipButtons = document.querySelectorAll(".primary");
const totalTip = document.getElementById("total-tip");
const tipAmount = document.getElementById("tip-amount");
const resetButton = document.querySelector(".reset-btn");

//Selecting tips
$("button").each(function (i, value) {
  $(value).click((b) => {
    let convertToNum = Number(b.target.id);
    let tipValue = (convertToNum / 100) * bills.value;
    totalTip.textContent = `$${tipValue}`;
    tipAmount.textContent = `$${tipValue / numberOfPeople.value}`;
    resetButton.disabled = false;
  });
});

//Resetting
$(".reset-btn").click(function () {
  totalTip.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  bills.value = "";
  numberOfPeople.value = "";
});

//Custom tip
$(".custom").click(function () {
  let tipValueOfPrompt = prompt(`Write your % here! like(25, 30, 40)`);
  let tipValueOfPromptToNumber = Number(tipValueOfPrompt);
  let customTipValue = (tipValueOfPromptToNumber / 100) * bills.value;
  totalTip.textContent = `$${customTipValue}`;
  tipAmount.textContent = `$${customTipValue / numberOfPeople.value}`;
});
