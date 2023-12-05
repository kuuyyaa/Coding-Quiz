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
  displayQuestion();
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

// Function to display question
function displayQuestion() {
  // Get questions from array
  var currentQuestion = questions[currentQuestionIndex];

  // Check if there are more questions
  if (!currentQuestion) {
    endQuiz();
    return;
  }

  // Update the question title
  questionTitle.textContent = currentQuestion.question;

  // Clear previous choices
  choicesContainer.innerHTML = "";

  // Create buttons for each choice
  currentQuestion.choices.forEach(function (choice, index) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function () {
      checkAnswer(index);
    });
    choicesContainer.appendChild(choiceButton);
  });
}

// Function to check the selected answer
function checkAnswer(index) {
  var currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.correctIndex === index) {
    // Correct answer
    score += 10; 
  } else {
    // Incorrect answer, penalize time
    timeLeft -= 10; 
  }

  // Move to the next question
  currentQuestionIndex++;
  displayQuestion();
}

// Function to end quiz
function endQuiz() {
  // clear timer
  clearInterval(timerId);
  // Show results screen
  resultScreen.style.display = "block";
  // Calculate and show final score
  var finalScore = Math.round((score / totalQuestions) * 100);
  scoreDisplay.innerText = finalScore + "%";
  // Hide start button
  startBtn.style.display = "none";
}