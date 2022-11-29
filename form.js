function submitForm() {
    firstName = document.getElementById('first-name');
    email = document.getElementById('e-mail');
    pwd = document.getElementById('pwd');
    cpwd = document.getElementById('cpwd');

    let submission = true;

    if (firstName.value === '') {
        firstName.classList.add('error');
        document.getElementById('f').classList.add('f');
        submission = false;
    }
    if (email.value === '') {
        email.classList.add('error');
        document.getElementById('e').classList.add('e');
        submission = false;
    }
    if (pwd.value === '' && cpwd.value === '') {
        pwd.classList.add('error');
        document.getElementById('p').classList.add('p');
        submission = false;
    }
    if (pwd.value !== cpwd.value && (pwd.value !== '' || cpwd.value !== '')) {
        pwd.classList.add('error');
        cpwd.classList.add('error');
        document.getElementById('p').classList.add('cp');
        submission = false;
    }

    if (submission === true) document.querySelector('form').submit();
}

submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', submitForm);

inputs = document.querySelectorAll('.indiv');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        input.querySelector('input').classList.remove('error');
        input.querySelector('span').className = '';
    });
});