
// Describe: .beepBoop
// Test: "It should return an array from 0 to whatever number is passed as an argument"
// Expect(beepBoop(0).toEqual([0]);

// Test: "Numbers in the returned array containing a 3 should be replaced with 'Won't you be my neighbor?'
// Expect(beepBoop(3)).toEqual([0, 1, 2, "Won't you be my neighbor"]);

// Test: "Numbers in the returned array containing a 2 and not containing a 3 should be replaced with 'Boop'"
// Expect(beepBoop(23)).toEqual([0, ... 19, "Boop", "Boop", "Boop", "Won't you be my neighbor", "Boop"]);

// Test: "Numbers in the returned array containing a 1 and not containing a 2 or a 3 should be replaced with 'Beep'"
// Expect(beepBoop(14)).toEqual([0, ... 9, "Beep", "Beep", "Boop", "Won't you be my neighbor", "Beep"]);

# Beep-Boop Machine

#### A machine that returns a patterned series of beeps, boops and 'welcome to the neighborhood's, 11/4/20

#### By Eric Endsley

## Description

This webpage contains a quiz with 5 questions, each of which provides 4 radio inputs for the user to select from. Each of the 4 input options for each question correspond to a language-suggestion which will display at the bottom of the page when the button labeled "which language should I learn?' is clicked. Whichever result the user's inputs correspond to most often will be displayed, or in the case of a tie, the tie is broken by an arbitrary hierarchy of priority (javascript result displays with priority over C# result > Ruby result > 'none' result).

## Setup

#### Open Online
Visit the [beep-boop webpage](https://eric-endsley.github.io/week-3-project/) at https://eric-endsley.github.io/week-3-project/ .

#### Clone and Open Locally
 1. Open the [programming language quiz github page](https://github.com/eric-endsley/week-3-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-3-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-3-project.git" OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Select the index.html file and open it with a web-browser application of your choice.

## Technologies Used

HTML, CSS, Bootstrap, Javascript and JQuery

## Known Bugs

None

## Contact Information

To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal

This software is licensed under the MIT license.