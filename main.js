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

