let buttonEl = document.getElementById("button-el")
let passwordEl = document.getElementById("password-el")
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;
let saveEl = document.getElementById("save-el")



function passwordOne() {
    for (let i = 0; i <= passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * chars.length);
        passwordEl.textContent += chars.substring(randomPassword, randomPassword +1);
        
       }
      
}
function generate() {
    passwordOne()
}
function save() {
    let passwordStr = passwordEl.textContent + "-" 
    saveEl.textContent += passwordStr
}