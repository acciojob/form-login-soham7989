function getFormvalue(event) {
  event.preventDefault(); // stops page refresh

  // Get values with trimming
  let firstName = document.querySelector('input[name="fname"]').value.trim();
  let lastName = document.querySelector('input[name="lname"]').value.trim();

  // Full name
  let fullName = `${firstName} ${lastName}`.trim();

  // Show alert
  alert(fullName);
}

