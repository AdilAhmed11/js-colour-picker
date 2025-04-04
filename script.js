// Step 1: Select elements from the DOM
const moodSelect = document.getElementById("mood");
const ChangeColourBtn = document.getElementById("changeColour");
const colourCodeDisp = document.getElementById("colourCode");

// Step 2: Handling button click events
ChangeColourBtn.addEventListener("click", function () {
    // Get the selected mood
    const selectedMood = moodSelect.value;
    // Call a function to get a mood-based colour
    const newColour = getColourForMood(selectedMood);

    // Apply the new colour to the background
    document.body.style.backgroundColor = newColour;

    // Update the displayed colour code
    colourCodeDisp.textContent = newColour;
});

// Step 3: Function to get a mood-based colour
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColourForMood(mood) {
    let r, g, b;

    switch (mood) {
        case "happy":
            r = getRandomInRange(200, 255);
            g = getRandomInRange(200, 255);
            b = getRandomInRange(0, 100); // Bright yellows
            break;

        case "sad":
            r = getRandomInRange(0, 100);
            g = getRandomInRange(0, 100);
            b = getRandomInRange(150, 255); // Deep blues
            break;

        case "calm":
            r = getRandomInRange(100, 200);
            g = getRandomInRange(200, 255);
            b = getRandomInRange(100, 200); // Soft greens
            break;

        case "angry":
            r = getRandomInRange(150, 255);
            g = getRandomInRange(0, 100);
            b = getRandomInRange(0, 100); // Strong reds
            break;

        default:
            r = g = b = 150;
    }

    return `rgb(${r}, ${g}, ${b})`;
}

// Step 4: Convert RGB to HEX

// Step 5: Adding smooth transitions
