// scripts/main.js
// Example: Basic character data
const character = {
    name: "",
    class: "",
    level: 1,
    stats: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
    },
    skills: {
        acrobatics: 0,
        athletics: 0,
        stealth: 0,
    },
    inventory: [],
};

// Example: Function to update a stat
function updateStat(statName, newValue) {
    if (!character.stats.hasOwnProperty(statName)) {
        console.error(`Invalid stat name: ${statName}`);
        return;
    }
    character.stats[statName] = newValue;
    console.log(`Updated ${statName} to ${newValue}`);
}

// Function to update character info
function updateCharacterInfo(key, value) {
    character[key] = value;
    console.log(`Updated character ${key} to ${value}`);
}

// Function to update skills
function updateSkill(skillName, newValue) {
    if (!character.skills.hasOwnProperty(skillName)) {
        console.error(`Invalid skill name: ${skillName}`);
        return;
    }
    character.skills[skillName] = newValue;
    console.log(`Updated ${skillName} to ${newValue}`);
}

// Add event listeners for character info inputs
document.addEventListener('DOMContentLoaded', () => {
    const characterNameInput = document.getElementById("character-name");
    const characterClassInput = document.getElementById("character-class");
    const characterLevelInput = document.getElementById("character-level");

    characterNameInput.addEventListener("blur", (event) => {
        updateCharacterInfo("name", event.target.value);
    });

    characterClassInput.addEventListener("blur", (event) => {
        updateCharacterInfo("class", event.target.value);
    });

    characterLevelInput.addEventListener("blur", (event) => {
        updateCharacterInfo("level", parseInt(event.target.value));
    });

    // Add event listeners for skills
    const acrobaticsInput = document.getElementById("acrobatics-input");
    const athleticsInput = document.getElementById("athletics-input");
    const stealthInput = document.getElementById("stealth-input");

    acrobaticsInput.addEventListener("blur", (event) => {
        updateSkill("acrobatics", parseInt(event.target.value));
    });

    athleticsInput.addEventListener("blur", (event) => {
        updateSkill("athletics", parseInt(event.target.value));
    });

    stealthInput.addEventListener("blur", (event) => {
        updateSkill("stealth", parseInt(event.target.value));
    });
});
