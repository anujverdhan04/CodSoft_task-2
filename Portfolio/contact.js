


function openContactForm() {
    document.getElementById("contact-form-overlay").style.display = "block";
}


function closeContactForm() {
    document.getElementById("contact-form-overlay").style.display = "none";
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    closeContactForm();
});
