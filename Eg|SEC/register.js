function storeData() {
  // Retrieve input values
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Create an object to store user data
  var userData = {
    username: username,
    email: email,
    password: password
  };


  // Store data
  localStorage.setItem('userData', JSON.stringify(userData));

  // alert("Registration successful!");;;;;;w

  // Redirect to login.html
  window.location.href = 'login.html';
}
