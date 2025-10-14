document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error');
  
    if (user === 'admin' && pass === '123456') {
      alert('Login successful!');
      window.location.href = "dashboard.html"; // or next page
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });
  