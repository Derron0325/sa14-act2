function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
  
    let isValid = true;
  
    // Validate username
    const usernameError = document.getElementById('usernameError');
    if (username.length < 6) {
      usernameError.textContent = 'Username must be at least 6 characters';
      isValid = false;
    } else {
      usernameError.textContent = '';
    }
  
    // Validate email
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Validate password
    const passwordError = document.getElementById('passwordError');
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    if (password.length < 8 || !uppercaseRegex.test(password) || !numberRegex.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters and contain at least one capital letter and one number';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    if (isValid) {
      // Submit the form
      document.getElementById('registrationForm').submit();
    }
  }