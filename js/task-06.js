const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

inputEl.addEventListener("input", (event) => {
    
    const numberEl = event.currentTarget.dataset.length

      if (event.currentTarget.value.length === Number(numberEl)) {
       inputEl.classList.add('valid')
       inputEl.classList.remove('invalid')
      } else {
        inputEl.classList.add('invalid')
      }
    });
    