// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordInput = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  const length = prompt('Enter password length (between 8 and 128 characters):');
  if (!length || length < 8 || length > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return;
  }

  const includeLowercase = confirm('Include lowercase letters?');
  const includeUppercase = confirm('Include uppercase letters?');
  const includeNumbers = confirm('Include numbers?');
  const includeSpecialChars = confirm('Include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
    alert('You must select at least one character type to include in the password.');
    return;
  }

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/';

  let availableChars = '';

  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeNumbers) {
    availableChars += numericChars;
  }
  if (includeSpecialChars) {
    availableChars += specialChars;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  passwordInput.value = password;
}


/*  These were moved around in the code.
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
