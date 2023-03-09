`use strict`;
const numberOfPeople = document.querySelector(".split");
const bills = document.querySelector(".bill");
const tipButtons = document.querySelectorAll(".primary");
const totalTip = document.getElementById("total-tip");
const tipAmount = document.getElementById("tip-amount");
const resetButton = document.querySelector(".reset-btn");

console.log(tipButtons);

tipButtons.forEach((b) =>
  b.addEventListener("click", function () {
    console.log(b);
    b.classList.add("active");
    let convertToNum = Number(b.id);
    let tipValue = (convertToNum / 100) * bills.value;
    totalTip.textContent = `$${tipValue}`;
    tipAmount.textContent = `$${tipValue / numberOfPeople.value}`;
    resetButton.disabled = false;
  })
);

resetButton.addEventListener("click", function () {
  console.log(`reset was pressed`);
  totalTip.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  bills.value = "";
  numberOfPeople.value = "";
});
