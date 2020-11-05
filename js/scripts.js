
// Business Logic: 
function beepBoop(inputNumber) {
  let numberArray = [...Array(inputNumber+1).keys()];
  let beepBoopArray = []
  numberArray.forEach(function(number) {
    if (number.toString().includes("3")) {
      beepBoopArray.push(" Won't you be my neighbor?")
    } else if (number.toString().includes("2")) {
      beepBoopArray.push(" Boop!")
    } else if (number.toString().includes("1")) {
      beepBoopArray.push(" Beep!")
    } else {
      beepBoopArray.push(" " + number)
    };
  });
  return(beepBoopArray)
};

  // UI Logic:
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    let numberInput = parseInt($("input#numberInput").val());
    let outputArray = beepBoop(number-input)
    $(".output").text(outputArray);
  });
});