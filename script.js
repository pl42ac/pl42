const labels = [
    "horn", 
    "hvac unit", 
    "dynamic brake", 
    "inertial air filter hatch", 
    "silencer", 
    "radiator hatch", 
    "main reservoir", 
    "sand box", 
    "pneumatic rack", 
    "air compressor", 
    "truck", 
    "diesel rack", 
    "prime mover", 
    "fuel tank", 
    "waste fluid tank", 
    "battery box transformer", 
    "electrical cabinet", 
    "toilet", 
    "vestibule door", 
    "cab", 
    "coupler"
];
let currentIndex = 0;

document.getElementById("question").textContent = `Click on: ${labels[currentIndex]}`;

function checkAnswer(selectedPart) {
    const feedback = document.getElementById("feedback");

    if (selectedPart === labels[currentIndex]) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
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
