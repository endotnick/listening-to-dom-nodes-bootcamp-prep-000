// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
const input = document.querySelector('input');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
})

input.addEventListener('keydown', function(e) {
  console.log(e.which);
})
