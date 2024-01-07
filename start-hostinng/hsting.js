var btn = document.querySelector('.button');
var check = document.querySelector('#agree-terms'); 
check.addEventListener("click", function() {
    btn.style.backgroundColor = check.checked ? 'green' : '#000';
    
});
