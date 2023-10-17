let ElementInput_UserName = document.querySelector('.js_input_username');
let ElementInput_Password = document.querySelector('.js_input_password');
let ElementInput_ConfirmPassword = document.querySelector('.js_confirm_password');

let ButtonElement_LogIn = document.querySelector('.js_button_log_in');
let ButtonElement_SignUp = document.querySelector('.js_button_sign_up');

let ID_value;
let Password_value;
let Confirm_password_value;

let ID_check;
let Password_check;

let login_check;

let User = JSON.parse(localStorage.getItem('User')) || [{
    UserName: ElementInput_UserName.value,
    Password: ElementInput_Password.value
}];

ButtonElement_LogIn.addEventListener('click', () => {
    // alert(`
    // UserName: ${ElementInput_UserName.value}
    // Password: ${ElementInput_Password.value}
    // `);

    LOG_IN();
});

ButtonElement_SignUp.addEventListener('click', () => {
    GetNewAccout();

    for (let i = 0; i < User.length; i++) {
        const accout = User[i];
        console.log(`ID: ${User[i].UserName}; PW: ${User[i].Password}`);
    }
})

// FUNCTION AREA

function GetNewAccout() {

    ID_value = ElementInput_UserName.value;
    Password_value = ElementInput_Password.value;
    Confirm_password_value = ElementInput_ConfirmPassword.value;

    ID_check = 1;
    Password_check = 1;

    if (ID_value != '' && Password_value != '' && Confirm_password_value != '') {

        for (let i = 0; i < User.length; i++) {
            const accout = User[i];
            if (User[i].UserName === ID_value) {
                ID_check = 0;
            }
            if (User[i].Password === Password_value) {
                Password_check = 0;
            }
        }

        if (Password_value === Confirm_password_value && ID_check === 1 && Password_check === 1) {
            User.push({
                UserName: ID_value,
                Password: Password_value
            })

            alert('Creating new account successfully');
        }
        else {
            alert('Creating new account unsuccessfully');
        }
    }
    else {
        alert('Creating new account unsuccessfully');
    }
    
    localStorage.setItem('User', JSON.stringify(User));

    ElementInput_UserName.value = '';
    ElementInput_Password.value = '';
    ElementInput_ConfirmPassword.value = '';
}

function LOG_IN() {

    ID_value = ElementInput_UserName.value;
    Password_value = ElementInput_Password.value;

    login_check = 0;

    if (ID_value != '' && Password_value != '') {
        for (let i = 0; i < User.length; i++) {
            const account = User[i];
            if (User[i].UserName === ID_value && User[i].Password === Password_value) {
                login_check = 1;
                break;
            }
        }

        if (login_check === 1) {
            alert('Log in successfully');
        }
        else {
            alert('Log in unsuccessfully');
        }
    }
    else {
        alert('Log in unsuccessfully');
    }

    ElementInput_UserName.value = '';
    ElementInput_Password.value = '';
    ElementInput_ConfirmPassword.value = '';
}