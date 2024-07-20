// Selecting the necessary DOM elements
const slider = document.querySelector("span");  // Displays the slider's value
const input = document.querySelector("input");  // Range input for password length
const upperCaseCheckbox = document.querySelector("#upperCase");  // Checkbox for including uppercase letters
const lowerCaseCheckbox = document.querySelector("#lowerCase");  // Checkbox for including lowercase letters
const numberCheckbox = document.querySelector("#number");  // Checkbox for including numbers
const symbolCheckbox = document.querySelector("#symbol");  // Checkbox for including symbols

let password = "";  // Variable to store the generated password

// Arrays containing possible characters for the password
const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");  // Uppercase letters
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");  // Lowercase letters
const numbers = "0123456789".split("");  // Digits
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?".split("");  // Special characters
const symbolsLength = symbols.length;  // Length of the symbols array

// Event listener for the input range element
input.addEventListener('input', function(e) {
    password = "";  // Clear the password before generating a new one
    const inputValue = input.value;  // Get the current value of the slider
    console.log(inputValue);  // Log the slider value for debugging
    slider.innerHTML = inputValue;  // Update the slider's display value
    slider.setAttribute("class", "show");  // Show the slider label
    slider.style.left = parseInt(inputValue) * 2 + "%";  // Adjust the position of the slider label
    document.querySelector(".pwdLengthDisplay").querySelector("span").innerHTML = inputValue;  // Update the displayed password length
    generatePassword(inputValue);  // Generate a new password based on the new length
}, false);

// Event listener for when the input loses focus
input.addEventListener("blur", function(e) {
    slider.classList.remove("show");  // Hide the slider label when the input loses focus
}, false);

// Function to generate the password based on the selected options
function generatePassword(pwdLength) {
    // Check if at least one checkbox is checked
    if (upperCaseCheckbox.checked || lowerCaseCheckbox.checked || numberCheckbox.checked || symbolCheckbox.checked) {
        password = "";  // Ensure password starts as an empty string

        // Generate a password of the specified length
        for (let i = 0; i < pwdLength; i++) {
            const randomNum = Math.floor(Math.random() * 4);  // Randomly select a character type

            switch (randomNum) {
                case 0:
                    // Add an uppercase letter if the corresponding checkbox is checked
                    if (upperCaseCheckbox.checked) {
                        const randomNumUpper = Math.floor(Math.random() * 26);  // Generate a random index for uppercase letters
                        password += upperCaseAlphabets[randomNumUpper];  // Append the letter to the password
                    } else {
                        i--;  // Decrease the counter to retry if no uppercase letters are selected
                    }
                    break;

                case 1:
                    // Add a lowercase letter if the corresponding checkbox is checked
                    if (lowerCaseCheckbox.checked) {
                        const randomNumLower = Math.floor(Math.random() * 26);  // Generate a random index for lowercase letters
                        password += lowerCaseAlphabets[randomNumLower];  // Append the letter to the password
                    } else {
                        i--;  // Decrease the counter to retry if no lowercase letters are selected
                    }
                    break;

                case 2:
                    // Add a number if the corresponding checkbox is checked
                    if (numberCheckbox.checked) {
                        const randomNumForNumber = Math.floor(Math.random() * 10);  // Generate a random index for numbers
                        password += numbers[randomNumForNumber];  // Append the number to the password
                    } else {
                        i--;  // Decrease the counter to retry if no numbers are selected
                    }
                    break;

                case 3:
                    // Add a symbol if the corresponding checkbox is checked
                    if (symbolCheckbox.checked) {
                        const randomNumSymbol = Math.floor(Math.random() * symbolsLength);  // Generate a random index for symbols
                        password += symbols[randomNumSymbol];  // Append the symbol to the password
                    } else {
                        i--;  // Decrease the counter to retry if no symbols are selected
                    }
                    break;

                default:
                    break;
            }
        }

        // Display the generated password and set text color to black
        document.querySelector(".password").textContent = password;  // Changed to textContent for correct text display
        document.querySelector(".password").style.color = "black";  // Set color to black
    } else {
        // Display a message if no checkboxes are selected
        document.querySelector(".password").textContent = "Please tick any of the checkboxes.";  // Inform the user to select options
        document.querySelector(".password").style.color = "Orange";  // Set color to orange for the warning message
    }
}

// Event listener for the clipboard copy button
document.querySelector(".ri-clipboard-line").addEventListener('click', function(e) {
    if (password) {
        // Copy the password to the clipboard
        navigator.clipboard.writeText(password).then(function() {
            alert('Password copied to clipboard');  // Alert on successful copy
        }).catch(function(err) {
            alert('Password wasn\'t copied!');  // Alert on copy failure
        });
    } else {
        alert('No password to copy');  // Inform the user if there's no password to copy
    }
}, false);
