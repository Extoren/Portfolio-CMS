document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("form-login");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const formData = new FormData(loginForm);
        
        // Use Fetch API to send the form data to the server
        fetch("/login", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            // Assuming the result contains the response from the server
            console.log(result);
            if (result === "Login successful") {
                // Redirect to the admin panel or update the UI accordingly
                window.location.href = "/admin";
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});




