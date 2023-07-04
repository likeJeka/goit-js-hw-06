const decrementButton = document.querySelector('[data-action="decrement"]');
// console.log(decrementButton);
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
// console.log(valueEl);

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrementButton.addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.value;
});

decrementButton.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.value;
});
