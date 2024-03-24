
var nameError = document.getElementById("name-error");
var dobError = document.getElementById("dob-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var confirmpasswordError = document.getElementById("confirmpassword");
var submitError = document.getElementById("submit-error");
var btn = document.getElementById("btn");


function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
   

    if(!name.match(/^[A-Z][A-Za-z -]{6,}$/)){
        if (!/^[A-Z]/.test(name)) {
            nameError.innerHTML = "First letter must be capitalized";
        } else {
            nameError.innerHTML = "Write full name";
        }
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    
    return true;
}

function validatedateofbirth(){
    let currentDate = new Date;
    let dobb = document.getElementById('dob').value;
    
    let dobValue = new Date(dobb);

    if(dobValue <= currentDate){
        dobError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
        dobError.style.color='Green';
        return true;
    }else{
        dobError.style.color='Red';
        dobError.innerHTML='Must be a valid date in the past';
        return false;
    }
}



function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }

    if(!phone.match(/^[6-9]{1}[0-9]{9}$/)){
        phoneError.innerHTML = "Only digits please.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }



    if(!email.match(/^([a-zA-Z0-9]+@[a-z]+\.[a-z]{2,})$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatepasswordError(){
    var password = document.getElementById('contact-password').value;
    
    if(password.length == 0){
        passwordError.innerHTML = 'Password is required'
        return false;
    }else if(password.length<8){
        passwordError.innerHTML='Must be at least 8 characters'
        return false;
    }else if(!/[A-Z]/.test(password)){
        passwordError.innerHTML = "Atleast one uppercase"
        return false;
    }else if(!/[a-z]/.test(password)){
        passwordError.innerHTML = "Atleast one lowercase"
        return false;
    }else if(!/[\@\#\*\-]/.test(password)){
        passwordError.innerHTML = "Atleast one special charactor { @ # * - }"
        return false;
    }else if(!/[0-9]/.test(password)){
        passwordError.innerHTML = "Atleast one number"
        return false;
    }else{
        passwordError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    }


function validateconfirmpasswordError(){
    var password = document.getElementById('contact-password').value;
    var confirmpassword = document.getElementById('contact-confirmpassword').value;
    
    if(password == confirmpassword){
        confirmpasswordError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        btn.style.background = "#141a34";
        btn.style.cursor ="pointer";
        return true;
    }else{
        confirmpasswordError.innerHTML='Password should be same as before';
        btn.style.background = "#141a3473";
        btn.style.cursor ="not-allowed";
        return false;
    }
    
}

    

function validateForm() {
    if (!validateName() || !validatedateofbirth() || !validatePhone() || !validateEmail() || !validatepasswordError() || !validateconfirmpasswordError()) {
        submitError.style.display = 'block';
        submitError.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    } else {
        // All validations passed, so form is submitted
        alert('Form submitted successfully!');
        return true;
    }
}





// countdown timer
const startingTime=5;
let time= startingTime*60;

let countDown=document.getElementById("countdown");

window.onload = loadCountdown();

function loadCountdown(){
setInterval(updateCountdown,1000);
}

function updateCountdown(){
    let minute=Math.floor(time/60);
    let seconds=time%60;
    seconds = seconds<10? '0'+seconds : seconds;

    countDown.innerHTML = `<br> <i class="fa-regular fa-clock"></i> ${minute}:${seconds}`;
    time--;
    if(time===0){
        location.reload();
    }
}



const showPassword1 = document.querySelector("#show-password1");
const passwordField1 = document.querySelector("#contact-password");

showPassword1.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    const type = passwordField1.getAttribute("type")
    === "password" ? "text" : "password";
    passwordField1.setAttribute("type",type)
});

const showPassword2 = document.querySelector("#show-password2");
const passwordField2 = document.querySelector("#contact-confirmpassword");

showPassword2.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    const type = passwordField2.getAttribute("type")
    === "password" ? "text" : "password";
    passwordField2.setAttribute("type",type)
});




// Add New Input

function addInputField() {
    
    var inputType = prompt("Enter the input type (text, date, tel, email, password, etc.):");
    var labelName = prompt("Enter the label name for the new input field:");

    // Create a new div element
    var newInputDiv = document.createElement("div");
    newInputDiv.classList.add('input-group')
    var newLabel = document.createElement("label");   
    newLabel.textContent = labelName;
    var newInput = document.createElement("input");

    newInput.setAttribute("type", inputType);
    newInput.setAttribute("placeholder", "Enter your " + labelName);

    // Append the new label and input elements to the div
    newInputDiv.appendChild(newLabel);
    newInputDiv.appendChild(newInput);

    var buttonElement = document.getElementById("btnnew");
    // Append the new div to the dynamic-inputs-container
    buttonElement.parentNode.insertBefore(newInputDiv, buttonElement);
    
}





