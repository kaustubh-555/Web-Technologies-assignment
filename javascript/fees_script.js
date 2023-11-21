function getInputValue() {
    // Retrieving values from the form
    var selectedCourse = document.getElementById("course").value;
    var uidDigits = document.getElementById("uid").value;
    var studentName = document.getElementById("demo").textContent; // assuming this is filled dynamically
    var pendingFees = document.getElementById("demo1").textContent; // assuming this is filled dynamically
  
    // Creating an object to hold the form data
    var formData = {
      course: selectedCourse,
      uidDigits: uidDigits,
      studentName: studentName,
      pendingFees: pendingFees
    };
  
    // Log the collected data to the console (for testing purposes)
    console.log(formData);
  
    // You can perform further actions with the collected data here
    // For instance, send it to the server via AJAX, display it, or perform calculations
  }
  
  // Function to send an email - assuming it handles the email sending logic
  function sendmail() {
    // Implement your logic to send an email here
    // You can access form data and send it via an API or another service
  }
  