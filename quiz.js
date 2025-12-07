function checkAnswer() {
    let correctAnswer = "4";

    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "Incorrect. Please try again.";
    }

}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);