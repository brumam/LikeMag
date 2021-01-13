const btnHamburger = document.querySelector('#btnHamburger');
const body =  document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

btnHamburger.addEventListener('click', function(){
     console.log('click hamburger');

     if(header.classList.contains('open')){ // Close Hamburger Menu
      body.classList.remove('noscroll');
      header.classList.remove('open');
     fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
      });
     }
     else {  // Open Hamburger Menu 
    body.classList.add('noscroll');
     header.classList.add('open');
     fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
     }
     
    });
  

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
