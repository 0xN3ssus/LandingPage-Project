function checkLogin() {
  // Retrieve input values
  var loginUsername = document.getElementById('loginUsername').value;
  var loginPassword = document.getElementById('loginPassword').value;

  // Retrieve stored user data
  var storedUserData = localStorage.getItem('userData');

  // Check if stored user data iS exists
  if (storedUserData) {
    // parse stored user data
    var userData = JSON.parse(storedUserData);

    // Check if input credentials match stored data
    if (loginUsername === userData.username && loginPassword === userData.password) {
      // Redirect to dashboard.html with username param
      window.location.href = 'dashboard.html?username=' + encodeURIComponent(userData.username);
    } else {
      alert('Invalid username or password');
    }
  } else {
    alert('No user data found. Please register first.');
  }
}
