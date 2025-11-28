
const quiz = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is the largest ocean on Earth?", answer: "pacific" },
    { question: "How many continents are there?", answer: "7" }
];


function startQuiz() {
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(quiz[i].question);


        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();


        if (userAnswer === quiz[i].answer) {
            alert("✅ Correct!");
            score++;
        } else {
            alert(`❌ Wrong! The correct answer is: ${quiz[i].answer}`);
        }
    }


    alert(`🎯 Quiz Complete!\nYour final score is: ${score} / ${quiz.length}`);
}


startQuiz();
