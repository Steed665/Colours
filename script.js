function makeColourValue() {
    return Math.round(Math.random() * 255);
  }
function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
      'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
  }
var buttons = document.getElementsByClassName('colourButton');
var allbuttons = document.getElementById('buttonWrapper')
var heading = document.getElementById('colourValue');
var answerMessage = document.getElementById('answer');
var guessNumber = document.getElementById('guesses');
var results = document.getElementById('result');
function startGame(){
    allbuttons.style.pointerEvents="";
    answerMessage.innerHTML="";
    guessNumber.innerHTML="";
    results.innerHTML="";
    var guess = false;
    var numGuesses=0
    var answerButton = Math.round(Math.random() * (buttons.length - 1));
    for (var i = 0; i < buttons.length; i++) {
        var red = makeColourValue();
        var green = makeColourValue();
        var blue = makeColourValue();
        setButtonColour(buttons[i], red, green, blue);
        if (i === answerButton) {
            heading.innerHTML =`(${red}, ${green}, ${blue})`;
        };
        buttons[i].addEventListener('click', function(){
            if (this === buttons[answerButton]) {
                answerMessage.innerHTML = "Correct!";
                guess=true
                answerMessage.style.color="green"
                numGuesses+=1
                guessNumber.innerHTML = "Guesses:   "+ numGuesses;
                buttons[answerButton].style.outline="5px solid green"
                allbuttons.style.pointerEvents="none";
                if (numGuesses<2){
                    results.innerHTML = "First try, very impressive";
                }
                else if (numGuesses<6){
                    results.innerHTML = "You got that very quickly";
                }
                else if (numGuesses<11){
                    results.innerHTML = "A solid showing";
                }
                else if (numGuesses<21){
                    results.innerHTML = "Not... awful";
                }
                else if (numGuesses<31){
                    results.innerHTML = "That wasn't very impressive";
                }
                else if (numGuesses<41){
                    results.innerHTML = "Lacklustre";
                }
                else if (numGuesses<51){
                    results.innerHTML = "Genuinely rubbish";
                }
                else if (numGuesses<60){
                    results.innerHTML = "Horrendous performance";
                }
                else{
                    results.innerHTML = "Undescribably bad";
                }
            } else if (this != buttons[answerButton]) {
                answerMessage.innerHTML = "Incorrect!";
                answerMessage.style.color="red"
                numGuesses+=1
                this.style.outline="5px solid red";
                guessNumber.innerHTML = "Guesses:   "+ numGuesses;
                this.style.pointerEvents="none";
            }
        })
    }
};

startGame();
document.getElementById('resetButton').addEventListener('click', startGame);