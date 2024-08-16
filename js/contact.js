document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});






document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    // Simple validation to check if all fields are filled
    if (!name || !email || !password || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    // Display form data
    document.getElementById('formResult').innerHTML = `
        <h2>Form Submitted!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;
});




document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var feedback = document.getElementById('feedback').value;
    var messageElement = document.getElementById('message');

    if (feedback.trim() === '') {
        messageElement.textContent = 'Feedback cannot be empty!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Thank you for your feedback!';
        messageElement.style.color = 'green';
        // Here you could handle the form data (e.g., send it to a server)
        // For now, we just clear the textarea
        document.getElementById('feedback').value = '';
    }
});


function updateDotColor() {
    const statusSelect = document.getElementById('status');
    const statusDot = document.getElementById('status-dot');
    const selectedValue = statusSelect.value;

    statusDot.className = ''; // Reset class

    switch (selectedValue) {
        case 'Active':
            statusDot.classList.add('green');
            break;
        case 'Inactive':
            statusDot.classList.add('orange');
            break;
        case 'Deactivated':
            statusDot.classList.add('red');
            break;
        default:
            break;
    }
}

// Ensure the initial color is set correctly
updateDotColor();


