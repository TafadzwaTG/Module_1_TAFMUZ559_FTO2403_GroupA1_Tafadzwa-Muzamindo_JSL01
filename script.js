function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let result = "";

  let regex = new RegExp("^pet_[a-zA-Z0-9]+$");

  if (regex.test(input)) {
    result = "Syntax is valid!  \u{1F7E2}";
  } else { 
    result = "Syntax is invalid!  \u{1F534}";
  }

  document.getElementById("result").innerText = result;
}
