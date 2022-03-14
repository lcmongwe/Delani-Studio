function formReset() {
  document.getElementById("form_data").reset();
}

function onClick() {
  var name = document.getElementById("name").value;
  const output = document.getElementById("message");
  output.innerHTML =
    "Hey! " + name + " " + "thanks for your feedback your message was recieved";

  formReset();
}
