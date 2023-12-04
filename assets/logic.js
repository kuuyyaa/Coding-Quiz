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


function startQuiz() {

} 

function saveScore() {
  
}