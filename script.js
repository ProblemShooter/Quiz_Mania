var questions = [
    {
        question: "Defination of OOPS",
        answers: [
            { text: "Ortho Ora Pieces system", correct: false },
            { text: "Out of Pocket's", correct: false },
            { text: "Object oriented Programming System", correct: true },
            { text: "Opeta Organised Pascal's System", correct: false }
        ]
    },
    {
        question: "Which is the best programming language in the world ?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "C", correct: false },
            { text: "Javascript", correct: true }
        ]
    },
    {
        question: "who is the founder of C language",
        answers: [
            { text: " Ada Lovelace", correct: false },
            { text: " James Gosling", correct: false },
            { text: "Dennis Ritchie", correct: true },
            { text: "Ramsus Lerdorf", correct: false }
        ]
    },
    {
        question: "Who created Pearl Programming language ?",
        answers: [
            { text: "Robe Pike", correct: false },
            { text: "Larry Wall", correct: true },
            { text: "PDon Dyen", correct: false },
            { text: "Mikey Storkes", correct: false }
        ]
    }
]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
                button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} ;

function resetstate() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectBtn = e.target
const isCorrect = selectBtn.dataset.correct === "true";
if(isCorrect) {
    selectBtn.classList.add("correct");
    score++;
}  else {
    selectBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true") {
        button.classList.add("correct");
    }
    button.disabled= true;
})
nextButton.style.display = "block"
}



function showScore() {
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of the ${questions.length}!`;
    nextButton.innerHTML = "Play Again 🔥"
    nextButton.style.display = "block"
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }   else {
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length) {
        handleNextQuestion();
    }
    else {
        startQuiz();
    }
})

startQuiz();

//? js file done .
