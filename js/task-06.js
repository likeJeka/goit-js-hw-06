const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener("input", (event) => {
    
    
      if (event.currentTarget.value.length === 6) {
       inputEl.classList.add('valid')
       inputEl.classList.remove('invalid')
      } else {
        inputEl.classList.add('invalid')
      }
    });
    