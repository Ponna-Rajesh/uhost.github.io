var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plans button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for( var i=0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
       // modal.className = 'open'; // This will actually overwrite the complete list
       modal.classList.add('open')
       backdrop.classList.add('open')
    })
}

function closeModel() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    modal.classList.remove('open');
    backdrop.classList.remove('open')
}

backdrop.addEventListener("click", closeModel);


if(modalNoButton){
    modalNoButton.addEventListener("click", closeModel);
}
if (backdrop) {
    backdrop.addEventListener("click", function(){
    backdrop.classList.remove('open')      
    });
}

toggleButton.addEventListener("click", function(){
    // backdrop.style.display = "block";
    // mobileNav.style.display = "block";
    backdrop.classList.add('open')      
    mobileNav.classList.add('open')      
})

backdrop.addEventListener("click", function (){
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open')
})

