// Get the current date
const currentDate = new Date();
const currentHour = currentDate.getHours();

// Get the welcome message element
const welcomeMessageElement = document.getElementById('welcome-message');

// Define the messages for different dates
let welcomeMessage = '';

// Check if it's a special date and set the message accordingly
if (currentDate.getMonth() === 11 && currentDate.getDate() === 25) {
    welcomeMessage = 'Merry Christmas!';
} else if (currentDate.getMonth() === 6 && currentDate.getDate() === 4) {
    welcomeMessage = 'God bless the USA!';
} else if (currentDate.getMonth() === 3 && currentDate.getDate() === 17) {
    welcomeMessage = "Happy St. Patrick's Day!"; 
} else if (currentDate.getMonth() === 3 && currentDate.getDate() === 17) {
    welcomeMessage = 'Happy Birthday, Hank!';
} else if (currentHour < 2) {
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


