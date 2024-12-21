document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What does 'JS' stand for in web development?",
      choices: ["JavaScript", "JavaStyle", "JScript", "JustScript"],
      answer: "JavaScript",
    },
    {
      question: "Which method is used to parse a JSON string in JavaScript?",
      choices: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.toJSON()",
        "parseJSON()",
      ],
      answer: "JSON.parse()",
    },
    {
      question:
        "What is the default value of an uninitialized variable in JavaScript?",
      choices: ["null", "undefined", "NaN", "0"],
      answer: "undefined",
    },
  ];


  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener('click', startQuiz)
  nextBtn.addEventListener('click',nextquestion)
  restartBtn.addEventListener("click", restartQuiz);

  function startQuiz(){
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion()
  }

  //Use textContent when you only need to read or modify text and want to avoid any HTML parsing or security risks.
 // Use innerHTML when you need to read or manipulate the HTML structure inside an element, including tags and attributes, but be cautious when dealing with user-generated content to prevent XSS vulnerabilities.

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;

    // Clear the previous choices
    choicesList.innerHTML = "";

    // Create new list items for each choice
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li"); // Create a new `li` element
      li.textContent = choice; // Set the choice text
      //The result is that the selectAnswer(choice) function is executed once when the code runs (even before the user clicks), and its result (if any) is passed to addEventListener, which is incorrect. This would typically result in an error or unexpected behavior because selectAnswer(choice) doesn't return a function, and addEventListener expects a function as the second argument.
      li.addEventListener("click", () => selectAnswer(choice)); // Add click event to select answer
      choicesList.appendChild(li); // Append the new `li` to the list
    });
  }


  function selectAnswer(choice){
    const correctAnswer = questions[currentQuestionIndex].answer;
    if(choice === correctAnswer){
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function nextquestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion()
    }else{
      showresult()
    }
  }

  function showresult(){
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} out of ${questions.length}`
  }

  function restartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz()
  }
});
