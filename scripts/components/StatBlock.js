// scripts/components/StatBlock.js
function validateStatValue(value) {
    // Remove any non-digit characters
    let inputValueWithoutNonDigits = value.replace(/\D/g, '');

    // Limit the length to 2 digits
    inputValueWithoutNonDigits = inputValueWithoutNonDigits.slice(0, 2);

    // Convert to a number
    let numericValue = parseInt(inputValueWithoutNonDigits);

    // Check if the value is within the range
    let isValid = true;
    if (numericValue < 3) {
        numericValue = 3;
        isValid = false;
    } else if (numericValue > 18) {
        numericValue = 18;
        isValid = false;
    }

    return {
        value: numericValue,
        isValid: isValid
    };
}

// Example: Function to initialize the stat block
function initializeStatBlock() {
    const statInputs = document.querySelectorAll('.stat-row input[type="number"]');

    statInputs.forEach(input => {
        const errorMessageSpan = input.nextElementSibling; // Get the error message span

        // Handle input event for real-time validation
        input.addEventListener("input", (event) => {
            // Update the input value
            const validationResult = validateStatValue(event.target.value);
            event.target.value = validationResult.value;

            // Handle error state
            if (!validationResult.isValid) {
                input.classList.add("error");
                errorMessageSpan.textContent = "Value must be between 3 and 18";
                errorMessageSpan.classList.add("show");
            } else {
                input.classList.remove("error");
                errorMessageSpan.classList.remove("show");
                errorMessageSpan.textContent = "";
            }
        });

        // Handle blur event for updating the stat
        input.addEventListener("blur", (event) => {
            // Validate the value before updating the stat
            const validationResult = validateStatValue(event.target.value);
            updateStat(input.id.replace("-input", "").toLowerCase(), validationResult.value);

            // Update the input field to reflect the validated value
            event.target.value = validationResult.value;

            // Handle error state
            if (!validationResult.isValid) {
                input.classList.add("error");
                errorMessageSpan.textContent = "Value must be between 3 and 18";
                errorMessageSpan.classList.add("show");
            } else {
                input.classList.remove("error");
                errorMessageSpan.classList.remove("show");
                errorMessageSpan.textContent = "";
            }
        });
    });
}

// Call this function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeStatBlock();
});
