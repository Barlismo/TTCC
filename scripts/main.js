// scripts/main.js
// Example: Basic character data
const character = {
    name: "",
    class: "",
    stats: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
    skills: [],
    inventory: [],
};


// scripts/components/StatBlock.js
// Example: Function to initialize the stat block
function initializeStatBlock() {
    const strengthInput = document.getElementById("strength-input");
    strengthInput.addEventListener("change", (event) => {
        updateStat("strength", parseInt(event.target.value));
    });
    // Add similar event listeners for other stats
}

// Call this function when the page loads
initializeStatBlock();


// Example: Function to update a stat
function updateStat(statName, newValue) {
    character.stats[statName] = newValue;
    console.log(`Updated ${statName} to ${newValue}`);
    // You'll need to update the UI here to reflect the change
}

// Example: Event listener (you'll need to add HTML elements for this)
// const strengthInput = document.getElementById("strength-input");
// strengthInput.addEventListener("change", (event) => {
//   updateStat("strength", parseInt(event.target.value));
// });
