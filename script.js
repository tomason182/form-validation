const email = document.getElementById("mail");
const emailError = document.querySelector("span.email-error");
const psw = document.getElementById("psw");
const pswError = document.querySelector("span.psw-error");
console.log(pswError);


email.value = "";

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";
        email.className("");
    } else if (email.validity.typeMisMatch) {
        emailError.textContent = "You need to enter a valid email address";
        email.classList.add("invalid");
    } else if(email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
        email.classList.add("invalid");
    }
}

email.addEventListener("focusout", (event) => {
    if(email.validity.valid) {
        emailError.textContent = "";
    }else{
        showEmailError();
    }
})

psw.addEventListener("focusout", (event) => {
    const pswValue = psw.value;
    checkPassword(pswValue);
});

function checkPassword(password) {
    const pswRegExp = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,24}$/;
    const isValid = pswRegExp.test(password);
  
    if (isValid) {
      pswError.textContent = "";
    } else {
      let message = "Password must contain: ";
      if (!/\d/.test(password)) message += "at least one number ";
      if (!/[A-Z]/.test(password)) message += "at least one uppercase letter";
      if (!/\W/.test(password)) message += "at least one special character ";
      if (password.length <= 8 || password.length >= 24) message += "between 8 and 24 characters";
      pswError.textContent = message;
    }
  }


