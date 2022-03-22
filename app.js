const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();
});

function checkinputs () {
    const usernameValue = form.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(username === '' ) {
    setErrorFor(username, "username cannot be blank")
    } else {
        setSuccessFor(username)
    }
    if(email === '' ) {
    setErrorFor(email, "email cannot be blank")
    } else if (!isemail(emailValue)) {
        setErrorFor(email, 'email is not valid')
    } else {
        setSuccessFor(email)
    }

    if(password === '' ) {
        setErrorFor(password, "password cannot be blank")
        } else {
            setSuccessFor(password)
        }
    if(password2 === '' ) {
        setErrorFor(password2, "password cannot be blank")
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'password does not match')
        } else {setSuccessFor(password2)}
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const email = formControl.querySelector;
        
        small.innerText = message;

        formControl.className = 'form-control error'
    }

    function isemail (email) {
        return
       (email);
    }
}