// References for HTML elements
var startButton = document.getElementById("start");
var timerDisplay = document.getElementById("time");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScoreDisplay = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");

// Additional Variables needed for time variables
var secondsLeft;
var score;
var currentQuestionIndex;
var timer;



// Event listener for the start button
startButton.addEventListener("click", startQuiz);

// Event listener for the submit button
submitButton.addEventListener("click", saveScore);

// Function to start quiz
function startQuiz() {
  // Variable initialisation
  secondsLeft = 60;
  score = 0;
  currentQuestionIndex = 0;
  // Hide Start Screen and show Question Container
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  // Start timer
  timer();
  // Display first question
  


}



// Function to save score
function saveScore() {

}

// Function to start timer
function timer(){
  timer = setInterval(function () {
    secondsLeft--;
    timerDisplay.textContent = secondsLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}