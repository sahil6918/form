// Purpose: To validate the form and display an error message if the passwords do not match.

 
      function validateForm() {
      let password = document.getElementById("password").value
      let confirmPassword = document.getElementById("confirmPassword").value;

            let errorMessage = document.getElementById("error-message");

            if (password !== confirmPassword) {
                errorMessage.textContent = "Passwords do not match!";
                return false;
            } 
            
            else {
                errorMessage.textContent = "";
                alert("Form submitted successfully!");
                return true;
            }
            
        }
