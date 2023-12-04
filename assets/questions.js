// Define your questions and answers array
const questions = [
    {
        question: "What is JavaScript?",
        answers: ["A programming language", "A fruit", "A car brand", "A type of coffee"],
        correctAnswer: "A programming language"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "1"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "4"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "4"
    },
    {
        question: "Question?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
];

// Other variables and functions needed for your quiz logic

// Event listener for the start button
document.getElementById("start-button").addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
}

// Add more functions as needed
