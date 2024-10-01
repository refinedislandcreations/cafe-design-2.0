$(document).ready(function() {
  $('.hamburger-wrapper').click(function() {
      $('.mobile-menu').toggleClass('active'); // Toggles the class to slide the menu in and out
      $('.hamburger-menu').toggleClass('active'); // Toggles the active class for hamburger animation
  });

  // Optional: Close the menu when the close button is clicked
  $('.close-button').click(function() {
      $('.mobile-menu').removeClass('active');
      $('.hamburger-menu').removeClass('active');
  });
});

// animate on scroll
AOS.init ({
  // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) so that even though we arrive at the original location the element is not scrolling in straight away
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
  



// lightgallery

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    getCaptionFromTitleOrAlt: false,
     download: false    
});






// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topBtn = document.querySelector('.back-to-top-button')

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

topBtn.addEventListener('click', topFunction)

