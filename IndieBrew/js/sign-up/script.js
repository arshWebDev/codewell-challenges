let createAccountBtn = document.getElementById("create");
let text = document.querySelectorAll('.error');
let error;

// ------------------ validation ------------------//
function validation(){
  
  // ----------------- email ------------------ //
  let emailInput = document.getElementById('email');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if (emailInput.value.match(pattern)) {
    text[0].innerHTML = "";
    error = 1;
  } else {
    text[0].innerHTML = "Please enter correct email";
    error = 0;
  }    

  // -------------------- name ------------------- //
  let nameInput = document.getElementById('name');

  if (nameInput.value == ""){
    text[1].innerHTML = "Name should not be empty";
    error = 0;
  } else {
    text[1].innerHTML = "";
    error = 1;
  }

  // --------------------password -------------------- //
  let passwordInput = document.getElementById('password');

  if (passwordInput.value.length < 8) {
    text[2].innerHTML = "Password length should be atleast 8 characters";
    error = 0;
  } else {
    text[2].innerHTML = "";
    error = 1;
  }

  let termsConditions = document.getElementById('checkbox');
  
  if (termsConditions.checked == false){
    text[3].innerHTML = "Please accept the terms and conditions.";
    error = 0;
  } else {
    text[3].innerHTML = ""
    error = 1;
  }
  
  // ------------- return ------------- //
  if (error){
    return true;
  } else{
    return false;
  }  
}

