const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('pnumber');
const password = document.getElementById('pass');
const confirmpass = document.getElementById('cpass');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateform();
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const setError= (input, err)=>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerHTML = err;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('small');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateform = () => {
    const fnameVal = fname.value.trim();
    const lname = lname.value.trim();
    const email = email.value.trim();
    const phone = pnumber.value.trim();
    const password = pass.value.trim();
    const confirmpass = cpass.value.trim();

    if(fnameVal===""){
        setError(fnameVal, 'First Name is required');
    }else{
        setSuccess(fnameVal);
    }
    if(lname===""){
        setError(lname, 'Last Name is required');
    }else{
        setSuccess(lname);
    }
    if(email===""){
        setError(email, 'Email is required');
    }else if(!validateEmail(email)){
        setError(email, 'Email is not valid');
    }
    else{
        setSuccess(email);
    }
}