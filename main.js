//Our answer is "Pineapple"
var answer = ["P", "I", "N", "E", "A", "P", "P", "L", "E"];

function makeGuess() {
    //Getting the variable from user input
    var currentGuess = guess.value;
    
    /*Creating a for loop, this checks if the letter is in the array*/
    var i;
    for (i = 0; i < answer.length; i++) {
        
        //If the answer is found in the array, then it breaks from the loop
        if (currentGuess == answer[i]) {
            var x = document.getElementsByClassName("answer");
            x[i].innerHTML = answer[i];
            
        }
    }
    
}

