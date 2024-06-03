const inputName = document.querySelector('.name')
const inputSurname = document.querySelector('.surname')
const inputEmail = document.querySelector('.email')
const inputMessage = document.querySelector('.message-box')
const inputGeneral = document.querySelector('.general')
const inputSupport = document.querySelector('.support')
const inputConsent = document.querySelector('.check')
const errorName = document.querySelector('.error-name')
const errorSurname = document.querySelector('.error-surname')
const errorEmail = document.querySelector('.error-email')
const errorQuery = document.querySelector('.error-query')
const errorMessage = document.querySelector('.error-message')
const errorConsent = document.querySelector('.error-consent')
const submitBn = document.querySelector('.submit-btn')
const successMsg = document.querySelector('.success')
var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

submitBn.addEventListener("click", function(){
    if(inputName.value === ""){
        errorName.style.display = "flex";
        inputName.style.border = "1px solid hsl(0, 66%, 54%)"
    }else{
        errorName.style.display = "none";
        inputName.style.border = ""
    };
    if(inputSurname.value === ""){
        errorSurname.style.display = "flex";
        inputSurname.style.border = "1px solid hsl(0, 66%, 54%)"
    }else{
        errorSurname.style.display = "none";
        inputSurname.style.border = ""
    };
    if(inputMessage.value === ""){
        errorMessage.style.display = "flex";
        inputMessage.style.border = "1px solid hsl(0, 66%, 54%)"
    }else{
        errorMessage.style.display = "none";
        inputMessage.style.border = ""
    }
    if(inputEmail.value.match(validationEmail)){
        errorEmail.style.display = "none"
        inputEmail.style.border = ""
    }else{
        errorEmail.style.display = "flex"
        inputEmail.style.border = "1px solid hsl(0, 66%, 54%)"
    }
    if(inputGeneral.checked || inputSupport.checked ){
        errorQuery.style.display = "none"
    }else{
        errorQuery.style.display = "flex"
    }
    if(inputConsent.checked){
        errorConsent.style.display = "none"
    }else{
        errorConsent.style.display = "flex"
    }
    if(inputName.value > "" && inputSurname.value > "" && inputMessage.value > "" && inputEmail.value.match(validationEmail) && inputConsent.checked && inputGeneral.checked || inputSupport.checked){
       successMsg.style.display = "flex";
       inputName.value = "";
       inputSurname.value = "";
       inputEmail.value = "";
       inputMessage.value = "";
    }else{
        successMsg.style.display = "none"
    }
})