
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');
const spans = document.querySelectorAll("span");
const form = document.querySelector("login-form"); // Corrected the form selector

let isPasswordVisible = false;

toggleButton.addEventListener('click', function () {
  isPasswordVisible = !isPasswordVisible;
  if (isPasswordVisible) {
    passwordInput.type = 'text';
    toggleButton.src = 'eye-open.png';
    toggleButton.alt = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    toggleButton.src = 'eye-close.png';
    toggleButton.alt = 'Show Password';
  }
});

form.addEventListener("submit", function (event) { // Changed to "submit" event
  event.preventDefault();

  const elements = form.elements;
  const fname = elements['username'];
  const password = elements['password'];
  
  let isVerified = true;

  if (fname.value.length > 15 || fname.value.length === 0) {
    isVerified = false;
    const spanError = fname.nextElementSibling;
    spanError.style.display = "inline";
    spanError.innerText = "The username is too long or is empty";
  }

  if (password.value.length > 10 || password.value.length === 0) {
    isVerified = false;
    const spanError = password.nextElementSibling;
    spanError.style.display = "inline";
    spanError.innerText = "The password is too long or is empty";
  }

  if (isVerified) {
    for (let span of spans) {
      span.style.display = "none";
    }

    console.log({ fname: fname.value, password: password.value });
  } else {
    console.log("Is not verified! You should correct your data");
  }
});

