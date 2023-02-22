const form = document.getElementById('form'); //form elements
const username = document.getElementById('username'); //username input elements
const email = document.getElementById('email'); //email input elements
const password = document.getElementById('password'); //password input elements
const repassword = document.getElementById('repassword'); //repassword input elements

//input flag
function error(input,message){
    input.className = 'form-control is-invalid'; //error function works and is-invalid css class is used together with form-control class
    const div = input.nextElementSibling; //the element to print the message (the element immediately after the input, div)
    div.innerText = message; //message printed inside div
    div.className = 'invalid-feedback'; //Added invalid-feedback class to the div where the message will be printed
}

//input is correct
function success(input){
    input.className = 'form-control is-valid' //success function works and is-valid css class is used together with form-control class
}

//mail verification
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); //translate regex expression
}

//data length control
function checkLength(input,min,max){
    if(input.value.length < min){ //minumum character control
        error(input,`${input.id} should be ${min} character minumum`);
    }else if(input.value.length > max){ //maximum character control
        error(input,`${input.id} should be ${max} character minumum`);
    }else{ //if it meets the character length conditions
        success(input);
    }
}

//password match check
function checkPasswords(pass1,pass2){
    if(pass1.value !== pass2.value){
        error(pass2,'Passwords do not match!');
    }else{
        success(pass2);
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){  //username inputu if left blank
        error(username,'Username field cannot be left blank!'); 
    }else{ 
        checkLength(username,6,12);   
    }if(email.value === ''){ //email inputu if left blank
        error(email,'Email field cannot be left blank!');
    }else if(!validateEmail(email.value)){ //mail format kontrolü
        error(email,'Enter your e-mail address in the appropriate format!');
    }else{
        success(email);
    }if(password.value === ''){ //password inputu if left blank
       error(password,'Password field cannot be left blank!');
    }else{
        checkLength(password,6,30);
    }if(repassword.value === ''){ //repassword inputu if left blank
        error(repassword,'Password repeat field cannot be left blank!');
    }else{
        checkPasswords(password,repassword);
    }
});