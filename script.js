function validateSyntax() {
  let input = document.getElementById("petInput").value;

  let result = "";

  let regex = new RegExp("^pet_[a-zA-Z0-9]+$");

  if (regex.test(input)) {
    result = "Syntax is valid!";
  } else {
    result = "Syntax is invalid!";
  }

  document.getElementById("result").innerText = result;
}
