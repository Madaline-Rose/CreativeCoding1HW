document.getElementById('forumForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true; 

    const nameInput = document.getElementById('txtName');
    const emailInput = document.getElementById('txtEmail');
    const tcInput = document.getElementById('tc');

    // Name validation
    if (nameInput.value.trim() === "") {
        nameInput.classList.add('error');
        if (isValid) {
            nameInput.focus(); 
        }
        isValid = false; 
    } else {
        nameInput.classList.remove('error');
    }

    // Email validation
    if (emailInput.value.trim() === "") {
        emailInput.classList.add('error');
        if (isValid) {
            emailInput.focus(); 
        }
        isValid = false; 
    } else {
        emailInput.classList.remove('error');
    }

    // Terms and conditions validation
    if (!tcInput.checked) { 
        tcInput.classList.add('error');
        if (isValid) {
            tcInput.focus(); 
        }
        isValid = false; 
    } else {
        tcInput.classList.remove('error');
    }

    if (isValid) {
        alert("Form submitted successfully!");

    document.getElementById('forumForm').reset(); // reset

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    tcInput.classList.remove('error');
    }
});