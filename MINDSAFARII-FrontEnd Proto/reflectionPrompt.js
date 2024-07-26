const questions = [
    "List 3 things that made you happy this week...",
    "What are three positive moments you experienced this week?",
    "Can you recall three instances that made you smile lately?",
    "Reflect on three things that made you happy in the past few days...",
    "Describe three things that lifted your spirits this week...",
    "Share three reasons you felt joyful or content recently...",
    "List three things that made your week enjoyable...",
    "What are three things that added happiness to your days recently..."
];

// Function to generate a random question
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const randomQuestion = getRandomQuestion();
    questionContainer.textContent = randomQuestion;
}

// Initial display of a random question
displayQuestion();

// Event listener for the button to change prompts
document.getElementById('change-prompt-btn').addEventListener('click', () => {
    displayQuestion();
});

// Event listener for input field changes
const userInput = document.getElementById('userInput');
userInput.addEventListener('input', () => {
    if (userInput.value.trim() !== '') {
        userInput.removeAttribute('placeholder');
    } else {
        userInput.setAttribute('placeholder', 'I am thankful for...');
    }
});

// Function to clear the input field and focus back on it
function clearInputAndFocus() {
    userInput.value = ''; // Clear the input field
    userInput.focus(); // Focus back on the input field
}