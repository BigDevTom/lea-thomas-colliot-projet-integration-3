document.getElementById("submitButton").addEventListener("click", function() {
    let emailInput = document.getElementById("emailInput").value;

    if(emailInput === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "none";
    }
})

document.getElementById("submitButtonAccess").addEventListener("click", function() {
    let emailInputAccess = document.getElementById("emailInputAccess").value;

    if(emailInputAccess === "") {
        document.getElementById("errorMessageAccess").style.display = "block";
    } else {
        document.getElementById("errorMessageAccess").style.display = "none";
    }
})