function openBookingForm(venueName) {
    document.getElementById('venueTitle').innerText = `Book Your Wedding at ${venueName}`;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const venueName = document.getElementById('venueTitle').innerText.replace('Book Your Wedding at ', '');
    const date = document.getElementById('weddingDate').value;
    const time = document.getElementById('weddingTime').value;

    const bookingData = { venueName, date, time };

    fetch('${baseUrl}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Booking confirmed!');
        closeModal();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Booking failed. Please try again.');
    });
});