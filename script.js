function validateSyntax() {
  // Get the input value from the "petInput" field
  let input = document.getElementById("petInput").value;

  // Initialize a variable for the result message
  let result = "";

 // Define the pattern: "pet_" followed by letters or numbers
  let regex = new RegExp("^pet_[a-zA-Z0-9]+$");

  // Test if the input matches the  pattern
  if (regex.test(input)) {

    // If the input matches the pattern, set the result message for valid syntax
    result = "Syntax is valid!  \u{1F7E2}"; 
  } else {
    // If the input doesn't matches the pattern, set the result message for invalid syntax
    result = "Syntax is invalid!  \u{1F534}";
  }

  // Display the result message
  document.getElementById("result").innerText = result;
}
