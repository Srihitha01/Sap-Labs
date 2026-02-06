 function validateForm() {
      const form = document.getElementById("loginForm");
      if (!form.checkValidity()) {
        alert("Please fill all fields and accept Terms & Conditions");
        return false;
      }
      return true;
    }

    function loginUser() {
      if (validateForm()) {
        window.location.href = "ow.html";
      }
    }

    function loginCustomer() {
      if (validateForm()) {
        window.location.href = "do.html";
      }
    }
