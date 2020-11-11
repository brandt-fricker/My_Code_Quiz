var startBtn = document.querySelector("#start");
var startPrompt = document.querySelector("#start-prompt");
var questionContainer = document.querySelector("#question-container");
var questionText = document.querySelector("#question-text");
var answerDiv = document.querySelector("#answer");



var user = document.querySelector("#user")
var questions = [
    {
        text: "How long is 1 centimeter in inches?",
        answers: ["1.54 in", "2.54 in", "2 in", "3 in"],
        correctIndex: 1,
    },
    {
        text: "How many days was JavaScript created in?",
        answers: ["1", "3", "7", "10"],
        correctIndex: 3,
    },
    {
        text: "Who created JavaScript?",
        answers: ["Bill Gates", "Elon Mush", "Brendan Eich", "Zuckerberg"],
        correctIndex: 2,
    },
    {

        text: "What is the largest mammal?",
        answers: ["Blue Whale", "Elephant", "Great White Shark", "Your Mom"],
        correctIndex: 0,
    },
    {
        text: "How many acres was Dwight Schrute's beet farm?",
        answers: ["30", "40", "50", "60"],
        correctIndex: 3,
    },
    {
        text: "What video game does the Stamford branch in The Office play to help with team building?",
        answers: ["Call of Duty", "Battlefield", "Fortnite", "Halo"],
        correctIndex: 0,
    },
    {
        text: "Follow up ----What gun was Jim using on the Carrington Map?",
        answers: ["M16", "MP-40", "a sniper rifle", "a pistol"],
        correctIndex: 2,
    },
    {
        text: "What celebrity did Michael Scott think he got a picture of in his condo complex?",
        answers: ["Steve Martin", "Jim Carrey", "Will Ferrell", "Johnny Depp"],
        correctIndex: 3,
    },
    {
        text: "What is the worst thing about prison, according to Prison Mike?",
        answers: ["The food", " the Dementors", "Shower time", "Gangs"],
        correctIndex: 1,
    },
    {
        text: "In The Office, what do Dwight and Andy have a duel for?",
        answers: ["A girl", "Alpha Male status", "A promotion",],
        correctIndex: 0,
    }

];
var finalQuestionIndex = questions.length;
var questionIndex = 0;
var score = 0;
startBtn.addEventListener("click", handleStartClick);

function handleStartClick(e) {
    startPrompt.style.display = "none";
    questionContainer.style.display = "block";
    renderQuestion();

}
var timeleft = 60;
startBtn.addEventListener("click", startTimer)
function startTimer(e) {

    var downloadTimer = setInterval(function () {
        timeleft--;
        var secondsLeft = `${timeleft}`;
        console.log(secondsLeft)
        document.getElementById("time").textContent = timeleft;
        if (timeleft <= 0 ){
            clearInterval(downloadTimer);
            location.href="score.html"
        
        }  
    }, 1000);


}

function renderQuestion() {
    const currentQuestion = questions[questionIndex];

    questionText.textContent = currentQuestion.text;
    answerDiv.innerHTML = "";
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        const btn = document.createElement("button");
        btn.setAttribute("class", "btn btn-primary");
        btn.textContent = answer;
        answerDiv.appendChild(btn);

    }
   
}


answerDiv.addEventListener("click", handleAnswerClick);

function handleAnswerClick(e) {
    e.preventDefault();

    if (!e.target.matches("button")) return;
    const userAnswer = e.target.textContent;

    const question = questions[questionIndex];
    var correctAnswer = question.answers[question.correctIndex]
    if (userAnswer === correctAnswer) {

        questionIndex++
        score += 1
        renderQuestion();
    } else {
        if(timeleft >= 10){
            timeleft = timeleft - 10;
          questionIndex++  
          renderQuestion();
        
        }else{
            timeleft = 0;
            
        }

        
    }
   

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

function saveScore(){

}


