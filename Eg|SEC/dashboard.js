// Retrieve the username from the URL parameters
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

// Check if username is present
if (username) {
  // Display greeting on the dashboard
  document.getElementById('greeting').innerText = 'Hello, ' + username;
} else {
  // Handle the case where username is not present
  alert('Username not found. Please log in.');
}
