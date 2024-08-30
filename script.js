// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // This allows you to send the data to the server.
    console.log('Login attempt:', { username, password });
    alert('Please enter correct username and password.');
});