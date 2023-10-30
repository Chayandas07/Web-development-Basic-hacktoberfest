// Generate a random CAPTCHA string
function generateCaptcha() {
  let captcha = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 6; i++) { // You can change the number of characters in the CAPTCHA
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Display the generated CAPTCHA
function displayCaptcha() {
  const captchaDiv = document.getElementById("captcha");
  captchaDiv.textContent = generateCaptcha();
}

// Validate the user's input
function validateCaptcha() {
  const userInput = document.getElementById("captcha-input").value;
  const captchaDiv = document.getElementById("captcha");
  const statusDiv = document.getElementById("captcha-status");

  if (userInput === captchaDiv.textContent) {
      statusDiv.textContent = "CAPTCHA is correct!";
  } else {
      statusDiv.textContent = "CAPTCHA is incorrect. Please try again.";
      displayCaptcha(); // Refresh the CAPTCHA on incorrect input
  }
}

// Initialize CAPTCHA
displayCaptcha();
