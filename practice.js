// Simulated login function with a callback
function performLogin(username, password, callback) {
    setTimeout(() => {
        if (username === "user" && password === "pass") {
            callback(null, "Login successful!");
        } else {
            callback("Invalid credentials", null);
        }
    }, 2000); // Simulating a 2-second delay for the login request
}

// Event handler for form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resultMessage = document.getElementById("resultMessage");

    resultMessage.textContent = "Logging in...";

    // Call the performLogin function with a callback
    performLogin(username, password, (error, message) => {
        if (error) {
            resultMessage.textContent = "Login failed: " + error;
        } else {
            resultMessage.textContent = message;
        }
    });
});
