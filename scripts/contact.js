import { baseUrl } from "./baseUrl.js";
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('All fields are required!');
      return;
    }
  
    // Sending data to backend
    fetch('${baseUrl}', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message || 'Message sent successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    });
  });
  