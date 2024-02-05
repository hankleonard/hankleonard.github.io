// Get the current hour
const currentHour = new Date().getHours();

// Get the welcome message element
const welcomeMessageElement = document.getElementById('welcome-message');

// Define the messages for different times of the day
let welcomeMessage = '';
if (currentHour < 2) {
    welcomeMessage = 'Go to bed, Hank!'; // Between midnight and 2 AM
} else if (currentHour < 6) {
    welcomeMessage = 'Go to bed, Hank!'; // Between 2 AM and 4:30 AM
} else if (currentHour < 12) {
    welcomeMessage = 'Good morning, Hank!';
} else if (currentHour < 18) {
    welcomeMessage = 'Good afternoon, Hank!';
} else {
    welcomeMessage = 'Good evening, Hank!';
}

// Set the welcome message
welcomeMessageElement.textContent = welcomeMessage;

