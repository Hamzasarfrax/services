let n = 0;
const sideMenu = document.querySelector('.sidebar');
const navbarToggle = document.querySelector('.navbar-toggler');

 
 
 
function myFunction(x) {
    window.onload = function () {
        navbarToggle.click();
        navbarToggle.click();
    }
    if (x.matches) { // If media query matches
        navbarToggle.addEventListener('click', () => {
            if (n === 0) {
                sideMenu.style.transform = "block";
                sideMenu.style.transform = "translateX(0px)";
                n++;
            } else {
                sideMenu.style.display = "block";
                sideMenu.style.transform = "translateX(-100%)";
                n--;
            }
        });

    } else {
    }
}

var x = window.matchMedia("(max-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

// For account dropdown
const dropdownMenu = document.querySelector('.dropdown-menu');
const prof = document.querySelector('.prof') 


prof.addEventListener('click', () => {
    if (!dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.add('show');
    } else {
        dropdownMenu.classList.remove('show')
    }
});


let num = 1;
document.body.addEventListener("click", function (evt) { 
    if (num % 2 === 0 && dropdownMenu.classList.contains('show')) {  
        dropdownMenu.classList.remove('show')
    }
    num++;
});

 

// To make each row of table clickable and go to the link in the attribute
jQuery(document).ready(function ($) {
    $(".clickable-row").click(function () {
        window.location = $(this).data("href");
    });
});

jQuery(document).ready(function ($) {
    $(".click-edit-discount").click(function () {
        window.location = $(this).data("href");
    });
});

dropdownMenu.style.zoom = "90%"
dropdownMenu.style.paddingTop = "16px"