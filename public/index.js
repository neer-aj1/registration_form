const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('pnumber');
const password = document.getElementById('pass');
const confirmpass = document.getElementById('cpass');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

const validateEmail = (email) => {
    var atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = email.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === email.length - 1) return false;
    return true;
}

const setError= (input, err)=>{
    const formControl = input.parentElement;
    const error = formControl.querySelector('.error');
    error.innerHTML = err;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

const setSuccess = element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateForm = () => {
    const fnameval = fname.value.trim();
    const lnameval = lname.value.trim();
    const emailval = email.value.trim();
    const phoneval = pnumber.value.trim();
    const passwordval = pass.value.trim();
    const confirmpassval = cpass.value.trim();

    if(fnameval===''){
        setError(fname, 'First Name is required');
    }else{
        setSuccess(fname);
    }
    if(lnameval===''){
        setError(lname, 'Last Name is required');
    }else{
        setSuccess(lname);
    }

    if(emailval===''){
        setError(email, 'Email is required');
    }
    else{
        setSuccess(email);
    }

    if(phoneval===''){
        setError(pnumber, 'Phone Number is required');
    }else if(phoneval.length!==10){
        setError(pnumber, 'Phone Number must be of 10 digits');
    }else{
        setSuccess(pnumber);
    }
    if(passwordval===''){
        setError(pass, 'Password is required');
    }else if(passwordval.length <= 5){
        setError(pass, 'Password must be at least 5 characters');
    }
    else{
        setSuccess(pass);
    }
    if(confirmpassval===''){
        setError(confirmpass, 'Confirm Password is required');
    }else if(confirmpassval!=passwordval){
        setError(confirmpass, 'Passwords do not match');
    }
    else{
        setSuccess(confirmpass);
    }
}