let currentCount = 0;

// load the question from the XML file
function getQuestions() {
  obj = document.getElementById("question");
  obj.firstChild.nodeValue = "(please wait)";
  ajaxCallback = nextQuestion;
  ajaxRequest("questions.xml");
}

// display the next question
function nextQuestion() {
  questions = ajaxreq.responseXML.getElementsByTagName("q");
  obj = document.getElementById("question");
  if (currentCount < questions.length) {
    q = questions[currentCount].firstChild.nodeValue;
    obj.firstChild.nodeValue = q;
  } else {
    obj.firstChild.nodeValue = "(no more questions)";
  }
}

// check the user answer

function checkAnswer() {
  answers = ajaxreq.responseXML.getElementsByTagName("a");
  a = answers[currentCount].firstChild.nodeValue;
  answerfield = document.getElementById("answer");
  if (a == answerfield.value) {
    alert("Correct");
  } else {
    alert("Incorrect. The correct answer is:" + a);
  }
  currentCount = currentCount + 1;
  answerfield.value = "";
  nextQuestion();
}

// set up the event handlers
obj = document.getElementById("startTest");
obj.onclick = getQuestions;
ans = document.getElementById("submit");
ans.onclick = checkAnswer;
