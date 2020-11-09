var startBtn = document.querySelector("#start");
var startPrompt = document.querySelector("#start-prompt");
var questionContainer = document.querySelector("#question-container");
var questionText = document.querySelector("#question-text");
var answerDiv = document.querySelector("#answer");
var timerCount = document.getElementById("time")



var questions = [
    
    {
        text: "What is my name",
        answers: ["Brant", "Brandon", "Brandt","Branden"],
        correctIndex: 2,
    },
    {
        text: "Is the sky blue",
        answers: ["true", "false"],
        correctIndex: 0,
    },
];
var questionIndex = 0;

startBtn.addEventListener("click",handleStartClick);

function handleStartClick(e) {
    startPrompt.style.display = "none";
    questionContainer.style.display = "block";
    renderQuestion();
  
}
startBtn.addEventListener("click", startTimer);
    function startTimer(e){
        var timeleft = 60
    var downloadTimer = setInterval(function(){
        timeleft--;
       document.getElementById("time").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
    }

    function renderQuestion(){
        const currentQuestion = questions[questionIndex];
   var timeleft = 60
    var downloadTimer = setInterval(function(){
        timeleft--;
       document.getElementById("time").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        },1000);
  
    questionText.textContent = currentQuestion.text;
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        const btn = document.createElement("button");
        btn.setAttribute("class", "btn btn-primary");
        btn.textContent = answer;
        answerDiv.appendChild(btn);

    }
}

answerDiv.addEventListener("click",handleAnswerClick);

function handleAnswerClick(e){
    e.preventDefault();

    if(!e.target.matches("button")) return;
    const userAnswer = e.target.textContent;
    const question = questions[questionIndex];
    var correctAnswer = question.answers[question.correctIndex]
    if(userAnswer === correctAnswer){
        console.log("that was correct")

    }else{
        console.log("that was incorrect")

    }
    questionIndex++
    renderQuestion();
}

function handleStartClick(e) {
    startPrompt.style.display = "none";
    questionContainer.style.display = "block";

    const currentQuestion = questions[questionIndex];

    questionText.textContent = currentQuestion.text;
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        const btn = document.createElement("button");
        btn.setAttribute("class", "btn btn-primary");
        btn.textContent = answer;
        answerDiv.appendChild(btn);

    }
}
