console.log("oke this is working");

var trigger = document.querySelector('#theme-switcher');
var body = document.querySelector('body');
// alert("hello world");
// first get theme from local
//  if theme = dark
//  add dark class
// else nothing


// if button clicked
// toggle dark mode
// toggle storage theme


let theme = localStorage.getItem('theme')

if(theme===undefined){
    localStorage.setItem('theme','light')
    theme = localStorage.getItem('theme')
}
// in case of next reload
if(theme=='dark'){
    body.classList.add(theme)
}
    
// in case of click 
trigger.addEventListener('click', function(event) {
    body.classList.toggle('dark')
    theme = (theme=='dark')?'light':'dark'
    localStorage.setItem('theme',theme)
});