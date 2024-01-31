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

  // Perform any additional logic or validation as needed

  // Store data (you can use localStorage, send to a server, etc.)
  localStorage.setItem('userData', JSON.stringify(userData));

  // Optionally, you can redirect the user or perform other actions after registration

  // alert("Registration successful!");

  // Redirect to login.html
  window.location.href = 'login.html';
}
