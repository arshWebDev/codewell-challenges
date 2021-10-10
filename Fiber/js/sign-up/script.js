
// --------------------- image slider animation --------------------- //
let radioBtnNumber = 1;

setInterval(function(){
  document.getElementById('radio' + radioBtnNumber).checked = true;
  radioBtnNumber ++;
  if(radioBtnNumber > 4){
    radioBtnNumber = 1;
  }
}, 3000);

// --------------------- password viewing -------------------- //
const viewBtn = document.querySelector('.view-btn');
const passwordInput = document.getElementById('password')

viewBtn.addEventListener('click', () => {
  viewBtn.classList.toggle('view');

  if (viewBtn.classList.contains('view')) {
    passwordInput.setAttribute('type', 'text');
  } else {
    passwordInput.setAttribute('type', 'password');
  }
})

// ---------------------- form validation --------------------- //
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const checkbox = document.getElementById('checkbox');
let errorName = 0; 
let errorEmail = 0; 
let errorPassword = 0;
let errorCheckbox = 0; 

function validate() {

  // for name
  if (nameInput.value == '') {
    nameInput.style.cssText = "border: 2px solid red;";
    errorName = 0;
  } else {
    nameInput.style.cssText = 'border: 2px solid rgb(225, 225, 225)';
    errorName = 1;
  }

  // for email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (emailInput.value.match(emailPattern)) {
    emailInput.style.cssText = 'border: 2px solid rgb(225, 225, 225)';
    errorEmail = 1;
  } else if (emailInput.value == "") {    
    emailInput.style.cssText = 'border: 2px solid red';
    errorEmail = 0;
  } else if (!emailInput.value.match(emailPattern)){
    emailInput.style.cssText = 'border: 2px solid red';
    errorEmail = 0;
  }
  
  // for password
  if (passwordInput.value.length < 8) {
    passwordInput.style.cssText = 'border: 2px solid red';
    errorPassword = 0;
  } else if (passwordInput.value == '') {
    passwordInput.style.cssText = 'border: 2px solid red';
    errorPassword = 0;
  } else if (passwordInput.value.length >= 8) {
    passwordInput.style.cssText = 'border: 2px solid rgb(225, 225, 225)';
    errorPassword = 1;
  }

  // for checkbox
  const customCheckbox = document.querySelector('.custom-checkbox');

  if (checkbox.checked == false) {
    customCheckbox.style.cssText = "border: 2px solid red";
    errorCheckbox = 0;
  } else {
    customCheckbox.style.cssText = "border: 2px solid rgb(225, 225, 225)";
    errorCheckbox = 1;
  }


  if (errorName && errorEmail && errorPassword && errorCheckbox) {
    return true;
  } else {
    return false;
  }
}