function submitForm() {
    firstName = document.getElementById('first-name');
    email = document.getElementById('e-mail');
    pwd = document.getElementById('pwd');
    cpwd = document.getElementById('cpwd');
}

submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function() {
    document.querySelector('form').submit();
});