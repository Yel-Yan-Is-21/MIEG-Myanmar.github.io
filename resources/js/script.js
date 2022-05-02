const navToggle = document.querySelector(".nav__toggle");
// choose all nav-link
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", function() {
    document.body.classList.toggle("nav-open");
});

navLinks.forEach(function (link){
    link.addEventListener("click", function(){
        document.body.classList.remove("nav-open");
    });
});

/*--- Swiper--- */
const swiper = new Swiper(".swiper", {
    loop  : true,
    slidesPerView: 1,
    spaceBetween: 20, //spacing between each slide
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination"
    },
// add responsive breakpoints
    breakpoints: {
        700: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

/*---Owl carousel for testimonail--- */
$(document).ready(function(){
    $(".testimonials-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav:true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
});

/*---add white navbar top--- */
$(document).ready(function (){
    $(window).scroll(function (){
        // For showing white nav top
        if($(window).scrollTop() > 550){
            $("nav").addClass("white-nav-top");
        }
        else{
            $("nav").removeClass("white-nav-top");
        }
    });
});

/*---activities isotope--- */
$(window).on("load", function (){
// init isotope
    $(".isotope-container").isotope({
        //options
    });
// filter items on button click
    $(".isotope-filters").on("click","button", function (){
        let filterValue = $(this).attr("data-filter");
        $(".isotope-container").isotope({filter : filterValue});

        //Active button
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active"); // this means to the button that have been clicked
    });
});

//------------------------Magnific Popup
$(document).ready(function (){
    $('.isotope-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // GALLERY
        gallery: {
            enabled:true
          },
        // ANIMATION
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
      });
});

/*=================SCROLL REVEAL ANIMATION=====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
    reset: true,
});
sr.reveal(".hero-content-inner, .swiper-wrapper, .mission-content");
sr.reveal(".section-title, .about-idea, .about-specialization, .testimonials-title, .footer p, .footer .logo, .footer-title, .footer h3, .mission-section h2, .contact-title, .contact-card", {origin: "left"});
sr.reveal(".about-image, .testimonials-slider, .footer i, .sub-btn, .footer input, .isotope-filters, .activities-wrapper, .contact-form-div", {origin: "right"});
sr.reveal(".banner-statement, .mission-section img", {origin: "bottom"});