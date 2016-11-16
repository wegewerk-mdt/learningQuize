var questions = [
    {
        "question": "Wie werden die Erhöhungen und wie die Vertiefungen bei einem Optischen Speicher genant? @Vertiefung&&Erhöhung@",
        "answer": "Pit&&Land"
    },
    question2 = [
        question = "Wofür steht CD-R? @*@",
        rightAnswer ="Compact Disc Recordable",
    ],
    question3 = [
        question = "Nenne 4 Beispiele für Optische Speicher! @*&&*&&*&&*@",
        rightAnswer ="CD&&Bluray&&DVD&&M-Disc",
    ],
    question4 = [
        question = "Wie sieht bei einem Optischen Speicher eine 1 und wie eine 0 aus? @*->*=1||*->*=1&&>*->*=0||>*->*=0@",
        rightAnswer ="Pit->Pit=1||Land->Land=1&&Pit->Land=0||Land->Pit=0",
    ],
    question5 = [
        question = "Wofür steht CD-R?@***@",
        rightAnswer ="Compact Disc Recordable",
    ],
    question6 = [
        question = "Was befindet sich immer am Anfang einer Datenspur?@*&&***apk.*@",
        rightAnswer ="Inhaltsverzeichnis&&Verfahren zur Fehlerkorrektur bzw. unterdrückung",
    ],
    question7 = [
        question = "Von Wo nach Wo werden die Daten gelesen? @****@",
        rightAnswer ="Von innen nach Außen",
    ],
    question8 = [
        question = "Was brauch man um einen Optischenspeicher zu lesen? @***Abk.@",
        rightAnswer ="Optical Disc Drive ODD",
    ],
    question9 = [
        question = "Wie wird ein Optischer Speicher ausgelesen?@****.**********.***.@",
        rightAnswer ="Laser tastet Speichermedium ab. Trift Laser auf ein Pit wird der Laser anders reflektiert. Abweichungen werden gemmessen.",
    ],
    question10 = [
        question = "Was ist das besondere an einer CD-R? @******@",
        rightAnswer ="Man kann sie genau einmal beschreiben",
    ],
    question11 = [
        question = "Wofür steht CD-RW?@***@",
        rightAnswer ="Compact Disc ReWritable",
    ],
    question12 = [
        question = "Was ist das besondere an CD-RW? @*****@",
        rightAnswer ="Sie ist 1000 mal wiederbeschreibbar",
    ],
    question13 = [
        question = "Wofür steht DVD? @***@",
        rightAnswer ="Digital Versatile Disc",
    ],
    question13 = [
        question = "Warum können DVDd mehr speichern als CDs? @***@",
        rightAnswer ="Strucktur ist kleiner",
    ],
    question13 = [
        question = "Wofür steht CD-ROM? @***-**@",
        rightAnswer ="Compact Disc Read-Only Memory",
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
