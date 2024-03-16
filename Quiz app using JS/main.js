const questions=[
    {
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "Egypt", correct: false },
          { text: "England", correct: false },
          { text: "Adelaide", correct: false }
        ]
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
          { text: "William Shakesphere", correct: false },
          { text: "Mark Twain", correct: false },
          { text: "Harper Lee", correct: true },
          { text: "J.K. Rowling", correct: false }
        ]
      },
      {
        question: "Who is the President of India?",
        answers: [
          { text: "Smrithi Irani", correct: false },
          { text: "Venkiah Naidu", correct: false },
          { text: "Anna Desai", correct: false },
          { text: "Droupadi Murumu", correct: true }
        ]
      },
      {
        question: "What is the chemical symbol for water?",
        answers: [
          { text: "H2O", correct: true },
          { text: "CO2", correct: false },
          { text: "O2", correct: false },
          { text: "NaCl", correct: false }
        ]
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Jupiter", correct: true },
          { text: "Saturn", correct: false },
          { text: "Neptune", correct: false },
          { text: "Earth", correct: false }
        ]
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Pablo Picasso", correct: false },
          { text: "Vincent van Gogh", correct: false },
          { text: "Michelangelo", correct: false }
        ]
      },
      {
        question: "What is the currency of Japan?",
        answers: [
          { text: "Yen", correct: true },
          { text: "Euro", correct: false },
          { text: "Dollar", correct: false },
          { text: "Pound", correct: false }
        ]
      },
      {
        question: "What is the tallest mountain in the world?",
        answers: [
          { text: "Mount Everest", correct: true },
          { text: "K2", correct: false },
          { text: "Kangchenjunga", correct: false },
          { text: "Lhotse", correct: false }
        ]
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
          { text: "Mars", correct: true },
          { text: "Venus", correct: false },
          { text: "Mercury", correct: false },
          { text: "Jupiter", correct: false }
        ]
      },
      {
        question: "Who is known as the 'Father of Computers'?",
        answers: [
          { text: "Charles Babbage", correct: true },
          { text: "Alan Turing", correct: false },
          { text: "Bill Gates", correct: false },
          { text: "Steve Jobs", correct: false }
        ]
      }
]

const questionElement = document.getElementById("question")
const answerElement=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questioNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questioNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerElement.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerElement.children).forEach(button => {
        if (button.dataset.correct ==='true'){
            button.classList.add("correct");
        }
        button.disabled = true
    })
    nextButton.style.display = 'inline-block'

}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again!"
    nextButton.style.display = 'inline-block'
}
startQuiz();

