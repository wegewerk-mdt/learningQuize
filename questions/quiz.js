var questions = [
	question1 = [
		question = "Warum Warum?",
		answer1 = "answer1",
		answer2 = "answer2",
		answer3 = "answer3",
		answer4 = "deshalb deshalb",
		rightAnswer ="3",
		category = "radio"
	],
	question2 = [
		answer1 = "deshalb",
		answer2 = "answer2",
		answer3 = "answer3",
		answer4 = "answer4",
		question = "foo Bar?",
		rightAnswer ="0",
		category = "radio"
	],
	question3 = [
		answer1 = "",
		answer2 = "",
		answer3 = "",
		answer4 = "",
		question = "Wie heißt die 1. Schicht des OSI Models?",
		rightAnswer = "Bituebertragungsschicht",
		category = "text"
	]
];

//Program start
const notAnswersInQuestionArray = 3;
var questionId = 0;

function inputQuestion (questionId) {
	var answers = "";
	document.getElementById("question").innerHTML = questions[questionId][4];
	if (questions[questionId][6] == "radio"){
		for (i = 0; i < questions[questionId].length - notAnswersInQuestionArray; i++) {
			answers += "<button type='button' onclick='controler("+i+")''>"+questions[questionId][i]+"</button><br />";
		}
		document.getElementById("answers").innerHTML = answers;
	} else {
		document.getElementById("answers").innerHTML = "<input type='input' id='inputText'><br /><button type='button' onclick='controler(\"textAnswer\")'>Antworten</button>";
	}
}

function randomQuestion() {
	var questionId = Math.floor(Math.random() * questions.length)
	return questionId;
}

function controlAnswer(userAnswer, questionId, questions) {
	console.log("User Answer:" + userAnswer);
	console.log("Control answer, for question:" + questionId);
	console.log("The right answer is:" + questions[questionId][5]);
	if(userAnswer == questions[questionId][5]) {
		console.log("The answer was: true");
		return true;
	} else {
		console.log("The answer was: false");
		return false;
	}
}

function controler(userAnswer) {
	if(userAnswer == "textAnswer") {
		userAnswer = document.getElementById("inputText").value;
	}
	if (!controlAnswer(userAnswer, questionId, questions)){
		console.log("Wrong answer. Try it again!");
		return "";
	}
	inputQuestion(questionId = randomQuestion());
}