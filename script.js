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
