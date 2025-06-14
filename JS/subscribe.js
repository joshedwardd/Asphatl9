document.getElementById('subscribeForm').addEventListener('submit', function(event){
  
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('termsError').textContent = '';

    let isValid = true;
    const name = document.getElementById('name').value;
    if (!name){
        isValid = false;
        document.getElementById('nameError');
    }


    const email = document.getElementById('email').value;
    if (!email) {
        isValid = false;
        document.getElementById('emailError');
    } else if(!email.endsWith('@gmail.com')){
        isValid = false;
        document.getElementById('emailError').textContent = 'Invalid email format.';
    }


    const dob = document.getElementById('dob').value;
    if (!dob) {
        isValid = false;
        document.getElementById('dobError');
    }
 
    const genderMale = document.getElementById('male').checked;
    const genderFemale = document.getElementById('female').checked;
    if (!genderMale && !genderFemale) {
        isValid = false;
        document.getElementById('genderError');
    }


    const terms = document.getElementById('terms').checked;
    if (!terms) {
        isValid = false;
        document.getElementById('termsError');
    }

    if (!isValid) {
        event.preventDefault();
    }else{
        event.preventDefault(); 
        document.getElementById('successMessage').style.display = 'block'; 
        setTimeout(function() {
            window.location.href = 'home.html';
        },1500);
    }
});

function goBack() {
    window.location.href = 'home.html';
}