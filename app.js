const links = document.querySelector('.links');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.fa-times');


// EventListener
openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

// functions
function show(){
  links.style.display = 'flex';
  links.style.top = '0';
}
function close(){
  links.style.top = '-100%';
}