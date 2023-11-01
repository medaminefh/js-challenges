const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');

let isPasswordVisible = false

toggleButton.addEventListener('click', function () {
  isPasswordVisible = !isPasswordVisible
  if (isPasswordVisible) {
    passwordInput.type = 'text'
    toggleButton.src = 'eye-open.png' 
    toggleButton.alt = 'Hide Password'
  } else {
    passwordInput.type = 'password'
    toggleButton.src = 'eye-close.png' 
    toggleButton.alt = 'Show Password'
  }
});
