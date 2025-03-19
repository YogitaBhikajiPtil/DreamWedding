import { baseUrl } from "./baseUrl.js";

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('error-message');
 
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    errorMessage.textContent = "";

    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return;
    }
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Enter a valid email address!";
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // Check if user already exists
    fetch(`${baseUrl}/DreamWedding`)
    .then((res) => res.json())
    .then((data) => {
        let userExists = data.users.find((el) => el.email === email);

        if (userExists) {
            alert("User already registered. Please login.");
        } else {
            // Add the new user
            data.users.push({ name, email, password });

            // Send updated data back to the server
            fetch(`${baseUrl}/DreamWedding`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ users: data.users })
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to register. Please try again.");
                }
                return response.json();
            })
            .then(() => {
                alert("Signup successful! Redirecting to login.");
                window.location.href = "login.html";
            })
            .catch((error) => {
                errorMessage.textContent = error.message;
            });
        }
    })
    .catch(() => {
        errorMessage.textContent = "Error connecting to server. Please try again later.";
    });
});
