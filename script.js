// Labels and coordinates
const labels = [
    { name: "Horn", coords: [233, 100, 282, 132] },
    { name: "HVAC Unit", coords: [295, 108, 346, 161] },
    { name: "Dynamic Brake", coords: [381, 104, 483, 138] },
    { name: "Inertial Air Filter Hatch", coords: [528, 108, 703, 159] },
    { name: "Silencer", coords: [798, 103, 935, 140] },
    { name: "Radiator Hatch", coords: [1209, 93, 1353, 143] },
    { name: "Main Reservoir", coords: [1328, 205, 1436, 262] },
    { name: "Sand Box", coords: [1432, 319, 1472, 385] },
    { name: "Pneumatic Rack", coords: [1327, 262, 1438, 315] },
    { name: "Air Compressor", coords: [1240, 232, 1296, 329] },
    { name: "Truck", coords: [1183, 347, 1311, 404] },
    { name: "Diesel Rack", coords: [1166, 229, 1216, 284] },
    { name: "Prime Mover", coords: [790, 225, 1043, 323] },
    { name: "Fuel Tank", coords: [707, 344, 1049, 400] },
    { name: "Waste Fluid Tank", coords: [650, 343, 707, 406] },
    { name: "Battery Box Transformer", coords: [510, 340, 648, 405] },
    { name: "Electrical Cabinet", coords: [430, 197, 478, 318] },
    { name: "Toilet", coords: [352, 264, 387, 314] },
    { name: "Vestibule Door", coords: [299, 193, 340, 316] },
    { name: "Cab", coords: [128, 163, 288, 318] },
    { name: "Coupler", coords: [54, 342, 123, 414] }
];

let currentIndex = 0; // Current label index

// Set initial question
document.getElementById("question").textContent = `Click on: ${labels[currentIndex].name}`;

function checkAnswer(selectedPart) {
    const feedback = document.getElementById("feedback");
    const diagramContainer = document.getElementById("diagram-container");

    // Check if the answer is correct
    if (selectedPart === labels[currentIndex].name) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";

        // Highlight the area
        const coords = labels[currentIndex].coords;
        const highlight = document.createElement("div");
        highlight.classList.add("highlight");
        highlight.style.left = `${coords[0]}px`;
        highlight.style.top = `${coords[1]}px`;
        highlight.style.width = `${coords[2] - coords[0]}px`;
        highlight.style.height = `${coords[3] - coords[1]}px`;

        // Add the label text
        const label = document.createElement("div");
        label.classList.add("label");
        label.style.left = `${coords[0]}px`;
        label.style.top = `${coords[1] - 20}px`; // Adjust label position
        label.textContent = labels[currentIndex].name;

        // Append to the diagram container
        diagramContainer.appendChild(highlight);
        diagramContainer.appendChild(label);

        // Move to the next question
        currentIndex++;
        if (currentIndex < labels.length) {
            document.getElementById("question").textContent = `Click on: ${labels[currentIndex].name}`;
        } else {
            document.getElementById("question").textContent = "Quiz Completed!";
        }
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
}

// Attach event listeners to the diagram
document.getElementById("diagram").addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    // Check if the click matches the current area's coordinates
    const coords = labels[currentIndex].coords;
    if (x >= coords[0] && x <= coords[2] && y >= coords[1] && y <= coords[3]) {
        checkAnswer(labels[currentIndex].name);
    } else {
        checkAnswer(null); // Incorrect click
    }
});
