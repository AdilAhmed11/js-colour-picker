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

// Step 4: Convert RGB to HEX

// Step 5: Adding smooth transitions
