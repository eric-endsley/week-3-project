// UI Logic:
let userInput = whatTheUserInputs

// Describe: .beepBoop
// Test: "It should return an array from 0 to whatever number is passed as an argument"
// Expect(beepBoop(0).toEqual([0]);

// Test: "Numbers in the returned array containing a 3 should be replaced with 'Won't you be my neighbor?'
// Expect(beepBoop(3)).toEqual([0, 1, 2, "Won't you be my neighbor"]);

// Test: "Numbers in the returned array containing a 2 and not containing a 3 should be replaced with 'Boop'"
// Expect(beepBoop(23)).toEqual([0, ... 19, "Boop", "Boop", "Boop", "Won't you be my neighbor", "Boop"]);

// Test: "Numbers in the returned array containing a 1 and not containing a 2 or a 3 should be replaced with 'Beep'"
// Expect(beepBoop(14)).toEqual([0, ... 9, "Beep", "Beep", "Boop", "Won't you be my neighbor", "Beep"]);

function beepBoop(inputNumber) {
  let numberArray = [...Array(inputNumber+1).keys()];
  let beepBoopArray = []
  numberArray.forEach(function(number) {
    if (number.toString().includes("3")) {
      beepBoopArray.push("Won't you be my neighbor?")
    } else {
      beepBoopArray.push(number)
    };
    
  });
  console.log(beepBoopArray)
}; 

