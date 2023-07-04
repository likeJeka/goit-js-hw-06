const ul = document.querySelector('#categories')

const findItem = document.querySelectorAll('.item');
console.log( 'Number of categories: ', findItem.length);
findItem.forEach((element) => {
console.log( 'Category: ', element.firstElementChild.textContent);
console.log('Elements: ', element.lastElementChild.children.length);    
}) 

