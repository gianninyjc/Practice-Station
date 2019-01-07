var questions = [
  ["How many legs does a spider have?", 8],
  ["How many sides does a circle have?", 0],
  ["What is the sum of 2 + 2?", 4]
]

var question;
var answer;
var response;
var correctAnswers;
var html;

for (var i = 0; i <= questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt( prompt(questions[i][0]) );
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "<p>You got " + correctAnswers + " question(s) right.</p>" ;

document.write(html);
