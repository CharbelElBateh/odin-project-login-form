var isNew = true;
const form = document.querySelector('form');
let submissionType = document.querySelector('#submissionType');
const text = document.querySelector('.submissionText');

const FIRSTNAME = {
    for: 'FIRST NAME',
    type: 'text',
    placeholder: 'Thor',
};
const LASTNAME = {
    for: 'LAST NAME',
    type: 'text',
    placeholder: 'Odinson',
};
const EMAIL = {
    for: 'EMAIL',
    type: 'email',
    placeholder: 'example@example.com'
};
const PHONENUMBER = {
    for: 'PHONE NUMBER',
    type: 'number',
    placeholder: '00000000'
};
const PASSWORD = {
    for: 'PASSWORD',
    type: 'password',
};
const CONFIRMPASSWORD = {
    for: 'CONFIRMPASSWORD',
    type: 'password'
};
const setup = () => {
    const fields = isNew? [FIRSTNAME,LASTNAME,EMAIL,PHONENUMBER,PASSWORD,CONFIRMPASSWORD] : [EMAIL , PASSWORD];

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        var mainDiv = document.createElement('div');
        var nestedDiv1 = document.createElement('div');

        var label = document.createElement('label');
            label.htmlFor = field.for;
            label.innerText = field.for;

        var input = document.createElement('input');
        input.id = field.for;
        input.type = field.type;
        input.placeholder = field.placeholder? field.placeholder: '';
        input.required = true;

        nestedDiv1.appendChild(label);
        mainDiv.appendChild(nestedDiv1);
        mainDiv.appendChild(input);
        form.appendChild(mainDiv);
    }

    const button = document.createElement('button');
    button.type="submit";
    button.id="Submit";
    button.innerText = 'Create Account';
    form.appendChild(button);
}

window.onload = setup();

submissionType.onclick = () => {
    isNew = !isNew;
    form.innerHTML = '';
    setup();
    text.innerHTML = isNew? "Already have an account? <a href='' id='submissionType'>Log in</a>"
    : "New user? <a href='' id='submissionType'></a>";
    submissionType = document.querySelector('#submissionType');
    submissionType.innerText = isNew? 'Log in': 'Sign up';
    return false;
}

form.onsubmit = () => {
    return false;
}
let submit = document.querySelector('#Submit');
submit.onclick = () => {
    if(isNew){
    const password = document.querySelector('#PASSWORD');
    const confirmation = document.querySelector('#CONFIRMPASSWORD');
        if(password.value && password.value !== confirmation.value){
            password.classList.add="noMatch";
            confirmation.classList.add="noMatch";
            form.innerHTML += "<p style='color:red; font-size:12px'>*Passwords do not match</p>"
            return false;
        }
    } 
}