`use strict`;

//Selecting tips
$("button").each(function (i, value) {
  $(value).click((b) => {
    let convertToNum = Number(b.target.id);
    let tipValue = (convertToNum / 100) * $(".bill").val();
    $("#total-tip").text(`$${tipValue}`);
    $("#tip-amount").text(`$${tipValue / $(".split").val()}`);
    $(".reset-btn").removeAttr("disabled");
  });
});

//Resetting
$(".reset-btn").click(function () {
  $("#total-tip").text(`$0.00`);
  $("#tip-amount").text(`$0.00`);
  $(".bill").val("");
  $(".split").val("");
});

//Custom tip
$(".custom").click(function () {
  let tipValueOfPrompt = prompt(`Write your % here! like(25, 30, 40)`);
  let tipValueOfPromptToNumber = Number(tipValueOfPrompt);
  let customTipValue = (tipValueOfPromptToNumber / 100) * $(".bill").val();
  $("#total-tip").text(`$${customTipValue}`);
  $("#tip-amount").text(`$${customTipValue / $(".split").val()}`);
});
