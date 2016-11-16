var questions = [
    question1 = [
        question = "Wie werden die Erhöhungen und wie die Vertiefungen bei einem Optischen Speicher genant? @Vertiefung&&Erhöhung@",
        rightAnswer ="Pit&&Land",
    ],
    question2 = [
        question = "Wofür steht CD-R? @*@",
        rightAnswer ="Compact Disc Recordable",
    ]
    question3 = [
        question = "Nenne 4 Beispiele für Optische Speicher! @*&&*&&*&&*@",
        rightAnswer ="CD&&Bluray&&DVD&&M-Disc",
    ],
    question4 = [
        question = "Wie sieht bei einem Optischen Speicher eine 1 und wie eine 0 aus? @*->*=1||*->*=1&&>*->*=0||>*->*=0@",
        rightAnswer ="Pit->Pit=1||Land->Land=1&&Pit->Land=0||Land->Pit=0",
    ]
    question5 = [
        question = "Wofür steht CD-R?",
        rightAnswer ="Compact Disc Recordable",
    ]
];

function checkAnswer(questionID, answer, questions) {
    if (questions[questionID][1] == answer) {
        return true;
    } else {
        alert("Falsch!");
        return false;
    }
}

function inputQuestion(questionID,questions) {
    var rightAnswer = false;
    var i = 0;
        while (rightAnswer == false && i <= 3) {
            answer = prompt(questions[questionID][0]);
            rightAnswer = checkAnswer(questionID, answer, questions);
            i++;
        }
}

function randomQuestion(questions) {
    var questionId = Math.floor(Math.random() * questions.length);
    console.log("Random: " + questionId);
    return questionId;
}

setInterval(function(){
    questionID = randomQuestion(questions)
    inputQuestion(questionID,questions);

}, 300000);