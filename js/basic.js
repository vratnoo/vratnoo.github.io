console.log("oke this is working");
// alert("hello world");

var trigger = document.querySelector('#theme-switcher');
var body = document.querySelector('body');

trigger.addEventListener('click', function(event) {
    
    body.classList.toggle('dark');

});