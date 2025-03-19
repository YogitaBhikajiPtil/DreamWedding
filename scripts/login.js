import { baseUrl } from "./baseUrl.js";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    if (!email || !password) {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    // Fetch users from your API
    fetch(`${baseUrl}/DreamWedding`)
    .then((res) => res.json())
    .then((data) => {
        let user = data.users.find((el) => el.email === email && el.password === password);

        if (!user) {
            errorMessage.textContent = "Invalid email or password!";
            return;
        }

        errorMessage.textContent = "";
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect after successful login
    })
    .catch(() => {
        errorMessage.textContent = "Error connecting to server. Please try again later.";
    });
});

