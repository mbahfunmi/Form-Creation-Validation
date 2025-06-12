document.addEventListener('DOMContentLoaded', function() {
    // 1. Form Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission and Event Prevention
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting normally

        // 3. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Initialize Validation Variables
        let isValid = true; // Assume valid until proven otherwise
        const messages = []; // Array to store error messages

        // 5. Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 6. Email Validation
        // A simple check for '@' and '.' characters for basic validity
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // 7. Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 8. Displaying Feedback
        feedbackDiv.style.display = 'block'; // Make the feedback div visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
            // In a real application, you would send the data to a server here.
            // For now, we'll just show the success message.
            form.reset(); // Clear the form fields after successful registration
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
            feedbackDiv.style.backgroundColor = "#f8d7da"; // Light red background
        }
    });
});