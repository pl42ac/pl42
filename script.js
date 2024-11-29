// List of labels for the quiz
const labels = ["horn", "head", "abdomen"]; // Add new labels here
let currentIndex = 0; // Keep track of the current label

// Update the question
document.getElementById("question").textContent = `Click on: ${labels[currentIndex]}`;

function checkAnswer(selectedPart) {
    const feedback = document.getElementById("feedback");

    if (selectedPart === labels[currentIndex]) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";

        // Move to the next label
        currentIndex++;
        if (currentIndex < labels.length) {
            document.getElementById("question").textContent = `Click on: ${labels[currentIndex]}`;
        } else {
            document.getElementById("question").textContent = "Quiz Completed!";
        }
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
}
