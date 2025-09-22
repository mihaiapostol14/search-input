const inputBox = document.querySelector('.input-box');

// Define a function to transform the input text to capitalize the first letter and lowercase the rest
function TrasnformtoCapitalizeText() {
  // Add an event listener to the input box for the 'input' event
  inputBox.addEventListener('input', function () {
    // On input, update the value of the input box
    // The first character is converted to uppercase and the rest of the string is converted to lowercase
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase()
  })
}

// Call the function to apply the transformation to the input box
TrasnformtoCapitalizeText()