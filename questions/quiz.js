var questions = [
	question1 = [
		question = "Warum Warum?",
		answer1 = "answer1",
		answer2 = "answer2",
		answer3 = "answer3",
		answer4 = "deshalb deshalb",
		rightAnswer ="3"
	],
	question2 = [
		answer1 = "deshalb",
		answer2 = "answer2",
		answer3 = "answer3",
		answer4 = "answer4",
		question = "foo Bar?",
		rightAnswer ="0"
	]
];

var questionId = 0;

function controlAnswer(userAnswer, questionId, questions) {
	console.log("User Answer:" + userAnswer);
	if(userAnswer == questions[questionId][5]) {
		console.log("The answer was: true");
		return true;
	} else {
		console.log("The answer was: false");
		return false;
	}	
}

function randomQuestion() {
	var questionId = Math.floor(Math.random() * questions.length)
	console.log("Anzahl an Fragen: " + questions.length);
	return questionId;
}

function inputQuestion (questionId) {
	answers = "";
	for (i = 0; i < questions[questionId].length - 2; i++) {
		answers += "<button type='button' onclick='changeQuestion("+i+")''>"+questions[questionId][i]+"</button><br />";
	}
	document.getElementById("question").innerHTML = questions[questionId][4];
	document.getElementById("answers").innerHTML = answers;
}

function changeQuestion(userAnswer) {
	if (!controlAnswer(userAnswer, questionId, questions)) {
		return "";
	}
	inputQuestion(questionId = randomQuestion());
}