document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Form data to send in POST request
  const formData = {
    name: name,
    phone: phone
  };

  // Your Google Apps Script web app URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbwEVk-6WE_argVQw8tKYBPEJYVQD5lvH2X36fRvyi5nBC6ZCYv8LCo9CgTD0OQrRj4o/exec";  // Replace with your Apps Script URL

  // Send POST request to Google Apps Script
  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting the form.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  });
});