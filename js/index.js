// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
const input = document.querySelector('input');
const divs = document.querySelectorAll('div');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
})

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
})
