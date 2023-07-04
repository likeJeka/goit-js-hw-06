const forEl = document.querySelector(".login-form")
// console.log(forEl);


forEl.addEventListener("submit", (event) => {
    event.preventDefault();
 console.log(forEl); 
 
 const {elements: {email, password}} = event.currentTarget
console.log(email.value, password.value);
if(email.value === "" || password.value === "") {
return alert('Заповніть будь ласка поле :)')
} 
const newObject = {
    email: email.value,
    password: password.value
}
console.log(newObject);
event.currentTarget.reset();
});



